import { useEffect, useRef, useState } from "react";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const EMAIL = "billal2305101909@diu.edu.bd";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "What I Bring" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "faq", label: "FAQ" },
];

/* every section the scroll-spy watches, in page order */
const SPY_IDS = [
  "home", "about", "projects", "skills", "research",
  "experience", "achievements", "youtube", "faq", "contact",
];

const TIMELINE = [
  {
    year: "2026",
    title: "B.Sc. in CSE (ongoing)",
    text: "Daffodil International University, Bangladesh. CGPA 3.80",
    more: "Developed a strong analytical foundation that later became useful for computational research and machine learning.",
  },
  {
    year: "2022",
    title: "HSC at Dhaka College, Bangladesh",
    text: "Completed HSC from Dhaka College, Bangladesh with a strong foundation in science With Golden A+.",
    more: "Began working more deeply with computational materials research, DFT and machine learning.",
  },
  {
    year: "2025",
    title: "Computational Research",
    text: "Research on AI Machine Learning in Bioinformatics and Materials Science, focusing on DFT and ML-based property prediction.",
    more: "Worked with computational workflows, DFT-generated datasets and ML-based property prediction.",
  },
  {
    year: "2026",
    title: "AI Engineering",
    text: "Moved deeper into backend engineering, RAG and LLM-powered applications.",
    more: "Currently developing AI-powered software systems and backend applications.",
  },
  {
    year: "Location",
    title: "Dhaka, Bangladesh",
    text: "Hometown Cumilla but Currently living in Dhaka, Bangladesh.",
  },
];

const EDUCATION = [
  { label: "B.Sc.", text: "Computer Science & Engineering, Daffodil International University" },
  { label: "HSC", text: "Dhaka College, Bangladesh" },
  { label: "CGPA", text: "3.80 / 4.00" },
  { label: "Focus", text: "Web Design · AI · Backend · Research" },
];

const PROJECTS = [
  {
    num: "01",
    short: "A secure web platform connecting patients and doctors for mental health support.",
    tags: ["AI", "RAG", "LLM"],
    title: "Faith; A Mental Health Platform",
    desc: "A web platform connecting patients and doctors in a secure, supportive online environment — making professional mental health support more accessible.",
    bullets: [
      "Separate sign-up & login for patients and doctors",
      "Patient profiles with age range, gender & contact info",
      "Doctor profiles with license ID, specialization & experience",
      "Secure database-backed authentication system",
      "Personalized dashboards after login",
    ],
    stack: "RAG · LLM · NLP",
  },
  {
    num: "02",
    short: "A smart lost & found platform that matches finders and seekers.",
    tags: ["Backend", "AI", "Node.js"],
    title: "FindMate; ALost & Found Platform",
    desc: "A smart platform that helps people report and recover lost items by connecting finders and seekers through an intelligent matching database.",
    bullets: [
      "Separate submission forms for lost and found items",
      "Automatic match detection with item removal on confirm",
      "Database integration for real-time record management",
      "Clean, accessible UI for easy navigation",
      "Emphasis on user privacy and data accuracy",
    ],
    stack: "NODE · API · AI",
  },
  {
    num: "03",
    short: "A computer-vision tool that analyzes and rates facial features.",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    title: "Face Rating; A Image Analysis Tool",
    desc: "An interactive web application that analyzes facial features using computer vision and ML algorithms to provide detailed rating insights and aesthetic recommendations.",
    bullets: [
      "Real-time facial feature detection",
      "ML-based symmetry and proportion analysis",
      "Detailed scoring across multiple dimensions",
      "Comparison with celebrity references",
      "Privacy-first architecture with local processing",
    ],
    stack: "JAVA · SPRING · SQL",
  },
  {
    num: "04",
    short: "A tool that finds and reduces bugs through automated analysis.",
    tags: ["Robotics", "AI", "Jetson"],
    title: "Bug Reducer; A Code Quality Tool",
    desc: "A tool designed to identify and reduce bugs in software codebases through automated analysis and intelligent suggestions.",
    bullets: [],
    stack: "ROBOTICS · AI",
  },
];

