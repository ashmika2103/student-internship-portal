import { Link, useParams } from "react-router-dom";
import internships from "../data/internships";
function InternshipDetails() {
  const { id } = useParams();
  const internship = internships.find(
    (item) => item.id === id
  );
  if (!internship) {
    return (
      <div className="page-container not-found">
        <h2>Internship Not Found</h2>
        <p>The internship you selected does not exist.</p>
        <Link to="/" className="details-button">
          Back to Internships
        </Link>
      </div>
    );
  }
  return (
    <div className="page-container">
      <Link to="/" className="back-link">
        ← Back to Internships
      </Link>
      <section className="details-card">
        <div className="details-banner">
          <div className="company-icon large-icon">
            {internship.company.charAt(0)}
          </div>
          <div>
            <span className="job-type">{internship.type}</span>
            <h1>{internship.title}</h1>
            <p>{internship.company}</p>
          </div>
        </div>
        <div className="details-meta">
          <div>
            <small>Location</small>
            <strong>{internship.location}</strong>
          </div>
          <div>
            <small>Duration</small>
            <strong>{internship.duration}</strong>
          </div>
          <div>
            <small>Monthly Stipend</small>
            <strong>{internship.stipend}</strong>
          </div>
        </div>
        <div className="details-section">
          <h2>About This Internship</h2>
          <p>{internship.description}</p>
        </div>
        <div className="details-section">
          <h2>Required Skills</h2>
          <div className="skill-list">
            {internship.skills.map((skill) => (
              <span className="skill-tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <Link
          to={`/apply/${internship.id}`}
          className="apply-button"
        >
          Apply for This Internship →
        </Link>
      </section>
    </div>
  );
}
export default InternshipDetails;