// Animation on scroll
document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu functionality
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  // Close menu when link is clicked
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
  
  // Animation on scroll functionality
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 50) {
        element.classList.add('animate-active');
      }
    });
  };
  
  // Run animation check on load
  animateOnScroll();
  
  // Run animation check on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Certificate and Badge modal functionality
  const modal = document.getElementById("certificate-modal");
  const modalImg = document.getElementById("certificate-modal-img");
  const captionText = document.getElementById("caption");
  const closeModal = document.getElementsByClassName("close-modal")[0];
  
  // Add click event for certificate cards
  document.querySelectorAll('.certificate-card, .badge-card').forEach(card => {
    card.addEventListener('click', function() {
      modal.style.display = "block";
      modalImg.src = this.getAttribute('data-img') + '.png';
      
      // Get the heading text for the caption
      const heading = this.querySelector('h3').innerText;
      const issuer = this.querySelector('p').innerText;
      captionText.innerHTML = `${heading}<br>${issuer}`;
    });
  });
  
  // Close the modal when the × is clicked
  closeModal.addEventListener('click', function() {
    modal.style.display = "none";
  });
  
  // Close the modal when clicking outside of the image
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
  
  // Close modal with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
    }
  });
  
  // Show/hide scroll indicators based on overflow
  function updateScrollIndicators() {
    const containers = document.querySelectorAll('.certificates-container, .badges-container');
    containers.forEach(container => {
      const indicator = container.parentElement.querySelector('.scroll-indicator');
      if (container.scrollWidth > container.clientWidth) {
        indicator.style.display = 'flex';
      } else {
        indicator.style.display = 'none';
      }
    });
  }
  
  // Update indicators on load and resize
  window.addEventListener('load', updateScrollIndicators);
  window.addEventListener('resize', updateScrollIndicators);
});