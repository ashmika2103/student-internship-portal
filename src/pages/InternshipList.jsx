
import { Link } from "react-router-dom";
import internships from "../data/internships";

function InternshipList() {
  return (
    <div className="page-container">
      <div className="section-heading">
        <div>
          <h2>Available Internships</h2>
          <p>Explore opportunities that match your interests.</p>
        </div>

        <span className="count-badge">
          {internships.length} opportunities
        </span>
      </div>

      <div className="internship-grid">
        {internships.map((internship) => (
          <article className="internship-card" key={internship.id}>
            <div className="card-top">
              <div className="company-icon">
                {internship.company.charAt(0)}
              </div>

              <span className="job-type">{internship.type}</span>
            </div>

            <h3>{internship.title}</h3>

            <p className="company-name">{internship.company}</p>

            <div className="job-meta">
              <span>📍 {internship.location}</span>
              <span>🗓️ {internship.duration}</span>
            </div>

            <p className="job-description">
              {internship.description}
            </p>

            <div className="skill-list">
              {internship.skills.slice(0, 3).map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>

            <div className="card-footer">
              <div>
                <small>Monthly stipend</small>
                <strong>{internship.stipend}</strong>
              </div>

              <Link
                to={`/internship/${internship.id}`}
                className="details-button"
              >
                View Details →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default InternshipList;
