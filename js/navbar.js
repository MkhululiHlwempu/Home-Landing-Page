document.addEventListener("DOMContentLoaded", function() {
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll(".topnav a");

  navLinks.forEach(link => {
    // Check if the link's href matches the current URL
    if (link.href === currentUrl) {
      link.classList.add("active");
    }
  });
});
