# ████████████████████████████████████████████████████████████████
# ███  TEJASSVER RISHI S — GOD LEVEL PORTFOLIO — MASTER PROMPT  ███
# ████████████████████████████████████████████████████████████████
#
# WOW FACTOR: ∞
# TOKEN DENSITY: MAXIMUM
# EFFECT INTENSITY: UNIVERSE-BREAKING
# VERSION: FINAL FORM
#
# ─────────────────────────────────────────────────────────────────

---

## ═══════════════════════════════════════════════════
## SECTION 0 — THE PHILOSOPHY (READ THIS FIRST)
## ═══════════════════════════════════════════════════

This is not a portfolio. This is a **cinematic declaration of existence**.

When someone opens this website, they should experience:
1. SHOCK — "What is this?!"
2. AWE — "How did he build all this?"
3. DESIRE — "I want to work with this person immediately."
4. DISBELIEF — "Is this really a student portfolio?"

Every frame, every animation, every pixel must feel like it was directed by a Hollywood VFX team.
Think: Awwwards Site of the Year × Apple keynote × Interstellar opening sequence.

The emotional arc of the visitor:
→ LANDING: Overwhelmed by beauty
→ SCROLLING: Discovering a universe of work
→ READING: Impressed by depth
→ LEAVING: Changed. They remember Tejassver forever.

---

## ═══════════════════════════════════════════════════
## SECTION 1 — PERSONAL IDENTITY (HARDCODE EVERYTHING)
## ═══════════════════════════════════════════════════

```
FULL NAME      : Tejassver Rishi S
TITLE LINE 1   : Computer Science Engineering Student
TITLE LINE 2   : Full Stack Developer & AI Builder
COLLEGE        : Chennai Institute of Technology
CGPA           : 8.52 / 10
EMAIL          : tejassverrishis.cse2025@citchennai.net
PHONE          : +91-7397355281
LOCATION       : Chennai, Tamil Nadu, India
GITHUB         : https://github.com/tejassverrishi67
LINKEDIN       : https://www.linkedin.com/in/tejassver-rishi-549818376/
LEETCODE       : https://leetcode.com/u/tejassverrishi67/
LEETCODE COUNT : 250+ problems solved
AWARD          : Best UI/UX Design — Devlynix Buildathon 2.0
```

---

## ═══════════════════════════════════════════════════
## SECTION 2 — TECHNICAL ARCHITECTURE
## ═══════════════════════════════════════════════════

### Primary Stack
```
FRAMEWORK   : Next.js 14+ with App Router (or Vite + React 18 if simpler)
LANGUAGE    : TypeScript (strict mode enabled)
STYLING     : Tailwind CSS + custom CSS (no CSS-in-JS)
ANIMATION   : GSAP 3 + ScrollTrigger plugin (THE KING of web animation)
3D ENGINE   : Three.js r160+ (for particle universe background)
SMOOTH SCROLL: Lenis (buttery smooth scroll with momentum)
TILT EFFECT : Vanilla-tilt.js (for project cards)
TYPED TEXT  : Typed.js (for typewriter effect)
PARTICLES   : tsParticles OR custom Three.js particle system
ICONS       : Lucide React + custom SVGs
FONTS       : Google Fonts (Space Grotesk + JetBrains Mono)
DEPLOYMENT  : Vercel (obviously — he already uses it)
```

### Folder Structure
```
tejassver-portfolio/
├── app/
│   ├── layout.tsx          (root layout, meta, fonts)
│   ├── page.tsx            (main portfolio page)
│   └── globals.css         (CSS variables system)
├── components/
│   ├── ui/
│   │   ├── CustomCursor.tsx
│   │   ├── Navbar.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── GlassCard.tsx
│   │   ├── NeonText.tsx
│   │   └── CounterUp.tsx
│   ├── sections/
│   │   ├── LoadingScreen.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Awards.tsx
│   │   ├── Education.tsx
│   │   ├── Stats.tsx
│   │   └── Contact.tsx
│   └── three/
│       ├── ParticleUniverse.tsx
│       └── FloatingGeometry.tsx
├── lib/
│   ├── gsap.ts             (GSAP setup + ScrollTrigger registration)
│   ├── lenis.ts            (smooth scroll init)
│   └── animations.ts       (reusable animation functions)
├── data/
│   └── portfolio.ts        (all content as typed data)
└── public/
    └── favicon.svg         (custom "TR" monogram favicon)
```

### npm Dependencies to Install
```bash
npm install gsap @gsap/react three @types/three lenis vanilla-tilt 
npm install typed.js tsparticles @tsparticles/react @tsparticles/slim
npm install lucide-react clsx tailwind-merge
npm install @radix-ui/react-tooltip framer-motion
```

---

## ═══════════════════════════════════════════════════
## SECTION 3 — DESIGN SYSTEM (THE BIBLE)
## ═══════════════════════════════════════════════════

### Color Palette (Exact Hex Values — Do NOT deviate)
```css
:root {
  /* ── BACKGROUNDS ── */
  --bg-void:        #03020a;   /* Deepest black — the void of space */
  --bg-deep:        #080614;   /* Primary page background */
  --bg-surface:     #0e0b1e;   /* Cards, panels */
  --bg-elevated:    #14102a;   /* Hover states, elevated cards */
  --bg-glass:       rgba(14, 11, 30, 0.6); /* Glassmorphism base */

  /* ── NEON ACCENTS ── */
  --neon-blue:      #00d4ff;   /* Electric cyan — PRIMARY accent */
  --neon-violet:    #7c3aed;   /* Deep violet — SECONDARY accent */
  --neon-purple:    #a855f7;   /* Bright purple — highlights */
  --neon-pink:      #f0abfc;   /* Soft pink — tertiary */
  --neon-gold:      #fbbf24;   /* Gold — awards only */
  --neon-green:     #00ff88;   /* Matrix green — code accents */

  /* ── GLOWS (for box-shadow) ── */
  --glow-blue:      0 0 20px rgba(0, 212, 255, 0.4), 
                    0 0 60px rgba(0, 212, 255, 0.15),
                    0 0 100px rgba(0, 212, 255, 0.05);
  --glow-violet:    0 0 20px rgba(124, 58, 237, 0.5),
                    0 0 60px rgba(124, 58, 237, 0.2);
  --glow-gold:      0 0 30px rgba(251, 191, 36, 0.5),
                    0 0 80px rgba(251, 191, 36, 0.2);
  --glow-subtle:    0 0 40px rgba(124, 58, 237, 0.1);

  /* ── TEXT ── */
  --text-primary:   #f8f4ff;   /* Near-white with violet tint */
  --text-secondary: #a99ec4;   /* Muted lavender */
  --text-muted:     #5c5478;   /* Subtle, background text */
  --text-code:      #00ff88;   /* Code-style text */

  /* ── BORDERS ── */
  --border-glass:   rgba(255, 255, 255, 0.08);
  --border-glow:    rgba(0, 212, 255, 0.3);
  --border-subtle:  rgba(255, 255, 255, 0.04);
  --border-violet:  rgba(124, 58, 237, 0.4);

  /* ── GRADIENTS ── */
  --gradient-hero:  linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #f0abfc 100%);
  --gradient-card:  linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(124,58,237,0.1) 100%);
  --gradient-text:  linear-gradient(90deg, #00d4ff, #a855f7, #f0abfc);
  --gradient-gold:  linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24);
  --gradient-bg:    radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.15) 0%, transparent 50%),
                    radial-gradient(ellipse at 80% 20%, rgba(0,212,255,0.1) 0%, transparent 50%),
                    radial-gradient(ellipse at 50% 80%, rgba(240,171,252,0.08) 0%, transparent 50%);
}
```