const SKILLS = [
  { title: "AI / Machine Learning", text: "RAG, LLM applications, NLP, machine learning and AI workflows." },
  { title: "Backend Engineering", text: "Node.js, Java, Spring Boot, REST APIs and backend architecture." },
  { title: "Frontend", text: "React, JavaScript, HTML, CSS and Vite." },
  { title: "Databases", text: "PostgreSQL, MySQL, MongoDB and database design." },
  { title: "Soft Skills", text: "Problem-Solving, Critical Thinking, Leadership, Communication, Teamwork, Decision-Making, Adaptability, Time Management" },
  { title: "Design & Tools", text: "Figma, Canva, Git, GitHub, VS Code, IntelliJ" },
  { title: "Computational Research", text: "DFT, computational materials science, materials informatics, data analysis and scientific computing.", wide: true },
];

const RESEARCH_NUMBERS = [
  { value: "924", label: "Candidate compounds" },
  { value: "211", label: "MAX-phase systems" },
  { value: "464", label: "Materials investigated" },
];

const EXPERIENCE = [
  {
    date: "2026 — PRESENT",
    title: "Web Designer & AI Engineer",
    company: "YonBit Lab",
    text: "Working across backend engineering, AI enablement, RAG, LLM workflows and AI-powered applications.",
  },
  {
    date: "2025 — 2026",
    title: "Career Assistant",
    company: "Career Development Center, Daffodil International University",
    text: "Researching next-generation thermal barrier coating materials using machine learning and computational materials science.",
  },
];

const ACHIEVEMENTS = [
  { year: "2024", text: "Participate International Collegiate Programming Contest (ICPC) — Dhaka Regional" },
  { year: "2025", text: "Mars Rover Simulation Competition — At AUST" },
  { year: "2025", text: "Unlock the Algorithm programming Competition — At DIU" },
  { year: "2025", text: "Runners-up — Debate for Democracy, ATN Bangla" },
  { year: "2018", text: "Champion — Project Display, EUSC National Science Fest" },
];

const FAQS = [
  {
    q: "Are you open to internships?",
    a: "Yes. I am interested in opportunities related to AI engineering, backend development and software engineering.",
  },
  {
    q: "What is your current focus?",
    a: "My current focus is AI-powered software, RAG, LLM applications, backend engineering and practical software development.",
  },
  {
    q: "What is your research background?",
    a: "My academic research involves computational materials science, DFT and machine learning for thermal barrier coating materials.",
  },
  {
    q: "Can we collaborate?",
    a: "Yes. I am open to software projects, AI projects, research collaborations and interesting technical ideas.",
  },
];

/* ---------------------------------------------------------
   HELPERS
--------------------------------------------------------- */

const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const smooth = (t) => t * t * (3 - 2 * t);

/* ---------------------------------------------------------
   APP
--------------------------------------------------------- */

