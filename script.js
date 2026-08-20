/* =========================================
   ARTNOVA
   Premium Interaction System
========================================= */


/* CURSOR */

const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

if (window.matchMedia("(pointer:fine)").matches) {

  document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorRing.animate(
      {
        left: e.clientX + "px",
        top: e.clientY + "px"
      },
      {
        duration: 350,
        fill: "forwards"
      }
    );

  });

}


/* CURSOR HOVER */

const hoverElements = document.querySelectorAll(
  "a, button, .showcase-card, .feature-item"
);

hoverElements.forEach((element) => {

  element.addEventListener("mouseenter", () => {

    cursorRing.style.width = "55px";
    cursorRing.style.height = "55px";

  });

  element.addEventListener("mouseleave", () => {

    cursorRing.style.width = "34px";
    cursorRing.style.height = "34px";

  });

});


/* SCROLL REVEAL */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


/* MOBILE MENU */

const menuButton = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

function openMenu() {

  mobileMenu.classList.add("active");
  document.body.classList.add("menu-open");

}

function closeMobileMenu() {

  mobileMenu.classList.remove("active");
  document.body.classList.remove("menu-open");

}

if (menuButton) {
  menuButton.addEventListener("click", openMenu);
}

if (closeMenu) {
  closeMenu.addEventListener("click", closeMobileMenu);
}

mobileLinks.forEach((link) => {

  link.addEventListener("click", closeMobileMenu);

});


/* STUDIO BUTTON */

const studioButton = document.getElementById("studioButton");
const toast = document.getElementById("toast");

if (studioButton) {

  studioButton.addEventListener("click", () => {

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);

  });

}


/* PARALLAX EFFECT */

const heroOrb = document.querySelector(".hero-orb");
const floatingCards = document.querySelectorAll(".floating-art");

window.addEventListener("mousemove", (e) => {

  if (window.innerWidth < 900) return;

  const x = (e.clientX / window.innerWidth - 0.5);
  const y = (e.clientY / window.innerHeight - 0.5);

  if (heroOrb) {

    heroOrb.style.transform =
      `translate(${x * 18}px, ${y * 18}px)`;

  }

  floatingCards.forEach((card, index) => {

    const multiplier = (index + 1) * 8;

    card.style.marginLeft = `${x * multiplier}px`;
    card.style.marginTop = `${y * multiplier}px`;

  });

});


/* CARD TILT */

const cards = document.querySelectorAll(".showcase-card");

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    if (window.innerWidth < 900) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX =
      ((y - centerY) / centerY) * -2.5;

    const rotateY =
      ((x - centerX) / centerX) * 2.5;

    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

  });

});


/* MAGNETIC BUTTON */

const buttons = document.querySelectorAll(".primary-btn, .studio-btn");

buttons.forEach((button) => {

  button.addEventListener("mousemove", (e) => {

    if (window.innerWidth < 900) return;

    const rect = button.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;

    button.style.transform =
      `translate(${x * .08}px, ${y * .08}px)`;

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "";

  });

});


/* NAVBAR SCROLL */

const navbar = document.querySelector(".navbar");

let lastScroll = 0;

window.addEventListener("scroll", () => {

  const currentScroll = window.scrollY;

  if (currentScroll > 50) {

    navbar.style.background =
      "rgba(7,7,7,0.88)";

  } else {

    navbar.style.background =
      "rgba(7,7,7,0.65)";

  }

  lastScroll = currentScroll;

});


/* TEXT SCRAMBLE EFFECT */

const creatorName =
  document.querySelector(".creator-name strong");

if (creatorName) {

  const originalText = creatorName.textContent;

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  creatorName.addEventListener("mouseenter", () => {

    let iteration = 0;

    const interval = setInterval(() => {

      creatorName.textContent =
        originalText
          .split("")
          .map((letter, index) => {

            if (index < iteration) {
              return originalText[index];
            }

            return characters[
              Math.floor(
                Math.random() * characters.length
              )
            ];

          })
          .join("");

      iteration += 1 / 3;

      if (iteration >= originalText.length) {

        clearInterval(interval);

        creatorName.textContent =
          originalText;

      }

    }, 35);

  });

}


/* PAGE LOADED */

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

  setTimeout(() => {

    document.querySelector(".hero-content")
      ?.classList.add("visible");

  }, 300);

});


/* CONSOLE */

console.log(
  "%cARTNOVA",
  "font-size:30px;font-weight:bold;"
);

console.log(
  "%cCreate without limits.",
  "font-size:14px;"
);
