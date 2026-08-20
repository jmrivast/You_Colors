const menuButton = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setMenu(open) {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  mobileMenu.classList.toggle("is-open", open);
}

menuButton?.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

const heroComposition = document.querySelector(".hero-composition");
heroComposition?.addEventListener("pointermove", (event) => {
  const bounds = heroComposition.getBoundingClientRect();
  const pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
  const pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
  heroComposition.style.setProperty("--pointer-x", pointerX.toFixed(3));
  heroComposition.style.setProperty("--pointer-y", pointerY.toFixed(3));
});
heroComposition?.addEventListener("pointerleave", () => {
  heroComposition.style.setProperty("--pointer-x", "0");
  heroComposition.style.setProperty("--pointer-y", "0");
});

const filterButtons = [...document.querySelectorAll("[data-filter]")];
const portfolioWorks = [...document.querySelectorAll(".portfolio-work")];

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    portfolioWorks.forEach((work) => {
      work.hidden = selectedFilter !== "Todos" && work.dataset.category !== selectedFilter;
    });
  });
});

window.addEventListener("load", () => {
  if (window.GLightbox) {
    window.GLightbox({
      selector: ".portfolio-lightbox",
      touchNavigation: true,
      loop: true,
      zoomable: true,
      openEffect: "zoom",
      closeEffect: "fade",
    });
  }
});

if (!prefersReducedMotion.matches) {
  import("https://cdn.jsdelivr.net/npm/motion@13.1.0/+esm")
    .then(({ animate, inView, stagger }) => {
      inView(".section-shell, .large-format, .workshop, .final-cta", (element) => {
        const targets = element.querySelectorAll("h2, .section-label, .service-card, .portfolio-work");
        animate(targets, { opacity: [0.01, 1], y: [16, 0] }, { duration: 0.45, delay: stagger(0.035), ease: "easeOut" });
      }, { amount: 0.18 });
    })
    .catch(() => {
      // The site stays fully functional if the optional animation CDN is unavailable.
    });
}
