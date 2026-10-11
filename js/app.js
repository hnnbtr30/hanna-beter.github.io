/**
 * HANNA ABIGAIL B. BETER — PORTFOLIO APPLICATION CORE
 * Handles interactive project modals, filtering, contact validation,
 * smooth scrolling, and accessible navigation.
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initProjectsFilter();
  initProjectModal();
  initContactForm();
  initEmailCopy();
  initCurrentYear();
  initActiveNavSpy();
});

/**
 * 1. Navbar Scroll Effect & Mobile Drawer
 */
function initNavbar() {
  const navbar = document.getElementById("mainNavbar");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenuDrawer = document.getElementById("mobileMenuDrawer");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  // Sticky blur transition
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
      mobileMenuBtn.setAttribute("aria-expanded", !isExpanded);
      mobileMenuDrawer.classList.toggle("hidden");
      
      const iconMenu = mobileMenuBtn.querySelector(".icon-menu");
      const iconClose = mobileMenuBtn.querySelector(".icon-close");
      if (iconMenu && iconClose) {
        iconMenu.classList.toggle("hidden");
        iconClose.classList.toggle("hidden");
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenuDrawer.classList.add("hidden");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        const iconMenu = mobileMenuBtn.querySelector(".icon-menu");
        const iconClose = mobileMenuBtn.querySelector(".icon-close");
        if (iconMenu && iconClose) {
          iconMenu.classList.remove("hidden");
          iconClose.classList.add("hidden");
        }
      });
    });
  }
}

/**
 * 2. Active Section Spy for Navigation Links
 */
function initActiveNavSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-desktop-link");

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("text-[#D4AF72]", "font-semibold");
            link.classList.remove("text-stone-300");
          } else {
            link.classList.remove("text-[#D4AF72]", "font-semibold");
            link.classList.add("text-stone-300");
          }
        });
      }
    });
  }, {
    rootMargin: "-25% 0px -65% 0px"
  });

  sections.forEach(section => observer.observe(section));
}

/**
 * 3. Featured Projects Filter System
 */
function initProjectsFilter() {
  const filterButtons = document.querySelectorAll(".project-filter-btn");
  const projectCards = document.querySelectorAll(".project-card-item");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-filter");

      // Update active button state
      filterButtons.forEach(b => {
        b.classList.remove("bg-[#D4AF72]", "text-[#230510]", "shadow-md");
        b.classList.add("text-stone-300", "bg-stone-900/60", "border-stone-800");
      });
      btn.classList.add("bg-[#D4AF72]", "text-[#230510]", "shadow-md");
      btn.classList.remove("text-stone-300", "bg-stone-900/60", "border-stone-800");

      // Filter cards with smooth opacity animation
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        if (category === "all" || cardCategory === category) {
          card.classList.remove("hidden");
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 20);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(12px)";
          setTimeout(() => {
            card.classList.add("hidden");
          }, 250);
        }
      });
    });
  });
}

/**
 * 4. Interactive Project Case Study Modal
 */
let currentModalProjectId = null;

function initProjectModal() {
  const modal = document.getElementById("projectModal");
  const closeBtn = document.getElementById("closeModalBtn");
  const backdrop = document.getElementById("modalBackdrop");
  const prevBtn = document.getElementById("prevProjectBtn");
  const nextBtn = document.getElementById("nextProjectBtn");

  if (!modal) return;

  // Global trigger on cards or view buttons
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-open-project]");
    if (trigger) {
      e.preventDefault();
      const projectId = trigger.getAttribute("data-open-project");
      openProjectModal(projectId);
    }
  });

  const closeModal = () => {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
    currentModalProjectId = null;
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  // Keyboard navigation: Escape closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  // Next / Previous buttons inside modal
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      navigateProjectModal(-1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      navigateProjectModal(1);
    });
  }
}