### Typography System
```css
/* FONTS */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;700&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --font-display:   'Space Grotesk', sans-serif;  /* Headlines, name */
  --font-mono:      'JetBrains Mono', monospace;  /* Code, labels */
  --font-body:      'Inter', sans-serif;           /* Body text */

  /* SIZES */
  --text-xs:    0.75rem;   /* 12px — labels, badges */
  --text-sm:    0.875rem;  /* 14px — secondary */
  --text-base:  1rem;      /* 16px — body */
  --text-lg:    1.125rem;  /* 18px — large body */
  --text-xl:    1.25rem;   /* 20px — subheadings */
  --text-2xl:   1.5rem;    /* 24px */
  --text-3xl:   1.875rem;  /* 30px */
  --text-4xl:   2.25rem;   /* 36px */
  --text-5xl:   3rem;      /* 48px */
  --text-6xl:   3.75rem;   /* 60px — section titles */
  --text-7xl:   4.5rem;    /* 72px — hero subtitle */
  --text-8xl:   6rem;      /* 96px — hero name */
  --text-9xl:   8rem;      /* 128px — giant decorative */
}
```

### Spacing & Sizing System
```css
:root {
  --section-padding: clamp(80px, 10vw, 160px) 0;
  --container-max:   1280px;
  --container-pad:   clamp(20px, 5vw, 80px);
  --radius-sm:       8px;
  --radius-md:       16px;
  --radius-lg:       24px;
  --radius-xl:       32px;
  --radius-full:     9999px;
  --blur-glass:      20px;
  --blur-heavy:      40px;
}
```

### Z-Index System (STRICT — follow this or chaos)
```css
:root {
  --z-background:  -10;   /* Three.js canvas, particle field */
  --z-content:       1;   /* All regular content */
  --z-sticky:       10;   /* Sticky elements */
  --z-navbar:       50;   /* Navigation */
  --z-cursor:       99;   /* Custom cursor (ALWAYS on top) */
  --z-loader:      100;   /* Loading screen (highest) */
}
```

---

## ═══════════════════════════════════════════════════
## SECTION 4 — LOADING SCREEN (THE FIRST IMPRESSION)
## ═══════════════════════════════════════════════════

This plays for ~2.5 seconds before the main site reveals. It must be STUNNING.

### Visual Design
```
Background: Pure #03020a (void black)
Center: A glowing monogram "TR" built from animated SVG strokes that draw themselves in
Below: A horizontal scanning progress bar (neon blue, left to right)
Below bar: Text in JetBrains Mono: "INITIALIZING..." cycling to "LOADING PORTFOLIO..."
```

### Animation Sequence (timeline in milliseconds)
```
0ms      → Black screen appears
0-300ms  → Subtle radial gradient pulsates from center (violet haze)
300ms    → SVG stroke begins drawing the "T" letterform (stroke-dashoffset animation)
600ms    → SVG stroke draws the "R" letterform  
900ms    → Both letters filled with gradient flash
1000ms   → Glow intensifies on "TR" (box-shadow pulse)
1000ms   → Progress bar begins sweeping from 0% to 100%
1500ms   → Progress bar hits 50%, letters pulse
2000ms   → Progress bar hits 100% — glows gold for 100ms
2100ms   → "TR" explodes outward (scale + opacity to 0 — like a shockwave)
2100ms   → Page content begins fading in from beneath
2500ms   → Loading screen completely faded, site is live
```

### Code Hint
```tsx
// In LoadingScreen.tsx
const tl = gsap.timeline({ onComplete: () => setLoaded(true) });
tl.to('.stroke-T', { strokeDashoffset: 0, duration: 0.5, ease: 'power2.out' })
  .to('.stroke-R', { strokeDashoffset: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')
  .to('.monogram', { fill: 'url(#gradient)', duration: 0.2 })
  .to('.progress-bar', { scaleX: 1, duration: 1, ease: 'power1.inOut' }, '-=0.3')
  .to('.loader-screen', { 
    clipPath: 'circle(0% at 50% 50%)',
    duration: 0.8, 
    ease: 'power4.in',
    delay: 0.2
  });
```

---

## ═══════════════════════════════════════════════════
## SECTION 5 — CUSTOM CURSOR (SIGNATURE TOUCH)
## ═══════════════════════════════════════════════════

Two-layer cursor system. This ALONE will make people double-take.

### Layer 1: Cursor Dot (inner)
```
Shape     : Perfect circle, 8px diameter
Color     : #00d4ff (solid neon blue)
Behavior  : Snaps to mouse position instantly (no lag)
Special   : Glows with var(--glow-blue)
```

### Layer 2: Cursor Ring (outer aura)
```
Shape     : Circle outline, 40px diameter
Color     : rgba(0, 212, 255, 0.4) border (1.5px)
Behavior  : Follows cursor with ~100ms lerp lag (elastic trailing)
Animation : Continuously slowly rotates (360deg / 4s)
```

### Cursor State Transformations
```
DEFAULT STATE:
  → Dot: 8px, full opacity
  → Ring: 40px, 40% opacity

HOVERING A LINK or BUTTON:
  → Dot: scales to 0 (disappears)
  → Ring: scales to 80px, fills with rgba(0,212,255,0.15)
  → Ring border: becomes solid, brighter
  → Transition: 200ms cubic-bezier(0.34, 1.56, 0.64, 1) (springy overshoot)

HOVERING A PROJECT CARD:
  → Ring: morphs to 60px, text "VIEW" appears inside in mono font
  → Dot: hidden
  → Color shift to violet

HOVERING TEXT/PARAGRAPH:
  → Ring: becomes a thin horizontal bar (height: 2px, width: 60px)
  → Simulates a text cursor/caret
  → Color: white

CLICKING:
  → Both layers scale down to 60% for 100ms then snap back
  → Brief ripple pulse emits outward from click point
```

### Implementation
```tsx
// useCustomCursor.ts
useEffect(() => {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    gsap.to(dot, { x: mouseX, y: mouseY, duration: 0, ease: 'none' });
  });
  
  // Lerp the ring
  const animate = () => {
    ringX += (mouseX - ringX) * 0.12;  // 0.12 = lag factor
    ringY += (mouseY - ringY) * 0.12;
    gsap.set(ring, { x: ringX, y: ringY });
    requestAnimationFrame(animate);
  };
  animate();
}, []);
```

---

## ═══════════════════════════════════════════════════
## SECTION 6 — THREE.JS PARTICLE UNIVERSE (BACKGROUND)
## ═══════════════════════════════════════════════════

This is the heartbeat of the entire site. It runs FULL SCREEN behind all content.

### Particle Configuration
```javascript
const CONFIG = {
  PARTICLE_COUNT: 180,         // 180 floating nodes
  PARTICLE_SIZE:  0.015,       // Tiny glowing dots
  PARTICLE_COLOR: 0x00d4ff,    // Neon blue base
  
  CONNECTION_MAX_DISTANCE: 120, // Pixels before line fades
  CONNECTION_OPACITY_FACTOR: 0.5,
  CONNECTION_COLOR: 0x7c3aed,   // Violet connection lines
  
  // Movement
  SPEED_X: 0.0003,
  SPEED_Y: 0.0002,
  DRIFT:   0.001,              // Gentle random drift
  
  // Camera
  FOV:     75,
  NEAR:    0.1,
  FAR:     1000,
  Z_POS:   300,                // Camera distance from particles
  
  // Interaction
  MOUSE_REPEL_RADIUS: 80,      // Mouse pushes particles away
  MOUSE_REPEL_FORCE:  0.5,
  
  // Colors
  COLORS: [0x00d4ff, 0x7c3aed, 0xa855f7, 0xf0abfc],  // Mix of accents
};
```

