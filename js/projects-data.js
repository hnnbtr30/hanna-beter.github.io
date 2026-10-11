/**
 * HANNA ABIGAIL B. BETER — PORTFOLIO DATA STORE
 * Academic & Personal Projects Database
 * Note: All project statuses are presented authentically as proposals, concepts, and prototypes.
 */

const portfolioProjects = [
  {
    id: "dialycare",
    title: "DialyCare",
    tagline: "Dialysis Management & Patient Care Coordination System",
    category: "development",
    categoryLabel: "Development & Systems",
    statusBadge: "Proposed Digital System",
    statusType: "proposal", // proposal, concept, prototype
    role: "System Flow Design & UI/UX Architecture",
    timeline: "Academic Term Project",
    summary: "A proposed digital system designed to support dialysis center staff, patients, and relatives through organized session information, scheduling, and notifications.",
    technologies: ["UI/UX Prototyping", "Information Architecture", "Relational Database Concepts", "Workflow Automation", "Figma"],
    overview: "Dialysis treatments demand strict adherence to recurring schedules, precise fluid-removal records, and multi-party coordination between clinical staff, patients, and their family caregivers. DialyCare was conceived as an organized digital hub to replace cumbersome paper logs with clear session timelines, automated reminders, and caregiver transparency.",
    problemStatement: "In typical hemodialysis outpatient settings, scheduling conflicts, lack of real-time communication regarding chair readiness, and poor visibility for family members create unnecessary stress. Miscommunication can lead to missed treatment slots, inadequate preparation, and administrative bottlenecks for medical staff.",
    proposedSolution: "DialyCare introduces a role-aware digital workflow with three distinct interfaces: a clinical dashboard for monitoring treatment queues and scheduling nurses; a patient portal for viewing historical sessions and vitals; and a family caregiver notification bridge for real-time status updates.",
    keyFeatures: [
      {
        title: "Session Schedule & Chair Allocation",
        description: "Visual time-slot matrix that helps clinic administrative staff schedule recurring dialyzer shifts without double-booking equipment."
      },
      {
        title: "Patient & Vital Statistics Tracker",
        description: "Structured data entry for pre- and post-dialysis weights, blood pressure metrics, and ultrafiltration rates."
      },
      {
        title: "Caregiver Notification Gateway",
        description: "Automated SMS/push notification concept alerting family members when a treatment session commences and nears completion."
      },
      {
        title: "Medical Document Vault",
        description: "Centralized repository for laboratory results (creatinine, hemoglobin, electrolytes) accessible to attending physicians."
      }
    ],
    processSteps: [
      { step: "01. Domain Research", detail: "Interviewed and observed routine dialysis care workflows to map pain points between nurses and accompanying relatives." },
      { step: "02. Wireframing & Task Flows", detail: "Developed user journey maps identifying critical junctures: intake check-in, treatment progress, and discharge." },
      { step: "03. Interactive UI Prototype", detail: "Designed high-contrast, accessible visual screens in Figma with clear typography suited for high-stress medical environments." },
      { step: "04. Database Schema Design", detail: "Formulated normalized relational tables linking patients, attending nurses, machines, and session logs." }
    ],
    contributions: [
      "Conducted domain research and mapped out the end-to-end user journeys for both clinic nurses and patient relatives.",
      "Engineered the information architecture and created high-fidelity interactive prototypes for the administrative dashboard.",
      "Designed the relational database entity-relationship diagram (ERD) defining sessions, vitals, and notification triggers.",
      "Drafted comprehensive system documentation detailing data security considerations and privacy protections."
    ],
    lessonsLearned: "Designing for clinical environments underscored the paramount importance of cognitive load reduction. Every millisecond a healthcare worker spends looking for a button is time away from patient care. Empathy and accessibility must drive interface decisions.",
    accentColor: "#4A0D22",
    badgeColor: "maroon"
  },
  {
    id: "iqueue",
    title: "iQueue",
    tagline: "Student Document Request & Appointment Management System",
    category: "development",
    categoryLabel: "Development & Systems",
    statusBadge: "Proposed Academic System",
    statusType: "proposal",
    role: "Systems Analysis & Front-End Concept Lead",
    timeline: "Academic Coursework",
    summary: "A proposed system intended to make student document requests and appointment scheduling more organized, transparent, and convenient.",
    technologies: ["Visual Basic .NET / Web Concept", "Database Management", "UI Wireframing", "Process Modeling"],
    overview: "Academic registrars frequently experience severe seasonal bottlenecks during enrollment and graduation seasons. iQueue is an institutional queue management and document tracking system tailored for colleges and universities to eliminate physical lines and streamline registrar processing.",
    problemStatement: "Students traditionally queue for hours just to request simple documents like Certificates of Good Moral Character, Official Transcripts of Records (OTR), or Honorable Dismissals. The lack of tracking mechanisms results in redundant inquiries, lost paperwork, and overwhelmed registrar personnel.",
    proposedSolution: "A dual-tiered digital queue management system where students can file requests online, pick an appointment window, track document processing in real time via an assigned reference token, and receive instant alerts when documents are ready for pickup.",
    keyFeatures: [
      {
        title: "Digital Document Catalog & Filing",
        description: "Categorized listing of school records with explicit documentary requirements, fee breakdowns, and estimated release days."
      },
      {
        title: "Smart Token Scheduling",
        description: "Dynamic time-slot booking that throttles hourly foot traffic to prevent campus registrar overcrowding."
      },
      {
        title: "Real-Time Request Tracker",
        description: "Progress indicator displaying current status: 'Submitted', 'Under Review', 'Printing', and 'Ready for Claiming'."
      },
      {
        title: "Registrar Management Console",
        description: "Centralized administrative queue board allowing staff to update document status in a single click."
      }
    ],
    processSteps: [
      { step: "01. Needs Analysis", detail: "Analyzed existing student registrar filing bottlenecks at ICCT Colleges to identify peak turnaround delays." },
      { step: "02. Architecture & Flowcharts", detail: "Mapped standard operating procedures into an automated relational workflow state machine." },
      { step: "03. Interface Mockups", detail: "Built responsive mockups with visual queue tickets and clear status indicators." },
      { step: "04. Prototype Implementation", detail: "Developed a functional desktop prototype using Visual Basic .NET connected to local database storage." }
    ],
    contributions: [
      "Led the systems analysis phase, drafting functional and non-functional requirements specifications.",
      "Built the front-end user forms in Visual Basic .NET with input validation preventing invalid student ID submissions.",
      "Devised the token generator algorithm creating easily identifiable alphanumeric appointment slips.",
      "Authored the user manual and presented the technical defense to faculty panelists."
    ],
    lessonsLearned: "Gained hands-on experience translating real institutional administrative challenges into structured algorithmic solutions, while discovering how interface friction can directly affect non-technical users.",
    accentColor: "#6B1732",
    badgeColor: "burgundy"
  },
  {
    id: "iprepare",
    title: "iPrepare",
    tagline: "Community Disaster Preparedness & Education Platform",
    category: "uiux",
    categoryLabel: "UI/UX & Interactive Design",
    statusBadge: "Educational Application Concept",
    statusType: "concept",
    role: "Interactive UI/UX & Curriculum Mapping",
    timeline: "Creative Academic Project",
    summary: "An educational application concept focused on disaster preparedness through learning materials, interactive safety tips, quizzes, and progress tracking.",
    technologies: ["Figma", "UI/UX Design", "Interactive Prototyping", "Information Design", "Mobile Layouts"],
    overview: "Located in the Pacific Typhoon Belt and Ring of Fire, communities in the Philippines face recurrent natural hazards like typhoons, earthquakes, and flash floods. iPrepare transforms emergency preparedness from passive brochures into engaging, gamified, and actionable mobile learning modules.",
    problemStatement: "Most public disaster safety information exists as lengthy, text-heavy pamphlets that citizens rarely read or retain during a crisis. In an emergency, people panic because they have never engaged with simulated drills or practical knowledge checks.",
    proposedSolution: "A vibrant, human-centered mobile app that gamifies disaster readiness through bite-sized interactive cards, offline-capable emergency checklists (Go-Bag inventory), situational quizzes, and clear emergency hotline directories.",
    keyFeatures: [
      {
        title: "Hazard-Specific Learning Pathways",
        description: "Modular courses tailored to Typhoons, Earthquakes, Volcanic Eruptions, and Fire Safety with visual infographics."
      },
      {
        title: "Interactive Go-Bag Checklist",
        description: "A gamified survival kit builder that helps families track essential supplies, expiration dates, and personal emergency docs."
      },
      {
        title: "Knowledge Reinforcement Quizzes",
        description: "Quick 5-question scenario challenges (e.g., 'Duck, Cover, and Hold' simulations) that award readiness badges upon completion."
      },
      {
        title: "Offline Emergency Quick-Card",
        description: "One-tap emergency mode functioning without internet connectivity to display vital hotline numbers and first-aid reminders."
      }
    ],
    processSteps: [
      { step: "01. Content Curation", detail: "Synthesized NDRRMC and Red Cross disaster safety protocols into modular educational units." },
      { step: "02. Persona & Empathy Mapping", detail: "Defined personas ranging from elementary students to household heads to ensure visual accessibility." },
      { step: "03. Design System Creation", detail: "Built a warm, urgent yet reassuring design palette with accessible typography and high-contrast badges." },
      { step: "04. Micro-Interactions", detail: "Prototyped smooth card-flip animations and celebration badges in Figma to encourage completion." }
    ],
    contributions: [
      "Conceptualized the complete user experience, information architecture, and visual identity of the mobile application.",
      "Designed over 25 individual screen layouts covering onboarding, hazard guides, checklist builders, and test modules.",
      "Integrated micro-animations and feedback states to keep learners motivated and engaged.",
      "Conducted peer usability walkthroughs and iteratively refined typography sizes for one-handed thumb navigation."
    ],
    lessonsLearned: "Discovered how instructional design and UX psychology intersect: emotional design can turn intimidating subject matter (natural disasters) into empowering, actionable habits.",
    accentColor: "#D4AF72",
    badgeColor: "gold"
  },
  {
    id: "oxycheck",
    title: "OxyCheck",
    tagline: "Portable Environmental Air-Quality Monitoring Prototype",
    category: "hardware",
    categoryLabel: "Hardware & Embedded Systems",
    statusBadge: "Hardware Concept & Prototype",
    statusType: "prototype",
    role: "Hardware Circuit Design & Sensor Logic",
    timeline: "Computer Engineering Lab",
    summary: "A hardware project concept involving environmental sensing components to monitor air-quality-related readings and ambient environmental conditions.",
    technologies: ["Digital Logic Fundamentals", "Basic Electronics", "Environmental Sensors (MQ / DHT)", "Microcontroller Concepts", "Circuit Schematics"],
    overview: "Indoor air pollution and stagnant particulate matter often go unnoticed in classrooms, computer laboratories, and compact dormitories. OxyCheck is an embedded hardware concept designed to provide localized, real-time telemetry on air quality and ambient conditions in a compact, portable form factor.",
    problemStatement: "Commercial industrial air monitors are prohibitively expensive and bulky for everyday student use, while budget sensors frequently lack intuitive visual feedback for non-technical occupants who simply need to know if a room requires immediate ventilation.",
    proposedSolution: "A portable microcontroller-driven hardware device featuring air sensor integration (gas/particulate detection), a temperature/humidity sensor, a compact I2C visual display, and a tricolor LED status gauge indicating air safety thresholds (Optimal, Moderate, Ventilate).",
    keyFeatures: [
      {
        title: "Multi-Sensor Telemetry",
        description: "Incorporates gas-sensing elements with ambient temperature and relative humidity tracking for comprehensive indoor monitoring."
      },
      {
        title: "Tricolor Visual Indicator",
        description: "Intuitive green-yellow-red LED logic for immediate peripheral awareness of environmental changes without reading small numbers."
      },
      {
        title: "I2C OLED Telemetry Display",
        description: "Crisp low-power screen rendering live metrics, particulate index estimates, and uptime diagnostics."
      },
      {
        title: "Low-Power Compact Design",
        description: "Engineered around portable 5V power banks or rechargeable battery packs for versatile room-to-room portability."
      }
    ],
    processSteps: [
      { step: "01. Sensor Selection", detail: "Researched sensitivity curves and voltage requirements of air and temperature sensing modules." },
      { step: "02. Breadboard Prototyping", detail: "Assembled initial circuit connections on a solderless breadboard with current-limiting resistors." },
      { step: "03. Logic & Calibration", detail: "Wrote sensor sampling routines with threshold logic to categorize indoor air quality intervals." },
      { step: "04. Enclosure Layout", detail: "Drafted enclosure spatial constraints accommodating sensor airflow vents and display bezel." }
    ],
    contributions: [
      "Calculated power consumption requirements and designed the breadboard circuit schematic.",
      "Formulated the threshold logic that maps raw analog voltage readings into human-interpretable quality grades.",
      "Soldered auxiliary header pins and wired test circuits to verify steady I2C communication with the display.",
      "Documented laboratory test runs and temperature compensation considerations."
    ],
    lessonsLearned: "Deepened practical appreciation for analog-to-digital conversion, sensor warm-up stabilization periods, and the physical constraints of embedded electronic design.",
    accentColor: "#4A0D22",
    badgeColor: "maroon"
  },
  {
    id: "cablecut",
    title: "CableCut Express",
    tagline: "Automated Wire Measuring & Cutting Kiosk Concept",
    category: "hardware",
    categoryLabel: "Hardware & Technopreneurship",
    statusBadge: "Technopreneurship Prototype Concept",
    statusType: "prototype",
    role: "Engineering Concept & Automation Flow",
    timeline: "Technopreneurship Coursework",
    summary: "A technopreneurship prototype concept designed to automate wire measurement and cutting for electrical and hardware supply businesses.",
    technologies: ["Digital Logic", "Industrial Automation Concepts", "Stepper Motor Architecture", "Keypad Input Interface", "Technopreneurship Feasibility"],
    overview: "Hardware stores and electrical depots manually measure thousands of meters of stranded copper wire every day using tape measures and handheld shears—a slow, error-prone process prone to cumulative material waste and worker wrist fatigue. CableCut Express is an automated kiosk concept that delivers precision cuts on demand.",
    problemStatement: "Manual wire cutting suffers from human error (cutting too short leads to customer disputes; cutting too long causes retailer inventory loss). During busy contractor hours, manual winding and cutting creates severe checkout delays.",
    proposedSolution: "An automated benchtop kiosk featuring a rotary wire feeder guided by a calibrated stepper motor, an interactive digital keypad where the operator inputs wire gauge and required length (meters/feet), and a motor-actuated cutting blade that dispenses the exact measurement.",
    keyFeatures: [
      {
        title: "Precision Length Input Interface",
        description: "Simple numerical keypad with an LCD screen where clerks input target length, count of segments, and wire diameter."
      },
      {
        title: "Calibrated Roller Feed Mechanism",
        description: "Dual textured pinch-rollers coupled to a precision stepper motor ensuring slip-free linear feed calibrated per millimeter."
      },
      {
        title: "Automated Shear Actuation",
        description: "Linear actuator or high-torque servo-driven cutting mechanism triggered automatically once the measured length is reached."
      },
      {
        title: "Inventory & Waste Tracker",
        description: "Internal counter tracking remaining reel spool length to alert store managers before a spool runs out mid-order."
      }
    ],
    processSteps: [
      { step: "01. Market & Hardware Field Study", detail: "Interviewed local electrical retail clerks to quantify measuring errors and daily labor hours spent winding wire." },
      { step: "02. Mechanical & Electrical Concept", detail: "Sketched mechanical feed assemblies and calculated motor torque requirements for standard 12–14 AWG wires." },
      { step: "03. State Machine Flowchart", detail: "Designed the fail-safe state machine logic: Initialization -> Input -> Feed -> Measure -> Cut -> Eject -> Log." },
      { step: "04. Business Feasibility Model", detail: "Developed unit economics demonstrating payback periods for retail hardware establishments based on labor savings." }
    ],
    contributions: [
      "Formulated the digital logic state machine coordinating input validation, motor step counting, and cutting triggers.",
      "Authored the technopreneurship business proposal, unit costing, and operational viability analysis.",
      "Designed the user interface sequence for store clerks prioritizing safety interlocks and emergency stop triggers.",
      "Co-delivered the final technopreneurship pitch deck to academic evaluators."
    ],
    lessonsLearned: "Bridged theoretical computer engineering with commercial viability. Developing CableCut Express demonstrated that technology is most valuable when directly solving measurable economic inefficiencies.",
    accentColor: "#6B1732",
    badgeColor: "burgundy"
  }
];

// Helper to retrieve project by ID
function getProjectById(id) {
  return portfolioProjects.find(p => p.id === id);
}

// Export for module systems or window global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { portfolioProjects, getProjectById };
}
