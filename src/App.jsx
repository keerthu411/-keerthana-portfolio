import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaShieldAlt,
  FaGraduationCap,
} from "react-icons/fa";
import "./App.css";

function App() {
  const projects = [
    {
      title: "Smart Notes Pro",
      description:
        "A React-based notes application where users can add, edit, delete, search, pin, and sort notes. It also supports localStorage, light/dark mode, and a clean card-based layout.",
      tech: "React, Vite, JavaScript, CSS, localStorage",
    },
    {
      title: "Smart Timetable Generator Website",
      description:
        "A web application created to generate class timetables based on inputs and constraints. It helps reduce manual scheduling effort and manages timetable data efficiently.",
      tech: "JavaScript, MongoDB, HTML, CSS",
    },
    {
      title: "College Department Website",
      description:
        "A responsive department website designed to provide information about faculty, courses, events, and announcements with an interactive and user-friendly interface.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "E-commerce Website",
      description:
        "A clothing e-commerce website with product sections, category navigation, cart interface, login alerts, and responsive frontend design.",
      tech: "React, Vite, Tailwind CSS",
    },
  ];

  const skills = [
    "C",
    "Python",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Database Management",
    "Data Analysis",
    "Cybersecurity Fundamentals",
    "Git & GitHub",
    "MS Office",
    "Problem Solving",
    "Teamwork",
    "Communication",
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2>Keerthana Lekshmi S L</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
  <div className="hero-content">
    <p className="tagline">Hi, I am</p>

    <h1>Keerthana Lekshmi S L</h1>

    <h3>B.Tech Information Technology Student</h3>

    <p className="hero-description">
      I am an enthusiastic IT student interested in web development,
      programming, database management, and cybersecurity fundamentals.
      I enjoy building clean, responsive, and practical web applications
      that solve real-world problems.
    </p>

    <div className="hero-tags">
      <span>React.js</span>
      <span>JavaScript</span>
      <span>Web Development</span>
      <span>GitHub</span>
    </div>

  </div>

  <div className="hero-card">
    <FaLaptopCode className="hero-icon" />
    <h2>Full Stack Developer</h2>
    <p>Building complete web solutions with responsive frontend design and reliable backend systems</p>
  </div>
</section>

      <section id="about" className="section about">
        <h2>About Me</h2>
        <p>
          I am a B.Tech Information Technology student under A.P.J Abdul Kalam
          Technological University. I have a strong foundation in programming,
          software development, database management, networking, and
          cybersecurity fundamentals. I enjoy learning new technologies and
          applying my skills to solve real-world problems.
        </p>
      </section>

      <section id="education" className="section">
  <h2>Education</h2>

  <div className="education-card">
    <FaGraduationCap className="section-icon" />
    <div className="education-content">
      <div className="education-header">
        <h3>Bachelor of Technology - Information Technology</h3>
        <span>2023 - Present</span>
      </div>
      <p>Government Engineering College Idukki</p>
    </div>
  </div>

  <div className="education-card">
    <FaGraduationCap className="section-icon" />
    <div className="education-content">
      <div className="education-header">
        <h3>Higher Secondary Education - Bio Maths</h3>
        <span>2021 - 2023</span>
      </div>
      <p>NGPM HSS Venchempu, Punalur</p>
    </div>
  </div>
</section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <FaCode className="project-icon" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.tech}</small>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <h2>Experience & Certifications</h2>

        <div className="experience-grid">
          <div className="experience-card">
            <FaShieldAlt className="experience-icon" />
            <h3>Cybersecurity Internship - CyberGyan</h3>
            <p>
              Completed a cybersecurity internship and gained knowledge of
              cybersecurity fundamentals, network security, ethical hacking
              concepts, vulnerability assessment, cyber threats, and security
              best practices.
            </p>
          </div>

          <div className="experience-card">
            <FaDatabase className="experience-icon" />
            <h3>Data Science Internship - Corizo</h3>
            <p>
              Gained hands-on experience in data analysis, data visualization,
              statistical techniques, machine learning fundamentals, Python,
              Pandas, and NumPy.
            </p>
          </div>

          <div className="experience-card">
            <FaCode className="experience-icon" />
            <h3>µLearn Community - Active Member</h3>
            <p>
              Actively participated in peer-learning sessions, technical
              discussions, and skill-based challenges. Earned 4000+ Karma Points
              through learning activities and community tasks.
            </p>
          </div>

          <div className="experience-card">
            <FaGraduationCap className="experience-icon" />
            <h3>IBM Coursera Certification</h3>
            <p>
              Completed an IBM certification course through Coursera and gained
              knowledge in professional and industry-relevant concepts.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Me</h2>
        <p>
          I am open to internship opportunities, web development projects, and
          learning-based collaborations.
        </p>

        <div className="contact-links">
                  <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=keerthanalekshmi41@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope /> Email
        </a>

          <a href="https://github.com/keerthu411" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>

                  <a
          href="https://www.linkedin.com/in/keerthana-lekshmi-s-l-4374b63a1"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Keerthana Lekshmi S L. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;