### Particle Behaviors
```
1. IDLE DRIFT: Each particle drifts in a unique Lissajous-like path (sin + cos combination)
2. CONNECTIONS: Lines draw between nearby particles, opacity = 1 - (distance/maxDist)
3. LINE PULSE: Lines slowly pulse in opacity (breathing effect)
4. MOUSE INTERACTION: Mouse position (converted to 3D space) repels nearby particles
5. SCROLL INTERACTION: Scroll depth slowly rotates the entire particle field (subtle)
6. COLOR SHIFT: Particles subtly shift between blue and violet over time (HSL rotation)
7. DEPTH LAYERS: Particles at different Z depths (creates 3D depth illusion)
```

### WebGL Setup
```tsx
// ParticleUniverse.tsx
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ 
  canvas: canvasRef.current,
  alpha: true,               // Transparent background
  antialias: true,
  powerPreference: 'high-performance'
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap at 2x for perf
renderer.setClearColor(0x000000, 0);  // Fully transparent

// Particles as BufferGeometry (most performant method)
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(CONFIG.PARTICLE_COUNT * 3);
const colors = new Float32Array(CONFIG.PARTICLE_COUNT * 3);

for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
  positions[i * 3]     = (Math.random() - 0.5) * 600;  // X
  positions[i * 3 + 1] = (Math.random() - 0.5) * 600;  // Y
  positions[i * 3 + 2] = (Math.random() - 0.5) * 200;  // Z (depth)
  
  // Random color from palette
  const color = new THREE.Color(CONFIG.COLORS[Math.floor(Math.random() * CONFIG.COLORS.length)]);
  colors[i * 3]     = color.r;
  colors[i * 3 + 1] = color.g;
  colors[i * 3 + 2] = color.b;
}
```

---

## ═══════════════════════════════════════════════════
## SECTION 7 — NAVBAR
## ═══════════════════════════════════════════════════

### Visual Design
```
Initial State (at top of page):
  → background: transparent
  → No blur
  → Nav links: semi-transparent white

Scrolled State (after 80px scroll):
  → background: rgba(8, 6, 20, 0.8)
  → backdrop-filter: blur(20px) saturate(180%)
  → border-bottom: 1px solid rgba(255,255,255,0.06)
  → Transition: all 300ms ease
  → Subtle drop shadow (var(--glow-subtle))
```

### Layout
```
[LEFT]                                            [RIGHT]
 TR ← monogram logo (animated on hover)    About  Skills  Projects  Awards  Contact  [HIRE ME →]
     ↓ glows neon blue on hover                                                        ↑ CTA button
```

### Logo "TR" Monogram
```
Font: Space Grotesk, 700 weight, 24px
Color: Gradient text (var(--gradient-text))
Hover: Slight scale(1.05) + glow intensifies
Click: Smooth scroll to top
```

### Nav Links
```
Font: JetBrains Mono, 400 weight, 14px
Color: var(--text-secondary) by default
Style: NO underline

Active state (current section in view):
  → Color: var(--neon-blue)
  → Below the text: a 2px neon blue underline that slides in from left
  → Glow: text-shadow: 0 0 12px rgba(0,212,255,0.8)

Hover state:
  → Color: var(--text-primary)
  → Underline slides in
  → Transition: 200ms

Tracking: Use IntersectionObserver to detect which section is in viewport
```

### "Hire Me" CTA Button
```
Style:
  border: 1.5px solid var(--neon-blue)
  color: var(--neon-blue)
  background: transparent
  padding: 8px 20px
  border-radius: 6px
  font: JetBrains Mono 14px
  
Hover:
  background: rgba(0, 212, 255, 0.1)
  box-shadow: var(--glow-blue)
  transform: translateY(-1px)
  
Click: Opens mailto:tejassverrishis.cse2025@citchennai.net

Animated: A subtle shimmer/shine passes across it every 4 seconds
```

### Mobile Hamburger Menu
```
Icon: Animated hamburger → X transition (the lines morph)
Menu: Full-screen overlay with frosted glass
  → Links appear one by one (stagger: 80ms each)
  → Background: rgba(8,6,20,0.95) with blur
  → Links are large (32px, Space Grotesk)
  → Social icons at bottom
  → Close on link click or outside tap
```

---

## ═══════════════════════════════════════════════════
## SECTION 8 — HERO SECTION (THE SHOWSTOPPER)
## ═══════════════════════════════════════════════════

### Layout (Full viewport height, centered)
```
[ABOVE CENTER]
Small label: "✦ Available for Opportunities" 
(pill shape, pulsing green dot on left, text in mono font)

[CENTER — MAIN CONTENT]
TEJASSVER
RISHI S
(Split into two lines for maximum impact)

[BELOW NAME]
Typewriter: "I build ___________________"
            cycling through:
            - "AI-powered experiences"
            - "real-time web applications"  
            - "award-winning interfaces"
            - "solutions that matter"
            - "250+ LeetCode solutions"

[BELOW TYPEWRITER]
Short bio (1 line): 
"CSE student at CIT Chennai crafting the future, one line at a time."

[BELOW BIO]
Two CTA buttons side by side:
[  View My Work ↓  ]    [  Download Resume  ]

[BOTTOM OF HERO — pinned to viewport bottom]
Scroll indicator: Animated bouncing chevron down
Text: "SCROLL TO EXPLORE" in tiny mono font with spaced letters
```

### The Name Typography
```
Font: Space Grotesk, 700 weight
Size: clamp(60px, 10vw, 140px) — massive and responsive
Color: transparent
Background: var(--gradient-text) — gradient fills the text
-webkit-background-clip: text
-webkit-text-fill-color: transparent

Effect: 
  - Each LETTER is wrapped in a span
  - On page load: Letters drop in from above with stagger (20ms per letter)
  - gsap: { y: -60, opacity: 0 } → { y: 0, opacity: 1 }
  - After settling: Very subtle float animation (up/down 4px, 4s loop)
  
Hover over name:
  - Each letter reacts individually (glitch effect)
  - Random RGB shift flicker for 300ms
  - Letters briefly separate (letter-spacing increases then snaps back)
```

### The Typewriter
```
Prefix "I build " in var(--text-secondary)
Typed text in var(--neon-blue)
Blinking cursor: | (actual pipe character, blinks at 530ms interval)
Speed: 60ms per character type, 30ms per delete
Pause between cycles: 2000ms
```

### Availability Badge
```html
<div class="availability-badge">
  <span class="pulse-dot"></span>
  ✦ Available for Opportunities
</div>

/* The pulse dot */
.pulse-dot {
  width: 8px; height: 8px;
  background: #00ff88;
  border-radius: 50%;
  animation: pulse-ring 1.5s ease infinite;
}

@keyframes pulse-ring {
  0%   { box-shadow: 0 0 0 0px rgba(0,255,136,0.6); }
  100% { box-shadow: 0 0 0 12px rgba(0,255,136,0); }
}
```

### CTA Buttons
```
Button 1 — "View My Work":
  Style: Filled gradient (var(--gradient-hero))
  Text: white, Space Grotesk 500
  Padding: 14px 32px
  Border-radius: 8px
  Hover: Scale 1.04, brightness increases, shadow deepens
  Click: Smooth scroll to #projects

Button 2 — "Download Resume":
  Style: Outlined (border: 1.5px solid var(--border-glass))
  Background: rgba(255,255,255,0.04)
  Hover: Background fills to rgba(255,255,255,0.08), border brightens
  Click: Downloads PDF resume

MAGNETIC EFFECT on both buttons:
  Mouse approaching within 80px: Button subtly shifts toward cursor
  Implementation: 
    document.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width/2);
      const dy = e.clientY - (rect.top + rect.height/2);
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 80) {
        gsap.to(btn, { x: dx * 0.3, y: dy * 0.3, duration: 0.3 });
      } else {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out' });
      }
    });
```

