# ✦ HANNA ABIGAIL B. BETER — PORTFOLIO WEBSITE
### Premium Maroon & Champagne Gold Editorial Digital Portfolio
**Bachelor of Science in Computer Engineering — ICCT Colleges**

---

## 🏛️ Design Identity & Visual System

* **Primary Palette:**
  * **Deep Maroon:** `#4A0D22` (Hero, header highlights, brand anchor)
  * **Burgundy:** `#6B1732` (Secondary depth, section headers, badges)
  * **Champagne Gold:** `#D4AF72` / Metallic Light: `#F5E3BD` (Editorial accents, borders, interactive buttons)
  * **Warm Ivory:** `#F8F5F0` (About & Education editorial reading surfaces)
  * **Rich Near-Black / Obsidian:** `#171316` / `#1F0611` (Dark luxury surfaces, cards, and modal background)
* **Typography Pairing:**
  * **Headings:** *Cormorant Garamond* & *Cinzel* (Luxury editorial serifs)
  * **Body & Telemetry:** *Plus Jakarta Sans* & Monospace (Crisp, modern, high legibility)
* **Atmosphere:**
  * Luxury editorial magazine aesthetic paired with disciplined computer engineering precision.
  * Generous whitespace, refined gold borders, subtle guilloche monograms ("HB"), and authentic academic framing.

---

## 📁 Project Architecture & Components

```
hanna-beter-portfolio/
│
├── index.html              # Main semantic portfolio application
├── serve.js                # Zero-dependency local preview server
├── README.md               # Complete documentation & customization guide
│
├── css/
│   └── style.css           # Custom luxury styles, scrollbar, modal animations, gold foil effects
│
└── js/
    ├── app.js              # Core interactivity (navigation spy, filters, modal, toast, clipboard)
    ├── projects-data.js    # Comprehensive case study database for all 5 featured projects
    └── skills-data.js      # Structured competencies with authentic academic indicators
```

---

## 🚀 How to Run & Preview Locally

### Option 1: Instant Local Browser (No installation required)
Simply double-click [`index.html`](file:///C:/Users/Red/.gemini/antigravity/scratch/hanna-beter-portfolio/index.html) or right-click and choose **Open with Google Chrome / Edge / Firefox**.

### Option 2: Built-in Preview Server (Node.js)
Open PowerShell in this directory and run:
```powershell
& "C:\Users\Red\AppData\Roaming\Antigravity\bin\agy-node.cmd" serve.js
```
*(Or if standard `node` is installed: `node serve.js`)*

Then open your browser to:
👉 **`http://localhost:3800`**

---

## 💎 Key Sections & Features

1. **Top Status Micro-Bar**
   * Displays academic status at ICCT Colleges and open availability for engineering collaborations.
2. **Navigation Bar**
   * Luxury "HB" monogram seal, clear section navigation, sticky glassmorphic backdrop blur, mobile drawer, and gold "Let's Connect" button.
3. **Hero Section**
   * Asymmetrical editorial layout with large serif typography, authentic introductory quote, primary "Explore My Work" button, secondary "Get in Touch" button, and custom geometric guilloche crest.
4. **About Me Section**
   * *"Driven by Curiosity. Inspired by Innovation."*
   * Warm ivory editorial background with highlight cards: *Engineering Mindset*, *Human-Centered Design*, and *Continuous Exploration*.
5. **Skills & Expertise**
   * 4 categories: *Programming & Development*, *Computer Engineering*, *Design & Prototyping*, and *Tools & Platforms*.
   * Honest indicators (e.g. *Academic Core*, *Logic Gates*, *User Empathy*, *Drafting*) without exaggerated percentages.
6. **Featured Projects Showcase**
   * Interactive filter tabs (*All*, *Development & Systems*, *UI/UX & Concepts*, *Hardware & Engineering*).
   * 5 Featured Academic Works:
     * **DialyCare** — Dialysis Management & Care Coordination System
     * **iQueue** — Student Document Request & Appointment System
     * **iPrepare** — Community Disaster Preparedness Platform
     * **OxyCheck** — Portable Air-Quality Monitoring Prototype
     * **CableCut Express** — Automated Wire Measuring & Cutting Kiosk
7. **Full-Fidelity Case Study Modal**
   * Accessible modal dialog opened from any project card.
   * Includes Problem Statement, Proposed Solution, Core Architectural Features, Step-by-Step Engineering Process, Hanna's Specific Contributions, Tech Stack, and Lessons Learned.
   * Includes Previous / Next case study navigation and `Escape` key dismissal.
8. **Education Timeline**
   * Bachelor of Science in Computer Engineering at **ICCT Colleges**.
   * Coursework breakdown (Digital Logic, Microprocessors, OOP, Circuits, Technopreneurship) and laboratory practice.
9. **Experience & Activities**
   * Academic capstone collaborations, seminars, webinars, and professional certification roadmap.
10. **Interactive Contact Section**
    * *"Have an Idea Worth Building?"*
    * Email with one-click **Copy to Clipboard** button, LinkedIn, GitHub.
    * Interactive contact form with real-time field validation and animated champagne gold toast notification.
11. **Footer**
    * Monogram crest, copyright notice with dynamic current year (2026), and smooth Back to Top button.

---

## 🛠️ How to Customize & Connect Services

### 1. Update Contact Information
In [`index.html`](file:///C:/Users/Red/.gemini/antigravity/scratch/hanna-beter-portfolio/index.html) and [`js/app.js`](file:///C:/Users/Red/.gemini/antigravity/scratch/hanna-beter-portfolio/js/app.js):
* Search for `habbeter@example.com` and replace with your actual personal or institutional email.
* Update the LinkedIn (`https://linkedin.com/in/...`) and GitHub (`https://github.com/hnnbtr30`) links with your exact profile URLs.

### 2. Connect Contact Form to Live Email (e.g. Formspree)
To receive messages straight to your inbox without writing backend code:
1. Register a free endpoint on [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. Change the form tag in `index.html`:
   ```html
   <form id="portfolioContactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### 3. Deploy to the Web (100% Free)
#### Option A: GitHub Pages
1. Push this folder to a GitHub repository named `hnnbtr30.github.io` (or `hanna-beter.github.io`).
2. Go to **Settings** > **Pages** > Select branch `main` and root `/`.
3. Your luxury portfolio will be live in ~60 seconds!

#### Option B: Vercel or Netlify
1. Drag and drop the `hanna-beter-portfolio` folder directly onto [Netlify Drop](https://app.netlify.com/drop) or import from GitHub on [Vercel](https://vercel.com).
2. It deploys automatically with zero build configuration.
