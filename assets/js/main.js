const portfolioData = {
  heroTags: ["Python", "Generative AI", "ML Systems", "Full Stack"],
  heroStats: [
    {
      value: "3+ years",
      label: "building AI, analytics, and software systems",
    },
    {
      value: "7 projects",
      label: "featured across agents, NLP, cloud AI, and full stack",
    },
    {
      value: "OMSCS",
      label: "Georgia Tech M.S. in Computer Science, expected 2027",
    },
    {
      value: "Dean's Honour Roll",
      label: "University of Alberta BCompSci, completed April 2025",
    },
  ],
  skills: [
    {
      title: "AI / ML",
      icon: "ri-brain-line",
      items: [
        "Python",
        "PyTorch",
        "TensorFlow",
        "Transformers",
        "NLTK",
        "MLflow",
        "RAG",
        "Prompt Engineering",
        "LangChain",
        "Vertex AI Agent Builder",
        "AWS Bedrock",
      ],
    },
    {
      title: "Cloud / DevOps",
      icon: "ri-cloud-line",
      items: ["Docker", "Kubernetes", "CI/CD", "GCP Vertex AI", "AWS Lambda"],
    },
    {
      title: "Software",
      icon: "ri-code-s-slash-line",
      items: ["JavaScript", "Java", "SQL", "Node.js", "Next.js", "React", "Django", "REST APIs"],
    },
    {
      title: "Data / Analytics",
      icon: "ri-bar-chart-box-line",
      items: ["SQL", "Dashboards", "KPI Design", "Data Pipelines", "Experimentation", "Simulation"],
    },
  ],
  experience: [
    {
      dates: "Aug 2025 - Present",
      role: "Method Analyst",
      organization: "City of Edmonton",
      summary:
        "Built analytics pipelines with Python and SQL, designed dashboards, defined KPIs with stakeholders, and translated operational needs into analytics solutions.",
    },
    {
      dates: "Nov 2024 - Apr 2025",
      role: "Software Developer - ML",
      organization: "Alberta Machine Intelligence Institute",
      summary:
        "Developed an enterprise ML feature store, built modular multi-agent systems with Vertex AI Agent Builder and LangChain, and supported LLM deployment across backend APIs and applications.",
    },
    {
      dates: "Mar 2025 - Jul 2025",
      role: "Project Validator",
      organization: "Alberta Machine Intelligence Institute",
      summary:
        "Evaluated ML and LLM use cases, assessed feasibility, and designed standardized scoring frameworks for risk, value, and implementation readiness.",
    },
    {
      dates: "Apr 2024 - Aug 2024",
      role: "ML Research Intern / Research Assistant",
      organization: "Alberta Machine Intelligence Institute / University of Alberta",
      summary:
        "Built a computerized adaptive testing system, processed 457-patient data, simulated response flows, and evaluated model behavior with Python-based experimentation.",
    },
  ],
  projects: [
    {
      title: "Pathfinder V3",
      image: "assets/img/portfolio/pathfinder-v3-cover.png",
      alt: "Project cover for Pathfinder V3",
      summary: "A platform connecting youth with training and job opportunities.",
      highlights: "Highlights REST APIs, Dockerized deployment, CI/CD workflows, and Cypress end-to-end testing.",
      tech: ["React", "Next.js", "Django", "Docker", "Cypress"],
    },
    {
      title: "Hugging Face Transformer Fine-Tuning & Deployment",
      image: "assets/img/portfolio/hf-finetuning-cover.png",
      alt: "Project cover for Hugging Face Transformer Fine-Tuning and Deployment",
      summary: "Fine-tuned DistilBERT with custom tokenizers, dataset pipelines, and reproducible deployment.",
      highlights: "Shows transformer training, tokenizer and dataset handling, and TorchServe plus Docker deployment.",
      tech: ["Python", "Transformers", "Gradio", "TorchServe", "Docker"],
    },
    {
      title: "Multi-Agent System Movie Pitch Generator",
      image: "assets/img/portfolio/movie-pitch-generator-cover.png",
      alt: "Project cover for Multi-Agent System Movie Pitch Generator",
      summary: "Hierarchical agents with routing, shared memory, and orchestration.",
      highlights: "Focuses on dynamic task routing, collaborative agent behavior, and multi-agent coordination patterns.",
      tech: ["Vertex AI", "LangChain", "Python", "ADK"],
    },
    {
      title: "Transcript Summarization Agent",
      image: "assets/img/portfolio/transcript-agent-cover.png",
      alt: "Project cover for Transcript Summarization Agent",
      summary: "Managed GenAI summarization agent deployed on Vertex AI Agent Engine.",
      highlights: "Emphasizes LangGraph orchestration, operational lifecycle automation, and cloud-based deployment.",
      tech: ["GCP", "LangGraph", "Python", "Agent Engine"],
    },
    {
      title: "Restaurant Chatbot System",
      image: "assets/img/portfolio/restaurant-chatbot-cover.png",
      alt: "Project cover for Restaurant Chatbot System",
      summary: "RAG-enabled chatbot with real-time customer interaction on a cloud-backed stack.",
      highlights: "Combines AWS Bedrock, Lambda, and DynamoDB to support grounded responses and retrieval-driven behavior.",
      tech: ["AWS Bedrock", "Python", "Lambda", "DynamoDB"],
    },
    {
      title: "N-gram Language Model",
      image: "assets/img/portfolio/ngram-language-model-cover.png",
      alt: "Project cover for N-gram Language Model",
      summary: "Built and evaluated unigram, bigram, and trigram models with smoothing.",
      highlights: "Centers on classical NLP fundamentals including perplexity evaluation and model comparison.",
      tech: ["Python", "NLTK", "NLP", "Perplexity"],
    },
    {
      title: "Stock Price Predictor",
      image: "assets/img/portfolio/stock-predictor-cover.png",
      alt: "Project cover for Stock Price Predictor",
      summary: "CNN-based forecasting pipeline on large-scale market data.",
      highlights: "Includes TensorFlow modeling, Django-backed delivery, and Apache Spark preprocessing.",
      tech: ["Python", "TensorFlow", "Django", "Spark"],
    },
  ],
  education: [
    {
      school: "Georgia Institute of Technology (OMSCS)",
      degree: "Master of Science in Computer Science",
      date: "Expected 2027",
    },
    {
      school: "University of Alberta",
      degree: "Bachelor of Computer Science, minor in Business, Dean's Honour Roll",
      date: "Completed April 2025",
    },
  ],
};

