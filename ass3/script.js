// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) currentSlide = 0;
  if (index < 0) currentSlide = totalSlides - 1;
  document.querySelector('.carousel-container').style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);

// Display AI Statistics dynamically
const aiStats = [
  'Over 70% of businesses are using AI in some form.',
  'AI in healthcare is expected to save $150 billion by 2026.',
  'AI could add $15.7 trillion to the global economy by 2030.'
];

let aiStatsIndex = 0;
const statsElement = document.getElementById('ai-stats');

function displayStats() {
  statsElement.innerHTML = aiStats[aiStatsIndex];
  aiStatsIndex = (aiStatsIndex + 1) % aiStats.length;
}

setInterval(displayStats, 3000);  // Change every 3 seconds

// Contact Form Validation
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return false;
  }

  alert('Message sent successfully!');
  return true;
}
