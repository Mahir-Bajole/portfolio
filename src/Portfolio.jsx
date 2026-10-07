import { useState } from "react";

const GH = "https://github.com/Mahir-Bajole";
const LINKEDIN = "https://www.linkedin.com/in/mahir-bajole-5a183a32b/";
const EMAIL = "mahirbajole653@gmail.com";

const projects = [
  {
    date: "Mar 2026 – Present",
    name: "Ticket Booking Platform",
    stack: ["Spring Boot", "Kafka", "Redis", "PostgreSQL", "MongoDB", "Docker"],
    summary: "Microservices platform that never double-books a seat.",
    points: [
      "Distributed seat reservation with optimistic locking and Redis caching to prevent double-booking under high concurrency.",
      "RBAC with JWT authentication, centralized exception handling, and asynchronous payment status updates over Kafka topics.",
      "Services communicate over REST and event-driven messaging; the full system runs with Docker Compose.",
    ],
    link: GH,
  },
  {
    date: "Aug – Oct 2025",
    name: "Ledger & Reconciliation Module",
    org: "EVArc eMobility",
    stack: ["Java", "AWS Lambda", "MongoDB"],
    summary: "Serverless ledger for EV charging transactions, built during my SDE internship.",
    points: [
      "Event-driven, serverless processing on AWS Lambda with automatic scaling.",
      "Immutable, append-only MongoDB ledger so every entry is tamper-proof and traceable for audits.",
      "REST APIs (SOLID, clean architecture) for ledger queries, reconciliation status and discrepancy reports.",
      "Automated reconciliation that compares records across sources and flags mismatches.",
    ],
  },
  {
    date: "May 2026 – Present",
    name: "DeployGuru",
    stack: ["Node.js", "Express", "AWS CloudWatch"],
    summary: "Checks AWS deployments and pulls the logs you need to debug them.",
    points: [
      "REST workflow that takes a resource name and time window, collects CloudWatch logs (e.g. Lambda) and returns structured success or error responses.",
      "Configurable log filtering, cross-stream collection, pagination-safe fetching and stream-only export.",
      "GitHub App based deployment: pushes to the default branch deploy automatically.",
    ],
    link: GH,
  },
  {
    date: "Oct 2025",
    name: "SARPARAKSHAK",
    stack: ["Spring Boot", "React Native", "FastAPI", "PostgreSQL"],
    summary: "Multilingual emergency app for snake bite incidents.",
    points: [
      "CNN trained on a curated snake image dataset: 95% accuracy across 20+ species.",
      "Nearest hospital and rescuer lookup with emergency alert dispatch.",
      "UI in regional Indian languages for rural and semi-urban users.",
    ],
    link: GH + "/Snake_Emergency_App_SarpaRakshak",
  },
  {
    date: "State level",
    name: "IoT Smart Vehicle Safety System",
    stack: ["IoT"],
    summary: "1st prize at a state-level project competition.",
    points: ["Automatic emergency braking and intelligent traffic light optimization."],
  },
  {
    date: "Earlier",
    name: "Patient Management System",
    stack: ["Java"],
    summary: "Core Java application for managing patient records, built to practice object-oriented design.",
    points: [],
    link: GH + "/Patient_Management_System_",
  },
  {
    date: "Earlier",
    name: "Product Management CRUD",
    stack: ["Spring", "MySQL"],
    summary: "Spring based CRUD application for product management, backed by MySQL.",
    points: [],
    link: GH + "/Spring-CRUD-Operations-for-Product-Management-with-MySQL",
  },
];

const experience = [
  {
    date: "Aug – Oct 2025",
    role: "SDE Intern",
    org: "EVArc eMobility Services · Remote",
    text: "Built the ledger and reconciliation module with Java, AWS Lambda and MongoDB.",
  },
  {
    date: "Apr 2025 – May 2026",
    role: "Technical Head",
    org: "WCE ACSES",
    text: "Ran expert talks, technical workshops, coding competitions and innovation initiatives.",
  },
];

const skills = [
  ["Languages", "Java, SQL, JavaScript, Python"],
  ["Backend", "Spring Boot, Node.js, Express, FastAPI, REST, JWT, Microservices"],
  ["Messaging and cache", "Kafka, Redis"],
  ["Databases", "PostgreSQL, MongoDB, Oracle"],
  ["Cloud and tools", "AWS Lambda, API Gateway, CloudWatch, Docker, Git"],
  ["Frontend", "React, React Native, Tailwind CSS"],
  ["Core CS", "Data structures and algorithms, OOP, DBMS, Operating systems"],
];

