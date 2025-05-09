document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (link.href === currentUrl) {
      link.classList.add("active-nav");
    }
  });
});
