// ==========================================
// MRUNAL PATIL - PORTFOLIO JAVASCRIPT
// ==========================================


// ------------------------------------------
// 1. UPDATE FOOTER YEAR AUTOMATICALLY
// ------------------------------------------

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML = `© ${year} Mrunal Patil. Built with HTML, CSS & JavaScript.`;
}


// ------------------------------------------
// 2. SCROLL REVEAL ANIMATION
// ------------------------------------------

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


// ------------------------------------------
// 3. ACTIVE NAVIGATION LINK
// ------------------------------------------

const navLinks = document.querySelectorAll("nav a");

const sectionElements = document.querySelectorAll(
    "section[id]"
);

window.addEventListener("scroll", () => {

    let currentSection = "";

    sectionElements.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});


// ------------------------------------------
// 4. BUTTON CLICK EFFECT
// ------------------------------------------

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.96)";

        setTimeout(() => {
            button.style.transform = "";
        }, 150);

    });

});