function navigateProjectModal(direction) {
  if (!currentModalProjectId || typeof portfolioProjects === "undefined") return;
  const currentIndex = portfolioProjects.findIndex(p => p.id === currentModalProjectId);
  if (currentIndex === -1) return;

  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = portfolioProjects.length - 1;
  if (newIndex >= portfolioProjects.length) newIndex = 0;

  openProjectModal(portfolioProjects[newIndex].id);
}

function openProjectModal(projectId) {
  const modal = document.getElementById("projectModal");
  if (!modal || typeof portfolioProjects === "undefined") return;

  const project = portfolioProjects.find(p => p.id === projectId);
  if (!project) return;

  currentModalProjectId = projectId;

  // Hydrate modal elements
  document.getElementById("modalCategoryBadge").textContent = project.categoryLabel;
  document.getElementById("modalStatusBadge").textContent = project.statusBadge;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalTagline").textContent = project.tagline;
  document.getElementById("modalRole").textContent = project.role;
  document.getElementById("modalTimeline").textContent = project.timeline;
  document.getElementById("modalOverview").textContent = project.overview;
  document.getElementById("modalProblem").textContent = project.problemStatement;
  document.getElementById("modalSolution").textContent = project.proposedSolution;
  document.getElementById("modalLessons").textContent = project.lessonsLearned;

  // Tech stack pills
  const techContainer = document.getElementById("modalTechStack");
  techContainer.innerHTML = "";
  project.technologies.forEach(tech => {
    const pill = document.createElement("span");
    pill.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#4A0D22]/50 text-[#D4AF72] border border-[#D4AF72]/30";
    pill.textContent = tech;
    techContainer.appendChild(pill);
  });

  // Key Features
  const featuresContainer = document.getElementById("modalFeatures");
  featuresContainer.innerHTML = "";
  project.keyFeatures.forEach((feat, index) => {
    const item = document.createElement("div");
    item.className = "p-4 rounded-lg bg-stone-900/60 border border-stone-800/80 hover:border-[#D4AF72]/40 transition-colors";
    item.innerHTML = `
      <div class="flex items-center gap-2 mb-1.5">
        <span class="w-5 h-5 rounded-full bg-[#D4AF72]/20 text-[#D4AF72] flex items-center justify-center text-xs font-bold">0${index + 1}</span>
        <h5 class="text-sm font-semibold text-stone-100">${feat.title}</h5>
      </div>
      <p class="text-xs text-stone-300 leading-relaxed">${feat.description}</p>
    `;
    featuresContainer.appendChild(item);
  });

  // Process steps
  const processContainer = document.getElementById("modalProcess");
  processContainer.innerHTML = "";
  project.processSteps.forEach(step => {
    const stepEl = document.createElement("div");
    stepEl.className = "flex items-start gap-3";
    stepEl.innerHTML = `
      <div class="w-2 h-2 rounded-full bg-[#D4AF72] mt-2 shrink-0"></div>
      <div>
        <h5 class="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider">${step.step}</h5>
        <p class="text-xs text-stone-300 mt-0.5">${step.detail}</p>
      </div>
    `;
    processContainer.appendChild(stepEl);
  });

  // Hanna's contributions
  const contributionsContainer = document.getElementById("modalContributions");
  contributionsContainer.innerHTML = "";
  project.contributions.forEach(item => {
    const li = document.createElement("li");
    li.className = "text-xs text-stone-300 flex items-start gap-2.5";
    li.innerHTML = `
      <svg class="w-4 h-4 text-[#D4AF72] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      <span>${item}</span>
    `;
    contributionsContainer.appendChild(li);
  });

  // Visual Mockup Illustration inside Modal
  const mockupContainer = document.getElementById("modalVisualContainer");
  if (mockupContainer) {
    mockupContainer.innerHTML = getModalGraphicSvg(project.id);
  }

  // Show modal and lock background scroll
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  
  // Reset modal scroll position to top
  const modalScrollArea = document.getElementById("modalScrollArea");
  if (modalScrollArea) modalScrollArea.scrollTop = 0;
}

/**
 * 5. Dynamic SVG Visuals for Modal and Project Previews
 */