### Scroll Indicator
```
Position: Fixed to bottom of viewport, centered
Design: Thin vertical line (40px) → chevron arrow at bottom
Animation: The line and arrow pulse downward in a looping sequence
Color: var(--neon-blue) at 60% opacity
Text: "SCROLL" in 10px JetBrains Mono, letter-spacing: 0.4em
Disappears: After user scrolls 100px (fades out)
```

### Background Decorative Elements (Hero-specific)
```
Element 1: Giant "01" in the background
  Position: Top-right, partially off screen
  Font: JetBrains Mono, 400px, 
  Color: rgba(255,255,255,0.015) — barely visible
  This is the section number, decorative only

Element 2: Floating 3D geometric shape (optional Three.js object)
  Shape: Icosahedron wireframe
  Position: Right side of hero, floating beside the name
  Color: Neon blue wireframe
  Animation: Slow rotation on all 3 axes (X: 0.001, Y: 0.002, Z: 0.0005 per frame)
  Size: ~200px equivalent

Element 3: Gradient orbs (CSS radial gradients, blurred)
  Orb 1: 600px wide, violet, opacity 15%, top-left area
  Orb 2: 400px wide, blue, opacity 10%, bottom-right area
  Animation: Very slow drift (translate 20px over 8s, alternate)
```

---

## ═══════════════════════════════════════════════════
## SECTION 9 — ABOUT SECTION
## ═══════════════════════════════════════════════════

### Section Entry Animation
```
Section number "02" floats up from bottom as background decoration
Section title "ABOUT ME" splits character by character, sliding in from left
Horizontal rule draws itself (width 0 → 80px) in neon blue
```

### Layout: Two-Column Grid (50/50 on desktop, stacked on mobile)
```
[LEFT COLUMN — THE VISUAL]              [RIGHT COLUMN — THE TEXT]
Avatar / Profile illustration           > The Story
Floating skill orbit rings              > Stats Row
Social links floating around            > Core traits
```

### Left Column — Avatar Block
```
Create a stylized avatar illustration using CSS/SVG (no real photo needed):
  → A glowing circle (120px) as the "head"
  → Gradient fill: var(--gradient-hero)
  → Initials "TR" centered in Space Grotesk bold, white
  → Border: 2px gradient stroke
  → Outer ring 1: Rotating dashed orbit ring (skill labels orbit it — see below)
  → Outer ring 2: Slower counter-rotating solid ring (neon violet, 50% opacity)
  → Glow: box-shadow var(--glow-violet)

Skill labels orbiting the avatar (CSS animation, orbit path):
  Skills: Java | Python | React | Node.js | Three.js | AI/ML
  Each label: pill shape, tiny font, glassmorphism background
  Animation: orbiting at different radii and speeds
  → Java: radius 160px, speed 12s
  → Python: radius 200px, speed 16s (counter-clockwise)
  → React: radius 145px, speed 10s
  → Node.js: radius 185px, speed 14s
  → Three.js: radius 215px, speed 18s
  → AI/ML: radius 170px, speed 13s (counter-clockwise)

Each pill glows in its own accent color on hover (pause orbit on hover)
```

### Right Column — Bio Text
```
Greeting line (code comment style):
  // Hello, World! I'm Tejassver.
  Color: var(--text-code), font: JetBrains Mono

Paragraph 1:
  "A Computer Science Engineering student at Chennai Institute of Technology 
   with a CGPA of 8.52, on a mission to build software that leaves people 
   speechless."
  Animation: Words fade in one by one as section scrolls into view

Paragraph 2:
  "From crafting AI-powered visual tools to winning UI/UX awards at hackathons, 
   I live at the intersection of engineering precision and creative vision. 
   I've solved 250+ problems on LeetCode and still find bugs beautiful."
   
Paragraph 3:
  "Currently open to full-time roles, internships, and interesting problems 
   that need creative solutions."
```

### Stats Row (below bio text)
```
Three stat cards in a row:

┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│    250+     │  │   8.52      │  │    3+       │
│  LeetCode   │  │    CGPA     │  │  Projects   │
│  Problems   │  │             │  │  Shipped    │
└─────────────┘  └─────────────┘  └─────────────┘

Each stat:
  → Number in Space Grotesk 700, 40px, gradient text
  → Label in JetBrains Mono, 12px, var(--text-muted)
  → Glass card background
  → On scroll-into-view: number counts up from 0 using CountUp.js animation

Animation: Cards slide up from below with 150ms stagger
```

### Core Traits Tags
```
Below stats, a row of trait chips:
[⚡ Problem Solver] [🎨 UI/UX Thinker] [🤖 AI Builder] [☕ Java Enthusiast] [🏆 Hackathon Warrior]

Style: 
  background: rgba(0,212,255,0.08)
  border: 1px solid rgba(0,212,255,0.2)
  color: var(--neon-blue)
  border-radius: var(--radius-full)
  padding: 6px 16px
  font: JetBrains Mono 12px
  
Hover: Background becomes rgba(0,212,255,0.2), scale(1.05)
Animation: Stagger reveal from left on scroll
```

---

## ═══════════════════════════════════════════════════
## SECTION 10 — SKILLS SECTION
## ═══════════════════════════════════════════════════

### Layout: Three Glass Panels (categories)
```
┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
│  </> LANGUAGES   │ │  ⚡ WEB TECH     │ │  🗄 DATA & TOOLS │
│                  │ │                  │ │                  │
│  Java   ████████ │ │  HTML   ████████ │ │  MongoDB  ██████ │
│  Python ███████  │ │  CSS    ████████ │ │  MySQL    ██████ │
│  C++    ██████   │ │  Node   ███████  │ │  Supabase █████  │
│  JS     ███████  │ │  Express ██████  │ │  Git      ██████ │
│  PL/SQL █████    │ │  Django  █████   │ │  Vercel   ██████ │
└──────────────────┘ └──────────────────┘ └──────────────────┘
```

### Each Skill Bar
```
Name: Left-aligned, JetBrains Mono 13px, var(--text-primary)
Level: Right-aligned, tiny percentage, var(--text-muted)

Bar: 
  → Track: rgba(255,255,255,0.06), height 4px, border-radius full
  → Fill: gradient from var(--neon-blue) to var(--neon-violet)
  → On scroll trigger: fill animates from 0 to target width (800ms, ease.out)
  → Glows: box-shadow on the fill: 0 0 8px rgba(0,212,255,0.6)

Proficiency levels:
  Java:     90%   Python: 85%   C++:     78%   JS: 82%   PL/SQL: 65%
  HTML/CSS: 95%   Node.js: 80%  Express: 75%   Django: 68%
  MongoDB:  78%   MySQL:  80%   Supabase: 72%  Git: 88%  Vercel: 85%
```

### Panel Glassmorphism Style
```css
.skill-panel {
  background: var(--bg-glass);
  backdrop-filter: blur(var(--blur-glass));
  -webkit-backdrop-filter: blur(var(--blur-glass));
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-xl);
  padding: 32px;
  
  /* Hover state */
  transition: all 400ms ease;
}
.skill-panel:hover {
  border-color: rgba(0, 212, 255, 0.2);
  background: rgba(14, 11, 30, 0.8);
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), var(--glow-subtle);
}
```

### Panel Header
```
Category icon: 24px, gradient-colored (neon blue)
Category title: Space Grotesk 700, 18px, gradient text
Decorative line: 40px, 2px, neon blue, below title
```

### Soft Skills Section (below the three panels)
```
Title: "Beyond Code" — smaller section title

Eight soft skill chips in a wrapping flex row:
Communication  |  Teamwork  |  Problem Solving  |  Time Management
Adaptability   |  Analytical Thinking  |  Collaboration  |  Continuous Learning

Style: Outlined chips, slightly larger than tags elsewhere
Hover: Background tints violet, subtle rotation ±3deg
Animation: Scatter/fall into position from random directions on scroll trigger
```

