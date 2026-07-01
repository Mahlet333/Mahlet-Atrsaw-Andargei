// ===== PROJECTS DATA (parsed directly from original projects.ts) =====
const projects = [
  {
    id: 1,
    title: 'Creative Portfolio',
    subtitle: 'Personal Website',
    category: 'software',
    imageUrl: 'assets/me.png',
    description: 'A modern, interactive portfolio website showcasing creative projects, research work, and professional experience with a sophisticated Oxford/Cambridge aesthetic.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsive Design', 'UI/UX'],
    github: 'https://github.com/Mahlet333/Mahlet_Portfolio_Creative',
    demo: 'https://mahlet333.github.io/Mahlet_Portfolio_Creative/',
    detailedDescription: `# Building My Digital Identity: A Portfolio That Speaks

This wasn't just another portfolio website. This was my digital handshake, my creative manifesto, my way of saying "Here's who I am, and here's what I can do" to the world. I built this from the ground up—no templates, no shortcuts, just pure code and creativity. Let me walk you through the journey of creating a portfolio that doesn't just showcase work, but tells a story.

## The Vision: More Than Just a Resume

I wanted something that felt like walking through an Oxford library—timeless, sophisticated, but warm. Not just a list of projects, but an experience that makes you want to linger. The aesthetic had to be Oxford/Cambridge meets modern web design. I imagined someone scrolling through my work and thinking, "This person gets it."

The challenge? Making it feel both professional and personal, technical and creative, structured but flowing. I wanted the navigation to feel intuitive, the animations to be smooth but not flashy, and the content to be comprehensive without overwhelming.

## Technical Architecture: Building the Foundation

I chose React with TypeScript for type safety and maintainability. The tech stack was deliberate:

\`\`\`typescript
// Project structure
src/
├── components/     // Reusable UI components
├── data/          // Project and blog data
├── assets/        // Images and static files
└── App.tsx        // Main application component
\`\`\`

The styling approach was Tailwind CSS for rapid development and consistent design:

\`\`\`css
/* Custom color palette inspired by Oxford/Cambridge */
:root {
  --velvet-500: #a0855f;
  --cambridge-500: #d67f2e;
  --parchment-500: #edb12e;
}
\`\`\`

## Component Design: Modular and Reusable

I built each section as a separate component, making the codebase maintainable and scalable. The project cards were particularly important:

\`\`\`typescript
interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: 'ml' | 'software' | 'creative';
  imageUrl: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  icon: LucideIcon;
  color: string;
  status: string;
  github?: string;
  demo?: string;
}
\`\`\`

The filtering system was crucial for organizing different types of work:

\`\`\`typescript
const filters = [
  { id: 'all', label: 'All Dimensions', icon: Globe },
  { id: 'ml', label: 'AI Research', icon: Brain },
  { id: 'software', label: 'Software', icon: Code },
  { id: 'creative', label: 'Creative', icon: Palette }
];
\`\`\`

## Responsive Design: Every Device Matters

Mobile-first design was non-negotiable. I used CSS Grid and Flexbox for layouts that adapt seamlessly:

\`\`\`css
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
}
\`\`\`

The navigation had to work perfectly on mobile:

\`\`\`typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};
\`\`\`

## Animation and Interaction: Subtle but Impactful

I wanted animations that enhance the experience without being distracting. Framer Motion provided the perfect balance:

\`\`\`typescript
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.02 }}
    className="project-card"
  >
    {/* Project content */}
  </motion.div>
);
\`\`\`

The hover effects were carefully tuned to feel responsive but not jarring.

## Content Management: Structured and Scalable

I organized all project data in TypeScript files for type safety and easy updates:

\`\`\`typescript
// src/data/projects.ts
export const projects: Project[] = [
  {
    id: 1,
    title: 'Creative Portfolio',
    subtitle: 'Personal Website',
    category: 'software',
    // ... other properties
  }
];
\`\`\`

This approach makes it easy to add new projects or update existing ones without touching the component code.

## Performance Optimization: Speed Matters

I implemented several optimizations to ensure fast loading:

\`\`\`typescript
// Lazy loading for images
const LazyImage = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="w-full h-48 object-cover"
  />
);

// Code splitting for routes
const ProjectDetail = lazy(() => import('./ProjectDetail'));
\`\`\`

The site loads in under 2 seconds on most connections, which is crucial for keeping visitors engaged.

## Accessibility: Everyone Should Be Welcome

I made accessibility a priority from day one:

\`\`\`typescript
// Proper ARIA labels
<button
  aria-label="Toggle navigation menu"
  onClick={toggleMenu}
  className="hamburger-button"
>
  <span className="sr-only">Menu</span>
</button>

// Semantic HTML structure
<main role="main">
  <section aria-labelledby="projects-heading">
    <h2 id="projects-heading">Projects</h2>
    {/* Project grid */}
  </section>
</main>
\`\`\`

## The Result: A Portfolio That Tells My Story

When I launched this portfolio, the feedback was incredible. People said it felt "professional but personal," "sophisticated but approachable." The Oxford/Cambridge aesthetic came through, and the technical implementation was solid.

The site successfully showcases my range—from AI research to creative projects to software development. Each project has its own detailed page with the same level of care and attention to detail.

## What's Next: Continuous Evolution

I'm constantly updating this portfolio with new projects and improvements. The modular architecture makes it easy to add new features or sections. I'm considering adding a blog section, more interactive elements, and perhaps even a dark mode toggle.

The beauty of building your own portfolio is that it's never really done—it evolves with you, your skills, and your experiences. This isn't just a website; it's a living document of my journey in tech and creativity.

## Key Takeaways

Building this portfolio taught me the importance of:
- **Consistent design systems** that scale
- **Performance optimization** for better user experience
- **Accessibility** as a fundamental requirement, not an afterthought
- **Modular architecture** for maintainability
- **Type safety** with TypeScript for fewer bugs

This project represents my approach to web development: thoughtful, well-structured, and user-centered. It's not just about the code—it's about creating experiences that matter.`
  },
  {
    id: 2,
    title: 'MedCAM',
    subtitle: 'Clinical AI Lab',
    category: 'ml',
    imageUrl: 'assets/MEDCAM.jpg',
    description: 'Developed a multimodal AI that integrates chest X-rays and electronic health records (EHR) to improve diagnostic accuracy, outperforming leading vision-language models.',
    technologies: ['PyTorch', 'Medical Vision-Language Models', 'EHR', 'Classification'],
    github: 'https://github.com',
    demo: 'https://example.com',
    detailedDescription: `## What the problem actually is

Single-modality medical AI is stupid in a very specific way. A chest X-ray shows you what's there, not what it means for *this* patient with *this* history. A language model reading EHR text can't see the opacification in the right lower lobe. MedCAM fuses both — not by naïve concatenation but through cross-modal attention that lets the visual features ask questions of the clinical text and get answers back.

<div id="medcam-arch" class="widget-block"></div>

## Architecture

\`\`\`
Chest X-ray (224×224)  ──►  BioViL-T Vision Encoder
                              patch embeddings → CLS + patch tokens

EHR Text               ──►  BioBERT Text Encoder
                              tokenized clinical notes → token embeddings

Cross-Modal Attention:
  Q = vision_CLS
  K, V = EHR token embeddings
  attended = softmax(QKᵀ / √d) · V   ← vision attends to text

Fused repr. ──► MLP classifier
             ──► Tasks: classification, segmentation, anomaly detection
\`\`\`

Tested on large clinical datasets from the Clinical AI Lab at NYU Abu Dhabi across three tasks: pathology classification, anatomical segmentation, and out-of-distribution anomaly detection. Outperformed standalone vision-language baselines (BioViL, MedCLIP) on all three.

<div id="medcam-graveyard" class="widget-block"></div>

## The non-obvious part

The EHR text is noisy in a specific way: clinical notes mix free-form prose, abbreviations, negations ("no pleural effusion"), and temporal references ("last week's CT showed..."). Standard BERT tokenization treats "no pleural effusion" and "pleural effusion" as similar. We fine-tuned the text encoder on negation-rich clinical language before fusion.

## What it handles

- **Classification** — multi-label pathology prediction (14 CheXpert labels)
- **Segmentation** — anatomical region localization with attention overlay
- **Anomaly detection** — out-of-distribution flagging for cases that don't fit learned normal patterns

## Status

Ongoing research position at the Clinical AI Lab, NYU Abu Dhabi. Results under review, not published yet — numbers withheld here for that reason, not because there are none.`
  },
  {
    id: 3,
    title: 'MS Diagnosis Pipeline',
    subtitle: 'Computational Biology & Bioinformatics Lab — NYU Abu Dhabi',
    category: 'ml',
    imageUrl: 'assets/MS.png',
    description: 'A non-invasive MS screening framework using gut microbiome (16S rRNA) and FLAIR MRI, published at IEEE BIBE. Vote ensemble hits 0.98 AUC on 65 CFS-selected OTUs; the same OTUs went from 0.505 AUC to 0.98 once I fixed a feature-selection leak everyone before me had.',
    technologies: ['Python', 'QIIME2', 'scikit-learn', 'WEKA', 'Correlation-based Feature Selection', '16S rRNA Sequencing', 'FLAIR MRI', 'Ensemble Learning', 'Bootstrap CI'],
    github: 'https://github.com/Mahlet333',
    paper: { label: 'Machine Learning Framework for Multiple Sclerosis Detection: Comparative Analysis of Gut Microbiome and Neuroimaging Biomarkers — Andargei & Oudah, IEEE BIBE', url: 'https://github.com/Mahlet333' },
    detailedDescription: `## Why MS, why now

MS diagnosis still runs on the 2017 McDonald criteria: get an MRI ($1,000–3,000 a scan), maybe a lumbar puncture (post-dural-puncture headache in 10–30% of patients), wait 1–3 years for confirmation while the disease keeps doing damage. I wanted to know if a stool sample and a routine FLAIR scan could get a useful signal out before any of that.

Two completely separate pipelines. Not fused — I'll get to why.

<div id="ms-arch" class="widget-block"></div>

## Pipeline 1 — gut microbiome (the leak I had to undo first)

GSE81279: 60 MS patients, 33 controls, 16S rRNA. SRA → FASTQ via SRA Toolkit, Q30 trim, QIIME2 closed-reference OTU clustering against GreenGenes 13_8 at 97% identity. That gives 9,491 OTUs for 88 samples after balancing.

9,491 features, 88 samples. Feature-to-sample ratio of 108:1. Throw any classifier at that raw and you get noise wearing a lab coat.

<div id="ms-baseline" class="widget-block"></div>

That's every classifier sitting at AUC ≈ 0.5 — a coin flip with extra steps. This is the part most prior work on this exact dataset gets wrong: **Hasic Telalovic (2020) ran feature selection on the full dataset before splitting into CV folds.** Test data leaks into the feature-selection step. Numbers look great, mean nothing.

<div id="ms-napkin" class="widget-block"></div>

Per-fold selection only. Every fold reselects its own 65 features from training data alone. Slower, uglier, correct.

<div id="ms-featuresel" class="widget-block"></div>

CFS wins because it explicitly penalizes redundant features instead of just ranking them by individual class correlation like Information Gain does. Going from 9,491 raw OTUs to 65 CFS-selected ones took AUC from 0.505 to 0.882 average across classifiers — before I even picked the final model.

<div id="ms-postcfs" class="widget-block"></div>

Final number: **Vote ensemble (SMO + Naive Bayes), 0.98 AUC, 95% CI [0.92–1.00], 92.86% accuracy.** Confusion matrix: TP=47, TN=31, FP=2, FN=4. I'm reporting the bootstrap CI on purpose — 88 samples means the CI is 0.08 units wide and pretending otherwise would be a lie of omission.

## What's actually driving the signal

Welch's t-test across the 65 selected OTUs, Bonferroni-corrected.

<div id="ms-foldchange" class="widget-block"></div>

*Prevotella copri* is functionally gone in MS patients — 33-fold depletion, p = 3.0×10⁻²². This isn't a novel finding by itself (Jangi 2016, Miyake 2015 both report it), but it shows up clean in my per-fold-correct pipeline too, which is the point: a methodologically sound pipeline should recover known biology, not just chase accuracy. *P. copri* is a primary propionate producer; lose it, lose anti-inflammatory short-chain fatty acid supply, lose Treg differentiation via HDAC inhibition. *Roseburia faecis* (butyrate producer, colonocyte fuel) down 2.2-fold. *Streptococcus* up 49-fold, no clean literature precedent — flagging that honestly rather than forcing a narrative onto it.

## Pipeline 2 — FLAIR MRI, but interpretable on purpose

Macin et al. (2022) dataset: 72 MS, 59 control, 2,822 images, sagittal view chosen specifically because the corpus callosum — a McDonald-criteria lesion site — is best visualized in midsagittal plane.

I deliberately did **not** chase the SOTA number here. Macin's own model hits 97.75% using opaque exemplar local-phase-quantization texture features — a black box. I extracted 30 features split 15 biological (corpus callosum lesion load/count, frontal/superior/inferior lesion fraction, anteroposterior ratio, infratentorial load — all things that map directly onto McDonald criteria) and 15 statistical (GLCM texture, intensity moments, Sobel/Laplacian edge stats).

<div id="ms-mri-stats" class="widget-block"></div>

Stacking ensemble (ExtraTrees + Naive Bayes base learners, Logistic Regression meta-learner): **0.93 AUC, 95% CI [0.91–0.95], 86.20% accuracy.** That's an 11.55-point accuracy gap below Macin's black box — and I'd take it every time, because a clinician can read "MS predicted due to frontal predominance (1.91×), CC involvement (1.77×), infratentorial lesions (1.48×)" and actually evaluate whether the model agrees with what they're seeing on the scan.

<div id="ms-mri-foldchange" class="widget-block"></div>

## Why I refused to compare the two modalities directly

I started this wanting one number: "microbiome vs MRI, which wins." That question is broken and I said so in the paper instead of hiding it.

- Microbiome data: USA population. MRI data: Turkey population. Different genetics, different environment.
- 88 subjects vs 1,522 images from 131 subjects — 17× sample size mismatch.
- Subject-level classification vs image-level classification — not the same unit of analysis.
- Zero patients with both microbiome **and** MRI data. No matched samples, no paired comparison possible.
- CI widths aren't even comparable: 0.08 (microbiome) vs 0.04 (MRI).

Reporting "0.98 beats 0.93" without saying all of that out loud is how bad science gets cited for a decade. Both numbers stand alone as independent proof-of-concept, full stop.

<div id="ms-graveyard" class="widget-block"></div>

## What's left before this touches a patient

External validation on independent cohorts. Prospective studies where the same patient gives both stool and MRI, so a real paired comparison becomes possible. Clinician user studies on whether the interpretable MRI features actually change diagnostic confidence in practice. None of that happened yet — the paper says so directly, and so do I.`
  },
  {
    id: 5,
    title: 'feedr',
    subtitle: 'Team Project',
    category: 'software',
    imageUrl: 'assets/feedr.png',
    description: 'A full-stack platform for ordering surplus food with secure API integration and real-time inventory/delivery updates.',
    technologies: ['System Design', 'UI/UX', 'REST API', 'Real-Time Systems'],
    github: 'https://github.com/PhucNguyen-rsc/food-waste-app',
    demo: 'https://example.com',
    storyKey: 'feedr',
    detailedDescription: `Created a complete platform for ordering surplus food. Designed the system and user interface, with secure API integration and real-time updates for inventory and delivery.`
  },
  {
    id: 7,
    title: 'PregNet',
    subtitle: 'Algorithmic Maternal Support',
    category: 'software',
    imageUrl: 'assets/Pregnet.png',
    description: 'Prototype platform using economic theory and AI to coordinate maternal support, featuring trust graphs, auctions, and more.',
    technologies: ['Game Theory', 'AI', 'Chatbots', 'Prediction Markets', 'Social Tech'],
    github: 'https://drive.google.com/file/d/15-jbV9KA9-xIa_DefHYw010WY9Gaac5q/view?usp=sharing',
    demo: 'https://drive.google.com/file/d/15-jbV9KA9-xIa_DefHYw010WY9Gaac5q/view?usp=sharing',
    hasGDrive: true,
    detailedDescription: `Prototype platform that uses economic theory and AI to coordinate maternal support. Features include trust graphs, auctions for resource allocation, game-theory based incentives, emotion-aware chatbots, prediction markets, and built-in transparency tools. Helped improve social support and efficiency, especially for marginalized users.`
  },
  {
    id: 8,
    title: 'I Thought I Came Here to Study',
    subtitle: 'Interactive Film Website',
    category: 'creative',
    imageUrl: 'assets/30MFF.png',
    description: 'An interactive website for a short film about academic environments and personal identity, with multiple engagement features.',
    technologies: ['Interactive Storytelling', 'Web Design', 'Filmmaking', 'UI/UX'],
    github: 'https://github.com/Mahlet333/30mff-mahlet',
    demo: 'https://mahlet333.github.io/30mff-mahlet/',
    storyKey: 'mff',
    detailedDescription: `An interactive website built around a short film about how academic environments influence personal identity. Includes a poetic intro, embedded film, director's notes, an interactive analysis, user submissions, and a minimal closing screen.`
  },
  {
    id: 9,
    title: 'Ten Minutes: Interactive Comic',
    subtitle: 'Time-Sensitive Photo Narrative',
    category: 'creative',
    imageUrl: 'assets/Comic.png',
    description: 'A photo comic where user choices on a timer affect the story outcome, built with web tech, AI visuals, and sound.',
    technologies: ['HTML5', 'CSS', 'JavaScript', 'AI Art', 'Sound Design'],
    github: 'https://github.com/Mahlet333/10minss',
    demo: 'https://mahlet333.github.io/10minss/',
    detailedDescription: `A time-sensitive photo comic about everyday student decisions. Users choose story paths that affect the outcome. Built with HTML, CSS, JS, real campus photos, AI visuals, timers, and sound effects.`
  },
  {
    id: 10,
    title: 'Temptation',
    subtitle: 'Web Sound Story',
    category: 'creative',
    imageUrl: 'assets/Sound.png',
    description: 'An audio-narrative experience about the conflict between sleep and prayer, with user-driven choices.',
    technologies: ['Audio Storytelling', 'Web Audio API', 'Accessible Design', 'Narrative Design'],
    github: 'https://github.com/Mahlet333/Sound_temptation',
    demo: 'https://mahlet333.github.io/Sound_temptation/',
    storyKey: 'temptation',
    detailedDescription: `A web sound story about the struggle between sleep and prayer. Features narration, ambient sounds, inner dialogue, user-driven narrative choices, and accessible design.`
  },
  {
    id: 11,
    title: 'Afternoon Nap',
    subtitle: 'Interactive Short Film',
    category: 'creative',
    imageUrl: 'assets/Afternoon_Nap.jpg',
    description: 'An interactive film where viewers influence the story of a communication breakdown, with supplementary content.',
    technologies: ['Interactive Film', 'Web Development', 'User Engagement'],
    github: 'https://github.com/Mahlet333/Afternoon_Nap_Movie',
    demo: 'https://mahlet333.github.io/Afternoon_Nap_Movie/',
    storyKey: 'afternoonNap',
    detailedDescription: `An interactive short film about communication breakdowns. Viewers influence the story through choices. The site includes the film, cast bios, feedback forms, and behind-the-scenes content.`
  },
  {
    id: 12,
    title: 'Summer Academy Yearbook',
    subtitle: 'Sheikh Mohamed bin Zayed Scholars Program',
    category: 'creative',
    imageUrl: 'assets/Summer_Academy.png',
    description: 'Designed an award-winning yearbook blending story and visuals, setting a new standard for student media.',
    technologies: ['Digital Design', 'UX/UI', 'Visual Storytelling', 'Adobe CC'],
    demo: 'https://drive.google.com/file/d/1t_PC19TPKONqlGaRN5QnVnZW98KyYY2t/view?usp=sharing',
    detailedDescription: `Designed a digital yearbook blending story and visuals for the Sheikh Mohamed bin Zayed Scholars Program at NYUAD Summer Academy.`
  },
  {
    id: 13,
    title: 'Mental Health Awareness Campaigns',
    subtitle: 'NYUAD Student Success & Well-Being',
    category: 'creative',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    description: 'Led design for mental health campaigns at NYUAD, creating visuals for events and workshops to support student wellness.',
    technologies: ['Graphic Design', 'Videography', 'Event Branding', 'Community Engagement'],
    demo: 'https://www.instagram.com/nyuadwellbeing/',
    detailedDescription: `As a design lead for the Office of Student Success & Well-Being, I developed a wide range of visual materials for mental health awareness campaigns on campus. This included creating engaging flyers, producing short videos, designing large-scale murals, and crafting materials for informational tabling events. My work aimed to foster a supportive community, reduce stigma, and connect students with resources. The campaigns reached thousands of students and contributed to a campus-wide dialogue on mental health.`
  },
  {
    id: 14,
    title: 'Quantum 101: Quantum Computing 4 Everyone',
    subtitle: 'Educational Book & Video Series',
    category: 'ml',
    imageUrl: 'assets/Quantum Computing- Breakthrough Performance Comes with High-Stakes Perils.webp',
    description: 'An original book authored by Mahlet Andargei to demystify quantum computing for non-experts, complemented by a proposed Arabic-language video series to teach core quantum mechanics concepts like superposition, entanglement, and quantum algorithms.',
    technologies: ['Quantum Computing', 'Education', 'Arabic Language', 'Science Communication', 'Interactive Tools', 'Book Writing'],
    demo: 'https://drive.google.com/file/d/1WmMJ5TVm_-MTp5gIidP9nUCRZBKUboAB/view?usp=sharing',
    detailedDescription: `## The premise

Every quantum computing resource starts with: "you'll need to understand linear algebra, complex amplitudes, and tensor products before we begin." That's not a prerequisite. That's a fence. *Quantum mechanics is not hard. It's badly explained.*

I wrote the book, proposed the Arabic video series, and started building the interactive browser tools because these are three separate access barriers and each one needs its own fix.

<div id="q101-arch" class="widget-block"></div>

## The book

**Quantum 101: Quantum Computing for Everyone** teaches quantum mechanics the human way — by story, metaphor, and then code. Superposition before amplitudes. Entanglement before tensor products. Shor's algorithm before its mathematical proof.

Key structure:
- Chapter 1–3: Intuition building. Wave-particle duality explained with paradoxes, not equations.
- Chapter 4: Your first quantum circuit in code (Qiskit). Four chapters in, not forty.
- Chapter 5–7: Grover, Shor, quantum error correction — with the math earning its place by proving something the intuition predicted.

Available via Google Drive: the full manuscript as written.

## The Arabic video series (in development)

Translation is not enough. "Coin flip" analogies for superposition don't translate culturally — I use misbaha bead indeterminacy. "Schrödinger's cat" means nothing to a student in Khartoum — I replace it with folk-logic puzzles. The goal is conceptual translation, not word-for-word translation.

Target audience: Arab-speaking high school and early university students in MENA who have physics curiosity and no English quantum resources at their level.

## Interactive tools (prototype)

Browser-based circuit sandbox: drag gates, run on a simulated statevector, see probability distributions update in real time. No install, no prerequisites, no intimidation. Piloting with UAE high school students.

## Why this matters beyond access

Who designs the next generation of quantum cryptography? Who trains the AI models that work on quantum data? Right now: the same ten countries, the same elite institutions. Quantum literacy isn't just an educational goal — it's a geopolitical one.`
  },
  {
    id: 15,
    title: 'Attention Contagion in Classroom Settings',
    subtitle: 'AI-Powered Attention Tracking System',
    category: 'ml',
    imageUrl: 'assets/attention.png',
    description: 'An AI system that tracks how attention flows among students in real-time using computer vision and deep learning, revealing attention as a complex adaptive system rather than individual behavior.',
    technologies: ['Computer Vision', 'Deep Learning', 'OpenCV', 'ResNet-18', 'Complexity Theory', 'Graph Theory', 'Real-time Systems', 'Behavioral Modeling'],
    demo: 'https://drive.google.com/file/d/1826RqFVxASdjVjuvALU45KisdsA6n59a/view?usp=sharing',
    detailedDescription: `## The observation that started it

Sit in enough classrooms and you notice it: one student drifts, glances at a phone, and within thirty seconds two more have shifted. One instructor tells a sharp joke and the whole room re-synchronizes. This isn't personal willpower variation — it's emergence. Attention in a room behaves like a contagion network, not like 10 independent state machines.

I wanted to measure that. So I built a system that could.

<div id="attn-arch" class="widget-block"></div>

## The system

**Computer vision pipeline**
- ResNet-18 CNN trained on a curated dataset of focused/distracted facial states
- **92%+ classification accuracy** on held-out validation
- Real-time processing via OpenCV: 10 concurrent webcam streams at 30fps
- 100,000+ data points per session

**Experimental design**
- 10 students, laptops with webcams, custom attention detection app running locally
- Controlled distraction stimuli: sudden sounds, simulated notifications, low-engagement lecture segments
- Also measured positive contagion: engagement re-propagation after a joke or narrative hook
- Reinforcement-learning-inspired stimulus scheduler: exploration-exploitation balance on distraction timing

**Network modeling**
- Each student = node, attention influence = directed edge
- K-means and DBSCAN clustering to find attention clusters correlated with spatial seating position
- Graph theory to measure propagation speed and directionality of attention shifts

<div id="attn-findings" class="widget-block"></div>

## What the data said

- Distraction events propagated in predictable directions, not randomly
- Students within ~2 seats of the instructor maintained significantly stronger attention
- Re-engagement events (jokes, active questions) produced synchronized spikes — the system has positive feedback too
- Students in proximity showed correlated attention rhythms independent of instructional quality

This is self-organized criticality: small disruptions cascade, but so do small re-engagements. The system is fragile and adaptive in the same way a complex network is.

## What I didn't claim

Attention classification from webcam data under real-world conditions (uneven lighting, varied faces, movement) is noisy. The 92% accuracy is on the classification task; the ecological validity of mapping that to "true attentional state" is a separate, harder question I didn't pretend to answer. The paper positions this as a proof-of-concept measurement tool, not a production monitoring system.`
  },
  {
    id: 16,
    title: 'Corruption vs. Productivity',
    subtitle: 'Economic Data Analysis & Statistical Modeling',
    category: 'ml',
    imageUrl: 'assets/corruption.avif',
    description: 'A comprehensive statistical analysis using World Bank data to investigate the relationship between corruption and economic productivity across nations from 2002-2022.',
    technologies: ['Statistical Analysis', 'Stata', 'World Bank Data', 'Regression Modeling', 'Data Visualization', 'Economic Research', 'Multivariate Analysis', 'Data Cleaning'],
    demo: 'https://drive.google.com/file/d/1bfBWP37OUBTEnjvZUwTKbpQaEVb8t1Yz/view?usp=drive_link',
    detailedDescription: `## The question

Does corruption kill economic productivity, and if so, is the relationship direct or mediated by governance quality (rule of law, government effectiveness)?

20 years of World Bank data. 5,236 country-level observations. Stata.

<div id="corruption-arch" class="widget-block"></div>

## Data

- **World Bank Worldwide Governance Indicators (WGI)**, 2002–2022
- Variables: Control of Corruption (−2.5 to +2.5), Rule of Law, Government Effectiveness, Political Stability
- **World Bank GDP growth** data, matched by country-year
- 5,236 observations after merging and dropping missing values

## Results

**Simple regression:**
Corruption Control coefficient: **−0.716** (p < 0.001)

Counterintuitive sign — *more* corruption control correlates weakly with *lower* GDP growth. This is Simpson's paradox territory: highly corrupt economies growing fast (resource booms) are pulling the simple correlation in the wrong direction.

<div id="corruption-table" class="widget-block"></div>

**Multivariate regression (adding Rule of Law, Government Effectiveness, Political Stability):**
- Rule of Law: **−0.693** (p = 0.009) — still negative in simple specification
- Corruption Control + Rule of Law multicollinearity: r = 0.938 — they're essentially measuring the same thing at this aggregation level
- F-statistic: **34.43** (p = 0.0000)
- R²: 0.0165 — governance explains only 1.65% of GDP growth variance

## What this actually means

The low R² is the real finding. Corruption explains almost nothing about GDP growth variance in this dataset, which means:
1. GDP growth is driven primarily by factors not captured here (trade, commodity prices, population growth, shocks)
2. The governance-growth relationship is long-run and non-linear — 20 years of annual data doesn't capture it well
3. Country fixed effects would be the right next step (panel data, within-country variation over time)

The Lowess plots confirmed no evident linear pattern. This is not a failure of the analysis — it's the correct result when you look at cross-sectional variation rather than within-country change over time.

<div id="corruption-graveyard" class="widget-block"></div>

## What I'd do differently

Panel regression with country fixed effects to isolate within-country variation. Instrumental variables to address endogeneity (corruption causes low growth, but low growth also causes corruption). The current analysis establishes that the simple cross-sectional signal is weak — which is worth knowing before building a more complex model on it.`
  },
  {
    id: 17,
    title: 'Obesity & Search Trends',
    subtitle: 'Data Science & Machine Learning',
    category: 'ml',
    imageUrl: 'assets/obesity_search.jpg',
    description: 'Analyzing the relationship between obesity rates and online search behavior across US states using advanced data science and machine learning techniques.',
    technologies: ['Python', 'Pandas', 'Machine Learning', 'Statistical Analysis', 'Google Trends API', 'CDC Data', 'Time Series Analysis', 'Granger Causality', 'Linear Regression', 'Data Visualization'],
    demo: 'https://drive.google.com/file/d/1OCuoNa3IutGDSUIMNIJ1ujVgGNoxgzm7/view?usp=sharing',
    detailedDescription: `## The hypothesis

Google searches for weight-related terms spike before or alongside obesity rate increases. If true, Google Trends data could be a cheap, real-time leading indicator for health surveillance — months ahead of CDC survey data.

**Null:** search behavior and state obesity rates are unrelated.
**Alternative:** obesity-correlated terms (diabetic, weight_loss, gastric) show statistically significant correlation with CDC obesity prevalence by state and year.

<div id="obesity-arch" class="widget-block"></div>

## Data

- **Google Trends:** 1,215 state-level CSVs (2004–2018), 81 keywords, monthly search volume by state
- **CDC BRFSS:** 90 health statistics files (2004–2018), obesity rate and exercise rate by state, stratified by age/gender
- 14,442 health observations after cleaning; 765×83 spatial trends matrix (states × keywords × years)

## Pipeline

Three-stage ETL built in Python (pandas, numpy, concurrent.futures):

1. **Spatial trends** — 765 rows × 83 columns: state + year + 82 keyword search indices. Extracted year/keyword from filenames via regex, merged across 1,215 CSVs.
2. **Temporal trends** — 180 timepoints × 82 keywords. Date alignment via pd.to_datetime.
3. **Health stats** — 14,442 rows, standardized CDC schema. Dynamic column selection across heterogeneous CDC file formats.

<div id="obesity-stats" class="widget-block"></div>

## Key findings

**Top correlating terms with state obesity rates (Pearson r):**
- diabetic: r = 0.72
- weight_loss: r = 0.68
- yoga: r = −0.57 (inverse — higher yoga search = lower obesity)
- gym_near_me: r = −0.43

**Temporal analysis:** Granger causality tests at lags 1–6 months. Several terms (diabetic, gastric) show predictive signal — search behavior precedes CDC survey measurements — consistent with the lag between health behavior change and recorded outcomes.

**State variation:** Southern states show consistently higher obesity-correlated search volumes and higher CDC rates. This is correlation, not causation — confounders include internet access rates, healthcare access, and demographics.

## Honest caveats

Google Trends returns relative search interest, not absolute volume. State-level comparison requires normalizing for total search activity, which I did via Google's built-in normalization but can't fully control. High-obesity states searching more for "weight_loss" could reflect awareness of the problem, not a leading indicator. The Granger causality result is suggestive, not definitive.`
  },
  {
    id: 18,
    title: 'Terms & Conditions Analysis',
    subtitle: 'Behavioral Data Science & ML Pipeline',
    category: 'ml',
    imageUrl: 'assets/terms and conditions.jpeg',
    description: 'Advanced behavioral analysis investigating why users don\'t read Terms & Conditions, using machine learning, statistical modeling, and NLP to uncover root causes.',
    technologies: ['Machine Learning', 'Statistical Analysis', 'NLP', 'Python', 'Survey Design', 'Behavioral Science', 'Chi-Squared Testing', 'Sentiment Analysis'],
    demo: 'https://drive.google.com/file/d/1OCuoNa3IutGDSUIMNIJ1ujVgGNoxgzm7/view?usp=sharing',
    detailedDescription: `## The pivot that defined the project

Started with an LLM-vs-NLP comparison for Terms & Conditions summarization. Built a $10 ChatGPT API-based summarizer, deployed it on Render, collected user interaction data.

Finding: users didn't engage with the output, regardless of how the summary was presented.

Which meant the original research question — "which model summarizes ToS better?" — was wrong. The bottleneck isn't comprehension quality. It's that nobody opens the document in the first place.

New question: **What are the root causes behind users not reading Terms & Conditions, regardless of presentation?**

<div id="terms-arch" class="widget-block"></div>

## Survey instrument

Multi-dimensional psychometric survey deployed to NYUAD community:
- Likert scale (1–10): likelihood to read ToS before agreeing
- Likert scale (1–10): likelihood to reject a service after reading problematic clauses
- Trust/influence factors: friend recommendations, social proof
- Motivation factors: fear of negative consequences, legal concern

**n = survey responses from NYUAD student/faculty population**

## The numbers

**Mean likelihood to read ToS: 2.17 / 10. Median: 1.0. Mode: 1.0.**

That's not apathy — that's near-universal non-engagement. The distribution wasn't bimodal (readers vs non-readers). It was extremely right-skewed with a floor effect at 1.

Mean likelihood to reject after reading: 5.17 / 10. This creates the core paradox: people believe they *would* reject problematic terms if they read them, but they almost never do.

<div id="terms-stats" class="widget-block"></div>

Pearson r between reading likelihood and rejection agreement: **r = 0.29** — positive but weak. Reading ToS doesn't strongly predict willingness to reject, which undermines the "just make summaries better" solution entirely.

## ML pipeline: predicting negative consequence likelihood

**Model 1 — trust-motivation prediction:**
- Features: trust influence score + motivation-from-consequences score
- Target: likelihood of experiencing negative outcomes
- Accuracy: **71.4%**
- Catch: precision on Class 1 (negative consequences predicted) = 0.00 — the model learned to predict the majority class almost exclusively. Class imbalance issue.

**Model 2 — full feature regression:**
- All survey features as predictors for negative consequence likelihood
- MSE: **1.22** on held-out test set
- Better generalization than Model 1 but still limited by sample size

<div id="terms-graveyard" class="widget-block"></div>

## What the behavioral data actually says

The problem isn't that ToS documents are too long or too complex. It's a rational choice under uncertainty: the cost of reading (significant time) vs the perceived benefit (marginal — you're going to agree anyway because you need the service) means reading is almost never the utility-maximizing action.

The one intervention that *did* shift stated likelihood-to-read: framing the act of reading as socially normative rather than individually protective. Social proof moved the needle where legal consequence framing did not.`
  },
  {
    id: 19,
    title: 'LSTM Autoencoder for Sensor Anomaly Detection',
    subtitle: 'Industrial AI / Predictive Maintenance',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    description: 'Bidirectional LSTM autoencoder trained on NASA CMAPSS turbofan engine data. Detects degradation anomalies via reconstruction error thresholding — AUC-ROC 0.903, Precision 0.929 — with a real-time streaming inference loop and hysteresis-aware alert system.',
    technologies: ['PyTorch', 'LSTM', 'Anomaly Detection', 'Time Series', 'NASA CMAPSS', 'Real-time Inference', 'Signal Processing'],
    github: 'https://github.com/Mahlet333/LSTM-autoencoder-for-sensor-anomaly-detection',
    detailedDescription: `# LSTM Autoencoder for Sensor Anomaly Detection

A production-ready anomaly detection system built on multivariate bidirectional LSTM autoencoders, trained on NASA's CMAPSS turbofan engine dataset. The system learns to reconstruct normal sensor behavior and flags degradation events when reconstruction error exceeds a statistically calibrated threshold — no anomaly labels required during training.

<div id="proj19-arch" class="widget-block"></div>

## Why This Architecture

Training exclusively on healthy data (RUL > 30 cycles) means the model never learns to reconstruct degraded patterns. So degraded signals produce elevated reconstruction error: that elevation is the anomaly signal. This is the principled solution to label scarcity in industrial settings.

## Architecture

\`\`\`
Input (B, T=30, F=17)
        │
   BiLSTM Encoder   ← 2 layers, hidden=64, bidirectional
   + Linear proj    ← 2H → H (bottleneck compression)
        │  latent (B, 64)
   LSTM Decoder     ← 2 layers, hidden=64, unidirectional
   + Output proj    ← H → F
        │
Output (B, T=30, F=17)  ← reconstructed signal

Anomaly score = MSE(input, reconstruction) per window
Threshold     = μ(train_errors) + k·σ   [k=3, ~0.1% FPR]
\`\`\`

Bidirectional encoder for richer temporal representations. Unidirectional decoder because reconstruction is sequential from the bottleneck. Threshold is statistically principled and configurable to tune the precision/recall tradeoff.

## Dataset — NASA CMAPSS FD001

- 100 training engines, 100 test engines
- 21 sensors (17 retained after dropping near-zero-variance channels)
- Preprocessing: MinMax normalization fit on train only, sliding windows of 30 cycles
- Leakage prevention: scaler never touches test data during fitting

## Results

<div id="proj19-metrics" class="widget-block"></div>

| Metric    | Value  |
|-----------|--------|
| AUC-ROC   | **0.903** |
| Precision | 0.929  |
| Recall    | 0.520  |
| F1        | 0.667  |
| Threshold | 0.0118 |

## Real-Time Inference System

Built a streaming simulation loop processing engine sensor data window-by-window with an \`AlertSystem\` implementing hysteresis: N consecutive anomalous windows to fire, M consecutive normal windows to clear. Prevents alert chatter from transient reconstruction spikes — critical for operational deployability.

## Extensibility

- Swap BiLSTM encoder for Transformer encoder
- Add RUL regression head on the latent vector
- ONNX export for edge deployment
- Tune threshold on validation set via PR-curve sweep`
  },
  {
    id: 20,
    title: 'RGB-D Fusion Pipeline for 3D Scene Understanding',
    subtitle: 'Computer Vision / Robotics Perception',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    description: 'Dual-encoder network fusing RGB and depth streams through cross-attention at four feature scales (27M params). Produces simultaneous dense semantic segmentation and metric depth refinement, reconstructs 3D point clouds via Open3D, and runs real-time DBSCAN-based obstacle detection for collision avoidance.',
    technologies: ['PyTorch', 'Computer Vision', 'Cross-Attention', 'ResNet-34', 'Open3D', 'DBSCAN', '3D Reconstruction', 'Semantic Segmentation', 'Depth Estimation'],
    github: 'https://github.com/Mahlet333/RGB-D-fusion-pipeline',
    detailedDescription: `# RGB-D Fusion Pipeline for 3D Scene Understanding

A 27M-parameter dual-encoder architecture that fuses RGB and depth modalities through cross-attention at four resolution scales, producing simultaneous dense semantic segmentation and metric depth refinement. Outputs feed into an Open3D point cloud reconstruction module with DBSCAN-based obstacle detection for collision avoidance.

<div id="proj20-arch" class="widget-block"></div>

## Architecture

\`\`\`
RGB  (B,3,H,W)  ──► ResNet-34 Encoder (pretrained ImageNet)
                     Scales 1–4: strides 4/8/16/32, C=64/128/256/512

Depth (B,1,H,W) ──► Depth Encoder (depthwise-separable CNN, 4 scales)

Cross-Attention Fusion (per scale):
  Q = Wq(depth_feat),  K = Wk(rgb_feat),  V = Wv(rgb_feat)
  att = softmax(QKᵀ / √d)
  fused = merge(rgb,  att·V + depth)   ← residual from depth

Fused ──► UPerNet Decoder
           PPM on deepest scale + FPN top-down laterals
           ├── Seg head   → (B, 13, H, W) class logits
           └── Depth head → (B,  1, H, W) metric depth

Point Cloud:
  depth_pred ──► Open3D RGBD → PointCloud
              ──► Voxel downsample + outlier removal
              ──► DBSCAN clustering → obstacle detection
              ──► Collision avoidance check + clearance report
\`\`\`

**Parameter count:** 21.3M RGB encoder | 0.56M depth encoder | 2.1M fusion | 3.1M decoder

## Why Cross-Attention for Fusion

Cross-attention lets depth features selectively query RGB spatial information at each scale, rather than naive concatenation. The residual connection preserves the raw depth signal. UPerNet's multi-scale aggregation enables both fine-grained boundary segmentation and large-scale structural understanding simultaneously.

## Loss Function

\`\`\`
L = λ_seg · CrossEntropy + λ_depth · BerHu + λ_grad · GradientLoss

BerHu (reverse Huber):
  |e| ≤ c  →  L1
  |e| >  c  →  (e² + c²) / 2c     where c = 0.2 · max|e|
\`\`\`

BerHu preferred over L2 for depth: robust to boundary outliers while penalising large errors quadratically.

## Results (NYU Depth V2 benchmark, 8 epochs)

| Metric         | Value  |
|----------------|--------|
| mIoU           | 0.152  |
| Pixel Accuracy | 0.697  |
| Abs Rel (depth)| 0.220  |
| RMSE (depth)   | 0.644  |
| δ < 1.25       | 0.604  |
| δ < 1.25²      | 0.924  |

> With full NYU Depth V2 at 224×224 and 50+ epochs: expected mIoU ~0.40–0.50 and AbsRel ~0.15, consistent with published lightweight fusion baselines.

## Obstacle Detection Pipeline

1. Remove floor-level points (y threshold in camera space)
2. DBSCAN spatial clustering (eps=0.15m, min_points=30)
3. Filter by maximum depth (ignore far background)
4. Sort clusters by minimum distance to camera
5. Output structured collision report with clearance distance and navigation recommendation`
  },
  {
    id: 21,
    title: 'Multi-Head Surface Inspection Pipeline',
    subtitle: 'Production Computer Vision / Industrial AI',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80',
    description: 'Production-grade multi-task CV system for industrial surface inspection. Shared EfficientNet-B4 backbone runs detection (anchor-free), pixel-level segmentation (U-Net decoder), and geometric keypoint extraction simultaneously. Trained on MVTec AD with DDP multi-GPU support, uncertainty-based loss weighting (Kendall et al.), and Docker deployment.',
    technologies: ['PyTorch', 'EfficientNet-B4', 'Multi-task Learning', 'Object Detection', 'Semantic Segmentation', 'Keypoint Detection', 'DDP Training', 'MVTec AD', 'Docker'],
    github: 'https://github.com/Mahlet333/Multi-head-surface-inspection-pipeline',
    detailedDescription: `# Multi-Head Surface Inspection Pipeline

A production-grade computer vision system that runs detection, segmentation, and keypoint extraction simultaneously from a single shared encoder — the architecture pattern used in real industrial inspection deployments.

<div id="proj21-arch" class="widget-block"></div>

## Why Multi-Task?

Running three separate models triples inference latency. A shared backbone extracts features once; each head reads from the same feature pyramid. This is how production CV systems are actually built.

## Architecture

\`\`\`
Input Image (3×H×W)
        │
   Shared Encoder    ← EfficientNet-B4 / ResNet-50
   (multi-scale)       feature pyramid P3, P4, P5
        │
   ┌────┼──────────────────┐
   │    │                  │
Detection  Segmentation  Keypoint
  Head      Head (U-Net)   Head
   │           │              │
BBoxes    Pixel masks    Geometric
+ Scores    (H×W)        keypoints
            defect masks  (N × 2+conf)
\`\`\`

## Head Design Rationale

**Detection head (anchor-free):** Anchor-based detectors require per-dataset anchor tuning. Anchor-free heads predict directly from feature map locations — more flexible, fewer hyperparameters, better generalization across defect scales and shapes.

**Segmentation head (U-Net decoder):** Skip connections from P3/P4/P5 preserve fine-grained boundary information. Produces pixel-precise defect masks for localization and area measurement.

**Keypoint head:** Geometric feature extraction invariant to camera position and hardware variation — critical for cross-site deployment where inspection rigs differ between factories.

## Key Engineering Decisions

**Domain randomization:** Real inspection lines have variable lighting, surface coatings, and camera hardware. Aggressively randomized augmentation forces the model to learn features invariant to these conditions — the core challenge in cross-site deployment.

**Uncertainty-based loss weighting (Kendall et al. 2018):** The model automatically learns how to weight each task's loss during training. Critical in multi-task systems where task gradients conflict — eliminates manual tuning of λ_det, λ_seg, λ_kp.

**Multi-GPU DDP training:** Full PyTorch DistributedDataParallel support for scaling to larger datasets.

## Dataset

MVTec Anomaly Detection (MVTec AD): 15 industrial categories, 5,354 high-resolution images, pixel-precise anomaly annotations.

## Infrastructure

- Dockerfile for reproducible environment
- \`inference/benchmark.py\` for FPS/latency/GPU utilization profiling
- Unit tests for all model components
- YAML config for all hyperparameters`
  },
  {
    id: 22,
    title: 'End-to-End MLOps System with Drift Detection',
    subtitle: 'ML Engineering / Production Systems',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    description: 'Full ML pipeline from raw data ingestion to deployed FastAPI inference API, with automated distribution shift monitoring (MMD, KS test, PSI, CUSUM) and retraining triggers. Covers ETL, feature store, model registry, ONNX/TensorRT export, Docker, and real-time monitoring dashboards.',
    technologies: ['Python', 'FastAPI', 'ONNX', 'TensorRT', 'Docker', 'MLOps', 'Drift Detection', 'MMD', 'CUSUM', 'PSI', 'Feature Engineering', 'Model Registry'],
    github: 'https://github.com/Mahlet333/End-to-end-MLOps-system-with-drift-detection',
    detailedDescription: `# End-to-End MLOps System with Drift Detection

A production ML system that covers every stage of the ML lifecycle — from raw data ingestion through feature engineering, training, evaluation, deployment, and continuous monitoring — with automated drift detection and retraining triggers.

<div id="proj22-arch" class="widget-block"></div>

## System Architecture

\`\`\`
DATA LAYER
  Raw Data → ETL Pipeline → Feature Store → Versioned Dataset Registry

TRAINING PIPELINE
  preprocessing/ → training/ → evaluation/ → Model Registry
  (normalize,       (CV, early   (ROC/PR,
   validate,         stopping)    threshold tuning)
   split, features)

DEPLOYMENT LAYER
  PyTorch → ONNX Export → TensorRT Opt → FastAPI → Docker

MONITORING & DRIFT DETECTION
  Feature Drift    → Prediction Drift → Performance Drift
  (MMD, KS test)    (output shift)      (label feedback)
       └──────────────────┴────────────────────┘
                          │
             Drift Alert → Retraining Trigger → Auto-Retrain
\`\`\`

## Drift Detection Suite

| Detector | Method | Why |
|---|---|---|
| Feature drift | MMD (Maximum Mean Discrepancy) | Works on full embedding vectors, not just 1D |
| Feature drift | KS test | Fast 1D feature distribution check |
| Covariate shift | PSI (Population Stability Index) | Standard credit/ML industry metric |
| Gradual drift | CUSUM | Sequential change-point detection — catches slow drift before it degrades performance |

**Why MMD over KS for embeddings:** KS test is inherently 1D. MMD operates on full feature vectors — essential for detecting distribution shift in learned representations.

**Why CUSUM:** Threshold-based methods only detect sudden shifts. CUSUM accumulates small deviations, catching gradual drift weeks before model performance degrades. Critical in production.

## Feature Engineering

Per-fold feature selection with strict leakage prevention: all transformations (scaling, encoding, selection) fitted only on training folds, applied to validation. This prevents information from validation data contaminating feature engineering — the most common source of overly optimistic CV results.

## What This Covers

| ML Engineering Skill | Implementation |
|---|---|
| ETL pipeline | Schema validation, partitioning, versioning |
| Feature engineering | Per-fold scaling, leakage prevention |
| Model training | Cross-validation, early stopping, checkpointing |
| Model evaluation | Threshold tuning, ROC/PR curves |
| ONNX export | PyTorch → ONNX → TensorRT |
| FastAPI serving | Async inference, batching, health checks |
| Docker | Multi-stage build, env reproducibility |
| Drift detection | MMD, KS, PSI, CUSUM |
| Monitoring | Real-time dashboards, alert routing |
| Retraining triggers | Automated pipeline re-invocation |`
  },
  {
    id: 23,
    title: 'Sim2Real Transfer for Visual Policy Learning',
    subtitle: 'Robotics / Reinforcement Learning',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1563207153-f403bf289096?auto=format&fit=crop&w=800&q=80',
    description: 'A robot trained entirely in simulation walks onto real hardware and falls apart — lighting, textures, camera noise, none of it matches what it learned on. This pipeline stacks three transfer mechanisms to close that gap without retraining from scratch on real data.',
    technologies: ['PyTorch', 'Reinforcement Learning', 'Domain Randomization', 'Domain Adaptation', 'Robotics', 'Visual Policy Learning', 'Adversarial Training', 'Sim-to-Real'],
    github: 'https://github.com/Mahlet333/sim2real',
    detailedDescription: `## The thing nobody tells you about simulation

A policy that gets 95% success in simulation can fall to single digits the moment it sees a real camera feed. Not because the policy is bad — because simulated light doesn't behave like real light, simulated friction doesn't behave like real friction, and a neural net trained on one distribution has zero obligation to generalize to another. This pipeline exists to force generalization instead of hoping for it.

<div id="s2r-arch" class="widget-block"></div>

## Three mechanisms, none of them sufficient alone

**Domain Randomization** — every episode, scramble lighting direction/intensity, object textures, background, camera pose, sensor noise. The policy can't memorize one simulated world because there isn't one fixed world to memorize.

**Adaptive Normalization** — per-domain batch norm with learned affine parameters. When the input distribution shifts from sim to real, the network adjusts its internal feature statistics on the fly instead of needing a full retrain.

**Adversarial Visual Domain Adaptation** — a discriminator tries to tell sim features from real features apart. The encoder's job is to make that impossible. Direct pressure on the distribution gap, not a side effect of the other two.

<div id="s2r-graveyard" class="widget-block"></div>

## Why all three at once and not just one

- Randomization alone doesn't cover every discrepancy you didn't think to randomize
- Adaptive normalization adjusts statistics but doesn't align the underlying distributions
- Adversarial adaptation aligns distributions but trains unstably without randomization giving it diverse inputs to work with

Stacked together they're redundant on purpose — each one catches what the others miss.

## Research line

This work feeds directly into ongoing research at the Computational Biology & Bioinformatics Lab at NYU Abu Dhabi, where the same underlying question — how do you build models that generalize across distribution shift instead of memorizing one fixed dataset — shows up again, just with MRI scans and microbiome data standing in for simulation and reality.`
  },
  {
    id: 24,
    title: 'A2S Transfer Task — Norm Grounding Gap in LLMs',
    subtitle: 'NLP Research / AI Evaluation Benchmark',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80',
    description: 'Co-authored NLP benchmark (NYU Abu Dhabi, Spring 2026) measuring whether LLMs can detect social norm violations in naturalistic conversation vs. isolated questions. Defines and quantifies the "Norm Grounding Gap" across GPT-4, Claude, and Llama — revealing systematic failure modes in situated social reasoning.',
    technologies: ['NLP', 'LLM Evaluation', 'Python', 'GPT-4', 'Claude API', 'NormBank', 'McNemar Test', 'Benchmark Design', 'Social AI'],
    github: 'https://github.com/Mahlet333/ASI_Final_Project',
    detailedDescription: `# A2S Transfer Task — Measuring the Norm Grounding Gap in LLMs

**CS-UH 3260 · Artificial Social Intelligence · NYU Abu Dhabi · Spring 2026**  
Authors: Aneeka Paul, Mahlet Atrsaw Andargei

## The Research Question

LLMs perform well on abstract social norm questions asked in isolation. But embed the same norm violation in a naturalistic four-turn conversation — and performance drops sharply. We define this as the **Norm Grounding Gap**: the delta in model accuracy between abstract norm judgment and situated conversational understanding.

<div id="a2s-arch" class="widget-block"></div>

## Three-Level Evaluation Framework

- **Level A (Abstract):** Direct questions about norm acceptability — isolated from context. LLMs perform well here.
- **Level B (Bridge):** Norm violations in brief, low-context scenarios. Moderate performance drop.
- **Level C (Situated):** Same violations embedded in naturalistic four-turn conversations with discourse context, implicit cues, and social subtext. Significant performance drop.

Dataset constructed from NormBank social norm annotations, lifted into conversational contexts using controlled generation templates.

## Technical Pipeline

\`\`\`
dataset_constructor.py
  Sample from NormBank → generate Level A/B/C items
  Output: items_levelA/B/C.jsonl (structured benchmark)

inference_engine.py
  Run GPT-4, Claude, Llama across all three levels
  Output: parsed binary judgments per model × level

evaluator.py
  Accuracy, precision, recall per model × level
  McNemar's test for within-model A→C significance
  Output: metrics_summary.json

visualizer.py
  Norm Grounding Gap bar charts
  Per-model degradation curves across levels
\`\`\`

## Key Findings

The Norm Grounding Gap is real, statistically significant (McNemar's test), and model-invariant — it appears across GPT-4, Claude, and Llama. This reveals a systematic limitation in how LLMs ground social norms into conversational context, not a quirk of any single model.

Models that perform similarly at Level A diverge substantially at Level C — meaning **abstract social reasoning capability does not predict situated social understanding**.

## Why This Matters

As LLMs are increasingly deployed in socially consequential settings — mental health support, conflict mediation, education — understanding exactly where their social reasoning fails is critical. This benchmark provides a rigorous, reproducible tool for measuring that gap.`
  },
  {
    id: 25,
    title: 'Anime Character Visual Design Classification',
    subtitle: 'Computer Vision / Feature Engineering Research',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    description: 'Multi-approach CV study classifying anime characters as heroes or villains using 50+ handcrafted design features, CLIP ViT-L/14 embeddings, and VGGFace2 transfer learning. Achieves ~80% accuracy and ~0.90 AUC-ROC with design features + ResNet18. Computationally validates design conventions: warm/cool palettes, edge sharpness, and shadow density are the strongest discriminators.',
    technologies: ['PyTorch', 'CLIP ViT-L/14', 'VGGFace2', 'Feature Engineering', 'Transfer Learning', 'Computer Vision', 'ResNet18', 'SHAP', 'Open-CLIP'],
    github: 'https://github.com/Mahlet333/Machine-Learning-Final-Project',
    detailedDescription: `# Computational Analysis of Visual Design Conventions in Anime Character Classification

A machine learning research study investigating whether hero/villain visual design conventions in anime are computationally learnable — and which features drive the signal.

## The Research Question

Anime character designers follow implicit conventions: heroes tend to have warm palettes, soft edges, open expressions. Villains get cool/dark palettes, sharp edges, high shadow density. Are these patterns consistent enough to be learned from image features alone? And do learned deep representations capture the same things as handcrafted domain features?

<div id="anime-stats" class="widget-block"></div>

## Three Classification Approaches

### 1. Design Convention Features (50+ handcrafted)
Features derived from anime design principles:
- Color palette analysis: HSV histograms, warm/cool ratio, saturation distribution
- Texture features: LBP (Local Binary Patterns), Gabor filter responses
- Edge characteristics: Canny edge density, sharpness distribution
- Shadow density and spatial distribution
- Geometric face structure measurements

**Result: ~80% accuracy | ~89% F1 | ~0.90 AUC-ROC**

### 2. CLIP ViT-L/14 Semantic Embeddings
Tests whether CLIP's semantic understanding of "hero" and "villain" — learned from 400M image-text pairs — aligns with visual design conventions in anime.

### 3. Face-Trained Transfer Learning (VGGFace2 / ArcFace)
**Result: ~66.7% accuracy** — domain transfer from real human faces to stylized anime faces partially works, revealing structural similarity between human face geometry and anime stylization conventions.

## Key Research Findings

1. **Villain design is more distinctive than hero design** — higher recall for villain classification across all methods. Heroes are visually diverse; villains follow more consistent design templates. This asymmetry is statistically robust.

2. **Color palette is the strongest discriminator** — warm (red/orange) vs. cool (blue/purple) color ratios are top features across all approaches.

3. **Edge sharpness and shadow density matter** — computationally validates what animators intuit about villain design.

4. **Handcrafted features and learned representations are complementary** — neither dominates, suggesting domain knowledge and end-to-end learning capture different aspects of the visual signal.

## Broader Significance

Visual design conventions in media are computationally learnable and interpretable. This has implications for content analysis, character generation, and understanding how visual archetypes encode cultural meaning — and serves as a rigorous comparison of feature engineering versus representation learning in a novel visual domain.`
  },
];

