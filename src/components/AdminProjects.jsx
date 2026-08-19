import { useEffect, useState } from "react";
import axios from "axios";
import {
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiX,
} from "react-icons/fi";

import "../styles/AdminProjects.css";

const initialForm = {
  title: "",
  description: "",
  projectType: "",
  technologies: "",
  features: "",
  githubUrl: "",
  liveUrl: "",
  imageUrl: "",
  displayOrder: 1,
  active: true,
};

function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(initialForm);

  const [editingId, setEditingId] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [loading, setLoading] = useState(false);

  const loadProjects = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/projects/all"
      );

      setProjects(response.data);
    } catch (error) {
      console.error("Failed to load projects:", error);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const resetForm = () => {
    setForm(initialForm);
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      if (editingId) {
        await axios.put(
          `http://localhost:8081/api/projects/${editingId}`,
          form
        );
      } else {
        await axios.post(
          "http://localhost:8081/api/projects",
          form
        );
      }

      await loadProjects();

      resetForm();
    } catch (error) {
      console.error("Project save failed:", error);

      alert("Unable to save project.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (project) => {
    setForm({
      title: project.title || "",
      description: project.description || "",
      projectType: project.projectType || "",
      technologies: project.technologies || "",
      features: project.features || "",
      githubUrl: project.githubUrl || "",
      liveUrl: project.liveUrl || "",
      imageUrl: project.imageUrl || "",
      displayOrder:
        project.displayOrder || 1,
      active: project.active,
    });

    setEditingId(project.id);

    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await axios.delete(
        `http://localhost:8081/api/projects/${id}`
      );

      await loadProjects();
    } catch (error) {
      console.error("Project delete failed:", error);

      alert("Unable to delete project.");
    }
  };

  return (
    <div className="admin-projects-page">

      <div className="admin-projects-container">

        <div className="admin-header">

          <div>
            <p className="admin-eyebrow">
              Portfolio Admin
            </p>

            <h1>Manage Projects</h1>

            <p>
              Add, edit and manage projects displayed
              on your portfolio.
            </p>
          </div>

          {!showForm && (
            <button
              className="admin-add-btn"
              onClick={() => setShowForm(true)}
            >
              <FiPlus />
              Add Project
            </button>
          )}

        </div>

        {showForm && (
          <form
            className="admin-project-form"
            onSubmit={handleSubmit}
          >

            <div className="form-header">
              <div>
                <h2>
                  {editingId
                    ? "Edit Project"
                    : "Add New Project"}
                </h2>

                <p>
                  Enter project information below.
                </p>
              </div>

              <button
                type="button"
                className="form-close-btn"
                onClick={resetForm}
              >
                <FiX />
              </button>
            </div>

            <div className="admin-form-grid">

              <div className="admin-field">
                <label>Project Title</label>

                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="admin-field">
                <label>Project Type</label>

                <input
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  placeholder="Full Stack Application"
                />
              </div>

              <div className="admin-field full-field">
                <label>Description</label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="admin-field full-field">
                <label>
                  Technologies
                </label>

                <input
                  name="technologies"
                  value={form.technologies}
                  onChange={handleChange}
                  placeholder="Java, Spring Boot, React, MySQL"
                />

                <small>
                  Separate technologies using commas.
                </small>
              </div>

              <div className="admin-field full-field">
                <label>Features</label>

                <input
                  name="features"
                  value={form.features}
                  onChange={handleChange}
                  placeholder="RFID Labelling, Billing, Reports"
                />

                <small>
                  Separate features using commas.
                </small>
              </div>

              <div className="admin-field">
                <label>GitHub URL</label>

                <input
                  name="githubUrl"
                  value={form.githubUrl}
                  onChange={handleChange}
                  placeholder="https://github.com/..."
                />
              </div>

              <div className="admin-field">
                <label>Live URL</label>

                <input
                  name="liveUrl"
                  value={form.liveUrl}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>

              <div className="admin-field">
                <label>Image URL</label>

                <input
                  name="imageUrl"
                  value={form.imageUrl}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-field">
                <label>Display Order</label>

                <input
                  type="number"
                  name="displayOrder"
                  min="1"
                  value={form.displayOrder}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-checkbox">
                <input
                  type="checkbox"
                  id="active"
                  name="active"
                  checked={form.active}
                  onChange={handleChange}
                />

                <label htmlFor="active">
                  Show project on portfolio
                </label>
              </div>

            </div>

            <div className="admin-form-actions">

              <button
                type="button"
                className="cancel-btn"
                onClick={resetForm}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="save-btn"
                disabled={loading}
              >
                {loading
                  ? "Saving..."
                  : editingId
                    ? "Update Project"
                    : "Save Project"}
              </button>

            </div>

          </form>
        )}

        <div className="admin-project-list">

          {projects.map((project) => (
            <div
              className="admin-project-card"
              key={project.id}
            >

              <div className="admin-project-info">

                <div className="admin-project-top">
                  <span>
                    {project.projectType ||
                      "Project"}
                  </span>

                  <span
                    className={
                      project.active
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {project.active
                      ? "Active"
                      : "Inactive"}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <small>
                  Display Order:{" "}
                  {project.displayOrder}
                </small>

              </div>

              <div className="admin-project-buttons">

                <button
                  className="edit-btn"
                  onClick={() =>
                    handleEdit(project)
                  }
                >
                  <FiEdit2 />
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    handleDelete(project.id)
                  }
                >
                  <FiTrash2 />
                  Delete
                </button>

              </div>

            </div>
          ))}

          {projects.length === 0 && (
            <div className="admin-empty">
              No projects available.
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default AdminProjects;