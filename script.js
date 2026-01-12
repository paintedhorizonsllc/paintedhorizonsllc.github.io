(function () {
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (!toggle || !mobileNav) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    mobileNav.hidden = !open;
  };

  setOpen(false);

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => setOpen(false));
  });
})();
