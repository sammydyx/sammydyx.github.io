const projects = [
  { title: "Hearth", date: "2025", type: "Product design", copy: "A living experience platform that helps young urban renters turn a new space into home.", art: "hearth" },
  { title: "Afterglow", date: "2025", type: "Creative development", copy: "An immersive digital exhibition that lets time, sound, and art respond to each visitor.", art: "afterglow" },
  { title: "Seasonal Table", date: "2024", type: "Mobile product", copy: "A seasonal food companion that brings together stories, community, and everyday choices.", art: "table" },
];

function ProjectArt({ kind }: { kind: string }) {
  if (kind === "hearth") return <div className="art hearth" aria-hidden="true"><span className="art-sun" /><div className="art-house"><i /><b /></div><small>HOME, REIMAGINED</small></div>;
  if (kind === "afterglow") return <div className="art afterglow" aria-hidden="true"><i /><i /><strong>AFTER<br />GLOW</strong><small>TIME / LIGHT / MEMORY</small></div>;
  return <div className="art table" aria-hidden="true"><div className="plate"><i /><i /><i /></div><strong>SEASONAL<br />TABLE</strong></div>;
}

export default function Home() {
  return <main className="site-shell">
    <aside className="sidebar">
      <a href="#top" className="avatar" aria-label="Yingxin Deng, back to top"><span>YD</span><i /></a>
      <h1>Yingxin Deng</h1>
      <p className="role">Independent Designer<br />&amp; Creative Developer</p>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Projects</a><a href="#contact">Contact</a></nav>
      <section className="side-about" id="about"><h2>About</h2><p>Hi, I’m Yingxin. I design digital products and expressive web experiences where curiosity meets craft.</p></section>
      <section className="side-contact" id="contact"><h2>Contact</h2><div><a href="mailto:hello@example.com">Email</a><a href="#">LinkedIn</a><a href="#">Instagram</a></div></section>
    </aside>

    <section className="content" id="top">
      <header className="intro-card">
        <div className="intro-copy"><p className="eyebrow">PORTFOLIO · 2026</p><h2>Hey, I&apos;m Yingxin.</h2><p>Welcome to my corner of the internet. I enjoy shaping thoughtful, useful, and memorable digital experiences.</p><a href="#work">Explore projects <span>↓</span></a></div>
        <div className="now-card"><p>Currently</p><strong>Designing<br /><em>what&apos;s next.</em></strong><div className="now-grid"><span><b>06</b> years making</span><span><b>24</b> projects launched</span></div><a href="mailto:hello@example.com">Start a conversation ↗</a></div>
      </header>

      <section className="projects" id="work"><div className="section-title"><h2>Projects</h2><p>Selected work, 2024–2026</p></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><ProjectArt kind={project.art} /><div className="project-info"><p className="project-date">{project.date} · {project.type}</p><h3>{project.title}</h3><p>{project.copy}</p><a href={`mailto:hello@example.com?subject=Project inquiry: ${project.title}`}>View project <span>↗</span></a></div></article>)}</div></section>
      <footer>© 2026 Yingxin Deng <span>Designed with curiosity.</span></footer>
    </section>
  </main>;
}
