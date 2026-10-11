/**
 * HANNA ABIGAIL B. BETER — SKILLS & EXPERTISE
 * Honest, authentic competencies categorized by domain
 * No exaggerated percentage bars — focused on practical application & coursework
 */

const portfolioSkills = [
  {
    category: "programming",
    title: "Programming & Development",
    subtitle: "Software logic, object-oriented concepts, and web fundamentals",
    icon: "code",
    skills: [
      {
        name: "Java",
        level: "Academic Core",
        description: "Object-oriented programming, data structures, algorithms, and modular class architectures."
      },
      {
        name: "Visual Basic .NET",
        level: "Coursework & System Prototyping",
        description: "Event-driven Windows desktop applications, database connectivity, and administrative GUI forms."
      },
      {
        name: "HTML5 & CSS3",
        level: "Semantic & Responsive Web",
        description: "Modern semantic markup, responsive grid/flexbox layouts, CSS variables, and modern styling."
      },
      {
        name: "JavaScript",
        level: "Interactive Web Foundations",
        description: "Client-side DOM manipulation, event handling, asynchronous flows, and dynamic UI state."
      }
    ]
  },
  {
    category: "hardware",
    title: "Computer Engineering",
    subtitle: "Digital logic, circuit fundamentals, and hardware-software systems",
    icon: "cpu",
    skills: [
      {
        name: "Digital Logic Fundamentals",
        level: "Engineering Foundation",
        description: "Boolean algebra, logic gate minimization, Karnaugh maps, combinational & sequential circuit design."
      },
      {
        name: "Basic Electronics",
        level: "Laboratory Practice",
        description: "Circuit analysis, Ohm's and Kirchhoff's laws, passive components, transistor switching, and breadboarding."
      },
      {
        name: "Verilog HDL Fundamentals",
        level: "Hardware Description",
        description: "RTL behavioral and structural modeling, simulation testbenches, and logic synthesis principles."
      },
      {
        name: "Hardware & Software Integration",
        level: "System Concepts",
        description: "Microcontroller interfacing, sensor telemetry (I2C/analog), and peripheral control logic."
      }
    ]
  },
  {
    category: "design",
    title: "Design & Prototyping",
    subtitle: "Human-centered interfaces, user flows, and aesthetic precision",
    icon: "layout",
    skills: [
      {
        name: "UI/UX Design",
        level: "Design Philosophy",
        description: "User journey mapping, cognitive load optimization, high-contrast accessible color systems."
      },
      {
        name: "Wireframing",
        level: "Low-Fidelity Architecture",
        description: "Rapid conceptual structural layouts, user navigation flowcharts, and information hierarchy."
      },
      {
        name: "Interactive Prototyping",
        level: "Clickable Flow Validation",
        description: "High-fidelity interactive state transitions, component variants, and tactile feedback simulation."
      },
      {
        name: "Interface Design",
        level: "Visual Polish",
        description: "Typography systems, micro-interactions, responsive design breakpoints, and editorial layout balance."
      }
    ]
  },
  {
    category: "tools",
    title: "Tools & Platforms",
    subtitle: "Industry and engineering environments utilized in coursework",
    icon: "wrench",
    skills: [
      {
        name: "Visual Studio",
        level: "IDE Environment",
        description: "Project management, debugging, WinForms creation, and compiling .NET desktop applications."
      },
      {
        name: "AutoCAD",
        level: "Engineering Drafting",
        description: "2D technical schematics, dimensioning, orthographic projections, and layout drafting."
      },
      {
        name: "Figma",
        level: "Design & Systems",
        description: "Design systems, auto-layout components, responsive frames, and interactive prototype linking."
      },
      {
        name: "Canva",
        level: "Presentation & Visuals",
        description: "Editorial slide decks, project pitch presentations, diagrams, and digital branding assets."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { portfolioSkills };
}
