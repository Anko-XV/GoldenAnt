document.addEventListener("DOMContentLoaded", () => {
  // ======= Side Navigation =======
  const navToggle = document.querySelector(".nav-toggle");
  const sideNav = document.querySelector(".side-nav");
  const closeBtn = document.querySelector(".close-btn");

  if (navToggle && sideNav && closeBtn) {
    navToggle.addEventListener("click", () => sideNav.classList.add("open"));
    closeBtn.addEventListener("click", () => sideNav.classList.remove("open"));
  }

  // ======= Smooth Scroll for Anchor Links =======
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ======= Hero Hover Effect =======
  const header = document.querySelector(".header-2__desktop");
  const hero = document.querySelector(".hero");
  if (header && hero) {
    header.addEventListener("mouseenter", () => hero.classList.add("hovered"));
    header.addEventListener("mouseleave", () => hero.classList.remove("hovered"));
  }

  // ======= Carousel =======
  const carouselPrev = document.querySelector('.carousel-controlLeft');
  const carouselNext = document.querySelector('.carousel-controlRight');
  const carouselTrack = document.querySelector('.carousel-track');
  const carouselItems = document.querySelectorAll('.carousel-item');
  let carouselIndex = 0;
  let autoSlide;

  if (carouselPrev && carouselNext && carouselTrack && carouselItems.length > 0) {
    const updateCarousel = () => {
      const itemWidth = carouselItems[0].getBoundingClientRect().width;
      carouselTrack.style.transform = `translateX(-${carouselIndex * itemWidth}px)`;
    };

    const moveNext = () => {
      carouselIndex = (carouselIndex + 1) % carouselItems.length;
      updateCarousel();
    };

    const movePrev = () => {
      carouselIndex = (carouselIndex - 1 + carouselItems.length) % carouselItems.length;
      updateCarousel();
    };

    carouselNext.addEventListener('click', () => {
      moveNext();
      resetAutoSlide();
    });

    carouselPrev.addEventListener('click', () => {
      movePrev();
      resetAutoSlide();
    });

    const startAutoSlide = () => autoSlide = setInterval(moveNext, 5000);
    const resetAutoSlide = () => {
      clearInterval(autoSlide);
      startAutoSlide();
    };

    window.addEventListener('resize', updateCarousel);

    updateCarousel();
    startAutoSlide();
  }

  // ======= Newsletter Form =======
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

  // ======= Social Feed Carousel =======
  const leftButton = document.querySelector('.carousel-left');
  const rightButton = document.querySelector('.carousel-right');
  const feed = document.querySelector('.social-feed');
  const socialItems = document.querySelectorAll('.social-item video');
  let socialIndex = 0;

  const scrollToIndex = (index) => {
    if (!feed || socialItems.length === 0) return;
    const itemWidth = socialItems[0].parentElement.getBoundingClientRect().width;
    feed.style.transform = `translateX(-${index * itemWidth}px)`;
    socialIndex = index;

    socialItems.forEach(vid => {
      vid.pause();
      vid.currentTime = 0;
    });
    socialItems[socialIndex].play();

    // Update dots if present
    if (dots.length > 0) updateDots(index);
  };

  if (leftButton && rightButton && feed && socialItems.length > 0) {
    leftButton.addEventListener('click', () => {
      socialIndex = (socialIndex - 1 + socialItems.length) % socialItems.length;
      scrollToIndex(socialIndex);
    });

    rightButton.addEventListener('click', () => {
      socialIndex = (socialIndex + 1) % socialItems.length;
      scrollToIndex(socialIndex);
    });

    socialItems.forEach((video, index) => {
      video.addEventListener('ended', () => {
        let nextIndex = (index + 1) % socialItems.length;
        scrollToIndex(nextIndex);
      });
    });

    window.addEventListener('resize', () => scrollToIndex(socialIndex));
    scrollToIndex(0);
  }

  // ======= Dots Progress Indicator =======
  const dots = document.querySelectorAll('.carousel-dots .dot');
  const updateDots = (index) => {
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  };

  if (dots.length > 0) {
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => scrollToIndex(index));
    });
    updateDots(0);
  }

  // ======= Product Category Filter =======
  const filter = document.getElementById('category-filter');
  const products = document.querySelectorAll('.products .product');

  if (filter && products.length > 0) {
    products.forEach(product => {
      const title = product.querySelector('h3').textContent.toLowerCase();
      if (title.includes('aot') || title.includes('levi') || title.includes('cloak') || title.includes('jacket')) {
        product.setAttribute('data-category', 'aot');
      } else if (title.includes('blue lock')) {
        product.setAttribute('data-category', 'bluelock');
      } else if (title.includes('one piece') || title.includes('bag')) {
        product.setAttribute('data-category', 'onepiece');
      } else {
        product.setAttribute('data-category', 'other');
      }
    });

    filter.addEventListener('change', (e) => {
      const selected = e.target.value;
      products.forEach(product => {
        const category = product.getAttribute('data-category');
        product.style.display = (selected === 'all' || category === selected) ? 'block' : 'none';
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const filter = document.getElementById('category-filter');
  const products = document.querySelectorAll('.products .product-card');

  filter.addEventListener('change', (e) => {
    const selected = e.target.value;

    products.forEach(product => {
      const category = product.getAttribute('data-category');
      product.style.display = (selected === 'all' || category === selected) ? 'block' : 'none';
    });
  });
});