export default function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaderLoaded, setLoaderLoaded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [photoMissing, setPhotoMissing] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [openProject, setOpenProject] = useState(null);
  const heroRef = useRef(null);

  const closeMobileSidebar = () => {
    setMobileOpen(false);
    setMenuOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const openMobileSidebar = () => {
    setMobileOpen(true);
    setMenuOpen(true);
    document.body.classList.add("no-scroll");
  };

  /* loader */
  useEffect(() => {
    const hideLoader = () => setLoaderLoaded(true);
    const onLoad = () => window.setTimeout(hideLoader, 450);
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    const fallback = window.setTimeout(hideLoader, 1800);
    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(fallback);
    };
  }, []);

  /* scroll: hero zoom + photo slide, sidebar visibility, active menu item */
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      /* ---- hero animation ---- */
      const hero = heroRef.current;
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const p = total > 0 ? clamp(-rect.top / total) : 1;

        const zoom = Math.pow(14, p);                      // name zooms toward the viewer
        const drop = smooth(clamp(p / 0.8)) * 130;         // photo slides down (% of its height)
        const nameOpacity = p < 0.7 ? 1 : 1 - clamp((p - 0.7) / 0.3);

        hero.style.setProperty("--zoom", zoom.toFixed(4));
        hero.style.setProperty("--drop", drop.toFixed(2));
        hero.style.setProperty("--name-o", nameOpacity.toFixed(3));

        setSidebarVisible(p >= 0.98);
      }

      /* ---- scroll spy ---- */
      const probe = window.innerHeight * 0.4;
      let current = SPY_IDS[0];
      for (const id of SPY_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= probe) current = id;
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  /* resize / escape */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1000) closeMobileSidebar();
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeMobileSidebar();
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, []);

  /* FAQ: only one open at a time */
  useEffect(() => {
    const items = [...document.querySelectorAll("details.faq-item")];
    const handlers = new Map();
    items.forEach((item) => {
      const handler = () => {
        if (!item.open) return;
        items.forEach((other) => {
          if (other !== item) other.removeAttribute("open");
        });
      };
      item.addEventListener("toggle", handler);
      handlers.set(item, handler);
    });
    return () => items.forEach((item) => item.removeEventListener("toggle", handlers.get(item)));
  }, []);

  const handleCopyEmail = async () => {
    let didCopy = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(EMAIL);
        didCopy = true;
      }
    } catch {
      didCopy = false;
    }
    if (!didCopy) {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        didCopy = document.execCommand("copy");
      } catch {
        didCopy = false;
      }
      textarea.remove();
    }
    setCopied(didCopy);
    window.setTimeout(() => setCopied(false), 1600);
  };

  /* touch devices have no hover: tap a project to flip it, tap again to close */
  const handleProjectTap = (num) => {
    if (!window.matchMedia("(hover: none)").matches) return;
    setOpenProject((current) => (current === num ? null : num));
  };

  const handleNavClick = () => {
    if (window.matchMedia("(max-width: 1000px)").matches) closeMobileSidebar();
  };

  return (
    <>
      {/* PAGE LOADER */}
      <div className={`page-loader${loaderLoaded ? " loaded" : ""}`} id="pageLoader">
        <div className="loader-name">
          NOMAN<span>.</span>
        </div>
        <div className="loader-bar">
          <span></span>
        </div>
      </div>

      {/* SIDEBAR */}
      <aside
        className={`sidebar${sidebarVisible ? " visible" : ""}${mobileOpen ? " mobile-open" : ""}`}
        id="sidebar"
      >
        <div className="sb-top">
          <a href="#home" className="sb-logo">
            NOMAN<span>.</span>
          </a>
          <div className="sb-top-actions">
            <div className="sb-socials">
              <a href="https://www.linkedin.com/in/noman-ibna-billal-716491301/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                in
              </a>
              <a href="https://github.com/noman504" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                gh
              </a>
            </div>
            <button className="sb-close" id="sidebarClose" onClick={closeMobileSidebar} aria-label="Close menu" type="button">
              ×
            </button>
          </div>
        </div>

        <p className="sb-tag">
          Building intelligent systems at the intersection of software engineering, AI and research.
        </p>

        <div className="sb-stats">
          <div className="sb-stat">
            <span>05+</span>
            Projects
          </div>
          <div className="sb-stat">
            <span>03+</span>
            Years coding
          </div>
        </div>

        <nav className="sb-nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeId === item.id ? "active" : undefined}
              aria-current={activeId === item.id ? "true" : undefined}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sb-email">
          <span title={EMAIL}>{EMAIL}</span>
          <button id="copyEmail" onClick={handleCopyEmail} type="button">
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <a href={`mailto:${EMAIL}`} className="sb-cta">
          Say Hello ↗
        </a>
      </aside>
      <div className={`sidebar-backdrop${mobileOpen ? " visible" : ""}`} id="sidebarBackdrop" onClick={closeMobileSidebar}></div>

      {/* HERO — only the name and the photo; scroll-driven */}
      <header className="hero" id="home" ref={heroRef}>
        <div className="hero-sticky">
          <nav className="hero-nav">
            <a href="#home" className="hero-logo">
              noman<span>.dev</span>
            </a>
            <div className="hero-links">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#research">Research</a>
              <a href="#contact">Contact</a>
            </div>
            <button
              className={`menu-toggle${menuOpen ? " open" : ""}`}
              id="menuToggle"
              onClick={() => (mobileOpen ? closeMobileSidebar() : openMobileSidebar())}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              type="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="hero-status">
              <i></i>
              Available for opportunities
            </div>
          </nav>

          <div className="hero-stage">
            {/* Name stays BEHIND the photo */}
            <h1 className="giant-name">NOMAN</h1>

            <div className="hero-person">
              <div className="photo-glow"></div>
              <img
                src="/image/pf.png"
                alt="Noman Ibna Billal"
                className="hero-photo"
                style={{ display: photoMissing ? "none" : undefined }}
                onError={() => {
                  setPhotoMissing(true);
                  document.body.classList.add("photo-missing");
                }}
              />
            </div>

            {/* Role list — right corner */}
            <div className="hero-float-right">
              <span>Web Designer</span>
              <span>AI Engineer</span>
              <span>Backend Developer</span>
              <span>Researcher</span>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        {/* ABOUT */}
        <section className="section" id="about">
          <p className="eyebrow">01 / ABOUT</p>
          <h2 className="section-title">
            Web Developer to
            <br />
            <span>Intelligent Software.</span>
          </h2>
          <p className="section-lede">
            My background combines computational science and Full Stack Web Development. Today, I am focused on Web
            Design and building AI-powered applications, reliable backend systems and data analysis. Teaching is the
            other side of me. Through my YouTube channel Concept Genix, I break down complex concepts so students can
            actually understand and enjoy them. My motto: "Learn, Explore, Lead."
          </p>

          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <details className="tl-item" key={i}>
                <summary>
                  <span className="tl-year">{item.year}</span>
                  <span className="tl-body">
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </span>
                </summary>
                {item.more && <p className="tl-more">{item.more}</p>}
              </details>
            ))}
          </div>

          <div className="edu-row">
            {EDUCATION.map((item) => (
              <div className="edu-item" key={item.label}>
                <span className="edu-label">{item.label}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section section-dark" id="projects">
          <p className="eyebrow">02 / SELECTED WORK</p>
          <h2 className="section-title">
            Built with code,
            <br />
            <span>made to solve.</span>
          </h2>
          <p className="section-lede section-lede-dark">
            A selection of software, AI and robotics projects built through practical experimentation.
          </p>

          <div className="gallery">
            {PROJECTS.map((project) => (
              <article
                className={`proj-card${openProject === project.num ? " flipped" : ""}`}
                key={project.num}
                tabIndex={0}
                onClick={() => handleProjectTap(project.num)}
              >
                <div className="proj-inner">
                  {/* FRONT — only the name and a light line */}
                  <div className="proj-face proj-front">
                    <span className="proj-num">{project.num}</span>
                    <h3>{project.title}</h3>
                    <p>{project.short}</p>
                    <div className="proj-bottom">
                      <span>{project.stack}</span>
                      <span>↗</span>
                    </div>
                  </div>

                  {/* BACK — every detail of the project */}
                  <div className="proj-face proj-back">
                    <span className="proj-num">{project.num}</span>
                    <div className="proj-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.bullets.length ? `${project.desc}\n\n${project.bullets.join("\n")}` : project.desc}</p>
                    <div className="proj-bottom">
                      <span>{project.stack}</span>
                      <span>↗</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <p className="eyebrow">03 / CAPABILITIES</p>
          <h2 className="section-title">
            What I bring
            <br />
            <span>to the table.</span>
          </h2>
          <p className="section-lede">
            A combination of software engineering, AI, computational research and analytical problem solving.
          </p>

          <div className="cap-grid">
            {SKILLS.map((skill, i) => (
              <div className={`cap-card${skill.wide ? " cap-wide" : ""}`} key={skill.title}>
                <span className="cap-number">{String(i + 1).padStart(2, "0")}</span>
                <h4>{skill.title}</h4>
                <p>{skill.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RESEARCH */}
        <section className="section research-section" id="research">
          <p className="eyebrow">04 / Bioinformatics RESEARCH</p>
          <h2 className="section-title">
            Science meets
            <br />
            <span>machine learning.</span>
          </h2>
          <p className="section-lede">
            Research focused on leveraging data analysis, machine learning, and computational biology to understand
            biological systems and contribute meaningful insights to the scientific community.
          </p>

          <div className="research-card">
            <div className="research-heading">
              <span>01 / RESEARCH PROJECT</span>
              <h3>
                An AI-Based Skin Health Analysis and Personalized Skincare Recommendation System Using Image
                Processing, Environmental Context, and Conversational AI
              </h3>
            </div>
            <div className="research-numbers">
              {RESEARCH_NUMBERS.map((n) => (
                <div key={n.label}>
                  <strong>{n.value}</strong>
                  <span>{n.label}</span>
                </div>
              ))}
            </div>
            <p className="research-description">
              Constructed a candidate dataset, performed DFT calculations and investigated mechanical, dynamical and
              thermodynamic properties. Machine learning models were developed to predict properties for remaining
              candidates.
            </p>
          </div>

          <div className="research-card research-secondary">
            <div>
              <span>02 / PREVIOUS RESEARCH</span>
              <h3>AI-Driven Drug Repurposing</h3>
            </div>
            <div className="research-highlight">
              <strong>7</strong>
              <span>Novel MAX phases predicted</span>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <p className="eyebrow">05 / EXPERIENCE</p>
          <h2 className="section-title">
            Where I've
            <br />
            <span>worked.</span>
          </h2>
          <div className="experience-list">
            {EXPERIENCE.map((job) => (
              <article className="experience-item" key={job.date}>
                <span className="experience-date">{job.date}</span>
                <div>
                  <h3>{job.title}</h3>
                  <p className="company">{job.company}</p>
                  <p>{job.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="section" id="achievements">
          <p className="eyebrow">06 / RECOGNITION</p>
          <h2 className="section-title">
            Things I've
            <br />
            <span>Achieved</span>
          </h2>
          <div className="wins-list">
            {ACHIEVEMENTS.map((win, i) => (
              <div className="win-row" key={i}>
                <span className="win-year">{win.year}</span>
                <span>{win.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* YOUTUBE */}
        <section id="youtube">
          <div className="section-container">
            <div className="youtube-card">
              <div className="youtube-icon-wrapper">
                <div className="youtube-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </div>
              </div>
              <div className="youtube-content">
                <h3 className="youtube-title">Concept Genix</h3>
                <p className="youtube-description">
                  I run a YouTube channel where I make CSE academic concepts genuinely easy to understand. My belief:
                  education should ignite curiosity, not kill it. Every video is designed to make learning feel like
                  exploration.
                </p>
                <a href="https://www.youtube.com/@ConceptGenix" target="_blank" rel="noopener noreferrer" className="btn youtube-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  Visit the Channel
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <p className="eyebrow">07 / FAQ</p>
          <h2 className="section-title">
            Frequently
            <br />
            <span>asked.</span>
          </h2>
          <div className="faq-list">
            {FAQS.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>
                  {item.q}
                  <span className="faq-icon">+</span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="cta-card">
            <div>
              <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
              <h2 className="section-title">Let's talk.</h2>
              <p className="section-lede">
                Open to AI engineering, backend development, research collaborations and interesting projects.
              </p>
            </div>
            <a href={`mailto:${EMAIL}`} className="btn btn-solid">
              Say Hello ↗
            </a>
          </div>

          <div className="contact-grid">
            <a href={`mailto:${EMAIL}`} className="contact-item">
              <span className="contact-label">Email</span>
              {EMAIL}
            </a>
            <a href="tel:+8801934345187" className="contact-item">
              <span className="contact-label">Phone</span>
              +880 1934 345187
            </a>
            <div className="contact-item">
              <span className="contact-label">Location</span>
              Bangladesh
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/noman-ibna-billal-716491301/" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://www.facebook.com/share/1ZKggDcYnH/" target="_blank" rel="noopener noreferrer">
              Facebook ↗
            </a>
          </div>
        </section>

        <footer className="footer">
          <span>Noman Ibna Billal · AI Engineer & Researcher</span>
          <a href="#home">Back to top ↑</a>
        </footer>
      </main>
    </>
  );
}