const education = [
  {
    date: "2024 – 2027",
    name: "B.Tech, Computer Science and Engineering",
    where: "Walchand College of Engineering, Sangli",
    note: "CGPA 9.10/10",
  },
  {
    date: "2021 – 2024",
    name: "Diploma, Computer Science and Engineering",
    where: "Government Polytechnic College, Amravati",
    note: "93.71%",
  },
  {
    date: "Award",
    name: "1st prize, state-level project competition",
    where: "IoT-based smart vehicle safety system",
    note: "",
  },
];

const nav = [
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["contact", "Contact"],
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,500;6..72,600&family=Public+Sans:wght@400;500;600&display=swap');
.pf{--bg:#f7f8fa;--surface:#fff;--ink:#111a2b;--muted:#586578;--rule:#dfe4ea;--accent:#0b5c4d;--tint:#e8f1ee;
  background:var(--bg);color:var(--ink);font:400 16px/1.65 'Public Sans',system-ui,sans-serif;min-height:100vh;
  -webkit-font-smoothing:antialiased}
@media (prefers-color-scheme:dark){
  .pf{--bg:#0e141d;--surface:#151c27;--ink:#e8ecf2;--muted:#9aa6b8;--rule:#263040;--accent:#5fc3ab;--tint:#18262b}
}
.pf *{box-sizing:border-box}
.pf h1,.pf h2,.pf h3,.pf p,.pf ul,.pf dl,.pf dd{margin:0}
.pf a{color:var(--accent);text-underline-offset:3px}
.pf a:hover{text-decoration-thickness:2px}
.pf :focus-visible{outline:3px solid var(--accent);outline-offset:3px;border-radius:4px}
.pf html{scroll-behavior:smooth}
.wrap{max-width:1080px;margin:0 auto;padding:72px 28px 96px;display:grid;grid-template-columns:270px minmax(0,1fr);gap:80px}
.side{position:sticky;top:72px;align-self:start}
.side h1{font:600 38px/1.1 'Newsreader',Georgia,serif;letter-spacing:-.015em}
.role{margin-top:10px;font-weight:500}
.where{margin-top:4px;color:var(--muted);font-size:14.5px}
.bio{margin-top:20px;color:var(--muted);font-size:15px}
.nav{margin-top:32px;display:flex;flex-direction:column;gap:2px}
.nav a{color:var(--muted);text-decoration:none;padding:6px 0 6px 14px;border-left:2px solid var(--rule);font-size:15px}
.nav a:hover{color:var(--ink);border-left-color:var(--accent)}
.social{margin-top:32px;display:flex;flex-wrap:wrap;gap:8px}
.btn{display:inline-block;padding:8px 14px;border:1px solid var(--rule);border-radius:6px;background:var(--surface);
  color:var(--ink)!important;text-decoration:none;font-weight:500;font-size:14.5px}
.btn:hover{border-color:var(--accent)}
.btn.primary{background:var(--accent);border-color:var(--accent);color:#fff!important}
@media (prefers-color-scheme:dark){.btn.primary{color:#0e141d!important}}
section{scroll-margin-top:48px}
section+section{margin-top:72px}
section>h2{font:600 26px/1.2 'Newsreader',Georgia,serif;letter-spacing:-.01em;padding-bottom:14px;border-bottom:1px solid var(--rule);margin-bottom:8px}
.lead{font-size:18px;line-height:1.6;max-width:62ch}
.item{padding:22px 0;border-bottom:1px solid var(--rule);display:grid;grid-template-columns:150px minmax(0,1fr);gap:6px 24px}
.date{font-size:14px;color:var(--muted);padding-top:3px;font-variant-numeric:tabular-nums}
.title{font-weight:600;font-size:17px}
.org{color:var(--muted);font-weight:400}
.text{color:var(--muted);margin-top:4px}
.proj{border-bottom:1px solid var(--rule)}
.head{all:unset;box-sizing:border-box;width:100%;cursor:pointer;padding:22px 0;display:grid;
  grid-template-columns:150px minmax(0,1fr) 20px;gap:6px 24px;align-items:start}
.head:hover .title{color:var(--accent)}
.head:focus-visible{outline:3px solid var(--accent);outline-offset:2px;border-radius:4px}
.sign{color:var(--accent);font-size:20px;line-height:1.3;text-align:right}
.tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.tag{background:var(--tint);color:var(--accent);border-radius:4px;padding:2px 9px;font-size:13px;font-weight:500}
.sum{color:var(--muted);margin-top:6px}
.body{padding:0 0 24px 174px}
.body ul{padding-left:20px}
.body li{margin-bottom:8px}
.body a{display:inline-block;margin-top:6px;font-weight:500}
.skills{display:grid;grid-template-columns:170px minmax(0,1fr);gap:0 24px}
.skills div{display:contents}
.skills dt,.skills dd{padding:14px 0;border-bottom:1px solid var(--rule)}
.skills dt{font-weight:600}
.skills dd{color:var(--muted)}
.foot{margin-top:72px;color:var(--muted);font-size:14px}
@media (max-width:860px){
  .wrap{grid-template-columns:1fr;gap:56px;padding:48px 20px 72px}
  .side{position:static}
  .nav{flex-direction:row;flex-wrap:wrap;gap:6px 18px}
  .nav a{border-left:0;padding:4px 0}
}
@media (max-width:640px){
  .item,.skills{grid-template-columns:1fr}
  .head{grid-template-columns:minmax(0,1fr) 20px}
  .head .date{grid-column:1/-1}
  .body{padding-left:0}
  .skills dt{border-bottom:0;padding-bottom:0}
  .skills dd{padding-top:2px}
}
@media (prefers-reduced-motion:no-preference){.pf{scroll-behavior:smooth}}
@media print{.nav,.social{display:none}.side{position:static}.wrap{display:block}.pf{background:#fff}}
`;

function Project({ p, open, toggle, id }) {
  const hasBody = p.points.length > 0 || p.link;
  const header = (
    <>
      <span className="date">{p.date}</span>
      <span>
        <span className="title">
          {p.name}
          {p.org && <span className="org"> · {p.org}</span>}
        </span>
        <span className="sum" style={{ display: "block" }}>{p.summary}</span>
        <span className="tags">
          {p.stack.map((s) => <span className="tag" key={s}>{s}</span>)}
        </span>
      </span>
    </>
  );
  if (!hasBody) {
    return (
      <div className="proj">
        <div className="head" style={{ cursor: "default" }}>
          {header}
          <span />
        </div>
      </div>
    );
  }
  return (
    <div className="proj">
      <button className="head" onClick={toggle} aria-expanded={open} aria-controls={id}>
        {header}
        <span className="sign" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="body" id={id}>
          {p.points.length > 0 && <ul>{p.points.map((t) => <li key={t}>{t}</li>)}</ul>}
          {p.link && <a href={p.link} target="_blank" rel="noreferrer">View on GitHub</a>}
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [open, setOpen] = useState(0);
  return (
    <div className="pf">
      <style>{css}</style>
      <div className="wrap">
        <header className="side">
          <h1>Mahir Bajole</h1>
          <p className="role">Backend Engineer</p>
          <p className="where">Amravati, Maharashtra, India</p>
          <p className="bio">
            Final-year B.Tech CSE at Walchand College of Engineering, Sangli (CGPA 9.10/10).
          </p>
          <nav className="nav" aria-label="Sections">
            {nav.map(([id, label]) => <a key={id} href={"#" + id}>{label}</a>)}
          </nav>
          <div className="social">
            <a className="btn primary" href={"mailto:" + EMAIL}>Email me</a>
            <a className="btn" href={GH} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </header>

        <main>
          <section aria-labelledby="about">
            <p className="lead">
              I build event-driven, distributed systems in Java and Spring Boot. I like problems where
              data must stay correct under load: ledgers, reservations and audit trails.
            </p>
          </section>

          <section id="projects" aria-labelledby="h-projects">
            <h2 id="h-projects">Projects</h2>
            {projects.map((p, i) => (
              <Project key={p.name} p={p} id={"proj-" + i} open={open === i} toggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </section>

          <section id="experience" aria-labelledby="h-exp">
            <h2 id="h-exp">Experience</h2>
            {experience.map((e) => (
              <div className="item" key={e.role}>
                <p className="date">{e.date}</p>
                <div>
                  <p className="title">{e.role} <span className="org">· {e.org}</span></p>
                  <p className="text">{e.text}</p>
                </div>
              </div>
            ))}
          </section>

          <section id="skills" aria-labelledby="h-skills">
            <h2 id="h-skills">Skills</h2>
            <dl className="skills">
              {skills.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="education" aria-labelledby="h-edu">
            <h2 id="h-edu">Education and awards</h2>
            {education.map((e) => (
              <div className="item" key={e.name}>
                <p className="date">{e.date}</p>
                <div>
                  <p className="title">{e.name}</p>
                  <p className="text">{e.where}{e.note && ` · ${e.note}`}</p>
                </div>
              </div>
            ))}
          </section>

          <section id="contact" aria-labelledby="h-contact">
            <h2 id="h-contact">Contact</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Open to backend and SDE roles and internships. Write to{" "}
              <a href={"mailto:" + EMAIL}>{EMAIL}</a>.
            </p>
          </section>

          <p className="foot">© {new Date().getFullYear()} Mahir Bajole</p>
        </main>
      </div>
    </div>
  );
}