// ===================================================================
// ICONS (inline SVG strings, mirroring lucide-react icons used in app)
// ===================================================================
const ICONS = {
  brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l1.9 5.8L19.6 10l-5.7 1.2L12 17l-1.9-5.8L4.4 10l5.7-1.2z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  droplets: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A18.1 18.1 0 0 1 17 4c0 5.95-4 10.6-4 14a4 4 0 1 1-8 0c0-1.34.5-2.62 1.3-3.81"/></svg>',
  trending: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 21h8M12 17v4M7 4h10v6a5 5 0 0 1-10 0V4z"/><path d="M17 4h3a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4M7 4H4a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4"/></svg>',
  waves: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.5 0 2.5 2 5 2s2.5-2 5-2c1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  externalLink: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  fileText: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  messageSquare: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  xCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  feather: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>',
  cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
  barChart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
};

const projectIcon = (p) => {
  if (p.category === 'ml') return ICONS.brain;
  if (p.category === 'creative') return ICONS.palette;
  return ICONS.code;
};
const blogIcon = (cat) => {
  if (cat === 'Tech') return ICONS.barChart;
  if (cat === 'Creative') return ICONS.feather;
  if (cat === 'AI/ML') return ICONS.brain;
  return ICONS.fileText;
};

// ===================================================================
// SIMPLE MARKDOWN -> HTML CONVERTER (headings, bold, lists, code blocks, links, paragraphs)
// ===================================================================
function renderMarkdown(md) {
  if (!md) return '';
  let html = md;

  // Code blocks first (to protect content from other replacements)
  const codeBlocks = [];
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (m, lang, code) => {
    codeBlocks.push(`<pre><code>${escapeHtml(code.trim())}</code></pre>`);
    return `@@CODEBLOCK${codeBlocks.length - 1}@@`;
  });

  // Headings
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Lists (consecutive lines starting with -)
  html = html.replace(/(^|\n)((?:- .*(?:\n|$))+)/g, (m, pre, block) => {
    const items = block.trim().split('\n').map(l => `<li>${l.replace(/^- /, '')}</li>`).join('');
    return `${pre}<ul>${items}</ul>`;
  });

  // Split into paragraphs by blank lines, skip lines that are already block elements
  const lines = html.split('\n');
  const out = [];
  let buffer = [];
  const flush = () => {
    if (buffer.length) {
      const text = buffer.join(' ').trim();
      if (text) out.push(`<p>${text}</p>`);
      buffer = [];
    }
  };
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) { flush(); continue; }
    if (/^<(h1|h2|h3|ul|pre|div|@@CODEBLOCK)/.test(trimmed) || /^@@CODEBLOCK\d+@@$/.test(trimmed)) {
      flush();
      out.push(trimmed);
    } else {
      buffer.push(trimmed);
    }
  }
  flush();
  html = out.join('\n');

  // Restore code blocks
  html = html.replace(/@@CODEBLOCK(\d+)@@/g, (m, i) => codeBlocks[parseInt(i)]);

  return html;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ===================================================================
// ROUTING
// ===================================================================
let currentProjectId = null;
let currentBlogId = null;

function showPage(pageId, opts = {}) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) target.classList.add('active');

  // nav active states
  document.querySelectorAll('.nav-links a, #mobile-nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === pageId);
  });

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  if (pageId === 'project-detail' && opts.projectId) {
    currentProjectId = opts.projectId;
    renderProjectDetail(opts.projectId);
  }
  if (pageId === 'blog-detail' && opts.blogId) {
    currentBlogId = opts.blogId;
    renderBlogDetail(opts.blogId);
  }
}

function setupNavigation() {
  document.body.addEventListener('click', (e) => {
    const link = e.target.closest('[data-page]');
    if (!link) return;
    e.preventDefault();
    const page = link.dataset.page;
    closeMobileNav();
    showPage(page);
  });

  // hamburger
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobile-nav').classList.add('open');
  });
  document.getElementById('mobile-close').addEventListener('click', closeMobileNav);

  document.getElementById('backToProjects').addEventListener('click', () => showPage('projects'));
  document.getElementById('backToBlog').addEventListener('click', () => showPage('blog'));

  // navbar scroll shadow (kept subtle, optional)
  window.addEventListener('scroll', () => {
    // placeholder for parity with original "scrolled" state; no visual change needed
  });
}

