/* =========================
   GLOBAL
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: "Segoe UI", Arial, sans-serif;
    line-height: 1.7;
    color: #1e293b;
    background: #f8fafc;
}

/* =========================
   NAVBAR
========================= */

header {
    background: #0f172a;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

nav {
    max-width: 1100px;
    margin: auto;
    padding: 18px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav h2 {
    color: white;
    font-size: 24px;
}

nav div {
    display: flex;
    gap: 25px;
}

nav a {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s;
}

nav a:hover {
    color: #38bdf8;
}

/* =========================
   MAIN
========================= */

main {
    max-width: 1100px;
    margin: auto;
    padding: 0 25px;
}

/* =========================
   HERO
========================= */

.hero {
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 0;
}

.small-title {
    color: #0284c7;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 15px;
}

.hero h1 {
    font-size: 58px;
    line-height: 1.15;
    color: #0f172a;
    margin-bottom: 20px;
}

.hero > p:not(.small-title) {
    max-width: 700px;
    font-size: 19px;
    color: #64748b;
    margin-bottom: 30px;
}

.button {
    display: inline-block;
    width: fit-content;
    background: #0284c7;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s;
}

.button:hover {
    background: #0369a1;
    transform: translateY(-2px);
}

/* =========================
   SECTIONS
========================= */

section {
    padding: 80px 0;
}

section h2 {
    font-size: 34px;
    color: #0f172a;
    margin-bottom: 25px;
    position: relative;
}

section h2::after {
    content: "";
    display: block;
    width: 55px;
    height: 4px;
    background: #0284c7;
    margin-top: 8px;
    border-radius: 5px;
}

section p {
    color: #64748b;
    margin-bottom: 15px;
    font-size: 16px;
}

/* =========================
   SKILLS
========================= */

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 25px;
}

.skills span {
    background: white;
    border: 1px solid #e2e8f0;
    padding: 10px 18px;
    border-radius: 25px;
    color: #0369a1;
    font-weight: 600;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
    transition: 0.3s;
}

.skills span:hover {
    transform: translateY(-3px);
    border-color: #38bdf8;
    box-shadow: 0 8px 20px rgba(2, 132, 199, 0.12);
}

/* =========================
   PROJECTS
========================= */

.project-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-top: 35px;
}

.project {
    background: white;
    padding: 28px;
    border-radius: 14px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 8px 25px rgba(15, 23, 42, 0.06);
    transition: 0.3s;
}

.project:hover {
    transform: translateY(-7px);
    box-shadow: 0 15px 35px rgba(15, 23, 42, 0.12);
}

.project h3 {
    font-size: 21px;
    color: #0f172a;
    margin-bottom: 15px;
}

.project p {
    font-size: 15px;
}

.project strong {
    color: #0f172a;
}

.project a {
    display: inline-block;
    margin-top: 10px;
    color: #0284c7;
    font-weight: 600;
    text-decoration: none;
}

.project a:hover {
    text-decoration: underline;
}

/* =========================
   CONTACT
========================= */

#contact {
    text-align: center;
    background: white;
    margin-top: 40px;
    margin-bottom: 50px;
    border-radius: 18px;
    padding: 60px 20px;
    box-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);
}

#contact h2::after {
    margin-left: auto;
    margin-right: auto;
}

/* =========================
   FOOTER
========================= */

footer {
    background: #0f172a;
    color: #94a3b8;
    text-align: center;
    padding: 25px;
}

footer p {
    margin: 0;
    color: #94a3b8;
}

/* =========================
   MOBILE
========================= */

@media (max-width: 800px) {

    nav {
        flex-direction: column;
        gap: 12px;
    }

    nav div {
        gap: 15px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero {
        min-height: 500px;
        text-align: center;
        align-items: center;
    }

    .hero h1 {
        font-size: 42px;
    }

    .hero > p:not(.small-title) {
        font-size: 17px;
    }

    .project-container {
        grid-template-columns: 1fr;
    }

    section {
        padding: 60px 0;
    }
}