function getModalGraphicSvg(projectId) {
  switch (projectId) {
    case "dialycare":
      return `
        <div class="w-full h-48 md:h-64 rounded-xl bg-gradient-to-br from-[#360818] to-[#1E060F] border border-[#D4AF72]/30 p-6 flex flex-col justify-between relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-[#D4AF72]/5 pointer-events-none"></div>
          <div class="flex items-center justify-between border-b border-stone-800 pb-3">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-xs font-mono tracking-wider text-[#D4AF72]">DIALYCARE CLINICAL TELEMETRY PORTAL</span>
            </div>
            <span class="text-xs px-2 py-0.5 rounded bg-[#4A0D22] text-[#D4AF72] border border-[#D4AF72]/40">Active Session ID: #DX-802</span>
          </div>
          <div class="grid grid-cols-3 gap-3 my-2">
            <div class="p-2.5 rounded bg-stone-900/80 border border-stone-800">
              <div class="text-[10px] text-stone-400 uppercase">Blood Flow (Qb)</div>
              <div class="text-sm font-bold text-amber-200 mt-1 font-mono">350 mL/min</div>
            </div>
            <div class="p-2.5 rounded bg-stone-900/80 border border-stone-800">
              <div class="text-[10px] text-stone-400 uppercase">Dialysate Flow (Qd)</div>
              <div class="text-sm font-bold text-[#D4AF72] mt-1 font-mono">500 mL/min</div>
            </div>
            <div class="p-2.5 rounded bg-stone-900/80 border border-stone-800">
              <div class="text-[10px] text-stone-400 uppercase">UF Removal Target</div>
              <div class="text-sm font-bold text-emerald-300 mt-1 font-mono">2,200 mL</div>
            </div>
          </div>
          <div class="h-10 w-full bg-stone-950/70 rounded flex items-center px-4 justify-between border border-stone-800">
            <div class="flex items-center gap-2 text-xs text-stone-300">
              <span class="text-[#D4AF72]">●</span> Relative Notification SMS: Dispatched at 14:15 PM
            </div>
            <span class="text-[11px] text-emerald-400 font-mono">Queue Status: Optimal</span>
          </div>
        </div>
      `;
    case "iqueue":
      return `
        <div class="w-full h-48 md:h-64 rounded-xl bg-gradient-to-br from-[#380E1E] to-[#17060D] border border-[#D4AF72]/30 p-6 flex flex-col justify-between relative overflow-hidden">
          <div class="flex items-center justify-between border-b border-stone-800 pb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span class="text-xs font-mono tracking-wider text-[#D4AF72]">IQUEUE REGISTRAR DISPATCH CONSOLE</span>
            </div>
            <span class="text-xs px-2.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">ICCT Colleges System Proposal</span>
          </div>
          <div class="flex items-center justify-around py-3">
            <div class="text-center p-3 rounded-lg bg-stone-900/90 border border-[#D4AF72]/40 w-1/3">
              <div class="text-[11px] text-stone-400">Current Serving Token</div>
              <div class="text-2xl font-serif font-bold text-[#D4AF72] mt-1">#B-104</div>
              <div class="text-[10px] text-stone-400">Window 3 — Good Moral Record</div>
            </div>
            <div class="text-center p-3 rounded-lg bg-stone-900/60 border border-stone-800 w-1/3">
              <div class="text-[11px] text-stone-400">Next Scheduled</div>
              <div class="text-2xl font-serif font-bold text-stone-300 mt-1">#B-105</div>
              <div class="text-[10px] text-stone-400">Window 2 — Transcript of Records</div>
            </div>
          </div>
          <div class="flex items-center justify-between text-xs text-stone-400 border-t border-stone-800/80 pt-2">
            <span>Average Service Duration: 4.8 min</span>
            <span class="text-[#D4AF72]">Estimated Wait: 9 min</span>
          </div>
        </div>
      `;
    case "iprepare":
      return `
        <div class="w-full h-48 md:h-64 rounded-xl bg-gradient-to-br from-[#2E0B18] to-[#120409] border border-[#D4AF72]/30 p-6 flex flex-col justify-between relative overflow-hidden">
          <div class="flex items-center justify-between border-b border-stone-800 pb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
              <span class="text-xs font-mono tracking-wider text-[#D4AF72]">IPREPARE ADVISORY & READINESS DASHBOARD</span>
            </div>
            <span class="text-xs px-2 py-0.5 rounded bg-stone-900 text-stone-300 border border-stone-800">Typhoon Protocol Level 2</span>
          </div>
          <div class="grid grid-cols-2 gap-4 my-2">
            <div class="p-3 rounded bg-stone-900/80 border border-stone-800 flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-amber-500/10 text-[#D4AF72] flex items-center justify-center font-bold text-lg font-serif">72h</div>
              <div>
                <div class="text-xs font-semibold text-stone-200">Go-Bag Readiness</div>
                <div class="text-[11px] text-emerald-400">8/8 Essentials Packed ✓</div>
              </div>
            </div>
            <div class="p-3 rounded bg-stone-900/80 border border-stone-800 flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-[#D4AF72]/10 text-[#D4AF72] flex items-center justify-center font-bold text-lg font-serif">100%</div>
              <div>
                <div class="text-xs font-semibold text-stone-200">Safety Drill Mastery</div>
                <div class="text-[11px] text-[#D4AF72]">Duck, Cover, Hold Certified</div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between text-xs px-3 py-1.5 rounded bg-[#4A0D22]/40 border border-[#D4AF72]/20">
            <span class="text-stone-300">Offline Emergency Quick-Cards: Available</span>
            <span class="text-[#D4AF72] font-semibold">Hotlines Cached</span>
          </div>
        </div>
      `;
    case "oxycheck":
      return `
        <div class="w-full h-48 md:h-64 rounded-xl bg-gradient-to-br from-[#380E1E] to-[#120409] border border-[#D4AF72]/30 p-6 flex flex-col justify-between relative overflow-hidden">
          <div class="flex items-center justify-between border-b border-stone-800 pb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span class="text-xs font-mono tracking-wider text-[#D4AF72]">OXYCHECK HARDWARE SENSOR TELEMETRY</span>
            </div>
            <span class="text-xs px-2.5 py-0.5 rounded bg-stone-900 text-stone-300 border border-stone-700">I2C OLED 128x64 Emulation</span>
          </div>
          <div class="p-3 rounded-lg bg-black/90 border border-emerald-900/80 font-mono text-emerald-400 text-xs">
            <div class="flex justify-between border-b border-emerald-950 pb-1 mb-2">
              <span>[MQ-135 SENSOR: ONLINE]</span>
              <span>CALIBRATED: 5V DC</span>
            </div>
            <div class="grid grid-cols-2 gap-2 text-stone-200">
              <div>PPM GAS DENSITY: <span class="text-emerald-300 font-bold">42 PPM (GOOD)</span></div>
              <div>AMBIENT TEMP: <span class="text-amber-200">26.4°C</span></div>
              <div>REL. HUMIDITY: <span class="text-cyan-300">58% RH</span></div>
              <div>THRESHOLD STATUS: <span class="text-emerald-400 font-bold">OPTIMAL</span></div>
            </div>
          </div>
          <div class="flex items-center justify-between text-[11px] text-stone-400">
            <span>Sampling Interval: 1000ms</span>
            <span class="text-[#D4AF72]">Status LED: SOLID GREEN</span>
          </div>
        </div>
      `;
    case "cablecut":
      return `
        <div class="w-full h-48 md:h-64 rounded-xl bg-gradient-to-br from-[#320817] to-[#14030A] border border-[#D4AF72]/30 p-6 flex flex-col justify-between relative overflow-hidden">
          <div class="flex items-center justify-between border-b border-stone-800 pb-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
              <span class="text-xs font-mono tracking-wider text-[#D4AF72]">CABLECUT AUTOMATED CUTTING STATE MACHINE</span>
            </div>
            <span class="text-xs px-2 py-0.5 rounded bg-[#4A0D22] text-[#D4AF72] border border-[#D4AF72]/30">Technopreneurship Model</span>
          </div>
          <div class="flex items-center justify-between gap-2 my-2 text-center text-xs">
            <div class="p-2 rounded bg-stone-900/90 border border-stone-800 flex-1">
              <div class="text-[10px] text-stone-400">TARGET LENGTH</div>
              <div class="text-lg font-bold text-[#D4AF72] font-mono">15.00 m</div>
            </div>
            <div class="text-stone-500 font-mono">➔</div>
            <div class="p-2 rounded bg-stone-900/90 border border-stone-800 flex-1">
              <div class="text-[10px] text-stone-400">STEP COUNTER</div>
              <div class="text-lg font-bold text-amber-200 font-mono">3,200 Steps</div>
            </div>
            <div class="text-stone-500 font-mono">➔</div>
            <div class="p-2 rounded bg-stone-900/90 border border-stone-800 flex-1">
              <div class="text-[10px] text-stone-400">ACTUATOR BLADE</div>
              <div class="text-lg font-bold text-emerald-400 font-mono">CYCLE READY</div>
            </div>
          </div>
          <div class="flex items-center justify-between text-xs text-stone-300 border-t border-stone-800 pt-2">
            <span>Accuracy Tolerance: ± 2 mm</span>
            <span class="text-emerald-400">Safety Interlock: ENGAGED</span>
          </div>
        </div>
      `;
    default:
      return "";
  }
}