function closeMobileNav() {
  document.getElementById('mobile-nav').classList.remove('open');
}

// ===================================================================
// HOME PAGE
// ===================================================================
const homeLetters = [
  { char: 'M', icon: ICONS.brain, tooltip: 'Machine Learning', desc: 'Neural networks firing in digital synapses' },
  { char: 'A', icon: ICONS.sparkles, tooltip: 'Art + Growth', desc: 'Creativity blooming in infinite dimensions' },
  { char: 'H', icon: ICONS.heart, tooltip: 'Heart', desc: 'Passion pulsing through every line of code' },
  { char: 'L', icon: ICONS.zap, tooltip: 'Late-night Coder', desc: 'Lightning strikes at 3 AM breakthroughs' },
  { char: 'E', icon: ICONS.droplets, tooltip: 'Emotions', desc: 'Empathy flowing through technology' },
  { char: 'T', icon: ICONS.trending, tooltip: 'Tenacity', desc: 'Climbing mountains of impossible problems' },
];

function renderHome() {
  const container = document.getElementById('nameLetters');
  container.innerHTML = homeLetters.map(l => `
    <div class="letter-wrapper">
      <div class="letter-char">${l.char}</div>
      <div class="letter-icon">${l.icon}</div>
      <div class="letter-tooltip">
        <strong>${l.tooltip}</strong>
        <span>${l.desc}</span>
      </div>
    </div>
  `).join('');
}

// ===================================================================
// ABOUT PAGE
// ===================================================================
const courses = [
  'Quantum Computing', 'Data Structures', 'Algorithms', 'Computer Systems Organization',
  'Calculus', 'Multivariable Calculus', 'Linear Algebra', 'Human Centered Data Science',
  'Cyber Security', 'Applied Data Science', 'Software Engineering', 'Statistics and Probability',
  'Applied Machine Learning', 'Technology and Economical Development', 'Microeconomics',
  'Science of Complexity', 'Game Theory'
];

const techSkills = [
  { name: 'Machine Learning', level: 5 },
  { name: 'Python/C++', level: 5 },
  { name: 'Web Development', level: 4 },
  { name: 'Data Science', level: 4 },
  { name: 'Cloud Computing', level: 4 },
];

const techTimeline = [
  {
    year: '2025',
    items: [
      { title: 'Research Assistant – Computational Biology & Bioinformatics Lab', logo: 'assets/Computational Biology.png', location: 'NYU Abu Dhabi', date: 'Mar 2025 – Present', description: 'Working on a diagnostic tool for Multiple Sclerosis by combining brain MRI scans and gut microbiome data. Built custom neural networks for these data types and used explainability tools to better understand the results.' },
    ]
  },
  {
    year: '2024',
    items: [
      { title: 'Research Assistant – Clinical AI Lab (MedCAM)', logo: 'assets/CAI.jpg', location: 'NYU Abu Dhabi', date: 'Nov 2024 – Present', description: 'Helped develop MedCAM, a model that combines chest X-rays with electronic health records. Tested it on large clinical datasets for tasks like classification, segmentation, and detecting unusual cases.' },
      { title: 'Research Assistant – Cleveland Clinic Abu Dhabi', logo: 'assets/Cleveland.png', location: 'Abu Dhabi', date: 'Feb 2024 – Nov 2024', description: "Created machine learning pipelines to analyze MRI data from Parkinson's patients. Used tools for brain imaging and tracking connections to better understand brain structure changes." },
      { title: 'Software Engineer – LETSRISE Enterprise / Hub71', logo: 'assets/letsrise_logo.jpeg', location: 'Abu Dhabi', date: 'May 2024 – Oct 2024', description: 'Built a full-stack web app with Flask, Vue.js, and PostgreSQL. Developed secure APIs, live data visualizations, and a system to match identities to help entrepreneurs collaborate.' },
      { title: 'Data Analyst – Teaching, Learning & Development Lab', logo: 'assets/TLD.jpg', location: 'NYU Abu Dhabi', date: 'Jan 2024 – Present', description: 'Analyzed early childhood development data using Python and R. Created surveys and visualized results to support parenting programs.' },
      { title: 'Microsoft Learn Student Ambassador', logo: 'assets/Microsoft.png', location: 'Remote', date: 'Dec 2023 – May 2024', description: 'Ran over 10 workshops on cloud computing, DevOps, and AI/ML with Azure. Built demo apps and tools for outreach.' },
    ]
  },
  {
    year: '2023',
    items: [
      { title: 'AI & Web Instructor – Faris Technology Institute', logo: 'assets/faris.png', location: 'Addis Ababa', date: 'Jun 2023 – Dec 2023', description: 'Taught full-stack web development and Python for AI to 100+ students. Developed a social entrepreneurship platform in three languages.' },
    ]
  }
];

