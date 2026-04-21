"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Blocks,
  Brain,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";

const projects = [
  {
    id: "fake-news-detection",
    title: "Fake News Detection using NLP",
    category: "Machine Learning · NLP",
    shortDescription:
      "A machine learning pipeline for classifying social media content as real or fake using NLP preprocessing, feature extraction, and classical ML models.",
    impact:
      "Achieved approximately 98% accuracy while addressing a real-world misinformation problem.",
    stack: ["Python", "Scikit-learn", "Pandas", "NLP", "Logistic Regression", "Naive Bayes"],
    github:
      "https://github.com/junaidmir1212/Fake-News-Detection-on-Social-Media-Using-Natural-Language-Processing-NLP-",
    problem:
      "Misinformation spreads rapidly on social platforms, and manual verification is too slow and resource intensive at scale.",
    solution:
      "Built an NLP-driven classification workflow using preprocessing, vectorisation, and supervised learning to distinguish fake from real content.",
    highlights: [
      "~98% model accuracy",
      "Text cleaning and feature extraction",
      "Comparative model evaluation",
      "Strong real-world use case",
    ],
  },
  {
    id: "event-ticketing-dapp",
    title: "Blockchain Event Ticketing DApp",
    category: "Blockchain · Smart Contracts",
    shortDescription:
      "A decentralised ticketing system using smart contracts and NFT-based ticket validation to reduce duplication and fraud.",
    impact:
      "Created a more secure and transparent ticket flow through decentralised validation.",
    stack: ["Solidity", "Web3", "JavaScript", "Smart Contracts", "NFTs"],
    github: "https://github.com/junaidmir1212/-Event-Ticketing-D-App",
    problem:
      "Traditional ticketing systems are vulnerable to duplication, fraud, and poor transparency across ownership and validation.",
    solution:
      "Designed a decentralised architecture using smart contracts and NFT-based ticket ownership to ensure each ticket remains unique and traceable.",
    highlights: [
      "NFT-based validation",
      "Fraud reduction focus",
      "Web3 integration",
      "Secure transaction logic",
    ],
  },
];

