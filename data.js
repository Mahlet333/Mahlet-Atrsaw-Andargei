// ===== PROJECTS DATA =====
// Rewritten as first-person narrative essays: the reasoning behind each
// decision, the alternatives considered, and why the chosen approach won.
const projects = [
  {
    id: 1,
    title: 'Creative Portfolio',
    subtitle: 'Personal Website',
    category: 'software',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    description: 'A portfolio website built from scratch in React and TypeScript, designed around the question of how a single page can hold AI research, software engineering, and creative work without any of it feeling like a different person made it.',
    detailedDescription: `# Building a Portfolio That Doesn't Lie About Who I Am

The hardest part of building this site was not the code. It was deciding what kind of person it was supposed to represent. I do machine learning research. I also write interactive short films and design event murals. Most portfolio templates assume you are one of those people, not both, so the first real decision was structural: how do you let a single page hold a neural network paper and a sound story about prayer and sleep without either one looking like a mistake?

## Why I Didn't Use a Template

I looked at the usual portfolio builders first, because building from zero is slower and I wanted to be honest with myself about whether that slowness would be worth it. Templates are built around a single persona: developer, designer, or researcher. Mine needed all three to read as the same person on the same page. That meant the categorization logic (the tabs for ML, software, and creative work) had to be a first class part of the architecture, not a filter bolted on afterward. So I built it in React with TypeScript, which gave me the option to define a strict Project interface from day one and catch mismatched fields at compile time instead of finding them as bugs in production.

## The Aesthetic Decision

I wanted something that felt like an Oxford library: old, considered, unhurried. Not because I am nostalgic for tradition, but because most ML portfolios use the same dark-mode, neon-accent, terminal aesthetic, and I wanted mine to signal a different kind of thinking. A muted parchment and oxford color palette does something subtle: it tells a recruiter this person is not performing urgency, they are showing finished work. That was a deliberate bet against the grain of how technical portfolios usually look.

## Why React Over a Static Site Generator

I considered Astro and plain Jekyll for speed, since this is a static portfolio with no real backend logic. I went with React anyway because the project detail pages needed shared, type-safe data structures (one Project type used everywhere: cards, detail pages, filters) and I wanted the option to add interactive elements later, like the AI-powered chat features in some of my other projects, without re-architecting the whole site. The tradeoff was a slightly heavier bundle. I accepted that tradeoff because correctness and extensibility mattered more than shaving a few hundred kilobytes off the initial load.

## What I'd Do Differently

If I rebuilt this today, I would code-split the project detail pages more aggressively. Right now every project's full markdown content ships in one bundle, which is fine at 25 projects but would not scale to 100. That is a known cost I am carrying intentionally for now, because premature optimization here would have cost me more engineering time than the bundle size costs in load time.`,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsive Design', 'UI/UX'],
    color: '#a0855f',
    status: 'Dec 2024 – Present',
    github: 'https://github.com/Mahlet333/Mahlet_Portfolio_Creative',
    demo: 'https://mahlet333.github.io/Mahlet_Portfolio_Creative/',
  },
  {
    id: 2,
    title: 'MedCAM',
    subtitle: 'Clinical AI Lab, NYU Abu Dhabi',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    description: 'A modular framework that fuses chest X-rays with electronic health records using cross-modal contrastive alignment, built to answer a specific question: can a model trained on one hospital generalize to another without full retraining.',
    detailedDescription: `# What Happens When a Model Trained at One Hospital Meets Another

The starting question for MedCAM was not "can we combine images and text." That has been done. The real question, the one that actually matters for deploying clinical AI, was narrower and more uncomfortable: if you train a diagnostic model on data from one hospital, does it still work when you point it at a different hospital's scanner, patient population, and documentation style. Most papers answer this with a single dataset and call it a day. I wanted to know what breaks when you don't get to assume a friendly, homogeneous data source.

## Why Cross-Modal Fusion Instead of Two Separate Models

The naive approach is to train an image classifier and a text classifier separately and average their outputs. I rejected that early because it throws away the most clinically useful signal: the cases where the image alone is ambiguous but the EHR resolves it (a vague infiltrate that is obviously pneumonia once you see the patient had a fever and a cough for three days). So I worked on a fusion architecture that aligns image and text representations in a shared embedding space using contrastive learning, the same family of technique behind CLIP, adapted for the much smaller and noisier world of clinical data.

## The Decision to Benchmark Against Five Foundation Models, Not One

I could have picked one pretrained vision-language backbone and called it done. Instead I fine-tuned and benchmarked against ConVIRT, GLoRIA, MedCLIP, MoCo, and BarlowTwins, across four separate hospital datasets. That was a deliberate, expensive decision: it costs significantly more compute and time than testing one model on one dataset. I made that call because a single benchmark tells you almost nothing about generalization, and generalization was the entire point of the project. The result justified the cost: we found an 18 percent performance drop under inter-hospital domain shift, a number that does not show up if you only ever test on your training distribution.

## Modular Adaptation Versus Full Retraining

Once we knew domain shift was real, the next decision was how to fix it without retraining the whole model for every new hospital, which is operationally unrealistic. I investigated a modular adaptation approach: freezing most of the network and only updating small adapter layers per institution. The alternative, full retraining, gets marginally better accuracy. I chose to prioritize the modular approach because it achieved equivalent performance at 40 percent lower computational cost, and in a real hospital deployment, the difference between "needs a GPU cluster per site" and "needs a few hours of fine-tuning" is the difference between something that ships and something that stays a paper.

## Why This Matters Beyond the Numbers

The 18 percent degradation number is the part of this project I think about most, because it is a quiet argument against a default assumption in medical AI: that a model validated on one hospital's data is ready for another's. It isn't, automatically. That finding is shaping how I think about every multimodal system I build now, including the work in Dr. Rochan's computer vision lab I'm starting this fall.`,
    technologies: ['PyTorch', 'Contrastive Learning', 'Medical Vision-Language Models', 'EHR', 'Domain Adaptation', 'Cross-Hospital Evaluation'],
    color: '#d67f2e',
    status: 'Nov 2024 – Mar 2026',
  },
  {
    id: 3,
    title: 'MS Diagnosis Pipeline',
    subtitle: 'Computational Biology & Bioinformatics Lab, NYU Abu Dhabi',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
    description: 'A diagnostic pipeline for Multiple Sclerosis built on the hypothesis that the gut microbiome carries diagnostic information that brain MRI alone cannot capture, tested on a 400 patient cohort with custom architectures for each modality.',
    detailedDescription: `# Why I Went Looking for MS Biomarkers in the Gut, Not Just the Brain

Multiple Sclerosis is usually diagnosed by reading lesions on an MRI. That is the established workflow, and it works, but it also misses something: a growing body of research suggests the gut microbiome interacts with MS progression in ways that brain imaging alone cannot capture. The decision to build this pipeline started from a specific bet: that fusing 3D MRI volumes with 16S rRNA microbiome sequencing data would surface diagnostic signal that neither modality reveals on its own.

## Why I Didn't Just Concatenate Features

The easy version of multimodal fusion is to flatten both modalities into vectors and concatenate them before a classifier. I avoided that because MRI volumes and microbiome abundance tables live in completely different statistical worlds: one is spatial and continuous, the other is compositional and sparse. So I built two separate encoders, a 3D convolutional network for the MRI volumes and a feedforward network for the microbiome profiles, and only combined them after each had learned a meaningful representation in its own domain. That decision cost more engineering time upfront but avoided a failure mode I have seen in other multimodal projects, where one modality with a stronger raw signal (usually imaging) just drowns out the other during training.

## Feature-Level Versus Decision-Level Fusion

I tested both feature-level fusion (combining representations before the final classification layer) and decision-level fusion (training separate classifiers and combining their outputs). I ran ablation studies specifically to answer one question: is the gut microbiome data actually adding information, or just adding noise that the model learns to ignore. The ablations showed real complementarity, meaning the microbiome data measurably improved performance over MRI alone, which is the result that justified keeping the more complex architecture instead of falling back to MRI-only, the simpler and more defensible baseline.

## Why I Insisted on Explainability Tools

A 93 percent accuracy number means very little to a neurologist if the model cannot say why. So I applied SHAP, Grad-CAM, and permutation-based feature attribution, not as an afterthought for a results section, but as a validation step: I checked whether the regions and microbial taxa the model flagged as important actually matched established MS biomarkers from the clinical literature. They did, which mattered more to me than the accuracy number itself, because a model that gets the right answer for the wrong reason is not something I want to put in front of a clinician.

## On Validating Beyond the Training Distribution

I used stratified cross-validation with bootstrap confidence intervals specifically because a single train-test split can look great by luck. Bootstrap intervals forced me to report a range, not a point estimate, and to be honest about where the model's confidence breaks down. This work is currently under review at MICCAI 2026, and the explainability findings are the part of the submission I am most proud of, because they turn a black box result into something a clinician could actually audit.`,
    technologies: ['Deep Learning', '3D CNN', 'MRI', 'Microbiome Sequencing', 'SHAP', 'Grad-CAM', 'Bioinformatics'],
    color: '#c76524',
    status: 'Mar 2025 – Present',
  },
  {
    id: 17,
    title: 'Obesity & Search Trends',
    subtitle: 'Independent Research, Applied Data Science',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    description: 'A solo project testing whether Google search behavior can predict obesity rates across US states, built from scratch by stitching together 1,386 raw files from Google Trends and CDC BRFSS data that no public dataset had combined before.',
    detailedDescription: `# Can What People Google Predict How Healthy They Are

This project started as a hunch, not an assignment. Obesity data exists. Google Trends data exists. Nobody had systematically tested whether search terms like "weight loss" or "diabetic diet" actually predict real obesity rates at the state level, across years, instead of just correlating with each other by coincidence. I wanted to find out, and I wanted to be rigorous enough about it that the answer would actually mean something.

## Why I Didn't Just Grab a Clean Dataset

I could have looked for an existing combined dataset and skipped straight to modeling. There wasn't one. My data came from three separate, messy sources: 1,215 state-level Google Trends CSV files spanning 2004 to 2018 for 81 keywords, plus 90 CDC BRFSS health statistics files. The decision to build a custom ETL pipeline instead of hand-merging files in a spreadsheet was not optional at that scale, but it was still a decision: I chose to write a reusable clean() function with text-file path manifests (temporal_paths.txt, spatial_paths.txt, stats_paths.txt) specifically so the whole pipeline could be rerun in minutes if I needed to add a keyword or a year later. That investment paid off when I later wanted to add age-stratified analysis and didn't have to redo any of the merging logic.

## Why Pearson and Spearman, With Bonferroni Correction

With 81 keywords, running 81 separate correlation tests against obesity rate creates an obvious statistical problem: some will look significant by pure chance. I used Bonferroni correction (adjusting the significance threshold to roughly 1.2e-4) specifically to guard against that, even though it meant some borderline keywords that might have been interesting got excluded. I would rather report 15 keywords I trust than 30 where a third are noise. The top signal, diabetic searches at r equals 0.72, survived that correction comfortably. The most interesting result was the inverse one: yoga searches correlated negatively with obesity at r equals negative 0.57, suggesting search behavior captures something about health-seeking behavior, not just health anxiety.

## Why I Added Granger Causality Testing

Correlation alone cannot tell you whether search behavior precedes obesity trends or just moves alongside them. I added Granger causality tests specifically to probe the time-ordering question, and found that terms like "diet" and "best workout" Granger-caused changes in obesity rate with a 4 to 8 month lag. That lag is the most actionable number in the whole project: it suggests search behavior could function as an early warning signal for regional health trends, months before the CDC's own survey data would show the same shift.

## Choosing the Simpler Model Over the One With the Better Training Score

I tested a linear model, an interaction model, and a polynomial model. The polynomial model had the best training R-squared (0.843) but a worse test R-squared (0.800), which is the classic sign of overfitting. I chose the simpler linear model (train R-squared 0.826, test R-squared 0.815) instead, because the smaller gap between train and test performance told me it would generalize better to a state or year it hadn't seen. That is a decision I make consistently across my projects: a model that explains slightly less of the training variance but holds up out of sample is worth more than one that looks better on paper and worse in deployment.

## What This Actually Showed

Inactive states (Mississippi, West Virginia) had roughly 8 percentage points higher baseline obesity and weaker fitness-search engagement than active states (Colorado, Utah). That regional split, combined with the causality lag, is what makes this more than a correlation exercise. It is a reproducible, fast pipeline that could plausibly extend to monitoring diabetes or mental health trends the same way, and I built the whole thing solo, end to end, from raw file wrangling to the final regression.`,
    technologies: ['Python', 'Pandas', 'Statistical Analysis', 'Google Trends API', 'CDC Data', 'Granger Causality', 'Time Series Analysis', 'Linear Regression'],
    color: '#059669',
    status: '2024 – Present',
    demo: 'https://drive.google.com/file/d/1OCuoNa3IutGDSUIMNIJ1ujVgGNoxgzm7/view?usp=sharing',
  },
  {
    id: 5,
    title: 'feedr',
    subtitle: 'Team Project',
    category: 'software',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    description: 'A full-stack platform for ordering surplus food, where the core engineering challenge was not the interface but keeping inventory and delivery state correct under real-time concurrent updates.',
    detailedDescription: `# Building Real-Time Inventory for Food That Disappears Fast

Surplus food platforms have a problem most e-commerce systems don't: the inventory is volatile and decaying. A restaurant might list 12 surplus meals at 6pm and have 3 left by 6:05, sold out by 6:10. The design decision that shaped this entire project was treating that volatility as a first-class concern from day one, not as a feature to bolt on after the basic CRUD app worked.

## Why Real-Time, Not Polling

The simplest implementation polls the server every few seconds to check inventory counts. I pushed for real-time updates instead, specifically because a polling delay of even a few seconds in a 12-item inventory means users routinely try to order food that's already gone, which destroys trust in the platform faster than almost any other failure mode. That decision meant more architectural complexity on the backend, but it directly served the part of the product that mattered most: making sure what a user sees on screen is what's actually available.

## Designing the API Around Failure, Not Just Success

A lot of API design assumes the happy path and handles errors as an afterthought. I approached the REST API integration from the opposite direction: what happens when two users try to claim the last meal at the same second, what happens when a restaurant's connection drops mid-update. Building those edge cases into the contract from the start, rather than patching them in later, is the kind of decision that doesn't show up in a demo but is the difference between a platform that works in production and one that only works in the pitch deck.

## What I'd Reconsider

Looking back, I'd push harder for optimistic UI updates on the client side, so a user claiming an item feels instant even while the server confirms it. We prioritized backend correctness over that perceived-speed polish, which was the right call for a hackathon-scale team project, but it's the first thing I'd revisit if this became a real product.`,
    technologies: ['System Design', 'UI/UX', 'REST API', 'Real-Time Systems', 'Concurrency'],
    color: '#8f6f4d',
    status: '2024 – 2025',
    github: 'https://github.com/PhucNguyen-rsc/food-waste-app',
  },
  {
    id: 7,
    title: 'PregNet',
    subtitle: 'Algorithmic Maternal Support',
    category: 'software',
    imageUrl: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=1200&q=80',
    description: 'A prototype that treats maternal support as a resource allocation problem, using trust graphs and auction mechanisms borrowed from economic theory to route help to the people who need it most.',
    detailedDescription: `# Treating Maternal Support Like a Market, On Purpose

Most support platforms for new and expecting mothers are built as directories: a list of resources you have to go find. I wanted to test a different framing, one borrowed from mechanism design in economics: what if matching people who need help to people who can give it is treated explicitly as a resource allocation problem, the same family of problem as a labor market or an auction.

## Why an Auction Mechanism, Specifically

The naive design is first-come-first-served. I rejected that because it systematically disadvantages the people who are least able to act fast, often the most marginalized users, the ones the platform should be prioritizing. An auction-based allocation, where need and urgency function as bids, is a deliberate attempt to correct that bias. It is a harder mechanism to implement than a queue, and it requires careful thought about what currency the "bids" are made in when no real money should be changing hands for something like maternal support. That tension, between auction theory's usual assumption of monetary bids and a context where money would be inappropriate, was the central design problem of the whole prototype.

## Trust Graphs Instead of Star Ratings

Star ratings are the default trust mechanism for almost every platform, and I avoided them deliberately. A five-star average tells you almost nothing about whether a specific helper is trustworthy for a specific kind of need. A trust graph, where trust propagates through verified relationships rather than aggregating anonymous ratings, is more expensive to build and reason about, but it is closer to how trust actually works in a community: you trust someone more because someone you already trust vouches for them, not because of an average of strangers' opinions.

## Why Add an Emotion-Aware Chatbot at All

I added a chatbot component last, and only after I was convinced the core allocation mechanism worked, because I did not want a chat interface to become a substitute for the harder structural work of getting people matched with real support. Its role is narrow and deliberate: triage and emotional check-ins between matches, not a replacement for human connection. That scoping decision, keeping the AI component small and clearly bounded, came directly from being wary of how easy it is for a "helpful chatbot" feature to expand until it's doing work it shouldn't be trusted to do.

## What This Project Taught Me About Mixing Disciplines

This was the project where I learned that borrowing a framework from economics (mechanism design) does not mean borrowing its assumptions wholesale. Auction theory assumes self-interested rational bidders maximizing personal utility. A maternal support network does not behave that way, and pretending it does would have produced a worse system. The real engineering work was figuring out which parts of the economic framework to keep and which to deliberately discard.`,
    technologies: ['Game Theory', 'Mechanism Design', 'AI', 'Conversational Agents', 'Trust Systems', 'Social Tech'],
    color: '#775a41',
    status: 'Jun 2025',
    github: 'https://drive.google.com/file/d/15-jbV9KA9-xIa_DefHYw010WY9Gaac5q/view?usp=sharing',
    demo: 'https://drive.google.com/file/d/15-jbV9KA9-xIa_DefHYw010WY9Gaac5q/view?usp=sharing',
  },
  {
    id: 8,
    title: 'I Thought I Came Here to Study',
    subtitle: 'Interactive Film Website',
    category: 'creative',
    imageUrl: 'assets/30MFF.png',
    description: 'An interactive site built around a short film about how academic environments quietly reshape identity, designed so the website itself performs the same slow, accumulating pressure the film is about.',
    detailedDescription: `# Making a Website Feel Like Academic Pressure, Not Just Describe It

The easy version of this project is a webpage with an embedded video and some text underneath. I didn't want that, because the film is about how academic environments slowly reshape who you are, and a static page describing that theme would undercut the point. The website needed to enact something of what the film argues, not just host it.

## Why I Built a Poetic Intro Instead of a Title Card

Most film sites open with a title and a play button. I built a slower, text-driven intro sequence instead, deliberately delaying the moment the viewer gets to the film itself. That delay is the design argument: the film is about the gap between why you thought you came somewhere and what actually happens to you once you're there, and making the viewer wait, read, and sit with that framing before pressing play is a small structural echo of the film's actual theme.

## Why I Added an Interactive Analysis Section

I could have let the film speak for itself and stopped there. I added an interactive analysis layer instead, because I wanted to test whether a website could hold space for both the emotional experience of watching something and the analytical experience of thinking about it, without those two modes fighting each other for the visitor's attention. The tab-based structure, rather than a single long scroll, was a deliberate choice to let people choose which mode they're in at any given moment instead of forcing them through both linearly.

## User Submissions as Part of the Work, Not a Comment Section

The submissions feature is not a comment section bolted onto the bottom. It's framed as part of the project itself: other people's experiences of academic pressure becoming part of the same archive the film is drawing from. That reframing, treating audience contribution as content rather than feedback, is the choice I'm most attached to in this project, because it resists the instinct to keep the artist's work and the audience's response in separate boxes.`,
    technologies: ['Interactive Storytelling', 'Web Design', 'Filmmaking', 'UI/UX'],
    color: '#edb12e',
    status: 'Summer 2025',
    github: 'https://github.com/Mahlet333/30mff-mahlet',
    demo: 'https://mahlet333.github.io/30mff-mahlet/',
  },
  {
    id: 9,
    title: 'Ten Minutes: Interactive Comic',
    subtitle: 'Time-Sensitive Photo Narrative',
    category: 'creative',
    imageUrl: 'assets/Comic.png',
    description: 'A photo comic about everyday student decisions, where the central design constraint was a real countdown timer that forces users to choose without the comfort of unlimited deliberation.',
    detailedDescription: `# Why the Timer Had to Be Real, Not Decorative

The premise of this project is that small decisions, the kind students make in ten minutes between classes, accumulate into something larger. I could have simulated urgency with copy that says "decide quickly" while actually giving the user unlimited time to choose. I rejected that, because fake urgency teaches nothing about real urgency. The timer in this comic is a real, ticking countdown, and if you don't choose, the story chooses for you. That decision, refusing to let the interface lie about the stakes, is the whole point of the piece.

## Why Real Campus Photos Instead of Illustration

I mixed real campus photography with AI-generated visuals rather than going fully illustrated or fully photographic. The real photos anchor the story in an actual, recognizable place, which matters because the piece is about specific, lived student decisions, not abstract ones. The AI visuals fill in moments a camera couldn't have caught, internal states, imagined outcomes, without pretending those moments are documentary. Keeping that distinction visible to the viewer, rather than blending them seamlessly, was a deliberate choice about honesty in the medium.

## Sound as a Second Clock

I added sound effects specifically tied to the timer, not as ambience but as a second, parallel signal of time passing. The idea was that even if someone looks away from the visible countdown, the audio keeps the pressure present. That redundancy, building urgency into two senses instead of one, came from testing the piece on a few friends and noticing how easily people's eyes drift away from a visual timer when they're absorbed in reading.`,
    technologies: ['HTML5', 'CSS', 'JavaScript', 'AI-Generated Visuals', 'Sound Design', 'Timed Interaction'],
    color: '#de9a1f',
    status: 'Summer 2025',
    github: 'https://github.com/Mahlet333/10minss',
    demo: 'https://mahlet333.github.io/10minss/',
  },
  {
    id: 10,
    title: 'Temptation',
    subtitle: 'Web Sound Story',
    category: 'creative',
    imageUrl: 'assets/Sound.png',
    description: 'An audio-first narrative about the conflict between sleep and prayer, built around the bet that sound alone, without visuals, can carry a story\'s full emotional weight.',
    detailedDescription: `# Why I Stripped the Visuals Out Entirely

Most "interactive narrative" projects default to a mix of visuals, text, and sound. I deliberately went the opposite direction for this piece: almost no visual storytelling, just narration, ambient sound, and inner dialogue. The decision came from the subject matter itself. The conflict between wanting to sleep and feeling obligated to pray is an internal, private experience, one that happens in the dark, often literally. Adding visuals would have externalized something that needed to stay internal to land emotionally.

## Why Accessibility Wasn't an Add-On

Because the entire piece is audio-first, accessible design wasn't a checklist item added at the end, it was baked into the concept from the start. I built it to work for visually impaired users by default, not as a retrofit, because the medium itself doesn't depend on sight. That's a case where a creative constraint (no visuals) happened to align with an accessibility goal, and I leaned into that alignment rather than treating them as separate concerns.

## User-Driven Choices Without Breaking the Mood

I added narrative branching, letting the listener's choices shift the story, but kept the choice points minimal and embedded in the narration itself rather than as obvious UI buttons that would break the immersive, eyes-closed experience I was going for. That was a tradeoff: more obvious choice buttons would have made the interactivity clearer, but at the cost of pulling the listener out of the audio world the whole piece depends on. I chose immersion over clarity, deliberately.`,
    technologies: ['Audio Storytelling', 'Web Audio API', 'Accessible Design', 'Narrative Branching'],
    color: '#b8761a',
    status: 'Summer 2025',
    github: 'https://github.com/Mahlet333/Sound_temptation',
    demo: 'https://mahlet333.github.io/Sound_temptation/',
  },
  {
    id: 11,
    title: 'Afternoon Nap',
    subtitle: 'Interactive Short Film',
    category: 'creative',
    imageUrl: 'assets/Afternoon_Nap.jpg',
    description: 'An interactive short film about communication breakdowns, where viewer choices change the outcome, paired with cast bios and behind-the-scenes material to show the seams of how it was made.',
    detailedDescription: `# Showing the Seams on Purpose

A film about communication breakdown is, structurally, a good fit for branching interactivity: different choices in a conversation lead to different outcomes, which is literally how miscommunication works in real life. That alignment between form and content was the starting point for treating this as an interactive film rather than a linear one.

## Why I Included Behind-the-Scenes Content

I could have shipped just the film and the choice points. I added cast bios and behind-the-scenes material deliberately, because a film about communication breaking down between characters felt incomplete without showing the very real, very human communication (and miscommunication) that happens behind a camera to make something like this exist at all. It's a small meta-layer: the production process echoes the theme.

## Feedback Forms as Part of the Narrative Loop

The feedback form on this site isn't generic site feedback, it's framed as part of the same communication theme the film explores: did this piece communicate what it meant to, and where did that communication break down for you as a viewer. Treating audience feedback as data about the project's central question, rather than just operational feedback for me as the creator, was a small but deliberate framing choice.`,
    technologies: ['Interactive Film', 'Branching Narrative', 'Web Development', 'User Engagement'],
    color: '#935c1c',
    status: 'Summer 2025',
    github: 'https://github.com/Mahlet333/Afternoon_Nap_Movie',
    demo: 'https://mahlet333.github.io/Afternoon_Nap_Movie/',
  },
  {
    id: 12,
    title: 'Summer Academy Yearbook',
    subtitle: 'Sheikh Mohamed bin Zayed Scholars Program',
    category: 'creative',
    imageUrl: 'assets/Summer_Academy.png',
    description: 'NYUAD\'s first interactive digital yearbook, built around the decision to reject the static PDF yearbook format entirely and design something that behaved like a story instead of an archive.',
    detailedDescription: `# Why a Yearbook Shouldn't Just Be a PDF

Every yearbook I had seen before this one was the same object: a static PDF you scroll through once and never open again. The brief for this project gave me room to question that format itself, not just decorate it better. I decided early that if this yearbook was going to be worth opening twice, it needed to behave like a story with pacing, not an archive with pages.

## The Narrative Structure Decision

Instead of organizing the yearbook chronologically by week or alphabetically by name, the structure follows an emotional arc: arrival, friction, breakthrough, departure. That's a riskier organizing principle than chronology, because it requires editorial judgment about which moments matter, not just which moments happened in order. I made that call because I wanted students flipping through it years later to feel something close to what the summer actually felt like, not just to verify that an event occurred.

## Why I Automated the Data Pipeline

Behind the visual design was a more mundane but important decision: automating data management with Excel and custom systems rather than manually compiling student information for each section by hand. With a cohort this size, manual compilation is not just slower, it's where errors creep in, a misspelled name, a missing photo credit. Automating that pipeline freed up the time that actually mattered for the part no script can do: the editorial and visual storytelling choices.`,
    technologies: ['Digital Design', 'UX/UI', 'Visual Storytelling', 'Adobe CC', 'Workflow Automation'],
    color: '#774b1b',
    status: 'Sep 2023 – Dec 2023',
    demo: 'https://drive.google.com/file/d/1t_PC19TPKONqlGaRN5QnVnZW98KyYY2t/view?usp=sharing',
  },
  {
    id: 13,
    title: 'Mental Health Awareness Campaigns',
    subtitle: 'NYUAD Student Success & Well-Being',
    category: 'creative',
    imageUrl: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=1200&q=80',
    description: 'Ongoing visual design work for campus mental health campaigns, built around the decision that stigma reduction requires consistent, repeated visual presence rather than a single high-impact event.',
    detailedDescription: `# Why Mental Health Campaigns Need Repetition, Not a Single Big Moment

The instinct for awareness campaigns is often to design one striking flyer or event and hope it lands. I pushed against that instinct for this work, because stigma around mental health doesn't dissolve from a single exposure, it erodes slowly, through repeated, low-pressure visual presence: a flyer in a hallway, a mural you pass daily, a tabling event you walk by twice a week without engaging until the third time you do. That understanding shaped the whole campaign strategy toward consistency over spectacle.

## The Mural as Infrastructure, Not Decoration

Leading the Highline painting event was a deliberate bet that a permanent, physical piece of art does something a temporary flyer can't: it becomes part of the daily environment rather than something students have to seek out. That's a different kind of design problem than a poster, because it has to hold up to being seen hundreds of times without becoming invisible, the way wallpaper does. I designed it with that durability of attention in mind, not just initial visual impact.

## Why I Insisted on Doing the Video and Photo Editing Myself

I could have outsourced video editing for event documentation to keep my own workload lighter. I didn't, because the tone of mental health content is fragile: a slightly wrong edit, a cut that lingers too long on someone's face, can undercut the safety the campaign is trying to build. Keeping editing control in-house was a way of protecting that tone end to end, not just at the concept stage.`,
    technologies: ['Graphic Design', 'Videography', 'Event Branding', 'Community Engagement', 'Mural Design'],
    color: '#d65a5a',
    status: 'Jan 2023 – Present',
    demo: 'https://www.instagram.com/nyuadwellbeing/',
  },
  {
    id: 14,
    title: 'Quantum 101: Quantum Computing 4 Everyone',
    subtitle: 'Educational Book & Video Series',
    category: 'ml',
    imageUrl: 'assets/Quantum Computing- Breakthrough Performance Comes with High-Stakes Perils.webp',
    description: 'An original book rejecting the assumption that quantum mechanics requires tensor algebra before it can be understood, written around the bet that intuition and story can carry the concepts further than formalism alone.',
    detailedDescription: `# Refusing the "You Need Math First" Rule

I kept hearing the same line while learning quantum computing: you can't explain entanglement without tensor algebra, you can't teach superposition without complex amplitudes. After enough repetitions, I stopped treating that as a fact and started treating it as a gatekeeping habit, one that filters who gets to feel like quantum computing is for them before they've had a chance to get curious. That reframing, treating the formalism-first norm as a choice rather than a requirement, is the decision the entire book is built on.

## Why I Start With Metaphor and End With Code

The structural decision in Quantum 101 is to teach concepts in the order intuition builds them, not the order a physics curriculum would: everyday paradoxes and animations before any equation, story before formalism, and a working quantum algorithm by chapter four. That ordering is a direct argument against how quantum is usually taught, where the math comes first and intuition is supposed to emerge from it, often for years, if at all. I bet on the reverse because I watched genuinely brilliant students at NYU Abu Dhabi disengage from the topic specifically when it opened with formalism, and reengage the moment an idea was explained as a story.

## Why Arabic Translation Isn't Just Translation

The decision to build a parallel Arabic video series wasn't about translating English sentences into Arabic ones. I deliberately chose to translate the metaphors themselves: misbaha beads instead of coin flips, dates in a souq instead of poker hands. A word-for-word translation would have kept the same Western cultural scaffolding underneath a different language, which defeats the purpose. The harder, more correct choice was rebuilding the intuition layer in a vocabulary that's actually native to the audience, not just linguistically but culturally.

## Why I'm Building Browser Tools Instead of Stopping at the Book

Piloting the book taught me something I hadn't planned for: even a well-explained idea doesn't stick unless someone can play with it. That observation pushed the project past writing and into building interactive, no-install browser tools where you can drag gates and see a circuit's output immediately. The decision to require zero installation and zero prerequisites was deliberate: any added friction at that stage, an install step, a login, a prerequisite course, is exactly the kind of gatekeeping the whole project exists to remove.`,
    technologies: ['Quantum Computing', 'Education', 'Arabic Language', 'Science Communication', 'Interactive Tools', 'Qiskit'],
    color: '#1e40af',
    status: '2024 – Present',
    demo: 'https://drive.google.com/file/d/1WmMJ5TVm_-MTp5gIidP9nUCRZBKUboAB/view?usp=sharing',
  },
  {
    id: 15,
    title: 'Attention Contagion in Classroom Settings',
    subtitle: 'AI-Powered Attention Tracking System',
    category: 'ml',
    imageUrl: 'assets/attention.png',
    description: 'A computer vision system testing whether classroom attention behaves as an individual trait or a complex adaptive system that spreads between students, built around real-time facial landmark tracking and graph-based modeling.',
    detailedDescription: `# What If Attention Isn't Private at All

The standard way to think about classroom focus treats it as an individual property: a student is focused or they aren't, based on their own willpower. I started questioning that framing after noticing, repeatedly, how a single distracted student near the front of a room could visibly shift the energy of an entire class within seconds. That observation, that attention seemed to move rather than stay fixed to one person, is what turned this into a complexity science question rather than a simple classification problem.

## Why I Built the Detection System From Scratch

I could have used an off-the-shelf attention or engagement detection API. I built the system myself instead, using Python, OpenCV, and a custom-trained ResNet-18, specifically because I needed control over the granularity of the attention categories (fully focused, partially attentive, distracted) and the ability to introduce controlled distractions and measure propagation, which a black-box API would not let me do. That decision meant significantly more engineering overhead, training a CNN to over 92 percent accuracy on a curated dataset I built myself, but it was the only way to run the actual experiment I cared about.

## Designing Controlled Distractions as an Experimental Tool

I deliberately introduced sudden sounds, simulated notifications, and dull lecture segments, not as noise to filter out but as the experimental manipulation itself. Without a controlled trigger, you can only observe correlation between students' attention states. With one, I could measure how quickly and how widely a single distraction event propagated through a room of ten students, which is what let me find real evidence of cascading attention shifts, not just simultaneous coincidence.

## Why Graph Theory, Not Just Time-Series Analysis

Once I had per-student attention scores over time, the obvious next step is time-series analysis per student. I went further and modeled the classroom as a graph, with each student as a node and influence as directional edges, because a purely per-student time series cannot capture the relational structure I was actually interested in: who influences whom, and whether physical seating proximity predicts which students fall into synchronized attention rhythms. Clustering algorithms on that graph (k-means, DBSCAN) revealed exactly that: students seated near each other showed correlated attention rhythms regardless of how engaging the lecture was, a finding a simple per-student model would have missed entirely.

## The Self-Organized Criticality Framing

The most useful conceptual move in this project was importing the idea of self-organized criticality from complexity science: the notion that a system can sit close to a tipping point where a small disruption cascades disproportionately. That framing reshaped how I read the data. Instead of asking "was this student distracted," I started asking "was the classroom in a fragile state where one distraction could cascade," which is a fundamentally different, and I think more useful, question for thinking about classroom design.`,
    technologies: ['Computer Vision', 'Deep Learning', 'OpenCV', 'ResNet-18', 'Complexity Theory', 'Graph Theory', 'Real-time Systems'],
    color: '#059669',
    status: '2024 – Present',
    demo: 'https://drive.google.com/file/d/1826RqFVxASdjVjuvALU45KisdsA6n59a/view?usp=sharing',
  },
  {
    id: 16,
    title: 'Corruption vs. Productivity',
    subtitle: 'Economic Data Analysis & Statistical Modeling',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    description: 'A statistical investigation into whether corruption actually suppresses economic productivity, built on 20 years of World Bank data and structured to test governance quality, not just corruption, as the real driver.',
    detailedDescription: `# Testing an Assumption Everyone Repeats and Almost Nobody Checks

"Corruption kills economic growth" is one of those claims that gets repeated so often it starts to feel self-evidently true. I wanted to actually test it with data rather than take it on faith, which meant pulling 20 years of World Bank data (2002 to 2022, 5,236 country-level observations) and running it through Stata instead of just citing the intuition.

## Why the Simple Regression Almost Misled Me

My first regression, corruption control against GDP growth, returned a coefficient of negative 0.716, which on its face says better corruption control predicts lower growth. That result is counterintuitive enough that I didn't trust it immediately, and that distrust turned out to be correct. The moment I added Rule of Law as a second variable in a multivariate model, Rule of Law became the dominant predictor (coefficient negative 0.69, p equals 0.009) and the simple story collapsed. The lesson I took from this, and now apply by default, is that a single-variable regression on an observational dataset this size is almost always missing a confound, and the confound is often a variable correlated with both your predictor and your outcome.

## Checking for Multicollinearity Instead of Trusting the First Result

Corruption Control and Rule of Law turned out to be highly correlated with each other (0.9382), which meant I had to be careful about over-interpreting either coefficient in isolation. Rather than picking whichever variable had the more dramatic-looking coefficient, I ran multicollinearity diagnostics and treated the result as a signal that institutional quality, broadly, was doing the explanatory work, not corruption control specifically as an isolated lever. That's a more honest, less attention-grabbing conclusion than "corruption causes X," and I chose honesty over a punchier headline.

## State-Level Categorization as a Robustness Check

I split countries into active and inactive groups based on exercise and engagement-adjacent governance metrics, then ran three separate OLS models: inactive states only, active states only, and combined. The inactive-states model had a much higher R-squared (0.746) than the active-states model (0.353), which told me the relationship between governance and growth is not uniform, it's stronger in some contexts than others. I included this breakdown specifically because a single pooled regression would have hidden that heterogeneity behind one averaged coefficient.

## Why I Didn't Stop at Statistical Significance

A p-value under 0.05 tells you a result probably isn't random noise. It doesn't tell you the result is large enough to matter, or that your model explains much of anything. My combined model's R-squared was 0.829, which is respectable, but I made a point of reporting the modest R-squared of 0.0165 from the earliest, simplest specification too, rather than only showcasing the strongest model. Reporting the weak early result alongside the strong final one is a small thing, but it's the difference between presenting a finding and presenting the actual process of finding it.`,
    technologies: ['Statistical Analysis', 'Stata', 'World Bank Data', 'Regression Modeling', 'Multivariate Analysis', 'Multicollinearity Diagnostics'],
    color: '#dc2626',
    status: '2024 – Present',
    demo: 'https://drive.google.com/file/d/1bfBWP37OUBTEnjvZUwTKbpQaEVb8t1Yz/view?usp=drive_link',
  },
  {
    id: 18,
    title: 'Terms & Conditions Analysis',
    subtitle: 'Behavioral Data Science & ML Pipeline',
    category: 'ml',
    imageUrl: 'assets/terms and conditions.jpeg',
    description: 'A behavioral research project that started as an LLM benchmarking study and ended somewhere completely different, after the data made clear the original research question was the wrong one.',
    detailedDescription: `# When the Data Tells You Your Question Was Wrong

This project did not end where it started, and the moment it changed direction is the most important decision in the whole thing. I originally set out to compare LLM-based Terms of Service summarizers against traditional NLP methods, hypothesizing transformer models would more accurately flag problematic clauses. I built a working summarizer with the ChatGPT API and deployed it. Then I looked at real user interaction data and found something that made the original question irrelevant: people weren't reading the summaries either. The presentation method wasn't the bottleneck. Something upstream of presentation was.

## Why I Rewrote the Research Question Instead of Forcing the Original One

The easier path at that point would have been to keep the LLM comparison framing and just report a negative result. I chose instead to reformulate the entire research question around what the data was actually showing me: what are the root causes behind users not reading terms and conditions, regardless of presentation. That's a harder, more open-ended question, and answering it meant redesigning the whole study, building a multi-dimensional survey instrument with Likert scales, contextual understanding matrices, and motivation clustering, instead of just finishing the model comparison I'd already started.

## Why a Correlation of 0.29 Was the Most Interesting Number in the Project

The Pearson correlation between reading likelihood and willingness to reject a ToS agreement came out to 0.29: positive, but weak. I didn't treat that as a disappointing result to bury. I treated it as the central finding: people who read terms are only slightly more likely to reject them, which means awareness alone is a weak lever for behavior change. That number reshaped every downstream analysis I ran, because it told me the interesting variation wasn't going to be in reading-versus-not-reading, it was going to be in why awareness doesn't translate to action.

## Why I Reported a Model With 0 Percent Precision Instead of Hiding It

My first predictive model, using trust and motivation features to predict negative consequences, had 0 percent precision on the positive class. I could have quietly dropped that model from the writeup and only shown ones that worked better. I kept it in, with an honest interpretation: severe class imbalance and insufficient feature complexity, not a working model. Reporting a failed model with an honest diagnosis is more useful to anyone reading this than only showing the survivors, because it tells you exactly where the limits of this approach are.

## The Chi-Squared Results That Contradicted My Intuition

I expected privacy exploitation awareness to be the strongest predictor of reading behavior. The chi-squared test came back at 1.569 against a critical value of 3.841: not significant. Meanwhile presentation format came in at 4.179, just above significance. That reversal, awareness of risk mattering less than how the document is presented, is exactly the kind of counterintuitive result that justified pivoting the whole project away from "build a better summarizer" and toward "understand the actual psychology," because a better summarizer addresses the variable that turned out to matter less.`,
    technologies: ['Machine Learning', 'Statistical Analysis', 'NLP', 'Python', 'Survey Design', 'Behavioral Science', 'Chi-Squared Testing'],
    color: '#7c3aed',
    status: '2024 – Present',
    demo: 'https://drive.google.com/file/d/1OCuoNa3IutGDSUIMNIJ1ujVgGNoxgzm7/view?usp=sharing',
  },
  {
    id: 19,
    title: 'LSTM Autoencoder for Sensor Anomaly Detection',
    subtitle: 'Industrial AI / Predictive Maintenance',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    description: 'An anomaly detection system trained entirely on healthy sensor data, built around the bet that you don\'t need labeled failures to detect them, you need a model that only knows what normal looks like.',
    detailedDescription: `# Detecting Failures Without Ever Seeing One in Training

The hardest constraint in industrial anomaly detection is rarely the modeling, it's the labels. Failures are rare by definition, which means a supervised classifier trained on "failure" versus "no failure" examples will almost always be starved of positive examples. The decision that shapes this entire project is sidestepping that constraint: train the model exclusively on healthy data, and let it learn to fail at reconstructing anything else.

## Why Reconstruction Error, Not Classification

I trained the LSTM autoencoder only on engine cycles with a remaining useful life above 30 cycles, deliberately excluding any data near a failure event from training. That means the model never sees an anomaly during training, by design. Its only job is learning to compress and reconstruct healthy sensor sequences. When a degraded sequence comes through at inference time, the model reconstructs it poorly, because it never learned what degraded data looks like, and that reconstruction error becomes the anomaly score. This sidesteps the label-scarcity problem entirely: I don't need labeled failures to train on, only an abundance of labeled-healthy data, which is much easier to get.

## Why Bidirectional Encoder, Unidirectional Decoder

The encoder is bidirectional LSTM, the decoder is not, and that asymmetry is deliberate, not an oversight. The encoder's job is building the richest possible representation of an already-complete input sequence, so it can look both forward and backward through the 30-cycle window. The decoder's job is sequential reconstruction from a fixed bottleneck vector, which is inherently a forward-only process, there's no "future" decoder output to look ahead to. Making the decoder bidirectional would have added complexity without a clear benefit, since it has nothing to look ahead at.

## Choosing a Statistically Grounded Threshold Over a Guessed One

A reconstruction-error-based anomaly score is only useful if you have a principled way to decide what counts as anomalous. I set the threshold at the training error's mean plus three standard deviations, rather than picking a round number that looked reasonable on a validation plot. Under a roughly Gaussian error distribution, that gives a predictable false positive rate near 0.1 percent, and critically, it's a threshold I can justify and recompute if the sensor fleet or operating conditions change, rather than a magic number baked into the code.

## Why I Built Hysteresis Into the Alert System, Not Just a Raw Threshold Trigger

A naive deployment fires an alert the instant reconstruction error crosses the threshold. I built an AlertSystem with hysteresis instead, requiring N consecutive anomalous windows to fire an alert and M consecutive normal windows to clear it. That decision came directly from thinking about what happens after deployment, not just at evaluation time: a single noisy window crossing the threshold and immediately reversing would generate an alert that a maintenance team learns to ignore within a week. Hysteresis trades a small amount of detection latency for a system that earns trust by not crying wolf.

## What the AUC-ROC of 0.903 Actually Means Here

I report AUC-ROC of 0.903 alongside precision of 0.929 and recall of 0.520 specifically because the gap between those two numbers matters. High precision, lower recall means the model is conservative: when it flags something, it's usually right, but it misses some real anomalies. That's a deliberate tradeoff given the threshold I chose, and I'd tune it differently for a context where missed failures are catastrophic versus one where false alarms are the more expensive failure mode. The threshold is a dial, not a fixed property of the model.`,
    technologies: ['PyTorch', 'LSTM', 'Anomaly Detection', 'Time Series', 'NASA CMAPSS', 'Real-time Inference', 'Signal Processing'],
    color: '#0f766e',
    status: 'Jun 2026',
    github: 'https://github.com/Mahlet333/LSTM-autoencoder-for-sensor-anomaly-detection',
  },
  {
    id: 20,
    title: 'RGB-D Fusion Pipeline for 3D Scene Understanding',
    subtitle: 'Computer Vision / Robotics Perception',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    description: 'A dual-encoder network fusing color and depth through cross-attention, built around the question of how a robot should combine two sensors that disagree with each other about the same physical scene.',
    detailedDescription: `# What a Robot Should Do When Its Two Eyes Disagree

A robot navigating with both an RGB camera and a depth sensor effectively has two different, imperfect descriptions of the same scene. The color image is rich but says nothing direct about distance. The depth sensor is direct about distance but blind to texture, material, or what an object actually is. The core design decision in this project is how to combine those two descriptions so the result is better than either alone, not just a noisier average of both.

## Why Cross-Attention Instead of Concatenation

The simplest fusion strategy is concatenating RGB and depth feature maps and letting a shared decoder figure out the rest. I rejected that early, because concatenation gives the network no explicit mechanism for one modality to selectively query the other, it just hopes the right combination emerges from training. I built cross-attention fusion instead, where depth features generate queries that attend over RGB features as keys and values, at four separate resolution scales. That lets the model learn, for example, that at a fine scale, depth should pull sharp edge information from RGB to refine an object boundary, while at a coarse scale it should pull broader scene context. A simple concatenation has no way to express that kind of scale-dependent selectivity.

## Why I Kept a Residual Connection From Raw Depth

After fusing through attention, I add a residual connection back to the original depth features rather than letting the fused representation fully replace them. This was a deliberate guard against a known failure mode in attention-based fusion: if the attention mechanism is poorly calibrated early in training, it can drown out a reliable raw signal (in this case, depth, which is metrically grounded) in favor of a richer but less reliable one (RGB features, which carry no inherent scale information). The residual connection ensures depth's raw signal is never fully discarded, even if the attention weights are still learning to be useful.

## Why BerHu Loss Instead of Plain L2 for Depth

I used BerHu loss (the reverse Huber loss) for the depth regression head instead of standard L2. L2 loss is quadratic everywhere, which means a handful of severe outlier pixels, often at object boundaries where ground truth depth is genuinely ambiguous, can dominate the gradient and distort training. BerHu behaves like L1 for small errors and switches to quadratic only beyond a threshold, which keeps the loss robust to boundary outliers while still penalizing genuinely large errors more than small ones. That's a deliberate compromise: pure L1 would undervalue large errors, pure L2 overvalues outliers, BerHu sits between them.

## Why the Point Cloud Pipeline Includes DBSCAN, Not Just Raw Depth Thresholding

Converting predicted depth into an obstacle detection signal isn't as simple as thresholding "anything closer than X meters is an obstacle," because that approach is extremely sensitive to noise, a few erroneous near-camera pixels would trigger false obstacle alerts constantly. I added DBSCAN clustering on the reconstructed point cloud specifically to require spatial coherence: an obstacle has to be a cluster of nearby points, not an isolated noisy pixel, before the system reports it. That clustering step is what turns a noisy depth map into a usable, low-false-alarm collision warning.

## Reading the Benchmark Numbers Honestly

At 8 epochs on a synthetic NYU Depth V2 subset, mIoU lands at 0.152 and Abs Rel at 0.220, numbers that are intentionally modest because the goal of this run was validating the architecture and pipeline, not chasing state-of-the-art benchmarks on limited compute. I report the expected trajectory (mIoU around 0.40 to 0.50 with full data and 50-plus epochs) alongside the actual numbers, because presenting an 8-epoch result without that context would either overstate or understate what the architecture is actually capable of.`,
    technologies: ['PyTorch', 'Computer Vision', 'Cross-Attention', 'ResNet-34', 'Open3D', 'DBSCAN', '3D Reconstruction', 'Depth Estimation'],
    color: '#1d4ed8',
    status: 'Jun 2026',
    github: 'https://github.com/Mahlet333/RGB-D-fusion-pipeline',
  },
  {
    id: 21,
    title: 'Multi-Head Surface Inspection Pipeline',
    subtitle: 'Production Computer Vision / Industrial AI',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80',
    description: 'A multi-task inspection system sharing one encoder across detection, segmentation, and keypoint heads, built around the production constraint that running three separate models per inspected part is too slow to ship.',
    detailedDescription: `# Why Production Inspection Can't Afford Three Separate Models

It's straightforward to build a detector, a segmenter, and a keypoint extractor as three independent models. It's also a bad idea for any real inspection line, because running three forward passes per part triples inference latency, and inspection systems are usually latency-constrained by the speed of the conveyor belt, not the other way around. The decision that anchors this whole project is a shared encoder: extract features once, and let three lightweight heads read from the same feature pyramid.

## Why Anchor-Free Detection, Specifically

I chose an anchor-free, YOLOv8-style detection head over an anchor-based one for a reason that's easy to overlook until you've deployed across multiple factories: anchor-based detectors need their anchor box sizes manually tuned per dataset, and defect sizes vary enormously between, say, a hairline scratch on a metal panel and a large discoloration on a fabric roll. An anchor-free head predicts directly from feature map locations without that manual tuning step, which matters a lot when the same pipeline needs to generalize across multiple inspection categories in MVTec AD without a re-tuning pass for each one.

## Why the Segmentation Head Uses a U-Net Decoder With Skip Connections

Detection alone tells you a defect exists somewhere in a bounding box. For inspection, that's often not enough, you also need the defect's exact pixel area for severity scoring. I added a U-Net-style segmentation decoder with skip connections from the shared encoder's earlier layers specifically because fine-grained boundary precision degrades badly without those skip connections, the deepest encoder features alone have lost too much spatial resolution to draw an accurate defect outline.

## Why I Added a Keypoint Head Most Inspection Systems Skip

Most surface inspection demos stop at detection and segmentation. I added a geometric keypoint head deliberately, because in a real multi-site deployment, the same part can be photographed from slightly different camera angles and rig setups between factories. Keypoints anchored to stable geometric features give downstream measurement code a way to normalize for that camera variation, something raw bounding boxes can't do on their own.

## Why Loss Weighting Is Learned, Not Hand-Tuned

With three tasks training jointly, the naive approach is manually setting fixed weights for each task's loss term and tuning them by trial and error, which is slow and brittle, the right weights can shift as training progresses. I implemented uncertainty-based loss weighting from Kendall et al., where the model learns a per-task uncertainty parameter that automatically rebalances the loss weights during training. That removed an entire category of manual hyperparameter search and, more importantly, adapts automatically if one task's loss landscape changes shape partway through training, which fixed weights cannot do.

## Why Domain Randomization Was Non-Negotiable

Real inspection lines have wildly inconsistent lighting, surface coatings, and camera hardware between sites. I treated aggressive domain randomization during training, varying lighting, texture, and simulated camera noise, as a requirement rather than an optional augmentation, because a model that performs well only under the lighting conditions of its training factory is not a deployable product, it's a demo that happens to work in one room.`,
    technologies: ['PyTorch', 'EfficientNet-B4', 'Multi-task Learning', 'Object Detection', 'Semantic Segmentation', 'Keypoint Detection', 'MVTec AD', 'Docker'],
    color: '#b45309',
    status: 'Jun 2026',
    github: 'https://github.com/Mahlet333/Multi-head-surface-inspection-pipeline',
  },
  {
    id: 22,
    title: 'End-to-End MLOps System with Drift Detection',
    subtitle: 'ML Engineering / Production Systems',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
    description: 'A full ML lifecycle system built around a specific frustration: most ML projects stop at a trained model and treat everything after that, deployment and monitoring, as somebody else\'s problem.',
    detailedDescription: `# Why I Built the Boring Half of Machine Learning

Most ML portfolio projects end at a trained model with a reported accuracy number. That model then either dies in a notebook or gets handed off to an imaginary "deployment team." I built this project specifically to force myself through the part that usually gets skipped: what happens to a model after it ships, when the data it sees in production starts drifting away from the data it was trained on, silently, without anyone necessarily noticing until performance has already degraded.

## Why Four Different Drift Detectors, Not One

I implemented MMD, KS test, PSI, and CUSUM together rather than picking the one that's easiest to explain. Each catches a different failure mode, and using only one leaves a blind spot. KS test is fast but fundamentally one-dimensional, so it can miss drift in the relationships between features even when each feature looks fine individually. MMD operates on full embedding vectors, which is what's actually needed to catch drift in a model's learned representations rather than just its raw inputs. PSI is the standard the credit risk industry already trusts, useful as a sanity-check baseline. None of those three, on their own, catch slow, gradual drift, the kind that doesn't cross any single-snapshot threshold but accumulates over weeks. CUSUM is the one designed specifically for that: it sums small deviations over time and flags when the cumulative sum crosses a threshold, catching the drift pattern the other three are blind to.

## Why Leakage Prevention Is Enforced at the Pipeline Level, Not Just Documented

The most common, quietly fatal mistake in ML pipelines is fitting a feature transformation (a scaler, an encoder) on data that includes information from the validation or test set. I didn't just write that rule down as a guideline, I structured the feature engineering code so that every transformation is fit exclusively on training folds and only ever applied, never re-fit, to validation folds. That's a deliberate architectural choice, not a discipline I'm trusting myself to remember every time, because the failure mode (overly optimistic cross-validation scores that don't hold up in production) is exactly the kind of mistake that's invisible until the model underperforms after deployment.

## Why ONNX and TensorRT Instead of Serving the PyTorch Model Directly

I export the trained model through ONNX and then optimize it with TensorRT rather than serving the raw PyTorch model in production. That extra export step adds engineering overhead and a layer of conversion bugs to debug. I accepted that cost because PyTorch's eager-mode inference is meaningfully slower than a TensorRT-optimized graph, and inference latency compounds at production scale in a way that's invisible during development on a single test example but very visible once you're serving real traffic.

## Why Retraining Triggers Are Automated, Not a Manual Review Step

The monitoring system doesn't just raise a dashboard alert when drift crosses a threshold, it can automatically trigger the retraining pipeline. I made that an explicit design choice rather than defaulting to "alert a human and let them decide," because the entire point of building automated drift detection is removing the lag between detecting a problem and acting on it. A human-in-the-loop alert system still depends on someone checking a dashboard regularly, which is exactly the kind of process gap that lets drift quietly degrade a model for weeks before anyone notices.`,
    technologies: ['Python', 'FastAPI', 'ONNX', 'TensorRT', 'Docker', 'MLOps', 'Drift Detection', 'MMD', 'CUSUM', 'PSI', 'Feature Engineering'],
    color: '#6d28d9',
    status: 'Jun 2026',
    github: 'https://github.com/Mahlet333/End-to-end-MLOps-system-with-drift-detection',
  },
  {
    id: 23,
    title: 'Sim2Real Transfer for Visual Policy Learning',
    subtitle: 'Robotics / Reinforcement Learning',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1563207153-f403bf289096?auto=format&fit=crop&w=1200&q=80',
    description: 'A transfer pipeline built on the recognition that simulation and reality disagree in ways that no single technique fully fixes, which is why this project combines three complementary methods instead of betting on one.',
    detailedDescription: `# Why One Transfer Technique Was Never Going to Be Enough

Training a robot policy in simulation is fast, safe, and cheap. Deploying that same policy on real hardware routinely fails, because simulated visuals never perfectly match real camera noise, lighting, and texture. The temptation, after reading any single paper on sim-to-real transfer, is to pick its headline technique and assume it solves the problem. I made a different decision early on: combine three complementary mechanisms, because each one fixes a different part of the gap, and none of them, alone, fixes all of it.

## Why Domain Randomization Comes First, Not Last

I treat domain randomization, aggressively varying lighting, textures, and camera position during simulated training, as the foundation, not an afterthought layered on at the end. The reasoning is that randomization forces the policy to learn features that are robust to visual variation by construction, during training, rather than hoping a later adaptation step can patch over a policy that overfit to one specific simulated appearance. Skipping this step and relying purely on adaptation at deployment time would mean asking a brittle policy to generalize, which is a much harder problem than training a robust one from the start.

## Why Adaptive Normalization Is the Lightweight Middle Layer

Domain randomization alone doesn't fully close the gap, because some real-world visual statistics simply can't be anticipated during simulation, no matter how aggressively you randomize. Adaptive normalization, learned per-domain batch normalization parameters, gives the policy a fast, lightweight way to adjust its internal feature statistics once it sees real observations, without retraining the whole network. I chose this over a heavier fine-tuning step specifically because it's cheap enough to apply at deployment time, which matters if the policy needs to adapt quickly to a new robot or environment.

## Why Adversarial Domain Adaptation Is the Last, Most Expensive Layer

The final mechanism, an adversarial discriminator trying to distinguish simulated from real features while the encoder learns to fool it, is the most computationally expensive of the three, and I added it last and deliberately, only after the first two mechanisms were in place. Adversarial training alone, without prior randomization, tends to be unstable, the discriminator can win too easily early in training if the encoder hasn't already learned somewhat robust features. Layering it on top of an already-randomized policy gave the adversarial objective something more stable to refine, rather than asking it to do all the transfer work alone.

## Why I Didn't Just Pick the Easiest Technique

It would have been faster to implement only domain randomization and call the project done, since it's the simplest of the three to get working. I chose to build all three because the actual research literature on sim-to-real transfer is consistent on one point: no single technique closes the gap completely, and the techniques are complementary rather than redundant. Building only one would have been a faster project and a less honest one, given what I already knew going in about where each technique falls short on its own.`,
    technologies: ['PyTorch', 'Reinforcement Learning', 'Domain Randomization', 'Domain Adaptation', 'Robotics', 'Adversarial Training', 'Sim-to-Real'],
    color: '#0369a1',
    status: 'Jun 2026',
    github: 'https://github.com/Mahlet333/sim2real',
  },
  {
    id: 24,
    title: 'A2S Transfer Task: Norm Grounding Gap in LLMs',
    subtitle: 'NLP Research / AI Evaluation Benchmark, NYU Abu Dhabi',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80',
    description: 'A benchmark co-authored with Aneeka Paul measuring a specific, narrow gap: how much worse large language models get at recognizing social norm violations once you embed them in real conversation instead of asking about them directly.',
    detailedDescription: `# Why "The Model Knows the Norm" Isn't the Same as "The Model Can Apply It"

Ask GPT-4 directly whether it's rude to interrupt someone mid-sentence, and it answers correctly almost every time. That fact alone tells you very little about whether the same model can recognize that exact violation happening inside an actual, naturalistic conversation, with discourse context, implicit cues, and social subtext layered on top. My co-author Aneeka Paul and I built this benchmark specifically to isolate that gap, which we named the Norm Grounding Gap, rather than accepting strong performance on abstract questions as evidence of situated social understanding.

## Why Three Levels Instead of Two

We could have designed a simple A versus B comparison: abstract questions versus full conversations. We added a middle level, B, brief low-context scenarios, specifically to localize where performance degrades. Without that middle rung, a drop from Level A to a full conversational Level C tells you something breaks, but not whether it breaks gradually as context increases or sharply at the point where genuine conversational grounding is required. The three-level design let us see the shape of the degradation curve, not just its endpoints.

## Why We Built the Dataset From NormBank Instead of Writing Scenarios by Hand

We could have hand-written conversational scenarios embedding norm violations, which would have been faster. We built the dataset by systematically lifting NormBank's existing social norm annotations into conversational contexts using controlled generation templates instead, because hand-written scenarios risk smuggling in our own assumptions about what counts as a clear violation. Grounding the dataset in an established, independently annotated norm bank gave the benchmark a more defensible foundation than scenarios we invented ourselves.

## Why We Tested Three Different Model Families, Not Just One

Benchmarking a single model and finding a gap tells you something about that model. We deliberately ran GPT-4, Claude, and Llama through the same three-level pipeline, because the interesting claim isn't "this one model struggles with situated context," it's whether the gap is a property of language models generally or an artifact of one architecture's training. Finding the same statistically significant gap across all three model families, confirmed with McNemar's test rather than a simple accuracy comparison, is what let us argue this is a systematic limitation, not a quirk.

## Why We Used McNemar's Test Specifically

A simple comparison of accuracy at Level A versus Level C doesn't account for the fact that the same model is being evaluated on paired items, the same underlying norm violation at different levels of context. McNemar's test is built for exactly that paired structure, comparing how often a model gets an item right at one level and wrong at another, rather than treating the two accuracy numbers as independent. That statistical choice was necessary to claim the gap is significant rather than noise, given the paired nature of our evaluation design.

## What the Finding Actually Implies

The result that model rankings at Level A don't predict rankings at Level C, models that look similar in the abstract diverge substantially once context is added, is the part of this work I think has the most real-world consequence. As language models get deployed in contexts that require situated social judgment, mental health support, conflict mediation, classroom assistance, an evaluation based only on abstract norm questions would systematically overstate how ready a model actually is for those settings.`,
    technologies: ['NLP', 'LLM Evaluation', 'Python', 'GPT-4', 'Claude API', 'NormBank', 'McNemar Test', 'Benchmark Design'],
    color: '#be123c',
    status: 'Spring 2026',
    github: 'https://github.com/Mahlet333/ASI_Final_Project',
  },
  {
    id: 25,
    title: 'Anime Character Visual Design Classification',
    subtitle: 'Computer Vision / Feature Engineering Research',
    category: 'ml',
    imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    description: 'A study testing whether the unspoken visual rules anime designers follow for heroes versus villains are consistent enough to be learned by a model, run as three competing approaches instead of one to see which kind of feature actually carries the signal.',
    detailedDescription: `# Are Hero and Villain Designs Actually Following Rules, or Just Habits

Anime character design has informal conventions: heroes tend toward warm colors and soft edges, villains toward cool palettes and sharp shadows. The question I wanted to test wasn't whether those conventions exist anecdotally, everyone who watches anime can list a few examples, but whether they're consistent enough across many characters to be statistically learnable, and which kind of visual feature actually carries that signal.

## Why I Ran Three Separate Approaches Instead of Picking the Best One Upfront

I could have started with whichever method seemed most promising, deep transfer learning, and stopped there. I deliberately ran three different approaches in parallel instead: 50-plus handcrafted design features, CLIP ViT-L/14 semantic embeddings, and VGGFace2 transfer learning from human face recognition. The reason was that each approach answers a different question. Handcrafted features test whether explicit design-convention knowledge (color ratios, edge density, shadow distribution) is sufficient on its own. CLIP tests whether a model trained on generic image-text pairs already has an implicit sense of "hero" and "villain" without any anime-specific training. VGGFace2 tests something else entirely: whether human face recognition features transfer to a stylized, non-photorealistic domain at all. Running only one would have answered only one of those questions.

## Why Handcrafted Features Outperformed the Fancier Deep Embeddings

The result that surprised me most was that 50-plus handcrafted design features, combined with a relatively simple ResNet18, outperformed both CLIP and VGGFace2 transfer learning, reaching about 80 percent accuracy and 0.90 AUC-ROC. That's not the result deep learning intuition usually predicts, where bigger pretrained models tend to win by default. The explanation, once I looked closer, made sense: the handcrafted features were built directly around the specific visual conventions (warm versus cool palette ratios, edge sharpness, shadow density) that actually drive hero-villain design, while CLIP's pretraining never specifically learned anime stylization, and VGGFace2's pretraining is built around human facial geometry, not stylized character design. Domain-specific feature engineering beat domain-general pretrained representations here, which is a finding worth remembering before defaulting to the biggest available pretrained model.

## Why Villain Recall Being Higher Than Hero Recall Matters

Across all three approaches, villain classification had consistently higher recall than hero classification. I didn't treat that asymmetry as noise, I treated it as a finding in its own right: it suggests villain design follows a tighter, more consistent visual template across different anime and studios, while hero design is more visually diverse and harder to pin down with a fixed feature set. That asymmetry is, on its own, a small piece of evidence about how character archetypes are constructed differently depending on their narrative role.

## Why VGGFace2's Partial Success Was the Most Conceptually Interesting Result

VGGFace2, pretrained entirely on real human faces, achieved about 66.7 percent accuracy on stylized anime faces, well above chance but well below the handcrafted-feature approach. I find that partial transfer more interesting than either a clean success or a clean failure would have been, because it implies anime character design retains enough structural similarity to real human facial geometry that human-face-trained features carry some signal, even though the stylization clearly degrades how much of that signal survives. That's a more nuanced finding than "transfer learning works" or "transfer learning doesn't work," and it's the kind of result that only shows up when you test the boundary case directly instead of assuming it either way.`,
    technologies: ['PyTorch', 'CLIP ViT-L/14', 'VGGFace2', 'Feature Engineering', 'Transfer Learning', 'Computer Vision', 'ResNet18', 'SHAP'],
    color: '#7c3aed',
    status: 'Dec 2025',
    github: 'https://github.com/Mahlet333/Machine-Learning-Final-Project',
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

**Generative Art** ,  Creating art that's generated by algorithms rather than drawn by hand.

**Interactive Installations** ,  Art that responds to human input: movement, sound, touch.

**Data Visualization** ,  Turning complex data into beautiful, understandable visual representations.

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
