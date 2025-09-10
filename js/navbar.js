document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".topnav a");
    const currentPath = window.location.pathname;

    links,forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");

        }
    });
});
