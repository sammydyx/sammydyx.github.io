const projects = [
  {
    number: "01",
    year: "2025",
    title: "栖居",
    subtitle: "让租房，也能有家的感觉",
    description:
      "面向城市独居青年的居住体验平台。从用户研究、品牌策略到产品界面，重新组织找房之后的生活服务。",
    tags: ["产品设计", "品牌策略", "用户研究"],
    className: "project-home",
    visual: (
      <div className="home-visual" aria-hidden="true">
        <div className="sun" />
        <div className="house"><span /><span /></div>
        <p>QĪ JŪ<br />栖 居</p>
      </div>
    ),
  },
  {
    number: "02",
    year: "2025",
    title: "流光",
    subtitle: "一场关于时间的数字展览",
    description:
      "为新媒体艺术展打造的沉浸式线上体验。以时间为线索，让作品、声音与观众的浏览行为产生回应。",
    tags: ["创意开发", "交互设计", "视觉系统"],
    className: "project-light",
    visual: (
      <div className="light-visual" aria-hidden="true">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <span>TIME / LIGHT / MEMORY</span>
        <strong>流<br />光</strong>
      </div>
    ),
  },
  {
    number: "03",
    year: "2024",
    title: "食刻",
    subtitle: "把时令带回每一餐",
    description:
      "从一张时令食材图谱出发，延展为内容、社区与购物一体的饮食应用，让日常选择更简单、更有温度。",
    tags: ["移动端产品", "设计系统", "内容策略"],
    className: "project-food",
    visual: (
      <div className="food-visual" aria-hidden="true">
        <div className="plate"><i /><i /><i /></div>
        <div className="food-type"><small>SEASONAL TABLE</small><strong>食刻</strong><span>春生 · 夏长 · 秋收 · 冬藏</span></div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="主导航">
        <a className="brand" href="#top" aria-label="林屿作品集首页">LY<span>°</span></a>
        <div className="nav-links">
          <a href="#work">作品</a><a href="#about">关于</a><a href="#contact">联系</a>
        </div>
        <a className="availability" href="mailto:hello@example.com"><span /> 接受新项目</a>
      </nav>

      <header className="hero shell" id="top">
        <p className="eyebrow">Independent designer &amp; creative developer · Shanghai</p>
        <h1>我把复杂的想法，<br />变成<span className="circled">清晰</span>而动人的<br />数字体验。</h1>
        <div className="hero-bottom">
          <p>你好，我是林屿，一名专注数字产品、品牌体验与创意开发的独立设计师。</p>
          <a className="round-link" href="#work" aria-label="查看精选作品"><span>↓</span> 看作品</a>
        </div>
        <div className="hero-shape" aria-hidden="true"><span>IDEAS<br />INTO<br />IMPACT</span></div>
      </header>

      <section className="work shell" id="work">
        <div className="section-heading">
          <p className="kicker">01 / SELECTED WORK</p>
          <h2>精选项目</h2>
          <p>从洞察到落地，认真对待每一个细节。</p>
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
                <a href={`mailto:hello@example.com?subject=想了解项目：${project.title}`} aria-label={`了解${project.title}项目`}>查看项目 <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="about">
        <div className="shell services-grid">
          <div><p className="kicker">02 / WHAT I DO</p><h2>想得清楚，<br />做得漂亮。</h2></div>
          <div className="service-list">
            <div><span>01</span><h3>产品与体验设计</h3><p>从用户洞察、信息架构到交互原型与视觉落地，构建真正好用的数字产品。</p></div>
            <div><span>02</span><h3>品牌与视觉系统</h3><p>把品牌的核心想法变成一套有辨识度、可持续生长的视觉语言。</p></div>
            <div><span>03</span><h3>创意开发</h3><p>用代码延伸设计，让网站、互动装置和数字体验拥有更鲜活的表达。</p></div>
          </div>
        </div>
      </section>

      <section className="about shell">
        <div className="portrait" aria-hidden="true"><div className="portrait-mark">林<br />屿</div><span>DESIGN WITH CURIOSITY</span></div>
        <div className="about-copy">
          <p className="kicker">03 / ABOUT ME</p>
          <h2>保持好奇，<br />也保持<span>具体。</span></h2>
          <p className="lead">我相信好的设计，不只是在屏幕上看起来漂亮，而是能让人与信息、服务和彼此建立更自然的连接。</p>
          <p>过去 6 年，我与不同阶段的团队合作，从零到一打造产品，也帮助成熟品牌寻找新的表达。工作之外，我喜欢逛旧书店、拍城市里不起眼的角落，以及不断折腾自己的小项目。</p>
          <div className="facts"><div><strong>6+</strong><span>年设计经验</span></div><div><strong>24</strong><span>个落地项目</span></div><div><strong>8</strong><span>项设计奖项</span></div></div>
        </div>
      </section>

      <footer id="contact">
        <div className="shell footer-inner">
          <p className="kicker">04 / LET&apos;S TALK</p>
          <h2>有个好想法？<br /><a href="mailto:hello@example.com">一起把它做出来。<span>↗</span></a></h2>
          <div className="footer-bottom">
            <p>© 2026 林屿. 用好奇心与代码制作。</p>
            <div><a href="#">即刻</a><a href="#">小红书</a><a href="#">LinkedIn</a><a href="mailto:hello@example.com">Email</a></div>
            <a href="#top">回到顶部 ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
