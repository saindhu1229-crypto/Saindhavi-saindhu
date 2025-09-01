
// Scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form handling (basic)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Message sent! (This is a demo)");
  this.reset();
});
