// ===== STORY CONTENT FOR SPECIAL PROJECT PAGES =====
const stories = {
  feedr: `
    <h2 style="font-size:1.8rem;font-weight:700;text-align:center;margin-bottom:0.5rem;color:#fff">Feedr: From Food Waste to Food Access</h2>
    <h4 style="font-size:1.1rem;text-align:center;color:#9ca3af;margin-bottom:2rem">A lead developer's reflection on building a scalable system to turn surplus into opportunity</h4>

    <h3 style="color:#9D4EDD">Where It Started</h3>
    <p>I didn't start with code. I started with a question.</p>
    <p>How is it that restaurants, grocery stores, and cafeterias are throwing out huge volumes of perfectly edible food — while so many people are looking for affordable meals, every day?</p>
    <p>I live in the UAE, where food waste is a massive problem. Over 3.27 million tonnes of food are wasted annually here, adding up to $3.5 billion in losses. During Ramadan, up to 60% of prepared food goes uneaten. An average person in the UAE throws out 224kg of food per year. That's nearly double the global average.</p>
    <p>This is not just a sustainability issue. It's a logistical one. A systems one. And to me, it sounded like a software problem that hadn't yet been solved the right way. So I decided to build something that could.</p>

    <h3 style="color:#9D4EDD">What I Built</h3>
    <p>Feedr is a real-time mobile platform where verified businesses can list surplus food, and consumers can buy it at reduced prices. The platform also connects to local couriers, who deliver those meals. Everyone has their own role, dashboard, and workflow.</p>
    <p>This wasn't a class project for me. It became a chance to design and build something with real-world logic, impact, and complexity. I was the lead developer, and from day one, I knew I didn't want to just write functional code. I wanted to engineer a system that could scale — both technically and socially.</p>

    <h3 style="color:#9D4EDD">Designing the Architecture</h3>
    <p>Every system begins with structure. Feedr had three main user types: businesses, consumers, and couriers. The first thing I committed to was a monorepo.</p>
    <p>I've worked on multi-repo projects before. They get messy fast. A simple change to a backend endpoint becomes three pull requests. Shared validation logic gets duplicated and drifts. Things break quietly. So for Feedr, I kept it all in one place: frontend, backend, types, utilities.</p>
    <p>I chose pnpm for package management because of its correctness and speed. I used Turborepo for build orchestration and caching. For the backend, I used NestJS — strong patterns, testability, modular architecture out of the box. I paired that with Prisma as the ORM. Prisma changed the way I thought about the database layer. Defining models in one schema file and having a fully typed client auto-generated from it meant I could trust my database logic.</p>

    <h3 style="color:#9D4EDD">Building the Frontend</h3>
    <p>I didn't want to choose between iOS and Android. I wanted both. I chose React Native, with Expo's managed workflow, because I wanted to move fast, test early, and update easily.</p>
    <p>The frontend architecture needed to stay stable as features were added. For anything fetched from the backend, I used React Query. It handled caching, loading states, error retries, and more. For lightweight client state, I used Zustand, which gave me a simple, reliable store with very little boilerplate.</p>

    <h3 style="color:#9D4EDD">The Actual Product</h3>
    <p>Feedr supports real users, real listings, and real workflows. Here's what I built:</p>
    <ul>
      <li>A business dashboard where verified sellers can upload surplus food with photos, pricing, expiration dates, and categories</li>
      <li>A consumer-facing marketplace with filters, listing previews, and cart functionality</li>
      <li>A courier interface to accept delivery jobs and update real-time status</li>
      <li>An authentication system that supports role-based access and secure session flows</li>
      <li>A payment simulation system with support for cash, Visa, Mastercard, and PayPal</li>
      <li>Image uploads through Cloudinary, with fallback logic</li>
      <li>Admin tools for monitoring, approval, and compliance tracking</li>
    </ul>

    <h3 style="color:#9D4EDD">What I Learned</h3>
    <p>This project taught me how to think beyond individual features. I had to think about systems. Contracts. Boundaries. Developer experience. Feedback loops. I learned how much design work happens before any code is written. How the right architectural decision at the start — like using Prisma, or keeping everything in a monorepo — can save hours or days down the road.</p>

    <h3 style="color:#9D4EDD">Final Thoughts</h3>
    <p>This project is personal. I didn't just design the backend or contribute to the UI. I built the system from the ground up — from database schema to error messages. Every architectural choice was deliberate. Every tool was chosen based on how it would affect speed, safety, and maintenance.</p>
    <p>Feedr isn't flashy, but it works. And more importantly, it's built to keep working even as more users, listings, and complexity are added.</p>
    <p>If you want to see the code, the diagrams, or the full report, just ask. I'll stand by every part of it.</p>
  `,

  mff: `
    <h3 style="color:#f59e42">The Spark: A Campus That's Alive</h3>
    <p>It started one evening on campus, walking through NYU's Washington Square. The arch loomed, the library's windows glinted, and I thought, "This place isn't just bricks—it's watching me." In my head, a student's voice—my voice—whispered, "I came to learn, but this campus is studying my every step."</p>
    <p>That was the seed: a film about how spaces shape us, paired with a website that makes you feel it. I imagined you, the user, pausing to type in the Trace section, maybe writing, "The campus stole my confidence." I wanted the site to be quiet, dark, and heavy, like the film's mood.</p>
    <p>My first "aha!" was realizing the website could mirror the film's surveillance vibe—minimal, structured, but intense.</p>

    <h3 style="color:#f59e42">Tech Creativity: Crafting the Digital Campus</h3>
    <p>Building this solo meant I was director, coder, and debugger all in one. I used semantic HTML, SCSS, and vanilla JavaScript—no frameworks, just raw code to keep it mine.</p>
    <p>The Landing Page was my first love. I wanted a parallax background that moved subtly as you scrolled, like the campus shifting under your gaze. I coded:</p>
    <pre><code>.landing {
  background: url('landing.png') no-repeat center;
  background-attachment: fixed;
  background-size: cover;
}</code></pre>
    <p>Testing it, I grinned, "It's alive!" But on mobile, the parallax broke—too heavy. I swapped it for a static image at 575px with a media query. That was my first "aha!"</p>

    <p>The Analysis carousel was where I got creative. I wanted it to break down film scenes with a glitch text effect, mimicking the campus's fractured gaze:</p>
    <pre><code>.glitch {
  animation: glitch 0.3s infinite;
}
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
}</code></pre>

    <p>The Trace section was my heart. I coded an input field where you type one word about what the campus "stole." The JavaScript was simple but powerful:</p>
    <pre><code>const traceInput = document.getElementById('trace-input');
traceInput.addEventListener('input', (e) => {
  const word = e.target.value;
  localStorage.setItem('trace', word);
});</code></pre>

    <h3 style="color:#f59e42">Problem-Solving: Wrestling the Bugs</h3>
    <p>The biggest beast was responsiveness. At 767px, the navigation bar overflowed. I debugged with Chrome's DevTools, spotting a flexbox issue. I added flex-wrap: wrap and gap: clamp(10px, 2vw, 15px), and testing on my phone, it snapped into place.</p>
    <p>Another "aha!" was the modal windows for scene details. Early versions flickered on click. I traced it to a z-index clash and set .modal { z-index: 1000; }.</p>

    <h3 style="color:#f59e42">The Win: A Site That Feels Alive</h3>
    <p>When the site launched, users loved it. They said the glitch effect felt "like the campus glitching into my brain." The Trace section got responses like "anxiety" and "time." My biggest "aha!" was a friend saying, "I typed 'pressure' in Trace—it's like the site knew me." That's when I knew I'd built a digital campus that watched you back.</p>

    <h3 style="color:#f59e42">What's Next</h3>
    <p>I'm dreaming big. I want to add ARIA roles for better accessibility. A JSON backend could make updates seamless. But the core experience—that eerie, introspective feeling of a campus studying you—is complete.</p>
    <p>Check out the <a href="https://mahlet333.github.io/30mff-mahlet/" target="_blank" rel="noopener">live site</a> and try the Trace section. What word would you type?</p>
  `,

  temptation: `
    <h3 style="color:#FFD23F">The Spark: A Sound That Feels Like a Soul</h3>
    <p>It all started one groggy morning in my dorm. I hit snooze, and my mind wandered: "What if this moment—wanting to pray but craving sleep—was a story?" I pictured a guy, half-awake, his thoughts battling.</p>
    <p>I pitched it to Enock and Ahmad: "Let's use audio to pull people into his soul—bird chirps for calm, whispers for doubt, a church bell for hope." We decided to make it interactive, letting you choose his path: pray or sleep. My big "aha!" was realizing sound could be the star.</p>

    <h3 style="color:#FFD23F">Tech Creativity: Building the Audio World</h3>
    <p>Recording voices was step one. I played the narrator, framing the story with a calm, reflective tone. For the main character, I channeled raw emotion. Satan's voice was my favorite—I lowered my pitch, added distortion, and whispered so close to the mic it felt like he was in your ear. God's voice was softer, layered with a choir effect.</p>
    <p>Editing in Audacity was a puzzle. I layered tracks like a DJ, ensuring the bell in Scene 4 didn't drown out the narrator. I added crossfades, timing them to 0.5 seconds for smoothness. My "aha!" moment was using a low-frequency rumble for Satan's scenes—it made my headphones buzz.</p>
    <p>The website was built with HTML, CSS, and JavaScript. I chose a dark #1a1a1a background to evoke that late-night campus hush, with #f59e42 orange-yellow accents. The layout had horizontal scrolling panels, each tied to a scene's audio.</p>

    <h3 style="color:#FFD23F">JavaScript: Making It Interactive</h3>
    <p>The biggest headache? Browser autoplay restrictions. Audio wouldn't play without a user click. I coded a "Start Story" button that triggered an audio context:</p>
    <pre><code>const unlockAudio = () => {
  const audio = new Audio();
  audio.play().then(() => {
    startNarrative();
  });
};</code></pre>

    <p>The decision point at Panel 4 was my proudest moment. I built a state object to track choices:</p>
    <pre><code>const state = {
  currentPanel: 1,
  choice: null,
};</code></pre>

    <p>I also added keyboard navigation with arrow keys and debounced scrolling. Load times dropped to under 2 seconds.</p>

    <h3 style="color:#FFD23F">Challenges: Wrestling with Tech</h3>
    <p>Mobile responsiveness was a nightmare—controls stacked weirdly at 768px. I spent hours tweaking media queries. Audio sync issues kept me up, especially when Scene 6's rumble overlapped Scene 7's heartbeat. I used Audacity's timeline to trim 0.1 seconds, and it snapped into place.</p>
    <p>GitHub saved our sanity. I committed changes like "Fixed audio sync" or "Mobile layout tweak," using branches for audio and UI.</p>

    <h3 style="color:#FFD23F">The Win: A Story That Moves You</h3>
    <p>When we launched, users loved it. They said the whispers in Scene 6 felt "too real," and the "Pray" path's choir made them tear up. My biggest "aha!" was watching a classmate choose "Sleep," hear the fading music, and say, "I felt his regret." That's when I knew we'd done it—created a story that wasn't just heard but felt.</p>

    <p>Visit the <a href="https://mahlet333.github.io/Sound_temptation/" target="_blank" rel="noopener">live experience</a> and pick your path.</p>
  `,

  afternoonNap: `
    <h3 style="color:#4a90e2">Let's Stir Up Some Drama!</h3>
    <p>Picture this: you're craving a nap, but your roommate's coffee cup is staring at you from the table, mocking your peace. That's the spark for Afternoon Nap, our interactive short film for Dr. Evi Mansor's Communications Lab.</p>
    <p>As Group 2—me, Naz, Iqra, and Afra—we wanted to take that everyday annoyance and spin it into a wild, dreamlike tale where I, playing Mahlet, spiral into a surreal fight over that cup. The film lets you decide: does Mahlet wash it or text her roommate Naz? Each choice shifts the vibe, from quiet frustration to operatic chaos.</p>

    <h3 style="color:#4a90e2">The Idea: From Pet Peeve to Dreamworld</h3>
    <p>It all kicked off in our dorm, where I was grumbling about dishes piling up. I turned to Afra, eyes wide, and said, "What if a coffee cup becomes, like, the villain in a story?" She laughed, "That's so you, Mahlet!"</p>
    <p>Naz pitched the interactive twist: "Let the viewer choose—wash it or text me. It's like they're Mahlet's conscience!" That was our first "aha!"—giving you the power to steer her mood.</p>

    <h3 style="color:#4a90e2">Tech Creativity: Filming the Chaos</h3>
    <p>Filming was where our creativity went full throttle. We used a BlackMagic Pocket Cinema Camera 4K. I told Naz, our cinematographer, "Let's open with a tracking shot, like Mahlet's gliding into sleep." We didn't have a dolly, so we rigged a dorm trolley. After five shaky takes, Afra suggested layering fabric under the wheels—and boom! It glided. That was a huge "aha!"—a low-budget fix that saved our shot.</p>
    <p>Lighting was my baby. I wanted the nap scene soft, like a cozy haze, using a diffused LED panel at 3200K. During the fight scene, I called, "Cue the slow-mo!" and Naz cranked the frame rate to 60fps.</p>
    <p>Sound design was where I got artsy. I recorded Mahlet's voiceovers, channeling her sass: "This cup's mocking me." For Afra's opera aria in the fight, I sourced "Casta Diva" from Pixabay, fading it in as the cup flies.</p>

    <h3 style="color:#4a90e2">The Website: Your Ticket to the Drama</h3>
    <p>Our website, coded with HTML, CSS, and JavaScript, was our stage for the film. I wanted it to feel like Mahlet's dream—dark, moody, with pops of playfulness. I picked a #000000 palette with black, white, and #4a90e2 for the "Watch" button.</p>
    <p>I coded a hover effect for the buttons:</p>
    <pre><code>.watch-button {
  background-color: #4a90e2;
  transition: transform 0.2s;
}
.watch-button:hover {
  transform: scale(1.05);
}</code></pre>
    <p>When it bounced on hover, I was like, "That's so fun!"</p>

    <h3 style="color:#4a90e2">JavaScript: You Shape the Story</h3>
    <p>JavaScript made the site interactive. I coded the choice buttons to load different scenes:</p>
    <pre><code>const washButton = document.getElementById('next-button');
washButton.addEventListener('click', () => {
  loadScene('scene-wash');
});</code></pre>
    <p>A bug sent users to the wrong scene. I built a state manager:</p>
    <pre><code>const state = {
  currentScene: 'home',
  userChoice: null
};</code></pre>
    <p>Testing showed lag on the scene switch, so I optimized with event delegation. When it loaded instantly, I thought, "I'm a coding rockstar!"</p>

    <h3 style="color:#4a90e2">The Win: A Film That Feels Like You</h3>
    <p>When Afternoon Nap launched, users loved it. They said the opera fight was "hilariously epic," and choosing "Text" felt "so real." My biggest "aha!" was a classmate saying, "I chose 'Wash' and felt Mahlet's grudge—I've been there!" We'd made a film that wasn't just watched but lived.</p>

    <p>Experience it yourself at the <a href="https://mahlet333.github.io/Afternoon_Nap_Movie/" target="_blank" rel="noopener">live site</a>!</p>
  `
};
