document.addEventListener("DOMContentLoaded", () => {
  // Side Navigation
  const navToggle = document.querySelector(".nav-toggle");
  const sideNav = document.querySelector(".side-nav");
  const closeBtn = document.querySelector(".close-btn");

  if (navToggle && sideNav && closeBtn) {
    navToggle.addEventListener("click", () => sideNav.classList.add("open"));
    closeBtn.addEventListener("click", () => sideNav.classList.remove("open"));
  }

  // Dark Mode Toggle
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const body = document.body;
  if (darkModeToggle) {
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
  }

  // Smooth Scroll for Anchor Links
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Hero Hover Effect
  const header = document.querySelector(".header-2__desktop");
  const hero = document.querySelector(".hero");
  if (header && hero) {
    header.addEventListener("mouseenter", () => hero.classList.add("hovered"));
    header.addEventListener("mouseleave", () => hero.classList.remove("hovered"));
  }

  // Carousel Initialization
  const carouselPrev = document.querySelector('.carousel-control.prev');
  const carouselNext = document.querySelector('.carousel-control.next');
  const carouselTrack = document.querySelector('.carousel-track');
  const carouselItems = document.querySelectorAll('.carousel-item');
  let carouselIndex = 0;

  if (carouselPrev && carouselNext && carouselTrack && carouselItems.length > 0) {
    const updateCarousel = () => {
      const itemWidth = carouselItems[0].getBoundingClientRect().width;
      carouselTrack.style.transform = `translateX(-${carouselIndex * itemWidth}px)`;
    };

    carouselPrev.addEventListener('click', () => {
      if (carouselIndex > 0) {
        carouselIndex--;
        updateCarousel();
      }
    });

    carouselNext.addEventListener('click', () => {
      if (carouselIndex < carouselItems.length - 1) {
        carouselIndex++;
        updateCarousel();
      }
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
  }

  // Newsletter Form Submission
  const form = document.querySelector(".newsletter form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput ? emailInput.value : "";

      if (email && /\S+@\S+\.\S+/.test(email)) {
        alert(`Thank you for subscribing, ${email}!`);
        form.reset();
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }

  // Social Feed Carousel
  const leftButton = document.querySelector('.carousel-left');
  const rightButton = document.querySelector('.carousel-right');
  const feed = document.querySelector('.social-feed');
  const socialItems = document.querySelectorAll('.social-item');
  let socialIndex = 0;

  if (leftButton && rightButton && feed && socialItems.length > 0) {
    const updateSocialCarousel = () => {
      const itemWidth = socialItems[0].getBoundingClientRect().width;
      feed.style.transform = `translateX(-${socialIndex * itemWidth}px)`;
    };

    leftButton.addEventListener('click', () => {
      if (socialIndex > 0) {
        socialIndex--;
        updateSocialCarousel();
      }
    });

    rightButton.addEventListener('click', () => {
      if (socialIndex < socialItems.length - 1) {
        socialIndex++;
        updateSocialCarousel();
      }
    });

    window.addEventListener('resize', updateSocialCarousel);
    updateSocialCarousel();
  }
});