---

## ═══════════════════════════════════════════════════
## SECTION 11 — PROJECTS SECTION (THE CROWN JEWEL)
## ═══════════════════════════════════════════════════

### Filter Bar (above project cards)
```
[All]  [AI/ML]  [Full Stack]  [Real-time]  [Python]

Style: Pill toggle buttons
Active: Filled neon blue, glow
Inactive: Outlined, subtle

Clicking a filter: 
  → Non-matching cards animate out (scale down + fade)
  → Matching cards rearrange with FLIP animation (smooth reflow)
  → Use GSAP Flip plugin for butter-smooth reordering
```

### Project Cards — Full Spec

#### Card 1: NeuroMap (FEATURED — takes up 2 columns)
```
SIZE: 2-column wide (desktop) — this is the HERO project, showcase it bigger

AWARD BANNER:
  Position: Top of card, full width
  Text: "🏆 BEST UI/UX DESIGN — DEVLYNIX BUILDATHON 2.0"
  Style: 
    background: linear-gradient(90deg, rgba(251,191,36,0.2), rgba(251,191,36,0.05))
    border-bottom: 1px solid rgba(251,191,36,0.3)
    color: var(--neon-gold)
    font: JetBrains Mono 11px, letter-spacing: 0.1em
    animation: shimmer (shine passes left to right every 3s)

PROJECT TITLE:
  "NeuroMap"
  Font: Space Grotesk 700, 28px
  Color: Gradient text

PROJECT SUBTITLE:
  "AI-Powered Visual Second Brain"
  Font: Inter 400, 16px, var(--text-secondary)

DESCRIPTION:
  "A knowledge graph that thinks. Built with cutting-edge React Flow and 
   AI integration, NeuroMap lets you visually connect ideas, memories, and 
   concepts into a dynamic, interactive second brain. The project that won 
   the crowd."

VISUAL ELEMENT (top half of card):
  An animated CSS/SVG illustration of a node graph:
  → 8-10 nodes connected by lines
  → Nodes pulse gently (scale 1 → 1.05 → 1, 2s loop)
  → Lines draw and fade in sequence
  → Accent colors: neon blue nodes + violet connections

TECH STACK PILLS:
  Next.js | React | TypeScript | Node.js | Tailwind | React Flow | shadcn/ui | Vercel
  Style: Small pills, each with a different micro-color (language-standard colors where known)

LINKS:
  [  GitHub ↗  ]   [  Live Demo ↗  ]   (if available)
  Style: Ghost buttons

CARD TILT:
  vanilla-tilt: { max: 8, speed: 400, glare: true, "max-glare": 0.15 }
  On tilt: A subtle rainbow glare sweeps across the card surface
```

#### Card 2: Queue Care
```
SIZE: 1-column

VISUAL: 
  Animated mockup of a dashboard — CSS-only
  A queue counter that increments (0 → 12 → 7 → 3) with smooth animation
  Green status dot pulsing = "Live"
  Shows: Patient #, wait time, status (Waiting/Called/Done)
  Color coded rows (green=done, yellow=waiting, blue=called)

TITLE: "Queue Care"
SUBTITLE: "Real-Time Clinic Queue Management"
DESCRIPTION: 
  "Zero wait time uncertainty. A live-updating clinic queue platform 
   powered by Supabase Realtime. Patients know their spot. Doctors 
   stay efficient. Everyone wins."

TAGS: Supabase | Real-time | JavaScript | Dashboard
TILT: vanilla-tilt: { max: 12, speed: 300 }
ACCENT COLOR: Teal/green (#00d4ff tinted toward green)
```

#### Card 3: MedCover — SocioAI
```
SIZE: 1-column

VISUAL:
  CSS illustration of a chat interface
  AI bubble: "Based on your symptoms, I recommend..."
  Animated typing indicator (three pulsing dots)
  Clean healthcare aesthetic with a cross/health icon
  Colors: Medical white + neon blue accents

TITLE: "MedCover — SocioAI"
SUBTITLE: "AI-Powered Healthcare Decision Platform"
DESCRIPTION:
  "When medical answers matter most, MedCover delivers. 
   An AI chatbot + recommendation engine that guides healthcare 
   decisions with empathy and intelligence."

TAGS: AI | Chatbot | Healthcare | NLP | Decision Support
TILT: vanilla-tilt: { max: 10, speed: 350 }
ACCENT COLOR: Violet (#a855f7)
```

#### Card 4: Aptitude Examination System
```
SIZE: 1-column

VISUAL:
  CSS mockup of an exam question card
  Progress bar at top (Q3 of 20)
  Timer ticking down: 14:32
  Multiple choice options A, B, C, D
  Clean, minimal UI

TITLE: "Aptitude Exam Digitalization"
DESCRIPTION:
  "Turning pencil-and-paper aptitude tests into fast, accessible, 
   digital experiences. Clean UI that gets out of the way and 
   lets candidates focus."

TAGS: Frontend | HTML | CSS | JavaScript
```

#### Card 5: Airline Reservation System
```
SIZE: 1-column

VISUAL:
  A departure board style UI (like airport FID boards)
  Rows: Flight | From | To | Status
  Animated: Text flips like old split-flap displays
  Accent: amber/gold departure board aesthetic

TITLE: "Airline Reservation System"
DESCRIPTION:
  "Full reservation management — booking, seat selection, 
   cancellation, and status tracking. Python and MySQL 
   working in harmony."

TAGS: Python | MySQL | CLI | Database Design
```

### Card Container/Grid
```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.project-card {
  background: var(--bg-glass);
  backdrop-filter: blur(var(--blur-glass));
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: border-color 400ms ease, box-shadow 400ms ease;
  cursor: none;  /* Our custom cursor handles this */
}

.project-card:hover {
  border-color: rgba(0, 212, 255, 0.3);
  box-shadow: 0 30px 80px rgba(0,0,0,0.5), var(--glow-subtle);
}

.project-card--featured {
  grid-column: span 2;  /* NeuroMap takes full width */
}
```

### Scroll Animation (Project Cards)
```javascript
// GSAP ScrollTrigger — cards cascade in
gsap.from('.project-card', {
  scrollTrigger: {
    trigger: '.projects-grid',
    start: 'top 75%',
  },
  y: 80,
  opacity: 0,
  duration: 0.7,
  stagger: 0.15,
  ease: 'power3.out'
});
```

---

## ═══════════════════════════════════════════════════
## SECTION 12 — AWARDS & ACHIEVEMENTS (THE TROPHY WALL)
## ═══════════════════════════════════════════════════

This section must feel like walking into a hall of fame.

### Background Treatment
```
Background: Slightly different from page — add a radial gradient:
  background: radial-gradient(ellipse at center, rgba(251,191,36,0.05) 0%, transparent 70%)
  
Large decorative "★" in background:
  Position: center, 400px font size
  Color: rgba(251,191,36,0.02)
  Animation: Very slow rotation (360deg / 60s)
```

### Section Header
```
Above title: Small label "RECOGNITION" in gold mono font, letter-spaced
Title: "Awards & Achievements" — but the word "Awards" glows gold
Subtitle: "What they gave me for what I built."
```

### Achievement Cards (Spotlight Style)
```
Layout: 2-column grid (desktop)

Each card has:
  LEFT: Large icon (trophy / star / code / certificate / graduation)
        Icon color: gradient from gold to amber
        Icon size: 48px
        
  RIGHT: Achievement title (bold, gradient text)
         Subtitle/detail (muted)
         Organization name (tiny, mono font)

THE GOLD SHIMMER EFFECT:
.achievement-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(251,191,36,0.06), transparent);
  transform: translateX(-100%);
  transition: transform 600ms ease;
}
.achievement-card:hover::before {
  transform: translateX(100%);
}
```

