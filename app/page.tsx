"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: "fake-news-detection",
    title: "Fake News Detection using NLP",
    category: "Machine Learning · NLP",
    shortDescription:
      "Built a machine learning pipeline to classify social media content as real or fake using NLP preprocessing, TF-IDF feature extraction, and supervised learning models.",
    impact:
      "Achieved approximately 98% accuracy on a misinformation classification task and demonstrated how NLP can support scalable content verification.",
    stack: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NLP",
      "TF-IDF",
      "Logistic Regression",
      "Naive Bayes",
    ],
    github:
      "https://github.com/junaidmir1212/Fake-News-Detection-on-Social-Media-Using-Natural-Language-Processing-NLP-",
    problem:
      "Misinformation spreads rapidly across digital platforms, while manual verification is slow and difficult to scale.",
    approach:
      "Designed an NLP-based text classification workflow using preprocessing, feature extraction, and supervised learning models to distinguish fake from real content.",
    outcome:
      "Achieved approximately 98% accuracy on a misinformation classification task and demonstrated how NLP can support scalable content verification.",
    highlights: [
      "~98% accuracy",
      "Text cleaning and preprocessing",
      "Feature extraction using TF-IDF",
      "Model comparison across classifiers",
      "Prediction pipeline for fake/real classification",
    ],
  },
  {
    id: "event-ticketing-dapp",
    title: "Blockchain Event Ticketing DApp",
    category: "Blockchain · Smart Contracts",
    shortDescription:
      "Developed a decentralised ticketing application using blockchain smart contracts and NFT-based tickets to reduce duplication, fraud, and ticket misuse.",
    impact:
      "Created a proof-of-concept ticketing DApp showing how blockchain can improve trust, traceability, and ticket authenticity in event systems.",
    stack: [
      "Solidity",
      "Ethereum",
      "Web3.js",
      "Smart Contracts",
      "NFT Validation",
      "JavaScript",
    ],
    github: "https://github.com/junaidmir1212/-Event-Ticketing-D-App",
    problem:
      "Traditional event ticketing systems are vulnerable to duplication, fraud, and a lack of transparent ownership verification.",
    approach:
      "Built a blockchain-based ticketing solution where tickets are represented digitally and verified through smart contract logic for secure issuance and validation.",
    outcome:
      "Created a proof-of-concept ticketing DApp showing how blockchain can improve trust, traceability, and ticket authenticity in event systems.",
    highlights: [
      "Smart contract ticket issuance",
      "Blockchain-backed ownership verification",
      "Fraud-resistant validation workflow",
      "Frontend integration with decentralised logic",
    ],
  },
];

const skillGroups = [
  {
    title: "Programming & Development",
    items: ["Python", "Java", "C#", ".NET", "JavaScript", "SQL"],
  },
  {
    title: "Machine Learning & NLP",
    items: ["Machine Learning", "Natural Language Processing", "Scikit-learn", "Pandas", "TF-IDF"],
  },
  {
    title: "Blockchain & Tools",
    items: ["Solidity", "Web3.js", "Git", "GitHub", "Smart Contracts"],
  },
  {
    title: "Software Engineering Strengths",
    items: ["Problem Solving", "OOP", "Application Development", "Leadership", "Communication"],
  },
];

