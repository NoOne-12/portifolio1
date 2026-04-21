// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission with popup
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("popup").style.display = "flex";
});

// Close popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// Typing effect for hero section
const typingElement = document.getElementById("typing");
const text = "Hello, I'm a Software Engineering Student";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    // Loop effect after delay
    setTimeout(() => {
      typingElement.textContent = "";
      index = 0;
      typeEffect();
    }, 3000);
  }
}
window.onload = typeEffect;

// Animate skill bars when they come into view
window.addEventListener("scroll", function() {
  const skills = document.querySelectorAll(".progress");
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < window.innerHeight && skill.style.width === "0px") {
      skill.style.width = skill.getAttribute("style").match(/width:\\d+%/)[0].split(":")[1];
    }
  });
});

// Scroll reveal for About & Skills sections
const reveals = document.querySelectorAll("#about, #skills");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      section.classList.add("active");
    }
  });
});

// Initial hidden state for reveal sections
reveals.forEach(section => {
  section.classList.add("reveal");
});

// Reveal project cards on scroll
const projectCards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
  projectCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Initial hidden state for project cards
projectCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "all 0.6s ease-out";
});