### Achievement List (Full Spec)
```
Achievement 1:
  Icon: 🏆 (trophy)
  Title: "Best UI/UX Design Award"
  Detail: "Devlynix Buildathon 2.0"
  Extra: "Competed against 50+ teams — won for NeuroMap"
  Color Accent: Gold

Achievement 2:
  Icon: </> (code bracket)
  Title: "250+ LeetCode Problems Solved"
  Detail: "Data Structures & Algorithms"
  Extra: LIVE COUNTER that counts up from 0 to 250 on scroll enter
  Color Accent: Neon blue

Achievement 3:
  Icon: 🔬 (lab)
  Title: "Data Science Internship"
  Detail: "Thiranex — May 2026 to Jun 2026"
  Extra: "Preprocessing, ML fundamentals, analytical workflows"
  Color Accent: Violet

Achievement 4:
  Icon: 🎓 (cap)
  Title: "Certificate of Excellence"
  Detail: "Outstanding Student of Grade XII"
  Extra: "Velammal Vidhyashram, Surapet"
  Color Accent: Gold

Achievement 5:
  Icon: 🐍 (python/cisco)
  Title: "Python Essentials-I Certification"
  Detail: "Cisco Networking Academy"
  Extra: "Foundational Python programming certification"
  Color Accent: Blue-green

Achievement 6:
  Icon: ⚡ (lightning)
  Title: "Active Hackathon Participant"
  Detail: "Multiple competitions"
  Extra: "Regular competitor in national-level hackathons"
  Color Accent: Purple
```

### Animated LeetCode Stats Widget
```
Inside Achievement 2, render a miniature stats display:
  
  ┌────────────────────────────────────────────┐
  │  leetcode.com/tejassverrishi67             │
  │  ───────────────────────────────────       │
  │  250+ Problems Solved                      │
  │                                            │
  │  Easy   ████████████░░░░  80+   ✓          │
  │  Medium ████████████████  150+  ✓          │  
  │  Hard   █████░░░░░░░░░░░  20+   ✓          │
  └────────────────────────────────────────────┘
  
  Bars animate on scroll entry.
  Click → opens LeetCode profile.
```

---

## ═══════════════════════════════════════════════════
## SECTION 13 — EXPERIENCE TIMELINE
## ═══════════════════════════════════════════════════

### Visual: Animated Vertical Timeline
```
Layout:
  Vertical line runs down the center
  Cards alternate left/right (desktop) or all right (mobile)
  
Timeline Line:
  Width: 2px
  Color: Gradient from neon blue (top) to violet (bottom)
  On scroll: Line "draws itself" top to bottom using clip-path animation
  
Timeline Nodes (dots on the line):
  Each experience = a glowing circle node on the line
  Size: 16px outer (neon blue border) + 6px inner filled dot
  Animation: Pulses when the card scrolls into view
  When active (in viewport): glow intensifies
```

### Experience Entry — Thiranex
```
Date Badge:
  Text: "May 2026 — Jun 2026"
  Style: JetBrains Mono, 12px, neon blue pill
  
Card:
  ┌─────────────────────────────────────────┐
  │ 🏢 Thiranex                              │
  │ Data Science Intern                      │
  │ ─────────────────────────────────        │
  │ Worked with structured datasets,         │
  │ preprocessing pipelines, and ML          │
  │ fundamentals. Built analytical           │
  │ workflows and collaborated on            │
  │ project-based learning initiatives.      │
  │                                          │
  │ [Data Science] [Python] [ML] [Analytics] │
  └─────────────────────────────────────────┘

Company Logo Area: Placeholder with "T" monogram in a square
Animation: Card slides in from right, then the experience pills appear one by one
```

### Future Placeholder
```
Below the Thiranex entry, a "ghost" entry:
  
  Node: Dashed circle (not filled)
  Card: Dashed border, 50% opacity
  Text: "Your company here? Let's talk."
  Button: [Get in Touch →] (links to contact section)
  
  This shows ambition and availability simultaneously.
```

---

## ═══════════════════════════════════════════════════
## SECTION 14 — EDUCATION SECTION
## ═══════════════════════════════════════════════════

### Layout: Stacked Cards with Visual Hierarchy
```
Three education cards, largest at top (most recent), decreasing size

CARD 1 — PRIMARY (most prominent):
  ┌─────────────────────────────────────────────┐
  │  🎓  Bachelor of Engineering                 │
  │      Computer Science Engineering            │
  │      ─────────────────────────              │
  │      Chennai Institute of Technology        │
  │      Chennai, Tamil Nadu                    │
  │                                             │
  │      CGPA: 8.52 / 10                        │
  │      ████████████████░░░░  85.2%            │
  │                                             │
  │      [2025 — 2029]                          │
  └─────────────────────────────────────────────┘
  
  CGPA bar: Animated fill on scroll, glows neon blue
  Color accent: Blue/violet gradient

CARD 2 — SECONDARY:
  ┌──────────────────────────────────────┐
  │  📚 HSC (Grade XII)                  │
  │     Velammal Vidhyashram, Surapet    │
  │     Score: 91.6%                     │
  │     ███████████████████░  91.6%      │
  └──────────────────────────────────────┘
  
CARD 3 — TERTIARY:
  ┌──────────────────────────────────────┐
  │  📝 SSC (Grade X)                    │
  │     Velammal Vidhyashram, Surapet    │
  │     Score: 92.2%                     │
  │     ████████████████████  92.2%      │
  └──────────────────────────────────────┘

All three cards use glassmorphism styling.
Bars animate from 0 to score% on scroll entry.
Cards have subtle tilt (max: 5deg — very gentle here, respectful section).
```

---

## ═══════════════════════════════════════════════════
## SECTION 15 — GLOBAL STATS BAR (INTERLUDE)
## ═══════════════════════════════════════════════════

A full-width dark band between sections (like Apple does between product sections).
Pure numbers, maximum impact.

### Visual
```
Background: rgba(0,0,0,0.4) — slightly darker than page
Border: top and bottom hairlines (var(--border-glass))
Content: 4 stat columns in a row

  ┌──────────┬──────────┬──────────┬──────────┐
  │   250+   │   5+     │   8.52   │   2026   │
  │ LeetCode │ Projects │   CGPA   │  Grad    │
  │ Problems │ Shipped  │   /10    │  Year    │
  └──────────┴──────────┴──────────┴──────────┘

Numbers: Space Grotesk 700, 56px, gradient text
Labels: JetBrains Mono 12px, var(--text-muted), letter-spacing: 0.1em

Animation: Numbers count up from 0 using IntersectionObserver
Separator: Thin vertical lines between columns (rgba(255,255,255,0.06))
```

---

## ═══════════════════════════════════════════════════
## SECTION 16 — CONTACT SECTION (THE CLOSER)
## ═══════════════════════════════════════════════════

This should feel like an invitation to collaborate. Premium. Personal. Memorable.

### Hero Text
```
Pre-title: "✦ CURRENTLY AVAILABLE"  (gold dot + text)
Title: "Let's Build Something"
Gradient title: "Extraordinary."  ← this word in gradient
Subtitle: "Whether you have a project in mind, an opportunity to share, 
           or just want to say hello — my inbox is always open."
```

### Two-Column Layout
```
[LEFT — CONTACT INFO]              [RIGHT — CONTACT FORM]
Email chip                         Name field (glass input)
Phone chip                         Email field (glass input)
GitHub chip                        Message textarea (glass)
LinkedIn chip                      [Send Message →] button
LeetCode chip
```