const heroTagsEl = document.getElementById("hero-tags");
const heroStatsEl = document.getElementById("hero-stats");
const skillsGridEl = document.getElementById("skills-grid");
const experienceListEl = document.getElementById("experience-list");
const projectsGridEl = document.getElementById("projects-grid");
const educationListEl = document.getElementById("education-list");
const header = document.getElementById("header");
const navMenu = document.getElementById("nav-menu");
const navToggleButton = document.querySelector(".nav__toggle");
const navToggleIcon = document.getElementById("nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function renderHero() {
  heroTagsEl.innerHTML = portfolioData.heroTags
    .map((tag) => `<li class="hero__tag">${tag}</li>`)
    .join("");

  heroStatsEl.innerHTML = portfolioData.heroStats
    .map(
      (item) => `
        <article class="stat-card">
          <span class="stat-card__value">${item.value}</span>
          <span class="stat-card__label">${item.label}</span>
        </article>
      `
    )
    .join("");
}

function renderSkills() {
  skillsGridEl.innerHTML = portfolioData.skills
    .map(
      (skill) => `
        <article class="panel skill-card reveal">
          <div class="skill-card__header">
            <div class="skill-card__icon">
              <i class="${skill.icon}" aria-hidden="true"></i>
            </div>
            <h3 class="skill-card__title">${skill.title}</h3>
          </div>
          <ul class="skill-card__list">
            ${skill.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderExperience() {
  experienceListEl.innerHTML = portfolioData.experience
    .map(
      (item) => `
        <article class="panel timeline__item reveal">
          <div class="timeline__meta">
            <span class="timeline__date">${item.dates}</span>
            <span class="timeline__org">${item.organization}</span>
          </div>
          <h3 class="timeline__role">${item.role}</h3>
          <p class="timeline__description">${item.summary}</p>
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  projectsGridEl.innerHTML = portfolioData.projects
    .map((project, index) => {
      const featuredClass = index === 0 ? " project-card--featured" : "";
      const eyebrow = index === 0 ? "Flagship build" : "Selected build";

      return `
        <article class="panel project-card reveal${featuredClass}">
          <div class="project-card__media">
            <img src="${project.image}" alt="${project.alt}" loading="lazy" decoding="async">
          </div>
          <div class="project-card__body">
            <span class="project-card__eyebrow">${eyebrow}</span>
            <h3 class="project-card__title">${project.title}</h3>
            <p class="project-card__summary">${project.summary}</p>
            <p class="project-card__highlights">${project.highlights}</p>
            <ul class="project-card__tags">
              ${project.tech.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderEducation() {
  educationListEl.innerHTML = portfolioData.education
    .map(
      (item) => `
        <article class="education__item">
          <h3>${item.school}</h3>
          <p>${item.degree}</p>
          <span class="education__date">${item.date}</span>
        </article>
      `
    )
    .join("");
}

function setMenuState(isOpen) {
  navMenu.classList.toggle("nav__menu--open", isOpen);
  navToggleButton.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);

  if (isOpen) {
    navToggleIcon.classList.remove("ri-menu-3-line");
    navToggleIcon.classList.add("ri-close-line");
  } else {
    navToggleIcon.classList.remove("ri-close-line");
    navToggleIcon.classList.add("ri-menu-3-line");
  }
}

function updateHeaderState() {
  header.classList.toggle("header--scroll", window.scrollY > 16);
}

function updateActiveNav() {
  const headerOffset = header.offsetHeight + 80;
  const sections = [...document.querySelectorAll("main section[id]")];

  let activeId = sections[0]?.id;

  sections.forEach((section) => {
    const top = section.offsetTop - headerOffset;
    const bottom = top + section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < bottom) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeId}`;
    link.classList.toggle("nav__link--active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");

  if (reduceMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, revealObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initTilt() {
  if (reduceMotion) {
    return;
  }

  const tiltCard = document.querySelector("[data-tilt]");

  if (!tiltCard || !window.matchMedia("(pointer: fine)").matches) {
    return;
  }

  tiltCard.addEventListener("pointermove", (event) => {
    const rect = tiltCard.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * 8;
    const rotateY = (x - 0.5) * 10;

    tiltCard.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  tiltCard.addEventListener("pointerleave", () => {
    tiltCard.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  });
}

function initNavigation() {
  navToggleButton.addEventListener("click", () => {
    setMenuState(!navMenu.classList.contains("nav__menu--open"));
  });

  navLinks.forEach((item) => {
    item.addEventListener("click", () => {
      if (navMenu.classList.contains("nav__menu--open")) {
        setMenuState(false);
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960 && navMenu.classList.contains("nav__menu--open")) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navMenu.classList.contains("nav__menu--open")) {
      setMenuState(false);
    }
  });
}

function initPageMeta() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

renderHero();
renderSkills();
renderExperience();
renderProjects();
renderEducation();
initNavigation();
initReveal();
initTilt();
initPageMeta();
updateHeaderState();
updateActiveNav();

window.addEventListener("scroll", () => {
  updateHeaderState();
  updateActiveNav();
});
