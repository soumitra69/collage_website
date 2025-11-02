var swiper = new Swiper(".mySwiper", {
  direction: "vertical", // vertical scrolling
  loop: true, // infinite loop
  autoplay: {
    delay: 5, // time between slides (in ms)
    disableOnInteraction: false, // keep autoplay even after user interaction
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Slider functionality
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;

  // Function to show a specific slide
  function showSlide(n) {
    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    // Remove active class from all dots
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    // Show the selected slide and activate its dot
    slides[n].classList.add("active");
    dots[n].classList.add("active");

    currentSlide = n;
  }

  // Add click event to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });

  // Auto slide functionality
  function nextSlide() {
    let next = currentSlide + 1;
    if (next >= slides.length) {
      next = 0;
    }
    showSlide(next);
  }

  // Change slide every 5 seconds
  setInterval(nextSlide, 5000);

  // Alert carousel functionality
  const alertText = document.querySelector(".alert-text");
  const prevBtn = document.querySelector(".carousel-control.prev");
  const nextBtn = document.querySelector(".carousel-control.next");

  // Sample alert messages
  const alertMessages = [
    "Registration Open for Ph.D Admission - Spring Term (January 2026 Intake)",
    "New Scholarship Program Available for 2025-26 Academic Year",
    "Campus Tour Dates Announced - Register Now!",
  ];

  let currentAlert = 0;

  function updateAlertMessage() {
    alertText.textContent = alertMessages[currentAlert];
  }

  prevBtn.addEventListener("click", () => {
    currentAlert =
      (currentAlert - 1 + alertMessages.length) % alertMessages.length;
    updateAlertMessage();
  });

  nextBtn.addEventListener("click", () => {
    currentAlert = (currentAlert + 1) % alertMessages.length;
    updateAlertMessage();
  });
});


