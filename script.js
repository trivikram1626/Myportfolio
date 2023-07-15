// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Handle form submission logic here
  // You can use AJAX or other methods to send the form data to a server
});