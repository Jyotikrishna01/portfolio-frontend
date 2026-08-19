import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Backend integration coming soon.");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="section" id="contact">
      <p className="section-subtitle">Get In Touch</p>
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info-card">

          <h3>Let's Work Together 🚀</h3>

          <p>
            Have a project or job opportunity?
            Feel free to contact me.
          </p>

          <div className="contact-row">
            <FiMail />
            <span>jyotikrishna3105@gmail.com</span>
          </div>

          <div className="contact-row">
            <FiPhone />
            <span>+91 9172705167</span>
          </div>

          <div className="contact-row">
            <FiMapPin />
            <span>Pune, Maharashtra</span>
          </div>

        </div>

        {/* Right Side */}
        <form className="contact-form-card" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className="btn primary-btn">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;