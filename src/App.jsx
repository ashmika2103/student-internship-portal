
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import InternshipList from "./pages/InternshipList";
import InternshipDetails from "./pages/InternshipDetails";
import ApplicationForm from "./pages/ApplicationForm";
import "./App.css";

function HomePage() {
  const navigate = useNavigate();

  const handleExploreJobs = () => {
    const internshipSection = document.getElementById("internships");

    if (internshipSection) {
      internshipSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo">
          <span className="logo-icon">I</span>
          <span>
            Intern<span className="logo-highlight">Connect</span>
          </span>
        </Link>

        <nav className="nav-links">
          <a
            href="#internships"
            onClick={(event) => {
              event.preventDefault();
              handleExploreJobs();
            }}
          >
            Internships
          </a>

          <a
            href="#about"
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About
          </a>
        </nav>

        <button className="explore-btn" onClick={handleExploreJobs}>
          Explore Jobs
        </button>
      </header>

      <main>
        <section className="hero">
          <p className="hero-label">YOUR CAREER STARTS HERE</p>
          <h1>Find Your Perfect Internship</h1>
          <p className="hero-description">
            Explore opportunities, develop your skills, and take the first step
            toward your dream career.
          </p>
        </section>

        <section id="internships" className="internships-section">
          <InternshipList />
        </section>

        <section id="about" className="about-section">
          <h2>About InternConnect</h2>
          <p>
            InternConnect helps students explore internship opportunities,
            develop professional skills, and apply for roles that match their
            interests.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} InternConnect. All rights reserved.</p>
      </footer>
    </>
  );
}

function NotFound() {
  return (
    <main className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Back to Home</Link>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/internship/:id"
          element={<InternshipDetails />}
        />
        <Route
          path="/apply/:id"
          element={<ApplicationForm />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
