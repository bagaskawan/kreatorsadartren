// index.js

document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 1;
  const totalSlides = 5; // Slide 5 is the last slide
  let isAnimating = false;

  const showSlide = (slideIndex) => {
    if (isAnimating) return;
    isAnimating = true;

    const currentEl = document.getElementById(`slide${currentSlide}`);
    const targetEl = document.getElementById(`slide${slideIndex}`);

    if (!targetEl) {
      isAnimating = false;
      return;
    }

    // Fade out the current slide
    if (currentEl) {
      currentEl.classList.remove("active");
    }

    // After fade-out duration, switch slides
    setTimeout(() => {
      if (currentEl) {
        currentEl.style.display = "none";
      }

      // Show target and trigger fade in
      targetEl.style.display = "flex";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          targetEl.classList.add("active");
          currentSlide = slideIndex;
          isAnimating = false;
        });
      });
    }, 350);
  };

  // Next buttons
  const nextButtons = document.querySelectorAll(".next-slide-btn");
  nextButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentSlide < totalSlides) showSlide(currentSlide + 1);
    });
  });

  // Prev buttons
  const prevButtons = document.querySelectorAll(".prev-slide-btn");
  prevButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentSlide > 1) showSlide(currentSlide - 1);
    });
  });

  // Initialize - show slide 1
  const firstSlide = document.getElementById("slide1");
  if (firstSlide) {
    firstSlide.style.display = "flex";
    firstSlide.classList.add("active");
  }
});