const strengths = [
  {
    icon: <Code2 size={18} />,
    title: "Technical Foundation",
    text: "Solid grounding in software engineering, including object-oriented design, data structures, and application development, with hands-on experience delivering end-to-end projects using Python, Java, and modern development tools.",
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

const credibilityItems = [
  {
    title: "BSc (Hons) Computer Science Graduate",
    text: "Strong academic foundation in software engineering, programming, and applied computing with hands-on project delivery.",
  },
  {
    title: "Dissertation / Final Project Focus",
    text: "Developed a Fake News Detection system using Natural Language Processing and machine learning techniques with approximately 98% accuracy.",
  },
  {
    title: "Project-Based Technical Proof",
    text: "Built portfolio projects across machine learning, NLP, blockchain, and decentralised applications with clear engineering value.",
  },
  {
    title: "Leadership & Professional Experience",
    text: "Brings communication, accountability, and decision-making skills developed through real-world leadership and operational roles.",
  },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Credibility", href: "#credibility" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
              <p className="brand-sub">BSc (Hons) Computer Science Graduate Portfolio</p>
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
                <Brain size={16} /> BSc (Hons) Computer Science Graduate · AI · NLP · UK Roles
              </div>

              <h1>BSc (Hons) Computer Science Graduate building practical AI, NLP, and software engineering solutions.</h1>

              <p className="lead">
                I am a UK-based BSc (Hons) Computer Science graduate with hands-on experience building machine learning,
                NLP, and blockchain projects. My work focuses on solving real problems with clean implementation, strong
                technical foundations, and recruiter-ready presentation.
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
                <div className="focus-item">BSc (Hons) Computer Science Graduate Roles</div>
                <div className="focus-item">Machine Learning & NLP Systems</div>
                <div className="focus-item">Blockchain Application Development</div>
                <div className="focus-item">End-to-End Project Delivery</div>
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
              <h2 className="section-title">Case-study driven engineering work</h2>
              <p className="section-copy" style={{ maxWidth: "1000px", marginTop: "0.75rem" }}>
                A selection of projects demonstrating applied machine learning, NLP,
                blockchain development, and end-to-end technical implementation.
              </p>
            </motion.div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.5rem",
                marginTop: "1.5rem",
              }}
            >
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  className="section-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <p className="section-label">{project.category}</p>
                  <h3 style={{ marginTop: "0.35rem" }}>{project.title}</h3>
                  <p style={{ marginTop: "0.85rem" }}>{project.shortDescription}</p>

                  <div className="stack-row" style={{ marginTop: "1rem" }}>
                    {project.stack.map((item) => (
                      <span key={item} className="stack-pill">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="highlights-row" style={{ marginTop: "1rem" }}>
                    {project.highlights.slice(0, 2).map((item) => (
                      <span key={item} className="highlight-pill">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="actions-row" style={{ marginTop: "1.6rem" }}>
                    <a className="btn-small" href={project.github} target="_blank" rel="noreferrer">
                      <Github size={16} /> View GitHub
                    </a>
                    <a className="btn-secondary" href={`#${project.id}`}>
                      View Case Study <ArrowUpRight size={16} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            <div style={{ marginTop: "1.75rem", display: "grid", gap: "1.5rem" }}>
              {projects.map((project, index) => (
                <motion.article
                  key={`${project.id}-case-study`}
                  id={project.id}
                  className="project-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <p className="section-label">Detailed Case Study</p>
                  <h3>{project.title}</h3>
                  <p style={{ marginTop: "0.85rem" }}>{project.impact}</p>

                  <div className="stack-row" style={{ marginTop: "1rem" }}>
                    {project.stack.map((item) => (
                      <span key={item} className="stack-pill">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="project-detail-grid">
                    <div className="detail-block">
                      <p className="detail-label">Problem</p>
                      <p>{project.problem}</p>
                    </div>
                    <div className="detail-block">
                      <p className="detail-label">Approach</p>
                      <p>{project.approach}</p>
                    </div>
                    <div className="detail-block">
                      <p className="detail-label">Outcome</p>
                      <p>{project.outcome}</p>
                    </div>
                    <div className="detail-block">
                      <p className="detail-label">Tech Stack</p>
                      <p>{project.stack.join(", ")}</p>
                    </div>
                  </div>

                  <div className="highlights-row" style={{ marginTop: "1rem" }}>
                    {project.highlights.map((item) => (
                      <span key={item} className="highlight-pill">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="actions-row" style={{ marginTop: "1.1rem" }}>
                    <a className="btn-small" href={project.github} target="_blank" rel="noreferrer">
                      <Github size={16} /> GitHub Repo
                    </a>
                    <a className="btn-secondary" href="#contact">
                      Discuss Project <ArrowUpRight size={16} />
                    </a>
                  </div>
                </motion.article>
              ))}
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
              <h2 className="section-title">Technical toolkit and core strengths</h2>
              <p className="section-copy" style={{ maxWidth: "760px", marginTop: "0.75rem" }}>
                A structured overview of the technologies, methods, and professional strengths
                I bring across software engineering, machine learning, NLP, and blockchain projects.
              </p>
            </motion.div>

            <div className="skill-groups" style={{ marginTop: "1.5rem" }}>
              {skillGroups.map((group, index) => (
                <motion.article
                  key={group.title}
                  className="section-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <p className="section-label">{group.title}</p>
                  <h3 style={{ marginTop: "0.35rem" }}>{group.title}</h3>
                  <div className="skill-grid" style={{ marginTop: "1rem" }}>
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

        <section className="section" id="credibility">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
            >
              <p className="section-label">Credibility</p>
              <h2 className="section-title">Why I am ready to add value</h2>
              <p className="section-copy" style={{ maxWidth: "760px", marginTop: "0.75rem" }}>
                Beyond technical skills, I bring academic depth, project proof, and practical
                experience that supports early contribution in graduate software engineering roles.
              </p>
            </motion.div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.25rem",
                marginTop: "1.5rem",
              }}
            >
              {credibilityItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="section-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                  <p style={{ marginTop: "0.75rem" }}>{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <motion.article
              className="section-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              style={{
                textAlign: "center",
                padding: "2.5rem 1.5rem",
              }}
            >
              <p className="section-label">Open to Opportunities</p>
              <h2 className="section-title" style={{ maxWidth: "760px", margin: "0 auto" }}>
                Currently seeking Graduate BSc (Hons) Computer Science opportunities in the UK
              </h2>
              <p
                className="section-copy"
                style={{
                  maxWidth: "760px",
                  margin: "1rem auto 0 auto",
                }}
              >
                I am actively looking for opportunities where I can contribute across software
                engineering, AI, NLP, and technical project delivery while continuing to grow in a strong engineering environment.
              </p>

              <div
                className="actions-row"
                style={{
                  justifyContent: "center",
                  marginTop: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                <a className="btn-primary" href="#contact">
                  <Mail size={18} /> Contact Me
                </a>
                <a
                  className="btn-secondary"
                  href="https://github.com/junaidmir1212"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  className="btn-secondary"
                  href="https://www.linkedin.com/in/muhammad-junaid-mir-081479266/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </motion.article>
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
                I am currently open to Graduate Software Engineer, AI, and technology roles in the UK.
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
                  value="https://muhammadjuniadmir.vercel.app/"
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
            <p className="brand-sub">BSc (Hons) Computer Science Graduate · AI · NLP · Portfolio</p>
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