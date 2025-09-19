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
  "A Full-Stack Developer 💻",
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

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contactModal");
  const headerBtn = document.getElementById("openContactHeader"); // header link
  const heroBtn = document.getElementById("openContactHero");     // hero link
  const closeBtn = document.getElementById("closeModal");

  // Reusable function to open modal
  function openModal(e) {
    e.preventDefault(); // stop page reload
    modal.style.display = "flex";
  }

  // Open from header
  if (headerBtn) headerBtn.addEventListener("click", openModal);

  // Open from hero
  if (heroBtn) heroBtn.addEventListener("click", openModal);

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



