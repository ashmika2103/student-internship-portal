
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import internships from "../data/internships";

function ApplicationForm() {
  const { id } = useParams();

  const internship = internships.find((item) => item.id === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNumber: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setMessageType("");

    if (!internship) {
      setMessage("Please select a valid internship.");
      setMessageType("error");
      return;
    }

    if (!formData.name.trim() || !formData.rollNumber.trim()) {
      setMessage("Please enter your name and roll number.");
      setMessageType("error");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email.trim())) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }

    setSubmitting(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      if (!apiUrl) {
        throw new Error("API URL is not configured.");
      }

      const response = await fetch(
        `${apiUrl}/api/applications`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            rollNumber: formData.rollNumber.trim(),
            internshipId: internship.id,
            internshipTitle: internship.title,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Application submission failed."
        );
      }

      setMessage(
        result.message || "Application submitted successfully!"
      );
      setMessageType("success");

      // Clear fields only after the server confirms success.
      setFormData({
        name: "",
        email: "",
        rollNumber: "",
      });
    } catch (error) {
      setMessage(
        error.message === "Failed to fetch"
          ? "Could not connect to the server. Check the backend URL and CORS settings."
          : error.message || "Something went wrong. Please try again."
      );
      setMessageType("error");
    } finally {
      setSubmitting(false);
    }
  }

  if (!internship) {
    return (
      <div className="page-container">
        <h2>Internship Not Found</h2>
        <Link to="/">Back to Internships</Link>
      </div>
    );
  }

  return (
    <div className="page-container form-page">
      <Link
        to={`/internship/${internship.id}`}
        className="back-link"
      >
        ← Back to Internship Details
      </Link>

      <section className="application-card">
        <span className="hero-label">TAKE THE NEXT STEP</span>
        <h1>Internship Application</h1>
        <p className="form-intro">
          Complete your details to apply for this opportunity.
        </p>

        <div className="selected-internship">
          <small>Selected Internship</small>
          <strong>{internship.title}</strong>
          <span>{internship.company}</span>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            minLength={2}
            required
          />

          <label htmlFor="email">Email ID</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="rollNumber">College Roll Number</label>
          <input
            id="rollNumber"
            name="rollNumber"
            type="text"
            placeholder="Enter your roll number"
            value={formData.rollNumber}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="apply-button submit-button"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>

        {message && (
          <p
            className={`form-message ${messageType}`}
            role="status"
          >
            {message}
          </p>
        )}
      </section>
    </div>
  );
}

export default ApplicationForm;