### Contact Info Chips
```
Each chip:
  Icon (24px) + Label + Value
  Background: rgba(255,255,255,0.04)
  Border: 1px solid var(--border-glass)
  Hover: Border glows in the appropriate accent color
  Click: Opens the appropriate link/app

  Email chip   → hover: neon blue glow  → click: mailto
  Phone chip   → hover: green glow      → click: tel
  GitHub chip  → hover: white glow      → click: github.com
  LinkedIn chip → hover: linkedin-blue  → click: linkedin.com
  LeetCode chip → hover: orange glow    → click: leetcode.com

Each chip animates: slides in from left with stagger (100ms each)
```

### Glass Input Fields
```css
.contact-input {
  width: 100%;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-md);
  padding: 14px 18px;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 15px;
  transition: all 300ms ease;
  outline: none;
}

.contact-input:focus {
  border-color: var(--neon-blue);
  background: rgba(0, 212, 255, 0.04);
  box-shadow: 0 0 0 3px rgba(0,212,255,0.1), var(--glow-blue);
}

.contact-input::placeholder {
  color: var(--text-muted);
}
```

### Submit Button
```
Text: "Send Message"
Style: Full gradient fill (var(--gradient-hero))
Size: Full width of form
Height: 52px
Font: Space Grotesk 600, 16px
Border-radius: var(--radius-md)

Hover: 
  Scale: 1.02
  Brightness: +10%
  Box-shadow: deepens

Click animation (form submit):
  1. Button text becomes "Sending..."
  2. A progress line sweeps across button left → right
  3. "Sent! ✓" appears with a green checkmark
  4. Button returns to normal after 3s
```

### Form Email Integration
```
Use EmailJS (https://emailjs.com) — works client-side, no backend needed
OR Formspree.io as fallback
Show toast notification on success/error (animated slide-in from bottom right)
```

---

## ═══════════════════════════════════════════════════
## SECTION 17 — FOOTER
## ═══════════════════════════════════════════════════

```
Background: #03020a (pure void)
Border-top: 1px solid var(--border-glass)

Layout:
  [LEFT]                              [RIGHT]
  TR monogram logo                    [GitHub] [LinkedIn] [LeetCode]
  "Built with ♥ by Tejassver"         ← social icon links
  "Chennai, Tamil Nadu • 2025"

Social icon buttons:
  Style: Square glass chips, 40x40px
  Icon: 20px, var(--text-muted)
  Hover: Icon brightens, background fills, platform-colored glow

Center bottom:
  "Designed & Developed by Tejassver Rishi S"
  Font: JetBrains Mono, 11px, var(--text-muted)
  
Back to top button:
  Bottom-right corner
  Circle (48px), glass style, arrow-up icon
  Appears after scrolling 400px
  Hover: Scales up, glows blue
  Click: Smooth scroll to top (1s duration)
```

---

## ═══════════════════════════════════════════════════
## SECTION 18 — GLOBAL ANIMATION SYSTEM
## ═══════════════════════════════════════════════════

### GSAP Setup (Required)
```javascript
// lib/gsap.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from 'gsap/SplitText';  // Club GreenSock or use split-type

gsap.registerPlugin(ScrollTrigger, Flip, TextPlugin, SplitText);

// Default easing curves
export const EASE = {
  smooth:   'power3.out',
  spring:   'elastic.out(1, 0.5)',
  snappy:   'power4.out',
  gentle:   'power1.inOut',
  back:     'back.out(1.7)',
};
```

### Lenis Smooth Scroll Setup
```javascript
// lib/lenis.ts
import Lenis from 'lenis';

const lenis = new Lenis({
  duration: 1.4,              // Scroll duration
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // Expo ease
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,         // Don't smooth on touch (feels weird)
  touchMultiplier: 2,
  infinite: false,
});

// Connect Lenis to GSAP ticker for seamless integration
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);
```

### Section Title Animation (Reusable)
```javascript
// Apply to EVERY section title
function animateSectionTitle(selector) {
  const split = new SplitText(selector, { type: 'chars, words' });
  
  gsap.from(split.chars, {
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
    },
    y: 60,
    opacity: 0,
    rotateX: -45,
    transformOrigin: '50% 50% -50',
    duration: 0.8,
    stagger: 0.025,
    ease: EASE.smooth,
  });
}
```

### Scroll Progress Indicator
```javascript
// Right side vertical bar showing scroll progress
const progressBar = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
  const scrollPct = window.scrollY / 
    (document.documentElement.scrollHeight - window.innerHeight);
  gsap.to(progressBar, { 
    scaleY: scrollPct, 
    transformOrigin: 'top',
    duration: 0.1 
  });
});
```

### Page Transition
```
No full-page router transitions needed (single page)
BUT: Add a "wipe" effect when navigating to external links
  → On external link click: A neon-colored overlay wipes across screen
  → Then new tab opens
  → Overlay wipes back
```

---

## ═══════════════════════════════════════════════════
## SECTION 19 — EASTER EGGS (What makes it LEGENDARY)
## ═══════════════════════════════════════════════════

### Easter Egg 1: Konami Code
```javascript
// Classic cheat code: ↑ ↑ ↓ ↓ ← → ← → B A
// When triggered:
//   → Particle universe goes WILD (all particles go red, then explode outward)
//   → "CHEAT CODE ACTIVATED" flashes on screen
//   → Matrix rain overlay appears for 3 seconds (green falling characters)
//   → Returns to normal with a particle implosion

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown',
                 'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
```

### Easter Egg 2: Click the Name 5 Times
```javascript
// Clicking "TEJASSVER RISHI" 5 times quickly:
// → Each letter flies off in a random direction (GSAP physics)
// → They reassemble with a snap effect 1 second later
// → A tiny "😄" appears briefly
```

### Easter Egg 3: Dark Mode Logo
```
// Clicking the "TR" logo in the navbar 3 times:
// → Brief disco mode: background flashes rainbow (RGB shift, 2 seconds)
// → Then returns to normal
```

### Easter Egg 4: The Console Message
```javascript
// Anyone who opens DevTools sees this:
console.log(`
%c ████████╗
%c ╚══██╔══╝███████╗       ██╗ █████╗ ███████╗███████╗██╗   ██╗███████╗██████╗ 
%c    ██║   ██╔════╝      ██╔╝██╔══██╗██╔════╝██╔════╝██║   ██║██╔════╝██╔══██╗
%c    ██║   █████╗       ██╔╝ ███████║███████╗███████╗██║   ██║█████╗  ██████╔╝
%c    ██║   ██╔══╝      ██╔╝  ██╔══██║╚════██║╚════██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
%c    ██║   ███████╗   ██╔╝   ██║  ██║███████║███████║ ╚████╔╝ ███████╗██║  ██║
%c    ╚═╝   ╚══════╝   ╚═╝    ╚═╝  ╚═╝╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝

👋 Hey there, fellow developer! 
Impressive that you're looking under the hood.
I like you already.

📧 tejassverrishis.cse2025@citchennai.net
🔗 github.com/tejassverrishi67

Built with: Next.js, Three.js, GSAP, Lenis & love.
`,
'color: #00d4ff', 'color: #7c3aed', 'color: #a855f7', 
'color: #7c3aed', 'color: #a855f7', 'color: #00d4ff',
'color: #f0abfc'
);
```

---

## ═══════════════════════════════════════════════════
## SECTION 20 — MOBILE EXPERIENCE
## ═══════════════════════════════════════════════════

### Breakpoints
```css
/* Mobile-first approach */
xs:   0px      (default)
sm:   640px    (large phone / small tablet)
md:   768px    (tablet)
lg:   1024px   (desktop)
xl:   1280px   (wide desktop)
2xl:  1536px   (ultrawide)
```