const creativeExperience = [
  { title: 'Project Manager – Student Success & Well-Being', location: 'NYU Abu Dhabi', date: 'Jan 2023 – Present', description: 'Led visual campaigns and events for mental health. Created event photos, murals, and videos to bring the community together.' },
  { title: 'Photographer & Video Editor – Gazelle News Media', location: 'Abu Dhabi', date: 'Jan 2023 – Aug 2023', description: 'Captured and edited photos and videos for student news stories and documentaries.' },
  { title: 'Design Intern – Sheikh Mohamed bin Zayed Scholars Program', location: 'NYU Abu Dhabi', date: 'Sep 2023 – Dec 2023', description: "Designed NYUAD's first interactive digital yearbook for the Summer Academy. Automated workflows and created recruitment materials." },
  { title: 'Educational Media Producer – Arab Crossroads Studies', location: 'Abu Dhabi', date: 'Feb 2023 – Mar 2023', description: 'Managed the program website, made newsletters, and promoted educational programs.' },
  { title: 'Creative Marketing Intern – ZYWA', location: 'Dubai', date: 'Feb 2023 – Mar 2023', description: 'Ran campaigns that boosted brand awareness by 15%. Produced social media and offline event content.' },
  { title: 'Digital Marketing Intern – StudentsEra', location: 'Remote', date: 'Mar 2023 – Mar 2025', description: 'Handled digital content, grew social media engagement by 20%, and helped run successful email campaigns.' },
];

const creativePrinciples = [
  { text: 'Human-centered design thinking', color: '#9D4EDD' },
  { text: 'Emotional intelligence in UX', color: '#4ECDC4' },
  { text: 'Accessibility and inclusion', color: '#FF6B6B' },
  { text: 'Storytelling through data', color: '#FFD23F' },
];

const athleticAchievements = [
  { sport: 'Dragon Boat Racing', role: 'Team Member', description: 'Competing in regional championships with NYUAD Dragon Boat team', icon: ICONS.waves, stats: { competitions: 8, medals: 3, teamSize: 20 } },
  { sport: 'Swimming', role: 'Teaching Assistant', description: 'Mentoring students in competitive swimming techniques', icon: ICONS.target, stats: { studentsHelped: 50, techniques: 12, sessions: 100 } },
  { sport: 'Football', role: 'Team Player', description: 'Active member of NYUAD Football team', icon: ICONS.trophy, stats: { matches: 25, goals: 7, assists: 12 } },
];

const athleticValues = [
  { text: 'Discipline & Consistency', description: 'Daily training routines translate to consistent coding practices', color: '#FFD23F' },
  { text: 'Team Collaboration', description: 'Understanding how individual contributions create collective success', color: '#FF6B6B' },
  { text: 'Performance Under Pressure', description: 'Thriving in high-stakes competitions and tight project deadlines', color: '#4ECDC4' },
  { text: 'Continuous Improvement', description: 'Always analyzing performance to optimize and push boundaries', color: '#9D4EDD' },
];

