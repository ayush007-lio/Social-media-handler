// Typewriter effect
const typed = new Typed("#typed", {
  strings: ["Hi, I'm Your Name", "Frontend Developer 💻", "Creative Designer 🎨", "Let's Connect 🌍"],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true
});

// 3D Tilt effect on hover
VanillaTilt.init(document.querySelector("#tilt-card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.2
});