const skills = [
  "Python",
  "Machine Learning",
  "Natural Language Processing",
  "Java",
  "C#",
  ".NET",
  "SQL",
  "Git/GitHub",
  "Solidity",
  "Web3",
  "Problem Solving",
  "Leadership",
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? projects[0],
    [selectedProjectId]
  );

  return (
    <div className="page-shell" id="top">
      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#top" className="brand">
            <div className="brand-badge">
              <Code2 size={20} color="#67e8f9" />
            </div>
            <div>
              <p className="brand-name">Muhammad Junaid Mir</p>
              <p className="brand-sub">Software Engineer Portfolio</p>
            </div>
          </a>

          <nav className="nav">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="mobile-toggle"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        <div className={`container mobile-nav ${mobileOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>
              <div className="kicker">
                <Brain size={16} /> Graduate Software Engineer · AI · NLP
              </div>
              <h1>Building practical software systems with intelligence and impact.</h1>
              <p className="lead">
                I am a final-year BSc (Hons) Computer Science student focused on software engineering,
                machine learning, NLP, and blockchain applications. I build portfolio projects that solve
                real problems and present them clearly for recruiters, hiring managers, and engineering teams.
              </p>
              <div className="cta-row">
                <a className="btn-primary" href="https://github.com/junaidmir1212" target="_blank" rel="noreferrer">
                  <Github size={18} /> View GitHub
                </a>
                <a className="btn-secondary" href="/Muhammad_Junaid_Mir_CV.pdf" download>
                  <Download size={18} /> Download CV
                </a>
                <a className="btn-secondary" href="#contact">
                  <Mail size={18} /> Contact Me
                </a>
              </div>
            </motion.div>

            <motion.aside
              className="info-card"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.55, delay: 0.12 }}
            >
              <p className="section-label">Core Focus</p>
              <div className="focus-list">
                <div className="focus-item">Software Engineering</div>
                <div className="focus-item">Machine Learning & NLP</div>
                <div className="focus-item">Blockchain Systems</div>
                <div className="focus-item">Graduate Roles in the UK</div>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container section-grid">
            <motion.article
              className="section-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <p className="section-label">About</p>
              <h2 className="section-title">Technical depth with practical execution</h2>
              <p className="section-copy">
                My work combines academic computing foundations with hands-on implementation across
                machine learning, NLP, and blockchain. I aim to contribute to teams building software that
                is useful, scalable, and technically well thought through.
              </p>
              <p className="section-copy">
                Alongside technical projects, I bring leadership and operational experience from fast-paced
                environments, which strengthened my communication, responsibility, and decision-making.
              </p>
            </motion.article>

            <motion.article
              className="section-card"
              id="skills"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <p className="section-label">Skills</p>
              <h2 className="section-title">Technical toolkit</h2>
              <div className="skill-grid">
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
            >
              <p className="section-label">Featured Projects</p>
              <h2 className="section-title">Case-study driven portfolio work</h2>
            </motion.div>

            <div className="projects-layout" style={{ marginTop: "1.25rem" }}>
              <motion.div
                className="project-list"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                {projects.map((project) => (
                  <button
                    key={project.id}
                    type="button"
                    className={`project-tab ${selectedProject.id === project.id ? "active" : ""}`}
                    onClick={() => setSelectedProjectId(project.id)}
                  >
                    <div className="project-meta">
                      <span className="section-label" style={{ letterSpacing: "0.14em" }}>
                        {project.category}
                      </span>
                      <ChevronRight size={18} color="#67e8f9" />
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.shortDescription}</p>
                  </button>
                ))}
              </motion.div>

              <motion.article
                className="project-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <p className="section-label">Selected Project</p>
                <h3>{selectedProject.title}</h3>
                <p style={{ marginTop: "0.85rem" }}>{selectedProject.impact}</p>

                <div className="stack-row" style={{ marginTop: "1rem" }}>
                  {selectedProject.stack.map((item) => (
                    <span key={item} className="stack-pill">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-detail-grid">
                  <div className="detail-block">
                    <p className="detail-label">Problem</p>
                    <p>{selectedProject.problem}</p>
                  </div>
                  <div className="detail-block">
                    <p className="detail-label">Solution</p>
                    <p>{selectedProject.solution}</p>
                  </div>
                </div>

                <div className="highlights-row" style={{ marginTop: "1rem" }}>
                  {selectedProject.highlights.map((item) => (
                    <span key={item} className="highlight-pill">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="actions-row">
                  <a className="btn-small" href={selectedProject.github} target="_blank" rel="noreferrer">
                    <Github size={16} /> GitHub Repo
                  </a>
                  <a className="btn-secondary" href="#contact">
                    Discuss Project <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-grid">
            <motion.article
              className="contact-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <p className="section-label">Contact</p>
              <h2 className="section-title">Let’s connect</h2>
              <p className="section-copy">
                I am currently open to graduate software engineering, AI, and technology roles in the UK.
                Reach out if you would like to discuss opportunities, projects, or collaboration.
              </p>

              <div className="social-row" style={{ marginTop: "1.2rem", flexDirection: "column", alignItems: "flex-start" }}>
                <a className="icon-link" href="mailto:junaidmir1212@gmail.com">
                  <Mail size={18} /> junaidmir1212@gmail.com
                </a>
                <a
                  className="icon-link"
                  href="https://github.com/junaidmir1212"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} /> github.com/junaidmir1212
                </a>
                <a
                  className="icon-link"
                  href="https://www.linkedin.com/in/muhammad-junaid-mir-081479266/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={18} /> LinkedIn Profile
                </a>
              </div>
            </motion.article>

            <motion.article
              className="contact-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <p className="section-label">Contact Form</p>
              <h2 className="section-title">Send a message</h2>
              <form action="https://formsubmit.co/junaidmir1212@gmail.com" method="POST" className="form-grid">
                <input type="hidden" name="_subject" value="New portfolio enquiry" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://junaidmir1212.github.io/" />

                <div className="form-row">
                  <label className="label">
                    Name
                    <input className="input" type="text" name="name" placeholder="Your name" required />
                  </label>
                  <label className="label">
                    Email
                    <input className="input" type="email" name="email" placeholder="your@email.com" required />
                  </label>
                </div>

                <label className="label">
                  Subject
                  <input className="input" type="text" name="subject" placeholder="Opportunity, collaboration, or question" required />
                </label>

                <label className="label">
                  Message
                  <textarea className="textarea" name="message" placeholder="Write your message here..." required />
                </label>

                <div className="actions-row">
                  <button className="btn-primary" type="submit">
                    <Mail size={18} /> Send Message
                  </button>
                </div>
              </form>
              <p className="form-note" style={{ marginTop: "0.9rem" }}>
                Replace the CV PDF in the public folder with your latest file named
                <strong> Muhammad_Junaid_Mir_CV.pdf</strong> before deploying.
              </p>
            </motion.article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-card">
          <div>
            <p className="brand-name" style={{ margin: 0 }}>Muhammad Junaid Mir</p>
            <p className="brand-sub">Graduate Software Engineer · AI · NLP · Portfolio</p>
          </div>
          <div className="social-row">
            <a className="icon-link" href="https://github.com/junaidmir1212" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a className="icon-link" href="https://www.linkedin.com/in/muhammad-junaid-mir-081479266/" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a className="icon-link" href="mailto:junaidmir1212@gmail.com">
              <Mail size={18} /> Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
