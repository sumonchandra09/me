import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clipboard,
  Compass,
  ExternalLink,
  FileText,
  Info,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const skills = [
  "Search Engine Optimization (SEO)",
  "Keyword Research",
  "On-Page SEO",
  "Off-Page SEO",
  "Backlink Building",
  "Web 2.0",
  "Social Media Marketing",
  "Content Strategy",
  "Competitor Research",
  "Canva",
  "Digital Content",
  "Website Optimization",
  "SEO Planning",
  "Profile Backlinks",
];

const sections = [
  { id: "direction", label: "Direction" },
  { id: "copy", label: "Copy-ready text" },
  { id: "profile", label: "Profile details" },
  { id: "gaps", label: "Open questions" },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

function CopyBlock({ label, children }: { label: string; children: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="copy-block">
      <div className="copy-block-header">
        <div>
          <p className="micro-label">{label}</p>
        </div>
        <button className="copy-button" onClick={copy} type="button" aria-label={`Copy ${label}`}>
          {copied ? <Check size={15} /> : <Clipboard size={15} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="copy-text">{children}</p>
    </article>
  );
}

function StatusPill({ children, tone = "blue" }: { children: string; tone?: "blue" | "amber" | "green" }) {
  return <span className={`status-pill status-${tone}`}><span className="status-dot" />{children}</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const visibleSkills = useMemo(() => (showAllSkills ? skills : skills.slice(0, 8)), [showAllSkills]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">SC</span>
          <span className="brand-copy"><strong>Profile review</strong><span>Sumon Chandra PK</span></span>
        </a>
        <button className="mobile-menu" type="button" aria-label="Toggle navigation" onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Page navigation">
          {sections.map((section) => (
            <button key={section.id} type="button" onClick={() => scrollTo(section.id)}>{section.label}</button>
          ))}
          <a className="linkedin-link" href="https://bd.linkedin.com/in/sumon-chandra-0706a13a6" target="_blank" rel="noreferrer">
            LinkedIn <ExternalLink size={14} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-frame">
          <div className="hero-grid" />
          <div className="hero-copy">
            <div className="kicker"><span className="kicker-line" />Factual profile direction · prepared for review</div>
            <h1>Make the profile<br /><em>easy to trust.</em></h1>
            <p className="hero-lede">A focused LinkedIn profile system for Sumon Chandra PK — written from the CV, with no invented claims.</p>
            <div className="hero-actions">
              <button className="primary-button" type="button" onClick={() => scrollTo("copy")}>Review the copy <ArrowUpRight size={17} /></button>
              <button className="text-button" type="button" onClick={() => scrollTo("gaps")}>See what needs confirming <ChevronDown size={16} /></button>
            </div>
          </div>
          <div className="hero-card-wrap">
            <div className="hero-card card-surface">
              <div className="card-topline"><span>PROFILE POSITIONING</span><Compass size={17} /></div>
              <div className="monogram">SC</div>
              <h3>Digital Marketer<br /><span>&amp; SEO Specialist</span></h3>
              <div className="hero-card-rule" />
              <p>SEO · Keyword research · Content strategy</p>
              <div className="hero-card-footer"><span>Bangladesh</span><span className="tiny-seal">01</span></div>
            </div>
            <div className="floating-note"><Sparkles size={16} /><span>Clear beats crowded.</span></div>
          </div>
        </section>

        <section className="trust-strip section-frame" aria-label="Review status">
          <div className="trust-item"><ShieldCheck size={18} /><div><strong>Source-led</strong><span>Built only from the CV</span></div></div>
          <div className="trust-item"><Info size={18} /><div><strong>Transparent</strong><span>LinkedIn was behind an auth wall</span></div></div>
          <div className="trust-item"><FileText size={18} /><div><strong>Ready to review</strong><span>No edits have been made</span></div></div>
        </section>

        <section id="direction" className="content-section section-frame">
          <SectionHeading eyebrow="01 / Direction" title="One clear professional story" description="The profile should make one promise quickly: Sumon is an early-career Digital Marketer and SEO Specialist with practical focus across search, backlinks, social media support, and content strategy." />
          <div className="direction-grid">
            <article className="direction-card dark-card">
              <div className="card-index">01</div>
              <p className="micro-label">Recommended positioning</p>
              <h3>Practical SEO,<br /><em>not inflated claims.</em></h3>
              <p>Keep the language specific to the skills the CV supports. Avoid adding employers, campaign results, software platforms, certificates, or metrics that have not been confirmed.</p>
            </article>
            <article className="direction-card pale-card">
              <div className="card-index">02</div>
              <p className="micro-label">Suggested banner line</p>
              <blockquote>“DIGITAL MARKETING &amp; SEO”</blockquote>
              <p className="banner-subline">Keyword Research&nbsp; | &nbsp;On-Page &amp; Off-Page SEO&nbsp; | &nbsp;Social Media Marketing</p>
            </article>
          </div>
        </section>

        <section id="copy" className="content-section section-frame copy-section">
          <SectionHeading eyebrow="02 / Copy-ready text" title="Paste, then personalize the facts" description="These are the recommended LinkedIn lines. Employer, dates, institution, and training-provider fields remain intentionally open until confirmed." />
          <div className="copy-grid">
            <CopyBlock label="Headline">Digital Marketer &amp; SEO Specialist | SEO &amp; Keyword Research | On-Page &amp; Off-Page SEO | Social Media Marketing</CopyBlock>
            <CopyBlock label="Experience title">Digital Marketer &amp; SEO Specialist</CopyBlock>
            <CopyBlock label="Experience description">• Supported SEO planning, keyword research, and website optimization.\n• Worked on off-page SEO, Web 2.0 backlink building, and profile backlink building.\n• Assisted with social media content planning and digital marketing support.</CopyBlock>
            <CopyBlock label="Education">Honours — 3rd Year\nDepartment of Zoology</CopyBlock>
          </div>
          <div className="about-panel">
            <div className="about-panel-top"><p className="micro-label">About section</p><span className="copy-note">Copy-ready</span></div>
            <p>I am a Digital Marketer and SEO Specialist building practical skills in search engine optimization and digital marketing.</p>
            <p>My areas of focus include keyword research, SEO planning, on-page and off-page optimization, website optimization, backlink building, Web 2.0 and profile backlinks, social media content planning, content strategy, Canva and digital content, and competitor research.</p>
            <p>I am developing my professional career in Digital Marketing and SEO and am interested in opportunities where I can apply these skills to support online visibility, traffic, and brand growth.</p>
            <p>Skills: SEO • Keyword Research • On-Page SEO • Off-Page SEO • Backlink Building • Web 2.0 and Profile Backlinks • Social Media Marketing • Content Strategy • Canva and Digital Content • Competitor Research</p>
            <div className="about-actions"><button className="copy-button light" type="button" onClick={() => navigator.clipboard?.writeText("I am a Digital Marketer and SEO Specialist building practical skills in search engine optimization and digital marketing.\n\nMy areas of focus include keyword research, SEO planning, on-page and off-page optimization, website optimization, backlink building, Web 2.0 and profile backlinks, social media content planning, content strategy, Canva and digital content, and competitor research.\n\nI am developing my professional career in Digital Marketing and SEO and am interested in opportunities where I can apply these skills to support online visibility, traffic, and brand growth.\n\nSkills: SEO • Keyword Research • On-Page SEO • Off-Page SEO • Backlink Building • Web 2.0 and Profile Backlinks • Social Media Marketing • Content Strategy • Canva and Digital Content • Competitor Research")}> <Clipboard size={15} /> Copy About</button></div>
          </div>
        </section>

        <section id="profile" className="content-section section-frame">
          <SectionHeading eyebrow="03 / Profile details" title="Make the supporting sections earn their space" description="Add what is supported, hold what is not, and keep the profile easy for a recruiter to scan." />
          <div className="profile-grid">
            <article className="info-card skills-card"><div className="info-card-header"><div><p className="micro-label">Skills to add</p><h3>Searchable strengths</h3></div><span className="count-badge">14</span></div><div className="skill-list">{visibleSkills.map((skill) => <span key={skill} className="skill-chip">{skill}</span>)}</div><button className="expand-button" type="button" onClick={() => setShowAllSkills((value) => !value)}>{showAllSkills ? "Show fewer skills" : "Show all 14 skills"}<ChevronDown size={15} className={showAllSkills ? "rotate" : ""} /></button></article>
            <article className="info-card"><div className="info-card-header"><div><p className="micro-label">Languages</p><h3>Keep it accurate</h3></div><span className="mini-icon">文</span></div><div className="language-row"><span>Bangla</span><StatusPill tone="green">Native</StatusPill></div><div className="language-row"><span>English</span><StatusPill>Professional</StatusPill></div><p className="card-footnote">Use LinkedIn’s closest standardized proficiency labels without overstating ability.</p></article>
            <article className="info-card"><div className="info-card-header"><div><p className="micro-label">Training</p><h3>One item to verify</h3></div><span className="mini-icon"><FileText size={17} /></span></div><div className="training-item"><span className="training-dot" /><div><strong>Digital Marketing &amp; SEO</strong><span>Course or formal certificate? Confirm first.</span></div></div><p className="card-footnote">Do not create a Certification entry until the issuing organization and date are known.</p></article>
            <article className="info-card"><div className="info-card-header"><div><p className="micro-label">Featured</p><h3>Wait for proof of work</h3></div><span className="mini-icon"><Sparkles size={17} /></span></div><div className="empty-state"><span className="empty-dash">—</span><p>No project, portfolio link, publication, or certificate is included in the CV.</p></div><p className="card-footnote">Add a genuine work sample only when one is available and verified.</p></article>
          </div>
        </section>

        <section id="gaps" className="content-section section-frame questions-section">
          <SectionHeading eyebrow="04 / Open questions" title="The last mile is factual" description="These are the only confirmations needed before any future LinkedIn edit. Nothing here should be guessed." />
          <div className="questions-layout">
            <div className="question-list">
              {[
                "Is the Digital Marketer & SEO Specialist role current or past?",
                "What is the employer or organization, employment type, location, and date range?",
                "What is the university or institution for the Honours program?",
                "Is Digital Marketing & SEO a course, training program, or formal certificate?",
                "Are there any genuine projects, work samples, certificates, awards, or measurable results to include?",
                "Which target job titles, locations, and work arrangements should Open to Work use?",
              ].map((question, index) => <div className="question-row" key={question}><span>{String(index + 1).padStart(2, "0")}</span><p>{question}</p></div>)}
            </div>
            <aside className="privacy-card"><div className="privacy-icon"><ShieldCheck size={20} /></div><p className="micro-label">Privacy note</p><h3>Think twice before featuring the CV.</h3><p>Uploading the CV to Featured would publicly expose the phone number and email address shown in it. Only feature the document if that visibility is intentional.</p><a href="mailto:sumonchandra.me@gmail.com"><Mail size={15} /> Contact email <ArrowUpRight size={14} /></a></aside>
          </div>
        </section>

        <section className="final-cta section-frame">
          <div><p className="eyebrow">Ready when you are</p><h2>Good profiles feel<br /><em>specific.</em></h2></div>
          <div className="final-cta-copy"><p>Review the proposed text, confirm the open facts, then make the LinkedIn edits with confidence.</p><a className="primary-button" href="https://bd.linkedin.com/in/sumon-chandra-0706a13a6" target="_blank" rel="noreferrer">Open LinkedIn <Linkedin size={17} /></a></div>
        </section>
      </main>

      <footer className="site-footer section-frame"><div><span className="footer-mark">SC</span><span>Sumon Chandra PK · Profile review</span></div><span>Prepared from the uploaded CV · No LinkedIn changes made</span></footer>
    </div>
  );
}