const blogPosts = [
  {
    id: 1, title: 'The Philosophy of Neural Networks',
    date: 'October 26, 2023', category: 'Tech',
    imageUrl: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    content: `# The Philosophy of Neural Networks

Neural networks are more than just mathematical models; they represent a fundamental shift in how we approach problem-solving. Unlike traditional algorithms, which require explicit instructions, neural networks learn from data, identifying patterns and making decisions in a way that mimics human intuition.

## The Nature of Learning

When we think about learning, we often imagine a process of explicit instruction. A teacher explains a concept, provides examples, and the student memorizes and applies the knowledge. But neural networks challenge this paradigm.

They learn through exposure to data, gradually adjusting their internal parameters to minimize error. This process is more akin to how a child learns to recognize faces or how an artist develops their style through practice.

## Creativity and Emergence

One of the most fascinating aspects of neural networks is their ability to exhibit emergent behavior. Patterns and capabilities arise that weren't explicitly programmed into the system. This raises profound questions about the nature of creativity and intelligence.

Is creativity simply the recombination of existing patterns, or does it involve something more fundamental? Neural networks suggest that complex, seemingly creative behavior can emerge from simple learning rules applied to large amounts of data.

## The Definition of Intelligence

Perhaps the most challenging question neural networks pose is: what is intelligence? If a system can learn to recognize patterns, make predictions, and even generate novel content, does it possess intelligence?

The answer depends on how we define intelligence. If we define it in terms of behavior and capability, then neural networks certainly exhibit intelligent behavior. But if we define it in terms of consciousness and understanding, the question becomes much more complex.

## Implications for the Future

As neural networks become more sophisticated, they force us to reconsider our relationship with technology. We're moving from tools that we control to systems that learn and adapt independently.

This shift has profound implications for education, work, and society as a whole. How do we prepare for a world where machines can learn and create? What does it mean to be human in an age of artificial intelligence?

These are the questions that neural networks compel us to ask, and the answers will shape the future of our species.`
  },
  {
    id: 2, title: 'A Journey Through Creative Coding',
    date: 'November 15, 2023', category: 'Creative',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    content: `# A Journey Through Creative Coding

Creative coding is where art and technology intersect. It's about using code as a medium for expression, creating visuals, sounds, and experiences that are both beautiful and interactive.

## What is Creative Coding?

Creative coding is the practice of writing code to create art, design, and interactive experiences. Unlike traditional programming, which focuses on solving specific problems, creative coding emphasizes exploration, experimentation, and expression.

It's about asking "what if?" and using code to find the answer.

## Tools of the Trade

### p5.js
p5.js is a JavaScript library that makes creative coding accessible to beginners. It provides a simple API for creating graphics, animations, and interactive experiences.

\`\`\`javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(mouseX, mouseY, 50, 50);
}
\`\`\`

### TouchDesigner
TouchDesigner is a node-based visual programming language for creating interactive media.

## The Creative Process

Creative coding follows a different process than traditional software development:

1. **Exploration**: Start with a simple idea and explore its possibilities
2. **Iteration**: Make small changes and see how they affect the result
3. **Emergence**: Let unexpected patterns and behaviors guide your direction
4. **Refinement**: Polish and perfect the final result

## Examples of Creative Coding

**Generative Art** — Creating art that's generated by algorithms rather than drawn by hand.

**Interactive Installations** — Art that responds to human input: movement, sound, touch.

**Data Visualization** — Turning complex data into beautiful, understandable visual representations.

## The Future of Creative Coding

As technology advances, creative coding is becoming more accessible and powerful. New tools and platforms are emerging that make it easier for artists and designers to express themselves through code.

So pick up your keyboard, open your favorite creative coding tool, and start creating something beautiful.`
  },
  {
    id: 4, title: 'The Tyranny of the Loss Function: Rethinking What It Means to Learn',
    date: 'July 24, 2024', category: 'AI/ML',
    imageUrl: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&w=1287&q=80',
    content: `# The Tyranny of the Loss Function: Rethinking What It Means to Learn

The first time I understood what a loss function was, it felt like the most natural thing in the world. You define an objective, compute the error, and let the optimizer do its job. Clean. Mathematical. Elegant.

But over time, I started wondering: why this loss function? Why mean squared error and not something else?

## The Assumptions We Don't Talk About

Let's take the standard cross-entropy loss for classification. It assumes:

- The classes are mutually exclusive and exhaustive
- The cost of misclassifying class A as B is the same as misclassifying B as A
- The ground truth is infallible

These are huge assumptions. In practice, most real-world data violates at least one of these. Consider facial emotion classification. Is confusing "fear" with "surprise" equally bad as confusing "fear" with "happiness"?

## Risk, Information, and Human Consequences

A loss function implicitly defines a value system over outcomes. Minimizing loss is not just reducing error. It's deciding what kinds of errors are tolerable, and which ones are not.

In healthcare, this distinction matters. In autonomous driving, it can mean life or death. In credit scoring, it's a matter of dignity and access.

## A New Family of Losses: Cognitive-Aligned Objectives

Instead of fixing the ground truth and punishing deviations, what if we modeled the uncertainty of human cognition itself? Imagine a loss function that doesn't treat all samples equally, but weights them by annotator confidence, variance in interpretation, or ethical significance.

## The Path Forward

We can design better objectives that reflect the complexity and nuance of real-world decision-making. Loss functions that are **ethically aware**, **uncertainty-aware**, and **context-aware**.

## Conclusion

The loss function is not just a mathematical convenience. It's a moral choice. By choosing what to optimize, we choose what matters. And in a world where AI systems make increasingly important decisions, these choices have real consequences.`
  },
  {
    id: 5, title: 'What If Convergence Is the Wrong Goal? Toward Open-Ended Models',
    date: 'July 24, 2024', category: 'AI/ML',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1740&q=80',
    content: `# What If Convergence Is the Wrong Goal? Toward Open-Ended Models

Machine learning has always been about convergence. Minimize the loss. Reduce the error. Stabilize the weights. Stop training when the curve flattens.

But is that how learning works in nature? Does a child "converge" on language? Does evolution "converge" on a perfect species?

## The Convergence Trap

Convergence gives us comfort. A sense that the model is done learning. But what if that is the problem? A model that converges is also a model that stops adapting. It becomes brittle.

In reinforcement learning, we sometimes see agents get stuck in local optima because they converge too early.

## Inspiration from Biology and Cognition

In contrast, biological systems rarely seek convergence. The brain retains plasticity. The immune system is constantly updating. Culture evolves.

I propose an alternative: **divergent modeling**. Instead of convergence, we aim for perpetual refinement.

## From Optimization to Exploration

Let the model continue training under a changing objective. Or better: let the objective itself be a function of time. This reflects real learning: continuous, dynamic, and self-adjusting.

## Applications

- **In open-world RL**: agents that never stop exploring
- **In creative AI**: models that generate novel solutions instead of optimal ones
- **In meta-learning**: systems that evolve their own objectives

## The Challenge of Evaluation

If we move away from convergence, how do we evaluate our models? We need new metrics that capture adaptability, creativity, and robustness.

## Conclusion

The future of AI might be less about optimization and more about exploration. Less about convergence and more about divergence. Less about finding the right answer and more about asking the right questions.`
  },
  {
    id: 6, title: "How Language Models Remember What We Don't Say",
    date: 'July 24, 2024', category: 'AI/ML',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1740&q=80',
    content: `# How Language Models Remember What We Don't Say

I started this experiment with a strange question: if I fine-tune a language model on nothing, will it still learn?

Of course, not literally nothing. But I mean low-entropy data. Blanks. Underspecified prompts. Corrupted text. Minimal supervision. What happens when you train a model not with signal, but with silence?

## Hallucinations in the Void

Surprisingly, the model still responded. It generated completions. It produced assumptions. It filled in the gaps.

This suggests something important: large language models are not just learning from the data. They are projecting from priors embedded in architecture and pretraining.

When you fine-tune on corrupted inputs and still get coherent outputs, you're not seeing generalization. You're seeing hallucination.

## Where Do Priors Live?

In Bayesian terms, we often think of priors as parameters in the model. But in LLMs, the architecture itself encodes strong structural biases:

- **Positional encodings** assume locality
- **Attention heads** encode compositionality
- **Layer norms** shape scaling assumptions

These are not learned. They are built in.

## Implications for Safety and Bias

If a model fills in missing data with its own assumptions, we must ask: Whose assumptions?

This matters in **medical diagnosis** (underspecified symptoms), **legal language** (ambiguity), and **social contexts** (cultural defaults).

Bias is not just in the data. It is in the voids between data.

## Designing Models That Respect Silence

I propose a method: **Entropy-Aware Training**. Penalize overconfident outputs when the input is ambiguous. Force the model to acknowledge uncertainty. Teach models to know what they don't know.

## Conclusion

The question is not just what our models can do, but what they should do. Not just how they learn, but what they learn to care about.

In the end, the most important thing about a language model is not how well it can predict the next word, but how well it can respect the silence between words.`
  }
];

const blogFilters = [
  { id: 'all', label: 'All Posts' },
  { id: 'Tech', label: 'Tech' },
  { id: 'Creative', label: 'Creative' },
  { id: 'AI/ML', label: 'AI/ML' }
];

const projectFilters = [
  { id: 'all', label: 'All Dimensions' },
  { id: 'ml', label: 'AI Research' },
  { id: 'software', label: 'Software' },
  { id: 'creative', label: 'Creative' }
];