/**
 * 6. Contact Form Validation and Simulated Feedback
 */
function initContactForm() {
  const form = document.getElementById("portfolioContactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    // Basic client validation
    if (!name || !email || !subject || !message) {
      showToast("Please complete all required fields before sending.", "error");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showToast("Please enter a valid email address.", "error");
      return;
    }

    // Success feedback (Simulated with honest explanation)
    showToast(
      `Thank you, ${name}! Your message was simulated successfully. To connect directly, please email habbeter@example.com.`,
      "success"
    );

    form.reset();
  });
}

/**
 * 7. Toast Notification Handler
 */
function showToast(message, type = "success") {
  const toast = document.getElementById("toastNotification");
  const toastMessage = document.getElementById("toastMessage");
  const toastIcon = document.getElementById("toastIcon");

  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;

  if (type === "error") {
    toast.className = "fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-xl shadow-2xl border border-rose-500/50 bg-[#250812] text-rose-200 toast-visible flex items-start gap-3";
    toastIcon.innerHTML = `
      <svg class="w-5 h-5 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    `;
  } else {
    toast.className = "fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-xl shadow-2xl border border-[#D4AF72]/60 bg-[#240612] text-stone-100 toast-visible flex items-start gap-3";
    toastIcon.innerHTML = `
      <svg class="w-5 h-5 text-[#D4AF72] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    `;
  }

  // Auto-dismiss after 6.5 seconds
  setTimeout(() => {
    toast.classList.remove("toast-visible");
    toast.classList.add("toast-hidden");
  }, 6500);
}

/**
 * 8. Copy Email to Clipboard
 */
function initEmailCopy() {
  const copyBtn = document.getElementById("copyEmailBtn");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", () => {
    const emailToCopy = "habbeter@example.com";
    navigator.clipboard.writeText(emailToCopy).then(() => {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = `
        <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-emerald-300 font-semibold">Copied to Clipboard!</span>
      `;
      copyBtn.classList.add("border-emerald-500/60");

      showToast("Email address copied: habbeter@example.com", "success");

      setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.classList.remove("border-emerald-500/60");
      }, 3000);
    }).catch(() => {
      showToast("Please copy manually: habbeter@example.com", "info");
    });
  });
}

/**
 * 9. Dynamic Current Year in Footer
 */
function initCurrentYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
