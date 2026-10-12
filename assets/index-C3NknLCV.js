(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();function S(){return`
    <header class="site-header">
      <nav class="navbar">
        <a class="brand" href="#hero">
          <img src="/Assets/sunil_kumar.jpeg" alt="Logo" class="brand-logo" />
          <span>SUNIL KUMAR</span>
        </a>
        <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#credentials">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  `}function w(){return`
    <section class="hero section" id="hero">
      <div id="hero-cli-bg-left" class="cli-background cli-left"></div>
      <div id="hero-cli-bg-right" class="cli-background cli-right"></div>
      <div class="hero-copy">
        <p class="eyebrow">Developer Command Center</p>
        <h1>SUNIL KUMAR</h1>
        <p class="hero-title">Python Developer | DevOps Engineer | Cloud & Observability</p>
        <p class="hero-tagline">
          Observability and infrastructure engineer operating a 12-microservice banking platform on AWS at TCS. Building Python automation, running Kubernetes workloads, and owning full-stack monitoring.
        </p>
        <div class="contact-chips">
          <span>Chennai, India</span>
          <a href="mailto:esunilkumar24@gmail.com">esunilkumar24@gmail.com</a>
          <a href="tel:+919087350567">+91 9087350567</a>
          <a href="https://www.linkedin.com/in/sunilkumar-e-710080216/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div class="cta-row">
          <a class="button button-primary" href="#projects">Explore Projects</a>
          <a class="button button-secondary" href="#contact">
            Get in Touch
          </a>
        </div>
      </div>
      <aside class="hero-panel">
        <div class="hero-portrait-card">
          <img
            src="/Assets/sunil_kumar.jpeg"
            alt="Portrait of Sunil Kumar"
            class="hero-portrait"
          />
        </div>
        <div class="portrait-badge">Engineer. Automator. Builder.</div>
        <div class="glass-panel panel-card">
          <p class="panel-label">Current Focus</p>
          <ul>
            <li>Observability & infrastructure for 12-microservice banking platform</li>
            <li>Python automation eliminating 15+ hours/week of manual ops</li>
            <li>Building production-grade Django applications with CI/CD</li>
          </ul>
        </div>
      </aside>
    </section>
  `}function p(a){return`
    <div class="tag-row">
      ${a.map(i=>`<span>${i}</span>`).join("")}
    </div>
  `}function o(a,i){return`
    <div class="section-heading">
      <p class="eyebrow">${a}</p>
      <h2>${i}</h2>
    </div>
  `}function C(){return`
    <section class="section" id="about">
      ${o("About Me","Engineering reliability and automation at scale.")}
      <div class="about-grid">
        <div class="glass-panel content-card" style="padding: 2.2rem; display: flex; flex-direction: column; justify-content: center;">
          <p class="panel-label">Professional Summary</p>
          <p style="line-height: 1.8; color: var(--muted); margin: 0; font-size: 0.95rem;">
            Observability and infrastructure engineer operating a 12-microservice banking platform on AWS at Tata Consultancy Services. I build Python automation, run Kubernetes workloads, and own full-stack monitoring — covering Datadog, Kibana, and CloudWatch across production environments. Outside of work, I build Django projects and expand my DevOps toolkit, shipping containerised applications with CI/CD pipelines.
          </p>
        </div>
        <div class="strengths-grid">
          <div class="glass-panel strength-card">
            <p class="panel-label" style="margin: 0; font-size: 0.72rem;">Experience</p>
            <span class="strength-val">~2 Years</span>
            <p>Active engineering role at TCS since Sep 2024, handling enterprise banking workloads.</p>
          </div>
          <div class="glass-panel strength-card">
            <p class="panel-label" style="margin: 0; font-size: 0.72rem;">Leadership</p>
            <span class="strength-val">Team Lead</span>
            <p>Leading a 12-member team across system reliability, monitoring, and DevOps automation.</p>
          </div>
          <div class="glass-panel strength-card">
            <p class="panel-label" style="margin: 0; font-size: 0.72rem;">Cloud Infrastructure</p>
            <span class="strength-val">AWS</span>
            <p>Lambda, S3, ECS, RDS, SQS/SNS, IAM, CloudWatch — production & staging environments.</p>
          </div>
          <div class="glass-panel strength-card">
            <p class="panel-label" style="margin: 0; font-size: 0.72rem;">Observability</p>
            <span class="strength-val">Full Stack</span>
            <p>Datadog, Kibana (ELK), CloudWatch — dashboards, alerting, and root-cause analysis.</p>
          </div>
          <div class="glass-panel strength-card">
            <p class="panel-label" style="margin: 0; font-size: 0.72rem;">Automation</p>
            <span class="strength-val">Python & Shell</span>
            <p>Eliminated 15+ hours/week of manual ops through scripted automation and API tooling.</p>
          </div>
        </div>
      </div>
    </section>
  `}const h=[{date:"2020",title:"The Foundation",description:"Began studying Electronics & Communication Engineering at Amrita Vishwa Vidyapeetham, building a strong foundation in computing and systems."},{date:"2023",title:"First Lines of Code",description:"Discovered Python and fell in love with automation. Started building small scripts and learning web development with Django."},{date:"2024",title:"The Breakthrough",description:"Secured an offer from Tata Consultancy Services during final year. Graduated with a BE in ECE and prepared for the enterprise world."},{date:"Sep 2024",title:"Day One at TCS",description:"Joined TCS as an Assistant System Engineer. Stepped into the world of enterprise banking systems and production operations."},{date:"Early 2025",title:"Taking the Lead",description:"Promoted to Team Lead — took ownership of a 12-member team handling monitoring, DevOps automation, and production support."},{date:"2025",title:"AWS Certified",description:"Earned AWS Certified AI Practitioner (Foundational) credential, strengthening cloud and applied AI expertise."},{date:"2026",title:"Power BI Certified",description:"Completed Microsoft Power BI Data Analyst (PL-300) certification, adding data analytics and visualisation to the toolkit."}],D=`"I don't just monitor systems — I engineer the observability that makes them reliable. Every alert tuned, every script automated, every incident prevented is infrastructure done right."`;function A(){const a=[];for(let i=0;i<h.length;i+=3)a.push(h.slice(i,i+3));return`
    <section class="section" id="journey">
      ${o("My Timeline","From college to leading production systems")}
      
      <div class="s-curve-container">
        ${a.map((i,s)=>{const n=s%2===1;return`
            <div class="${n?"s-curve-row row-reverse":"s-curve-row"} row-${s+1}">
              ${i.map((e,l)=>`
                  <div class="s-curve-node" data-index="${s*3+l+1}">
                    <div class="node-dot-wrapper">
                      <div class="node-dot"></div>
                    </div>
                    <div class="node-card">
                      <span class="node-date">${e.date}</span>
                      <h4 class="node-title">${e.title}</h4>
                      <p class="node-desc">${e.description}</p>
                    </div>
                  </div>
                `).join("")}
              ${!n&&i.length<3?'<div class="s-curve-spacer"></div>'.repeat(3-i.length):""}
              ${n&&i.length<3?'<div class="s-curve-spacer"></div>'.repeat(3-i.length):""}
            </div>
          `}).join("")}
      </div>
      
      <blockquote style="margin: 3rem auto 1rem; max-width: 900px; padding: 1.8rem; border-left: 4px solid var(--accent); background: rgba(54, 194, 255, 0.05); border-radius: 0 12px 12px 0;">
        <p style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-style: italic; color: #dce8f8; font-size: 1.05rem; line-height: 1.7; letter-spacing: 0.02em;">
          ${D}
        </p>
      </blockquote>
    </section>
  `}function P(){return`
    <section class="section" id="experience">
      ${o("Experience","Leading observability, automation, and infrastructure in live banking environments.")}
      
      <div class="timeline">
        <article class="glass-panel timeline-card">
          <div class="timeline-meta">
            <p>Tata Consultancy Services</p>
            <span>September 2024 - Present</span>
          </div>
          <div class="timeline-body">
            <h3>Assistant System Engineer &amp; Team Lead</h3>
            <p class="timeline-domain">BFSI Domain (12-Microservice Banking Platform)</p>
            
            <p class="exp-category">Observability & Monitoring</p>
            <ul>
              <li>Operated the full observability stack — Datadog, Kibana (Elastic Stack), and AWS CloudWatch — across 11-12 production microservices.</li>
              <li>Built and maintained dashboards, saved searches, and SLI/SLO-aligned alerting configurations for real-time system health visibility.</li>
              <li>Performed root-cause analysis by correlating distributed logs, metrics, and traces across application, database, and network tiers.</li>
              <li>Participated in post-incident reviews and implemented monitoring enhancements to prevent recurrence.</li>
            </ul>

            <p class="exp-category">Python & Automation</p>
            <ul>
              <li>Developed Python and Shell automation scripts to eliminate 15+ hours/week of manual operational reporting.</li>
              <li>Built modular, reusable tooling with structured logging, error handling, and cron-scheduled execution.</li>
              <li>Engineered API-driven automation tools integrating LLM APIs with Playwright to automate 3 critical browser-based operational workflows.</li>
            </ul>

            <p class="exp-category">AWS Cloud Infrastructure</p>
            <ul>
              <li>Administered Lambda, S3, ECS, SQS/SNS, DynamoDB, RDS, IAM, and CloudWatch across production and staging.</li>
              <li>Performed configuration management, capacity tuning, and alerting optimisation to maintain SLA compliance.</li>
            </ul>

            <p class="exp-category">Kubernetes, Databases & Messaging</p>
            <ul>
              <li>Delivered Kubernetes-based production operations — troubleshooting, log review, metric investigations.</li>
              <li>Working knowledge of Kafka messaging architecture: topic config, consumer groups, partition layout.</li>
              <li>SQL query troubleshooting and performance diagnostics on PostgreSQL and AWS RDS.</li>
            </ul>

            <p class="exp-category">Linux & Scripting</p>
            <ul>
              <li>Administered Ubuntu, CentOS, RHEL systems for configuration, diagnostics, and task automation.</li>
              <li>Developed Shell and PowerShell scripts for provisioning, patching, and configuration management.</li>
            </ul>

            ${p(["Python","Bash","PowerShell","SQL","Datadog","Kibana","CloudWatch","AWS","Kafka","Kubernetes","Docker","GitHub Actions","Jenkins","Django REST Framework","PostgreSQL","Redis"])}
          </div>
        </article>
      </div>
    </section>
  `}function L(){return`
    <section class="section" id="projects">
      ${o("Featured Projects","Production-grade Django applications with CI/CD, containers, and real-world utility.")}
      <div class="projects-grid">

        <article class="glass-panel project-card">
          <div class="project-image-wrapper">
            <img src="/Assets/proj_money_manager.png" alt="Money Manager REST API" class="project-image" />
          </div>
          <div class="project-info">
            <h3>Money Manager</h3>
            <p>Multi-user personal finance REST API with httpOnly JWT auth (XSS-proof), user-scoped ORM isolation, rate limiting, and OpenAPI 3.0 spec. Containerised with multi-stage Docker, Nginx reverse proxy, and Docker Compose orchestration.</p>
            <div style="margin-bottom: 1.5rem;">
              ${p(["Django DRF","JWT","PostgreSQL","Redis","Docker","Nginx","GitHub Actions"])}
            </div>
            <div class="project-links">
              <a href="https://github.com/Sunil2409/money-management-system" target="_blank" rel="noreferrer" class="project-link-btn">GitHub</a>
            </div>
          </div>
        </article>

        <article class="glass-panel project-card">
          <div class="project-image-wrapper">
            <img src="/Assets/proj_calculator.png" alt="Django Calculator" class="project-image" />
          </div>
          <div class="project-info">
            <h3>Django Calculator</h3>
            <p>Full-featured calculator with user authentication, per-user history (PostgreSQL-backed), health check API, structured logging, and 99% test coverage. Deployed with Gunicorn, Docker, Kubernetes, and GitHub Actions CI/CD.</p>
            <div style="margin-bottom: 1.5rem;">
              ${p(["Django","Gunicorn","PostgreSQL","Redis","Docker","Kubernetes","GitHub Actions"])}
            </div>
            <div class="project-links">
              <a href="https://github.com/Sunil2409/Django_Calculator" target="_blank" rel="noreferrer" class="project-link-btn">GitHub</a>
            </div>
          </div>
        </article>

        <article class="glass-panel project-card">
          <div class="project-image-wrapper">
            <img src="/Assets/proj_weather.png" alt="Weather Dashboard" class="project-image" />
          </div>
          <div class="project-info">
            <h3>Weather Dashboard</h3>
            <p>Real-time weather and AQI dashboard using OpenWeatherMap API. Features Redis caching for performance, PostgreSQL for storage, Docker Compose deployment, and GitHub Actions CI/CD pipeline.</p>
            <div style="margin-bottom: 1.5rem;">
              ${p(["Django","PostgreSQL","Redis","Docker","OpenWeatherMap API","GitHub Actions"])}
            </div>
            <div class="project-links">
              <a href="https://github.com/Sunil2409/weather-dashboard" target="_blank" rel="noreferrer" class="project-link-btn">GitHub</a>
            </div>
          </div>
        </article>

      </div>
    </section>
  `}function E(){return`
    <section class="section" id="skills">
      ${o("Skills & Tooling","Technical competence across languages, cloud, observability, and DevOps.")}
      <div class="skills-grid">

        <div class="glass-panel skill-card">
          <h3>Languages</h3>
          <div class="skills-chips-wrapper">
            <span>Python</span><span>Bash</span><span>PowerShell</span><span>SQL</span><span>JavaScript</span>
          </div>
        </div>

        <div class="glass-panel skill-card">
          <h3>Observability</h3>
          <div class="skills-chips-wrapper">
            <span>Datadog</span><span>Kibana (ELK Stack)</span><span>AWS CloudWatch</span><span>SLI/SLO Alerting</span><span>Distributed Tracing</span>
          </div>
        </div>

        <div class="glass-panel skill-card">
          <h3>Cloud & Infrastructure</h3>
          <div class="skills-chips-wrapper">
            <span>AWS Lambda</span><span>S3</span><span>ECS</span><span>RDS</span><span>SQS/SNS</span><span>DynamoDB</span><span>IAM</span>
          </div>
        </div>

        <div class="glass-panel skill-card">
          <h3>DevOps</h3>
          <div class="skills-chips-wrapper">
            <span>Docker</span><span>Kubernetes</span><span>GitHub Actions</span><span>Jenkins</span><span>CI/CD Pipelines</span><span>Nginx</span>
          </div>
        </div>

        <div class="glass-panel skill-card">
          <h3>Backend</h3>
          <div class="skills-chips-wrapper">
            <span>Django REST Framework</span><span>Flask</span><span>FastAPI</span><span>REST APIs</span><span>Gunicorn</span>
          </div>
        </div>

        <div class="glass-panel skill-card">
          <h3>Databases & Messaging</h3>
          <div class="skills-chips-wrapper">
            <span>PostgreSQL</span><span>Redis</span><span>DynamoDB</span><span>Kafka</span><span>ChromaDB</span>
          </div>
        </div>

        <div class="glass-panel skill-card">
          <h3>Linux</h3>
          <div class="skills-chips-wrapper">
            <span>Ubuntu</span><span>CentOS</span><span>RHEL</span><span>Log Management</span><span>Patching</span><span>CVE Remediation</span>
          </div>
        </div>

      </div>
    </section>
  `}function x(){return`
    <section class="section credentials-grid" id="credentials">
      <div>
        ${o("Certifications","Validated expertise in cloud and data analytics.")}
        <div class="stack-list">
          <article class="cert-card">
            <div class="cert-badge">AWS Certified</div>
            <h3>AWS Certified AI Practitioner (Foundational)</h3>
            <p>Earned 2025</p>
          </article>
          <article class="cert-card">
            <div class="cert-badge">Microsoft Certified</div>
            <h3>Microsoft Power BI Data Analyst (PL-300)</h3>
            <p>Earned 2025</p>
          </article>
        </div>
      </div>
      <div id="education">
        ${o("Education","Academic foundation in engineering.")}
        <article class="glass-panel education-card">
          <h3>B.E., Electronics &amp; Communication Engineering</h3>
          <p class="institute">Amrita Vishwa Vidyapeetham</p>
          <p class="period">2020 - 2024 | Coimbatore, Tamil Nadu</p>
        </article>
      </div>
    </section>
  `}function j(){return`
    <footer class="section footer" id="contact">
      ${o("Get in Touch","Let's discuss DevOps, cloud infrastructure, or engineering roles.")}
      <div class="glass-panel contact-panel">
        <div class="contact-card-info">
          <p>
            I am open to collaborations, technical discussions, and Python, DevOps, cloud, or infrastructure engineering roles. Drop me a line!
          </p>
          <div class="contact-stack">
            <a href="mailto:esunilkumar24@gmail.com">
              <span>Email:</span> esunilkumar24@gmail.com
            </a>
            <a href="https://github.com/Sunil2409" target="_blank" rel="noreferrer">
              <span>GitHub:</span> github.com/Sunil2409
            </a>
            <a href="https://www.linkedin.com/in/sunilkumar-e-710080216/" target="_blank" rel="noreferrer">
              <span>LinkedIn:</span> linkedin.com/in/sunilkumar-e
            </a>
            <span>
              <span>Location:</span> Chennai, India
            </span>
          </div>
        </div>
        <form class="contact-form" action="mailto:esunilkumar24@gmail.com" method="post" enctype="text/plain">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="your@email.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" placeholder="How can I help you?" required></textarea>
          </label>
          <button class="button-submit" type="submit">Send Message</button>
        </form>
      </div>
      <p class="copyright">&copy; 2026 Sunil Kumar. Built with speed and precision.</p>
    </footer>
  `}function I(){return`
    <div class="page-shell">
      ${S()}
      <main>
        ${w()}
        ${C()}
        ${A()}
        ${P()}
        ${L()}
        ${E()}
        ${x()}
      </main>
      ${j()}
    </div>
  `}const $=document.querySelector("#app");$.innerHTML=I();const d=document.querySelector(".nav-toggle"),g=document.querySelector(".nav-links"),M=document.querySelectorAll(".nav-links a");d&&g&&(d.addEventListener("click",()=>{const a=g.classList.toggle("is-open");d.setAttribute("aria-expanded",String(a))}),M.forEach(a=>{a.addEventListener("click",()=>{g.classList.remove("is-open"),d.setAttribute("aria-expanded","false")})}));const r=document.createElement("canvas");r.id="bg-canvas";document.body.prepend(r);const c=r.getContext("2d");let b=[];const W=65;function y(){r.width=window.innerWidth,r.height=window.innerHeight}window.addEventListener("resize",y);y();class T{constructor(){this.reset()}reset(){this.x=Math.random()*r.width,this.y=Math.random()*r.height,this.vx=(Math.random()-.5)*.3,this.vy=(Math.random()-.5)*.3,this.size=Math.random()*2+.8,this.alpha=Math.random()*.4+.1}update(){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>r.width||this.y<0||this.y>r.height)&&this.reset()}draw(){c.beginPath(),c.arc(this.x,this.y,this.size,0,Math.PI*2),c.fillStyle=`rgba(168, 85, 247, ${this.alpha})`,c.fill()}}for(let a=0;a<W;a++)b.push(new T);function k(){c.clearRect(0,0,r.width,r.height),b.forEach(a=>{a.update(),a.draw()}),requestAnimationFrame(k)}k();const u=document.createElement("div");u.className="mouse-glow";document.body.appendChild(u);window.addEventListener("mousemove",a=>{u.style.left=`${a.clientX}px`,u.style.top=`${a.clientY}px`});const v=document.getElementById("hero-cli-bg-left"),f=document.getElementById("hero-cli-bg-right");if(v||f){let s=function(){const n=Math.random()>.5?v:f;if(!n){setTimeout(s,500);return}const t=document.createElement("div");t.className="cli-line";const e=a[Math.floor(Math.random()*a.length)],l=e.startsWith("python")||e.startsWith("docker")||e.startsWith("kubectl")||e.startsWith("pip")||e.startsWith("git")||e.startsWith("aws")||e.startsWith("terraform")||e.startsWith("ansible")||e.startsWith("flake8");t.textContent=(l?"sunil@dev-sys:~$ ":"> ")+e,n.appendChild(t),n.childElementCount>25&&n.removeChild(n.firstChild);const m=Math.random()*1300+200;setTimeout(s,m)};var O=s;const a=["python manage.py runserver 0.0.0.0:8000","docker build -t sunil/money-manager:v1.0 .","docker-compose up -d --build","kubectl apply -f k8s/deployment.yaml","kubectl get pods -n production","pip install -r requirements.txt","python -m pytest --cov=. --cov-report=term","git push origin main && gh pr create","aws s3 sync ./static s3://prod-assets/","aws lambda update-function-code --function-name ops-bot","terraform plan -out=infra.tfplan","ansible-playbook deploy.yml -i inventory","Starting Django server on port 8000...","System check passed. 0 issues found.","Connected to PostgreSQL on port 5432.","Redis cache synchronized.","Datadog agent reporting OK.","Kibana dashboard refreshed.","CloudWatch alarm configured.","GitHub Actions workflow passed ✓","flake8 lint check passed.","Coverage: 99% (38 tests passed)","Docker image pushed to registry.","Nginx reverse proxy configured.","Gunicorn workers: 4 active.","Done in 2.34s."];setTimeout(s,500),setTimeout(s,800)}