function renderAbout() {
  // Course tags
  document.getElementById('courseTags').innerHTML = courses.map(c => `<span class="tag">${c}</span>`).join('');

  // Timeline
  document.getElementById('techTimeline').innerHTML = techTimeline.map(group => `
    <div class="timeline-group">
      <div class="timeline-year"><span>${group.year}</span></div>
      ${group.items.map(item => `
        <div class="timeline-item">
          <div class="timeline-item-inner">
            <div class="timeline-card">
              <div class="timeline-card-header">
                <img src="${item.logo}" alt="${item.title} logo" class="timeline-logo" />
                <div class="timeline-info">
                  <h3>${item.title}</h3>
                  <p class="location">${item.location}</p>
                  <p>${item.description}</p>
                </div>
              </div>
              <p class="timeline-date">${item.date}</p>
            </div>
          </div>
          <div class="timeline-dot"></div>
        </div>
      `).join('')}
    </div>
  `).join('');

  // Skill bars
  document.getElementById('skillBars').innerHTML = techSkills.map(s => `
    <div class="skill-row">
      <span class="skill-name">${s.name}</span>
      <span class="skill-stars">${'★'.repeat(s.level)}${'☆'.repeat(5 - s.level)}</span>
    </div>
  `).join('');

  // Creative items
  document.getElementById('creativeItems').innerHTML = creativeExperience.map(item => `
    <div class="creative-item">
      <h4>${item.title}</h4>
      <p class="loc">${item.location}</p>
      <p>${item.description}</p>
      <p class="cdate">${item.date}</p>
    </div>
  `).join('');

  // Philosophy principles
  document.getElementById('philosophyPrinciples').innerHTML = creativePrinciples.map(p => `
    <div class="principle-row">
      <div class="principle-dot" style="background:${p.color}"></div>
      <span>${p.text}</span>
    </div>
  `).join('');

  // Athletic
  document.getElementById('sportsGrid').innerHTML = athleticAchievements.map(a => `
    <div class="sport-card">
      ${a.icon}
      <h4>${a.sport}</h4>
      <p class="role">${a.role}</p>
      <p>${a.description}</p>
      <div class="sport-stats">
        ${Object.entries(a.stats).map(([k, v]) => `
          <div>
            <span class="sport-stat-val" style="color:var(--oxford-700)">${v}</span>
            <span class="sport-stat-key">${k}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  document.getElementById('valuesGrid').innerHTML = athleticValues.map(v => `
    <div class="value-row">
      <div class="value-dot" style="background:${v.color}"></div>
      <div>
        <h4>${v.text}</h4>
        <p>${v.description}</p>
      </div>
    </div>
  `).join('');

  // Tabs
  document.querySelectorAll('#aboutTabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#aboutTabs .tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.dataset.tab;
      document.querySelectorAll('.about-tab-content').forEach(c => c.classList.remove('active'));
      document.getElementById(`tab-${tab}`).classList.add('active');
    });
  });
}

// ===================================================================
// PROJECTS PAGE
// ===================================================================
let activeProjectFilter = 'all';

function renderProjectFilters() {
  const container = document.getElementById('projectFilters');
  container.innerHTML = projectFilters.map(f => `
    <button class="tab-btn ${f.id === activeProjectFilter ? 'active' : ''}" data-filter="${f.id}">
      ${f.id === 'all' ? ICONS.globe : f.id === 'ml' ? ICONS.brain : f.id === 'software' ? ICONS.code : ICONS.palette}
      <span>${f.label}</span>
    </button>
  `).join('');

  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeProjectFilter = btn.dataset.filter;
      renderProjectFilters();
      renderProjectsGrid();
    });
  });
}

