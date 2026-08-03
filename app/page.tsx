const projects = [
  {
    number: "01",
    year: "2025",
    title: "Hearth",
    subtitle: "Making rented spaces feel like home",
    description:
      "A living experience platform for young urban renters. From user research and brand strategy to product interface, it rethinks the services that begin after finding a home.",
    tags: ["Product Design", "Brand Strategy", "User Research"],
    className: "project-home",
    visual: (
      <div className="home-visual" aria-hidden="true">
        <div className="sun" />
        <div className="house"><span /><span /></div>
        <p>HEARTH<br />HOME, REIMAGINED</p>
      </div>
    ),
  },
  {
    number: "02",
    year: "2025",
    title: "Afterglow",
    subtitle: "A digital exhibition about time",
    description:
      "An immersive online experience for a new-media art exhibition, using time as a thread that connects artworks, sound, and every visitor’s journey.",
    tags: ["Creative Development", "Interaction Design", "Visual System"],
    className: "project-light",
    visual: (
      <div className="light-visual" aria-hidden="true">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <span>TIME / LIGHT / MEMORY</span>
        <strong>AFTER<br />GLOW</strong>
      </div>
    ),
  },
  {
    number: "03",
    year: "2024",
    title: "Seasonal Table",
    subtitle: "Bringing the seasons back to every meal",
    description:
      "Starting with a seasonal ingredient guide, this food app brings together stories, community, and shopping to make everyday choices simpler and more meaningful.",
    tags: ["Mobile Product", "Design System", "Content Strategy"],
    className: "project-food",
    visual: (
      <div className="food-visual" aria-hidden="true">
        <div className="plate"><i /><i /><i /></div>
        <div className="food-type"><small>SEASONAL TABLE</small><strong>TABLE</strong><span>SPRING · SUMMER · AUTUMN · WINTER</span></div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Lin Yu portfolio home">LY<span>°</span></a>
        <div className="nav-links">
          <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
        </div>
        <a className="availability" href="mailto:hello@example.com"><span /> Available for projects</a>
      </nav>

      <header className="hero shell" id="top">
        <p className="eyebrow">Independent designer &amp; creative developer · Shanghai</p>
        <h1>I turn complex ideas<br />into <span className="circled">clear</span>, memorable<br />digital experiences.</h1>
        <div className="hero-bottom">
          <p>Hi, I’m Lin Yu—an independent designer focused on digital products, brand experiences, and creative development.</p>
          <a className="round-link" href="#work" aria-label="View selected work"><span>↓</span> View work</a>
        </div>
        <div className="hero-shape" aria-hidden="true"><span>IDEAS<br />INTO<br />IMPACT</span></div>
      </header>

      <section className="work shell" id="work">
        <div className="section-heading">
          <p className="kicker">01 / SELECTED WORK</p>
          <h2>Selected work</h2>
          <p>From first insight to final detail, every part is considered.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className={`project-art ${project.className}`}>{project.visual}</div>
              <div className="project-copy">
                <div className="project-meta"><span>{project.number}</span><span>{project.year}</span></div>
                <h3>{project.title}</h3><h4>{project.subtitle}</h4>
                <p>{project.description}</p>
                <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <a href={`mailto:hello@example.com?subject=Project inquiry: ${project.title}`} aria-label={`Learn about ${project.title}`}>View project <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="about">
        <div className="shell services-grid">
          <div><p className="kicker">02 / WHAT I DO</p><h2>Think clearly.<br />Make beautifully.</h2></div>
          <div className="service-list">
            <div><span>01</span><h3>Product &amp; Experience Design</h3><p>From user insight and information architecture to prototypes and final visuals, I create digital products people genuinely enjoy using.</p></div>
            <div><span>02</span><h3>Brand &amp; Visual Systems</h3><p>I turn a brand’s core idea into a distinctive visual language built to grow with it.</p></div>
            <div><span>03</span><h3>Creative Development</h3><p>I use code to extend design, bringing more life to websites, installations, and digital experiences.</p></div>
          </div>
        </div>
      </section>

      <section className="about shell">
        <div className="portrait" aria-hidden="true"><div className="portrait-mark">LIN<br />YU</div><span>DESIGN WITH CURIOSITY</span></div>
        <div className="about-copy">
          <p className="kicker">03 / ABOUT ME</p>
          <h2>Stay curious.<br />Stay <span>specific.</span></h2>
          <p className="lead">I believe great design is more than looking good on screen. It helps people form more natural connections with information, services, and each other.</p>
          <p>For the past six years, I’ve worked with teams at every stage—from shaping products from zero to helping established brands find new ways to speak. Away from work, I browse old bookshops, photograph overlooked city corners, and keep making small things of my own.</p>
          <div className="facts"><div><strong>6+</strong><span>Years of experience</span></div><div><strong>24</strong><span>Launched projects</span></div><div><strong>8</strong><span>Design awards</span></div></div>
        </div>
      </section>

      <footer id="contact">
        <div className="shell footer-inner">
          <p className="kicker">04 / LET&apos;S TALK</p>
          <h2>Have a good idea?<br /><a href="mailto:hello@example.com">Let’s make it real. <span>↗</span></a></h2>
          <div className="footer-bottom">
            <p>© 2026 Lin Yu. Made with curiosity and code.</p>
            <div><a href="#">Instant</a><a href="#">RED</a><a href="#">LinkedIn</a><a href="mailto:hello@example.com">Email</a></div>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
