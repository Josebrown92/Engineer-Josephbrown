// Reuse header scroll effect & typing effect from Home Page

// Example: Simple header shrink effect on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "#d2691e";
  } else {
    header.style.background = "#222";
  }
});

// Typing Effect
const typingElement = document.getElementById("typing");
const words = [
  "A Software Engineer 🚀",
  "A Full-Stack (MERN) Developer 💻",
  "An AI & Automation Enthusiast 🤖",
  "A Problem Solver 🔧"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);
  typingElement.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    // typing forward
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    // deleting
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    // pause before switching
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // wait before deleting
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 300); // small pause before typing new word
    }
  }
}

// Start typing when page loads
document.addEventListener("DOMContentLoaded", typeEffect);



// Smooth scrolling for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Fade-in effect for skills
const skills = document.querySelectorAll(".skills li");

function revealSkills() {
  const triggerBottom = window.innerHeight * 0.85;
  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if (skillTop < triggerBottom) {
      skill.style.opacity = "1";
      skill.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", revealSkills);

// Initial state for skills
skills.forEach(skill => {
  skill.style.opacity = "0";
  skill.style.transform = "translateY(20px)";
  skill.style.transition = "all 0.6s ease";
});


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contactModal");
  const contactBtn = document.getElementById("openContactAbout");
  const closeBtn = document.getElementById("closeModal");

  // Open modal
  if (contactBtn) {
    contactBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
    });
  }

  // Close modal
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  // Close when clicking outside modal
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