### Mobile-Specific Adaptations
```
HERO:
  Name: clamp(48px, 12vw, 80px) — still massive
  No floating 3D geometry (GPU intensive on mobile)
  Particle count reduced to 60 (performance)
  CTA buttons: stacked vertically, full width

PROJECTS:
  Grid: 1-column (single column on mobile)
  Tilt effect: DISABLED on touch devices
  Cards: Slightly smaller padding

ABOUT:
  Avatar: Smaller (80px), orbit rings simplified
  Skill labels: Only 3 orbiting instead of 6

SKILLS:
  Three panels: Stack vertically (1-column)

CONTACT:
  Two-column → single column stack

CURSOR:
  Custom cursor: HIDDEN on touch devices
  (touch devices don't have a persistent cursor)

NAVBAR:
  Hamburger menu replaces links
  Full-screen overlay menu

TOUCH GESTURES:
  Swipe up/down: Standard scroll (Lenis handles)
  Long press on project card: Shows "view details" hint
```

### Performance Budget (Mobile)
```
Target: 60fps on iPhone 12+ and equivalent Android
  → Three.js particles: Reduce to 60 on mobile
  → Disable backdrop-filter on very old devices (use fallback solid bg)
  → Lazy load all sections below the fold
  → Use IntersectionObserver for ALL scroll animations (not scroll event listeners)
  → Images/SVGs: Use lazy loading attribute
  → Fonts: preconnect, swap display
```

---

## ═══════════════════════════════════════════════════
## SECTION 21 — PERFORMANCE & SEO
## ═══════════════════════════════════════════════════

### Lighthouse Targets
```
Performance:    95+ 
Accessibility:  100
Best Practices: 100
SEO:            100
```

### Meta Tags (Complete List)
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#080614" />
  
  <title>Tejassver Rishi S — Full Stack Developer & AI Builder</title>
  <meta name="description" content="Portfolio of Tejassver Rishi S — CSE student, 
    award-winning developer, Full Stack Engineer & AI builder from Chennai. 
    250+ LeetCode solutions. Best UI/UX Award winner." />
  <meta name="keywords" content="Tejassver Rishi, portfolio, full stack developer, 
    AI developer, Chennai, React, Next.js, Python, Java" />
  <meta name="author" content="Tejassver Rishi S" />
  
  <!-- Open Graph (for LinkedIn/WhatsApp/Facebook previews) -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Tejassver Rishi S — Portfolio" />
  <meta property="og:description" content="Full Stack Developer & AI Builder. 
    Award-winning. 250+ LeetCode. Chennai, India." />
  <meta property="og:image" content="/og-image.png" />  <!-- 1200×630px card image -->
  <meta property="og:url" content="https://tejassver.vercel.app" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Tejassver Rishi S — Portfolio" />
  <meta name="twitter:description" content="Full Stack Developer & AI Builder" />
  <meta name="twitter:image" content="/og-image.png" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  
  <!-- Fonts (preconnect for speed) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
</head>
```

### OG Image
```
Create a 1200×630px static image (can be HTML → screenshot):
Background: var(--bg-deep) (#080614)
Center: "TR" large, gradient colored
Right: Name + title text
Bottom: Key stats (250+ LeetCode | 8.52 CGPA | Award Winner)
Style: Clean, minimal, dark, branded
```

### Performance Tricks
```javascript
// 1. Throttle Three.js on tab blur (saves battery/CPU)
document.addEventListener('visibilitychange', () => {
  if (document.hidden) renderer.setAnimationLoop(null);
  else renderer.setAnimationLoop(animate);
});

// 2. Debounce resize handler
window.addEventListener('resize', debounce(() => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}, 200));

// 3. Kill GSAP animations when element not in view
ScrollTrigger.create({
  trigger: '.particle-canvas',
  onEnter: () => renderer.setAnimationLoop(animate),
  onLeave: () => renderer.setAnimationLoop(null),
  onEnterBack: () => renderer.setAnimationLoop(animate),
  onLeaveBack: () => renderer.setAnimationLoop(null),
});

// 4. Use gsap.context() for cleanup in React
useEffect(() => {
  const ctx = gsap.context(() => {
    // All animations here
  }, containerRef);
  return () => ctx.revert();  // Cleanup on unmount
}, []);
```

---

## ═══════════════════════════════════════════════════
## SECTION 22 — DEPLOYMENT CHECKLIST
## ═══════════════════════════════════════════════════

### Vercel Deployment (Recommended)
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "feat: god level portfolio launch 🚀"
git remote add origin https://github.com/tejassverrishi67/portfolio
git push -u origin main

# 2. Connect to Vercel
# Go to vercel.com → New Project → Import from GitHub
# Framework: Next.js (auto-detected)
# Build command: next build
# Output: .next

# 3. Custom Domain (optional)
# vercel.com → Project Settings → Domains
# Add: tejassver.dev or tejassverrishi.com
```

### Environment Variables
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Pre-Launch Checklist
```
☐ All links work (GitHub, LinkedIn, LeetCode, email, phone)
☐ Contact form sends emails (test with real email)
☐ Loading screen timing feels right (not too slow)
☐ Custom cursor works in Chrome, Firefox, Safari
☐ Three.js canvas doesn't overflow or cause horizontal scroll
☐ All text is readable (contrast ratio > 4.5:1)
☐ Mobile layout tested on iPhone and Android
☐ Keyboard navigation works (tab through all interactive elements)
☐ No console errors in production build
☐ OG image looks good when shared on LinkedIn
☐ Page loads in < 3s on 3G (use Lighthouse)
☐ Favicon shows correctly in browser tab
☐ All project cards have correct info
☐ LeetCode stats link goes to correct profile
☐ Resume PDF is up-to-date and downloads correctly
```

---

## ═══════════════════════════════════════════════════
## SECTION 23 — THE FINAL CHECKLIST: WOW FACTOR TEST
## ═══════════════════════════════════════════════════

After building, open the site cold and ask:

```
1 second  → "Holy... what IS this background?!"          ← Three.js particles  ✓
3 seconds → "That cursor is insane"                       ← Custom cursor       ✓  
5 seconds → "That name animation is 🔥"                   ← GSAP letter split   ✓
10 seconds → "Wait, it's INTERACTIVE?"                    ← Mouse repel         ✓
15 seconds → "He WON a hackathon for UI/UX? I can see why"← Award section      ✓
30 seconds → "250+ LeetCode... and this site... okay"     ← Stats counter       ✓
60 seconds → "I need to reach out to this guy"            ← Contact section     ✓

If all 7 reactions happen → SHIP IT. 🚀
```

---

## ═══════════════════════════════════════════════════
## SECTION 24 — PROMPT DELIVERY INSTRUCTIONS
## ═══════════════════════════════════════════════════

### Where to use this prompt:

**Option A — v0.dev (by Vercel)**
  → Paste section by section
  → Start with: "Build the HERO section of this portfolio..."
  → Then: "Now add the PROJECTS section..."
  → Best for: React + Tailwind output

**Option B — Bolt.new**
  → Paste the full prompt at once
  → Say: "Build this as a complete Next.js project with all files"
  → Best for: Full project scaffold

**Option C — Cursor or Windsurf (with AI coding)**
  → Create the folder structure manually
  → Use AI in each file with relevant sections of this prompt
  → Best for: Maximum control + customization

**Option D — Claude or ChatGPT**
  → Request one section at a time as self-contained HTML
  → Assemble manually or ask it to merge
  → Best for: Single-file output

### Starting Prompt
Copy and paste this FIRST:
```
Build Section [X] of the following portfolio spec for Tejassver Rishi S.
Output as: [React component / HTML+CSS+JS / Next.js page]
Use the EXACT colors, fonts, and animations described.
Do NOT simplify — implement every effect described.

[PASTE RELEVANT SECTION FROM THIS DOCUMENT]
```

---

# ████████████████████████████████████████████████████████████
# ██  THIS PROMPT IS NOW COMPLETE. GO BUILD THE FUTURE.      ██
# ██  — TEJASSVER RISHI S  |  PORTFOLIO v∞  |  FINAL FORM — ██  
# ████████████████████████████████████████████████████████████
