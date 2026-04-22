"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  Download,
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
      "Built a machine learning pipeline to classify social media content as real or fake using NLP preprocessing, feature extraction, and supervised learning models.",
    impact:
      "Achieved approximately 98% accuracy on a real-world misinformation classification problem.",
    stack: ["Python", "Scikit-learn", "Pandas", "NLP", "Logistic Regression", "Naive Bayes"],
    github:
      "https://github.com/junaidmir1212/Fake-News-Detection-on-Social-Media-Using-Natural-Language-Processing-NLP-",
    problem:
      "Misinformation spreads rapidly across digital platforms, while manual verification is too slow and resource-intensive at scale.",
    solution:
      "Designed an NLP-based classification workflow using text cleaning, feature extraction, and supervised machine learning to automatically distinguish fake from real content.",
    highlights: [
      "~98% accuracy",
      "Text preprocessing pipeline",
      "Feature extraction and model comparison",
      "Real-world misinformation use case",
    ],
  },
  {
    id: "event-ticketing-dapp",
    title: "Blockchain Event Ticketing DApp",
    category: "Blockchain · Smart Contracts",
    shortDescription:
      "Developed a decentralised ticketing application using smart contracts and NFT-based validation to reduce duplication and fraud.",
    impact:
      "Improved ticket security and transparency through decentralised ownership and validation logic.",
    stack: ["Solidity", "Web3", "JavaScript", "Smart Contracts", "NFTs"],
    github: "https://github.com/junaidmir1212/-Event-Ticketing-D-App",
    problem:
      "Traditional ticketing systems are vulnerable to ticket duplication, resale fraud, and weak ownership transparency.",
    solution:
      "Built a decentralised architecture where tickets are represented as unique blockchain-based assets, enabling secure validation and traceable ownership.",
    highlights: [
      "NFT-based ticket validation",
      "Fraud reduction focus",
      "Web3 integration",
      "Smart contract transaction logic",
    ],
  },
];

const skillGroups = [
  {
    title: "Languages & Development",
    items: ["Python", "Java", "C#", ".NET", "JavaScript", "SQL"],
  },
  {
    title: "AI & Data",
    items: ["Machine Learning", "Natural Language Processing", "Pandas", "Scikit-learn"],
  },
  {
    title: "Blockchain & Tools",
    items: ["Solidity", "Web3", "Git/GitHub", "Smart Contracts"],
  },
  {
    title: "Professional Skills",
    items: ["Problem Solving", "Leadership", "Communication", "Decision-Making"],
  },
];

const strengths = [
  {
    icon: <Code2 size={18} />,
    title: "Technical Foundation",
    text: "Strong grounding in software engineering, object-oriented programming, and practical project implementation.",
  },
  {
    icon: <Brain size={18} />,
    title: "Applied Problem Solving",
    text: "Built solutions in machine learning, NLP, and blockchain with clear business and technical value.",
  },
  {
    icon: <BriefcaseBusiness size={18} />,
    title: "Leadership Experience",
    text: "Developed decision-making, accountability, and operational leadership skills in fast-paced working environments.",
  },
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
            <div className="profile-pic">
              <img src="/profile.jpg" alt="Muhammad Junaid Mir" />
            </div>
            <div>
              <p className="brand-name">Muhammad Junaid Mir</p>
              <p className="brand-sub">Graduate Software Engineer Portfolio</p>
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
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.55 }}
            >
              <div className="kicker">
                <Brain size={16} /> Graduate Software Engineer · AI · NLP · UK Roles
              </div>

              <h1>Software engineer focused on practical, high-impact technical solutions.</h1>

              <p className="lead">
                I am a final-year BSc (Hons) Computer Science student with hands-on project experience in
                machine learning, natural language processing, and blockchain systems. I build portfolio
                projects with clear technical depth, real-world relevance, and strong presentation for
                recruiters, hiring managers, and engineering teams.
              </p>

              <div className="cta-row">
                <a
                  className="btn-primary"
                  href="https://github.com/junaidmir1212"
                  target="_blank"
                  rel="noreferrer"
                >
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
              <p className="section-label">Current Focus</p>
              <div className="focus-list">
                <div className="focus-item">Graduate Software Engineering Roles</div>
                <div className="focus-item">Machine Learning & NLP Systems</div>
                <div className="focus-item">Blockchain Application Development</div>
                <div className="focus-item">Technical Growth in UK Industry</div>
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
                is well designed, useful, and technically robust.
              </p>
              <p className="section-copy">
                Alongside technical projects, I bring leadership and operational experience from fast-paced
                environments, which strengthened my communication, accountability, and decision-making.
              </p>
            </motion.article>

            <motion.article
              className="section-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <p className="section-label">What I Bring</p>
              <h2 className="section-title">Why I add value early</h2>
              <div className="strength-list">
                {strengths.map((item) => (
                  <div key={item.title} className="strength-item">
                    <div className="strength-icon">{item.icon}</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
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

        <section className="section" id="skills">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
            >
              <p className="section-label">Skills</p>
              <h2 className="section-title">Technical toolkit</h2>
            </motion.div>

            <div className="skill-groups" style={{ marginTop: "1.25rem" }}>
              {skillGroups.map((group) => (
                <motion.article
                  key={group.title}
                  className="section-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45 }}
                >
                  <h3 style={{ marginTop: 0 }}>{group.title}</h3>
                  <div className="skill-grid">
                    {group.items.map((skill) => (
                      <span key={skill} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
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

              <div
                className="social-row"
                style={{ marginTop: "1.2rem", flexDirection: "column", alignItems: "flex-start" }}
              >
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
                <input
                  type="hidden"
                  name="_next"
                  value="https://junaid-portfolio-jade-one.vercel.app/"
                />

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
                  <input
                    className="input"
                    type="text"
                    name="subject"
                    placeholder="Opportunity, collaboration, or question"
                    required
                  />
                </label>

                <label className="label">
                  Message
                  <textarea
                    className="textarea"
                    name="message"
                    placeholder="Write your message here..."
                    required
                  />
                </label>

                <div className="actions-row">
                  <button className="btn-primary" type="submit">
                    <Mail size={18} /> Send Message
                  </button>
                </div>
              </form>
            </motion.article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-card">
          <div>
            <p className="brand-name" style={{ margin: 0 }}>
              Muhammad Junaid Mir
            </p>
            <p className="brand-sub">Graduate Software Engineer · AI · NLP · Portfolio</p>
          </div>

          <div className="social-row">
            <a className="icon-link" href="https://github.com/junaidmir1212" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a
              className="icon-link"
              href="https://www.linkedin.com/in/muhammad-junaid-mir-081479266/"
              target="_blank"
              rel="noreferrer"
            >
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