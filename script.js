// Mobile navigation
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const siteHeader = document.querySelector(".site-header");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        navLinks.classList.remove("show");
    }
});

function updateHeaderState() {
    if (window.scrollY > 20) {
        siteHeader.classList.add("scrolled");
    } else {
        siteHeader.classList.remove("scrolled");
    }
}

// Highlight the active section in the navigation
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

window.addEventListener("scroll", updateHeaderState);
updateHeaderState();

// Contact form message
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Thanks! Your message has been received.";
    contactForm.reset();
});

// Back-to-top button
const backToTopButton = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Current year in the footer
document.querySelector("#year").textContent = new Date().getFullYear();