function renderProjectsGrid() {
  const filtered = activeProjectFilter === 'all' ? projects : projects.filter(p => p.category === activeProjectFilter);
  const grid = document.getElementById('projectsGrid');

  grid.innerHTML = filtered.map(p => `
    <div class="project-card-wrap">
      <div class="project-card" data-project-id="${p.id}">
        <div class="project-bg" style="background-image:url('${p.imageUrl}')"></div>
        <div class="project-overlay">
          <div class="project-overlay-inner">
            <h4>${p.title}</h4>
            <p>${p.description}</p>
            <div class="project-overlay-tags">
              <span>${p.category}</span>
              ${(p.technologies || []).slice(0, 2).map(t => `<span>${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
      <div class="project-meta">
        <h3 class="project-title" title="${p.title}">${p.title}</h3>
        <div class="project-actions">
          <button class="read-more-btn" data-project-id="${p.id}">Read More</button>
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="icon-link">${ICONS.github}</a>` : ''}
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="icon-link">${ICONS.externalLink}</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('[data-project-id]').forEach(el => {
    el.addEventListener('click', (e) => {
      // avoid triggering when clicking on github/demo links
      if (e.target.closest('a')) return;
      const id = parseInt(el.dataset.projectId);
      showPage('project-detail', { projectId: id });
    });
  });
}

function renderProjectDetail(id) {
  const project = projects.find(p => p.id === id);
  const container = document.getElementById('projectDetailInner');
  if (!project) {
    container.innerHTML = `<h1 style="text-align:center;font-size:2rem">Project not found</h1>`;
    return;
  }

  let bodyHtml;
  if (project.storyKey && stories[project.storyKey]) {
    bodyHtml = `<div class="story-prose">${stories[project.storyKey]}</div>`;
  } else {
    bodyHtml = renderMarkdown(project.detailedDescription || '');
  }

  let gdriveHtml = '';
  if (project.hasGDrive) {
    gdriveHtml = `
      <a href="https://drive.google.com/file/d/15-jbV9KA9-xIa_DefHYw010WY9Gaac5q/view?usp=sharing" target="_blank" rel="noopener" class="gdrive-card">
        ${ICONS.fileText}
        <div>
          <h4>View Project Details</h4>
          <p>Click to open the full project document in Google Drive.</p>
        </div>
      </a>
    `;
  }

  let paperHtml = '';
  if (project.paper) {
    paperHtml = `
      <a href="${project.paper.url}" target="_blank" rel="noopener" class="paper-badge">
        <span class="ieee-mark">IEEE</span>
        <span>${project.paper.label}</span>
      </a>
    `;
  }

  container.innerHTML = `
    <div class="detail-hero">
      <img src="${project.imageUrl}" alt="${project.title}" />
      <div class="detail-hero-gradient"></div>
      <div class="detail-hero-text">
        <h1>${project.title}</h1>
        <h2>${project.subtitle}</h2>
      </div>
    </div>

    <div class="detail-body">
      ${paperHtml}
      ${bodyHtml}
      ${gdriveHtml}
    </div>

    <div class="detail-tech">
      <h3>Technologies Used</h3>
      <div class="detail-tech-tags">
        ${(project.technologies || []).map(t => `<span>${t}</span>`).join('')}
      </div>
    </div>

    <div class="detail-links">
      ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener">${ICONS.github}<span>GitHub</span></a>` : ''}
      ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener">${ICONS.externalLink}<span>Live Demo</span></a>` : ''}
    </div>
  `;

  // Fire any registered interactive widgets for this project (architecture
  // diagrams, training graveyards, etc) now that the DOM nodes exist.
  if (typeof projectWidgets !== 'undefined' && projectWidgets[id]) {
    projectWidgets[id]();
  }
}

// ===================================================================
// BLOG PAGE
// ===================================================================
let activeBlogFilter = 'all';

function renderBlogFilters() {
  const container = document.getElementById('blogFilters');
  container.innerHTML = blogFilters.map(f => `
    <button class="tab-btn ${f.id === activeBlogFilter ? 'active' : ''}" data-filter="${f.id}">
      ${f.id !== 'all' ? blogIcon(f.id) : ''}
      <span>${f.label}</span>
    </button>
  `).join('');

  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeBlogFilter = btn.dataset.filter;
      renderBlogFilters();
      renderBlogList();
    });
  });
}

function renderBlogList() {
  const filtered = activeBlogFilter === 'all' ? blogPosts : blogPosts.filter(p => p.category === activeBlogFilter);
  const list = document.getElementById('blogList');

  if (filtered.length === 0) {
    list.innerHTML = `<div style="text-align:center;padding:3rem 0"><p style="color:var(--ink-700);font-size:1.1rem">No blog posts found.</p></div>`;
    return;
  }

  list.innerHTML = filtered.map(post => {
    const excerptHtml = renderMarkdown(post.content).replace(/<[^>]+>/g, ' ').trim().substring(0, 200) + '...';
    return `
    <div class="blog-card">
      <div class="blog-card-header">
        <div class="blog-icon-wrap">${blogIcon(post.category)}</div>
        <div class="blog-card-title">
          <h2>${post.title}</h2>
          <div class="blog-card-date">${ICONS.calendar}<span>${post.date}</span></div>
        </div>
      </div>
      <p class="blog-excerpt">${excerptHtml}</p>
      <button class="blog-read-more" data-blog-id="${post.id}">
        <span>Read More</span>${ICONS.arrowRight}
      </button>
    </div>
  `;
  }).join('');

  list.querySelectorAll('[data-blog-id]').forEach(el => {
    el.addEventListener('click', () => {
      const id = parseInt(el.dataset.blogId);
      showPage('blog-detail', { blogId: id });
    });
  });
}

function renderBlogDetail(id) {
  const post = blogPosts.find(p => p.id === id);
  const container = document.getElementById('blogDetailInner');
  if (!post) {
    container.innerHTML = `
      <div style="text-align:center;padding:4rem 0">
        <h1 style="font-size:2rem;margin-bottom:1rem">Blog post not found</h1>
        <p style="color:var(--ink-700);margin-bottom:2rem">The post you're looking for doesn't exist.</p>
        <button class="btn-primary" onclick="showPage('blog')">Back to Blog</button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="blog-detail-header">
      <h1>${post.title}</h1>
      <div class="blog-detail-meta">
        <span>${post.date}</span>
        <span>•</span>
        <span class="cat-badge">${post.category}</span>
      </div>
    </div>
    <div class="blog-detail-img">
      <img src="${post.imageUrl}" alt="${post.title}" />
    </div>
    <article class="blog-detail-body">
      ${renderMarkdown(post.content)}
    </article>
  `;
}

function setupNewsletter() {
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('newsletterEmail');
  const msgBox = document.getElementById('newsletterMsg');
  const btn = document.getElementById('newsletterBtn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email || !email.includes('@')) {
      msgBox.style.display = 'flex';
      msgBox.className = 'newsletter-msg error';
      msgBox.innerHTML = `${ICONS.xCircle}<span>Please enter a valid email address.</span>`;
      setTimeout(() => { msgBox.style.display = 'none'; }, 3000);
      return;
    }

    btn.disabled = true;
    btn.innerHTML = `<span class="spinner"></span> Subscribing...`;
    emailInput.disabled = true;

    await new Promise(r => setTimeout(r, 1500));

    msgBox.style.display = 'flex';
    msgBox.className = 'newsletter-msg success';
    msgBox.innerHTML = `${ICONS.checkCircle}<span>Thanks for subscribing! You're on the list.</span>`;
    emailInput.value = '';

    btn.disabled = false;
    btn.innerHTML = `${ICONS.checkCircle} Success!`;

    setTimeout(() => {
      msgBox.style.display = 'none';
      btn.innerHTML = `${ICONS.externalLink ? '' : ''}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Subscribe`;
      emailInput.disabled = false;
    }, 5000);
  });
}

// ===================================================================
// CONTACT PAGE
// ===================================================================
function setupContactForm() {
  const form = document.getElementById('contactForm');
  const formWrap = document.getElementById('contactFormWrap');
  const successBox = document.getElementById('contactSuccess');
  const submitBtn = document.getElementById('contactSubmitBtn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner"></span> Sending...`;

    await new Promise(r => setTimeout(r, 1200));

    formWrap.style.display = 'none';
    successBox.style.display = 'block';

    setTimeout(() => {
      formWrap.style.display = 'block';
      successBox.style.display = 'none';
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message`;
    }, 5000);
  });
}

// ===================================================================
// SPINNER STYLE (injected once)
// ===================================================================
const spinnerStyle = document.createElement('style');
spinnerStyle.textContent = `
.spinner {
  display: inline-block;
  width: 16px; height: 16px;
  border: 2px solid rgba(255,255,255,0.4);
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  margin-right: 0.4rem;
  vertical-align: middle;
}
`;
document.head.appendChild(spinnerStyle);

// ===================================================================
// INIT
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  renderHome();
  renderAbout();
  renderProjectFilters();
  renderProjectsGrid();
  renderBlogFilters();
  renderBlogList();
  setupNewsletter();
  setupContactForm();
});
