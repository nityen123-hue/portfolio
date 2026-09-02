import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import {
  FaUser, FaTools, FaCode, FaTrophy, FaQuoteLeft, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaArrowRight, FaDownload, FaReact, FaNodeJs, FaPython, FaDatabase, FaCloud, FaRocket, FaLaptopCode, FaStar, FaChevronDown, FaCheckCircle, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaMobileAlt, FaServer, FaChartLine
} from "react-icons/fa";

function App() {
  return (
    <div className="bg-dark text-white">
     <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top border-bottom border-secondary custom-navbar">
  <div className="container">

    <a href="#home" className="navbar-brand fw-bold">
      <span className="text-warning fs-4">AT</span>
      <span className="ms-2">Abdullah Tariq</span>
    </a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarMenu"
      aria-controls="navbarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarMenu">

      <ul className="navbar-nav mx-auto small">

        <li className="nav-item">
          <a className="nav-link active text-warning" href="#home">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#skills">
            Skills
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#projects">
            Projects
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#achievements">
            Achievements
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#testimonials">
            Testimonials
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>

      </ul>

      <div className="navbar-button-wrapper">
        <a
          href="#contact"
          className="btn btn-warning btn-sm rounded-pill px-3 fw-bold"
        >
          Let's Talk
          <FaArrowRight className="ms-2" />
        </a>
      </div>

    </div>
  </div>
</nav>
      <section id="home" className="py-5">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <p className="text-warning fw-bold small mb-2">
                SOFTWARE DEVELOPER
              </p>
              <h1 className="display-4 fw-bold">
                Hi, I'm
                <br />
                <span className="text-warning">Abdullah Tariq</span>
              </h1>
              <p className="text-secondary">
                I build scalable, high-performance web applications
                that solve real-world problems and create impactful
                digital experiences.
              </p>
              <div className="d-flex flex-wrap gap-2 my-3">
                <span className="badge bg-secondary p-2">
                  <FaCode className="me-1" />
                  Clean Code
                </span>
                <span className="badge bg-secondary p-2">
                  <FaRocket className="me-1" />
                  Fast & Focused
                </span>
                <span className="badge bg-secondary p-2">
                  <FaCheckCircle className="me-1" />
                  Performance Driven
                </span>
              </div>
              <div className="d-flex flex-wrap gap-2 mt-4">
                <a
                  href="#projects"
                  className="btn btn-warning fw-bold"
                >
                  View My Work
                  <FaArrowRight className="ms-2" />
                </a>
                <a
                  href="#"
                  className="btn btn-outline-light"
                >
                  Download CV
                  <FaDownload className="ms-2" />
                </a>
              </div>
              <div className="mt-4">
                <small className="text-secondary">
                  Tech I love working with:
                </small>
                <div className="d-flex gap-3 fs-4 mt-2">
                  <FaReact className="text-info" />
                  <FaNodeJs className="text-success" />
                  <FaJs className="text-warning" />
                  <FaPython className="text-primary" />
                  <FaDatabase className="text-info" />
                  <FaGitAlt className="text-danger" />
                </div>
              </div>
            </div>

            <div className="col-lg-5 text-center mt-5 mt-lg-0">
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
                  className="img-fluid rounded-4"
                  alt="Developer"
                />
                <div className="position-absolute bottom-0 start-50 translate-middle-x bg-dark border border-secondary rounded-3 p-3 w-75">
                  <div className="row text-center">
                    <div className="col-4">
                      <h5 className="text-warning mb-0">3+</h5>
                      <small className="text-secondary">
                        Years
                      </small>
                    </div>
                    <div className="col-4 border-start border-secondary">
                      <h5 className="text-warning mb-0">20+</h5>
                      <small className="text-secondary">
                        Projects
                      </small>
                    </div>

                    <div className="col-4 border-start border-secondary">
                      <h5 className="text-warning mb-0">10+</h5>
                      <small className="text-secondary">
                        Clients
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-5 bg-black">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-5">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                className="img-fluid rounded-4"
                alt="Coding"
              />
            </div>
            <div className="col-lg-7">
              <p className="text-warning small fw-bold mb-1">
                ABOUT ME
              </p>
              <h2 className="fw-bold">
                Crafting Digital Experiences
                <br />
                with Code
              </h2>
              <p className="text-secondary">
                I'm a passionate developer with a strong foundation in
                full-stack development, turning ideas into clean,
                efficient and scalable solutions.
              </p>
              <p className="text-secondary small">
                My focus is on building products that deliver real value
                and an exceptional user experience.
              </p>
              <div className="row mt-3">
                <div className="col-md-4 mb-3">
                  <small className="text-secondary d-block">
                    Name
                  </small>
                  <span>Abdullah Tariq</span>
                </div>
                <div className="col-md-4 mb-3">
                  <small className="text-secondary d-block">
                    Location
                  </small>
                  <span>Lahore, Pakistan</span>
                </div>
                <div className="col-md-4 mb-3">
                  <small className="text-secondary d-block">
                    Email
                  </small>
                  <span className="small">
                    hello@abdullahtariq.dev
                  </span>
                </div>
              </div>
              <a
                href="#contact"
                className="btn btn-outline-warning btn-sm mt-2"
              >
                More About Me
                <FaUser className="ms-2" />
              </a>
            </div>
          </div>
        </div>
      </section>


      <section id="skills" className="py-5">
        <div className="container">
          <div className="text-center mb-4">
            <p className="text-warning small fw-bold mb-1">
              SKILLS & SERVICES
            </p>
            <h2 className="fw-bold">
              What I Do Best
            </h2>
          </div>
          <div className="row g-3">
            <div className="col-6 col-lg-2">
              <div className="bg-black border border-secondary rounded-3 p-3 text-center h-100">
                <FaCode className="text-warning fs-2 mb-3" />
                <h6>Web Development</h6>
                <small className="text-secondary">
                  Building fast, modern websites.
                </small>
              </div>
            </div>


            <div className="col-6 col-lg-2">
              <div className="bg-black border border-secondary rounded-3 p-3 text-center h-100">
                <FaMobileAlt className="text-warning fs-2 mb-3" />
                <h6>Responsive UI</h6>
                <small className="text-secondary">
                  Mobile-first responsive solutions.
                </small>
              </div>
            </div>

            <div className="col-6 col-lg-2">
              <div className="bg-black border border-secondary rounded-3 p-3 text-center h-100">
                <FaDatabase className="text-warning fs-2 mb-3" />
                <h6>Database Design</h6>
                <small className="text-secondary">
                  Efficient and optimized database schemas.
                </small>
              </div>
            </div>


            <div className="col-6 col-lg-2">
              <div className="bg-black border border-secondary rounded-3 p-3 text-center h-100">
                <FaCloud className="text-warning fs-2 mb-3" />
                <h6>Cloud & DevOps</h6>
                <small className="text-secondary">
                  Deploying and managing applications.
                </small>
              </div>
            </div>

            <div className="col-6 col-lg-2">
              <div className="bg-black border border-secondary rounded-3 p-3 text-center h-100">
                <FaServer className="text-warning fs-2 mb-3" />
                <h6>Backend</h6>
                <small className="text-secondary">
                  APIs and scalable backend systems.
                </small>
              </div>
            </div>


            <div className="col-6 col-lg-2">
              <div className="bg-black border border-secondary rounded-3 p-3 text-center h-100">
                <FaRocket className="text-warning fs-2 mb-3" />
                <h6>Optimization</h6>
                <small className="text-secondary">
                  Improving speed and performance.
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="projects" className="py-5 bg-black">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <p className="text-warning small fw-bold mb-1">
                FEATURED PROJECTS
              </p>
              <h2 className="fw-bold">
                Some Things I've Built
              </h2>
            </div>
            <a
              href="#"
              className="text-warning text-decoration-none small"
            >
              View All Projects
              <FaArrowRight className="ms-2" />
            </a>
          </div>

          <div className="row g-3">
            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-white border-secondary h-100">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=700&q=80"
                  className="card-img-top"
                  alt="TaskFlow"
                />
                <div className="card-body">
                  <h6>TaskFlow SaaS</h6>
                  <p className="text-secondary small">
                    A complete project management platform with
                    tasks, teams and analytics.
                  </p>
                  <span className="badge bg-primary me-1">
                    React
                  </span>
                  <span className="badge bg-secondary">
                    Node
                  </span>
                  <div className="mt-3">
                    <a href="#" className="text-warning small">
                      Live Demo <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-white border-secondary h-100">
                <img
                  src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=700&q=80"
                  className="card-img-top"
                  alt="ShopEase"
                />
                <div className="card-body">
                  <h6>ShopEase</h6>
                  <p className="text-secondary small">
                    Modern e-commerce website with checkout,
                    products and payment integration.
                  </p>
                  <span className="badge bg-success me-1">
                    React
                  </span>
                  <span className="badge bg-secondary">
                    API
                  </span>
                  <div className="mt-3">
                    <a href="#" className="text-warning small">
                      Live Demo <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-white border-secondary h-100">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80"
                  className="card-img-top"
                  alt="Dashboard"
                />
                <div className="card-body">
                  <h6>FinTrack Dashboard</h6>
                  <p className="text-secondary small">
                    Live financial dashboard for tracking income,
                    expenses and budgets.
                  </p>
                  <span className="badge bg-info text-dark me-1">
                    React
                  </span>
                  <span className="badge bg-secondary">
                    Charts
                  </span>
                  <div className="mt-3">
                    <a href="#" className="text-warning small">
                      Live Demo <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-white border-secondary h-100">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80"
                  className="card-img-top"
                  alt="Portfolio"
                />
                <div className="card-body">
                  <h6>DevPortfolio Template</h6>
                  <p className="text-secondary small">
                    Clean and professional portfolio template
                    for developers.
                  </p>
                  <span className="badge bg-warning text-dark me-1">
                    Bootstrap
                  </span>
                  <span className="badge bg-secondary">
                    JavaScript
                  </span>

                  <div className="mt-3">
                    <a href="#" className="text-warning small">
                      Live Demo <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="achievements" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-warning small fw-bold mb-1">
              JOURNEY & ACHIEVEMENTS
            </p>
            <h2 className="fw-bold">
              Milestones That Matter
            </h2>
          </div>
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3 col-lg">
              <FaTrophy className="text-warning fs-2" />
              <h6 className="mt-2">2021</h6>
              <small className="text-secondary">
                B.Sc. in Computer Science
              </small>
            </div>


            <div className="col-6 col-md-3 col-lg">
              <FaCode className="text-warning fs-2" />
              <h6 className="mt-2">2022</h6>
              <small className="text-secondary">
                Started Development Journey
              </small>
            </div>


            <div className="col-6 col-md-3 col-lg">
              <FaRocket className="text-warning fs-2" />
              <h6 className="mt-2">2023</h6>
              <small className="text-secondary">
                Joined Product Company
              </small>
            </div>


            <div className="col-6 col-md-3 col-lg">
              <FaStar className="text-warning fs-2" />
              <h6 className="mt-2">2024</h6>
              <small className="text-secondary">
                Recognized for Impact
              </small>
            </div>


            <div className="col-12 col-md-3 col-lg">
              <FaChartLine className="text-warning fs-2" />
              <h6 className="mt-2">2025</h6>
              <small className="text-secondary">
                Helping Global Clients
              </small>
            </div>
          </div>
        </div>
      </section>



      <section id="testimonials" className="py-5 bg-black">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <p className="text-warning small fw-bold mb-1">
                TESTIMONIALS
              </p>
              <h2 className="fw-bold mb-4">
                What Clients Say
              </h2>
              <div className="bg-dark border border-secondary rounded-3 p-4">
                <i className="fa-solid fa-quote-left text-warning fs-3 mb-3"></i>
                <p className="text-secondary">
                  Abdullah is an exceptional developer. He understood
                  our requirements perfectly and delivered a
                  high-quality product on time.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-0">
                      Omar Farooq
                    </h6>
                    <small className="text-secondary">
                      CTO, TechHive
                    </small>
                  </div>
                  <div className="text-warning">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>



            <div className="col-lg-7">
              <p className="text-warning small fw-bold mb-1">
                FAQS
              </p>
              <h2 className="fw-bold mb-4">
                Frequently Asked Questions
              </h2>
              <div className="accordion" id="faqBox">
                <div className="accordion-item bg-dark border-secondary">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-dark text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqOne"
                      aria-expanded="true"
                      aria-controls="faqOne"
                    >
                      What technologies do you work with?
                    </button>
                  </h2>
                  <div
                    id="faqOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faqBox"
                  >
                    <div className="accordion-body text-secondary">
                      I work with React, JavaScript, Node.js,
                      Bootstrap, databases and modern web technologies.
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-dark border-secondary">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-dark text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqTwo"
                      aria-expanded="false"
                      aria-controls="faqTwo"
                    >
                      Are you available for freelance projects?
                    </button>
                  </h2>
                  <div
                    id="faqTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqBox"
                  >
                    <div className="accordion-body text-secondary">
                      Yes, I am available for selected freelance
                      projects.
                    </div>
                  </div>
                </div>

                <div className="accordion-item bg-dark border-secondary">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-dark text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqThree"
                      aria-expanded="false"
                      aria-controls="faqThree"
                    >
                      Do you ensure projects are delivered on time?
                    </button>
                  </h2>
                  <div
                    id="faqThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqBox"
                  >
                    <div className="accordion-body text-secondary">
                      Yes, I always plan the work and focus on
                      delivering projects within the agreed timeline.
                    </div>
                  </div>
                </div>

                <div className="accordion-item bg-dark border-secondary">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-dark text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqFour"
                      aria-expanded="false"
                      aria-controls="faqFour"
                    >
                      Do you provide post-launch support?
                    </button>
                  </h2>
                  <div
                    id="faqFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqBox"
                  >
                    <div className="accordion-body text-secondary">
                      Yes, I provide maintenance and support after
                      project delivery.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="contact" className="py-4">
        <div className="container">
          <div className="bg-black rounded-3 p-4">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <p className="text-warning small fw-bold mb-1">
                  LET'S WORK TOGETHER
                </p>
                <h2 className="fw-bold">
                  Have a Project in Mind?
                </h2>
                <p className="text-secondary mb-0">
                  Let's bring your ideas to life. I'm just a message away.
                </p>
              </div>
              <div className="col-lg-3 mt-3 mt-lg-0">
                <small className="text-secondary">
                  Email
                </small>
                <div>
                  <FaEnvelope className="text-warning me-2" />
                  hello@abdullahtariq.dev
                </div>
              </div>

              <div className="col-lg-3 mt-3 mt-lg-0">
                <small className="text-secondary">
                  Phone
                </small>
                <div>
                  <FaPhone className="text-warning me-2" />
                  +92 300 1234567
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <footer className="bg-black border-top border-secondary py-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="fw-bold">
                <span className="text-warning">AT</span>
                <span className="ms-2">Abdullah Tariq</span>
              </h5>
              <p className="text-secondary small">
                Building digital solutions that drive impact.
              </p>
            </div>


            <div className="col-6 col-md-2">
              <h6>Quick Links</h6>
              <a href="#home" className="d-block text-secondary small mb-1">
                Home
              </a>
              <a href="#about" className="d-block text-secondary small mb-1">
                About
              </a>
              <a href="#skills" className="d-block text-secondary small mb-1">
                Skills
              </a>
              <a href="#contact" className="d-block text-secondary small">
                Contact
              </a>
            </div>

            <div className="col-6 col-md-3">
              <h6>Services</h6>
              <p className="text-secondary small mb-1">
                Web Development
              </p>
              <p className="text-secondary small mb-1">
                Backend Development
              </p>
              <p className="text-secondary small mb-1">
                Database Design
              </p>
              <p className="text-secondary small">
                UI/UX Implementation
              </p>
            </div>

            <div className="col-md-3">
              <h6>Connect</h6>
              <div className="d-flex gap-3 fs-5">
                <a href="#" className="text-white">
                  <FaGithub />
                </a>
                <a href="#" className="text-white">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-white">
                  <FaInstagram />
                </a>
                <a href="#" className="text-white">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>


          <hr className="border-secondary" />
          <div className="d-flex justify-content-between flex-wrap">

            <small className="text-secondary">
              © 2025 Abdullah Tariq. All rights reserved.
            </small>
            <small className="text-secondary">
              Designed & Built with ❤️
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
