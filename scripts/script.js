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

  // ======= Customer Reviews Carousel =======
const reviewTrack = document.querySelector('.carousel-track');
const reviewItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-controlLeft');
const nextBtn = document.querySelector('.carousel-controlRight');

let reviewIndex = 0;
let autoSlide;

// Update carousel position
const updateReviewCarousel = (index) => {
  const itemWidth = reviewItems[0].getBoundingClientRect().width;
  reviewTrack.style.transform = `translateX(-${index * itemWidth}px)`;
  reviewIndex = index;
};

// Go to next review
const nextReview = () => {
  reviewIndex = (reviewIndex + 1) % reviewItems.length;
  updateReviewCarousel(reviewIndex);
};

// Go to previous review
const prevReview = () => {
  reviewIndex = (reviewIndex - 1 + reviewItems.length) % reviewItems.length;
  updateReviewCarousel(reviewIndex);
};

// Auto-slide setup
const startAutoSlide = () => {
  stopAutoSlide(); // clear any running interval
  autoSlide = setInterval(nextReview, 5000); // 5 seconds
};
const stopAutoSlide = () => clearInterval(autoSlide);

// Button controls
prevBtn.addEventListener('click', () => {
  prevReview();
  startAutoSlide();
});
nextBtn.addEventListener('click', () => {
  nextReview();
  startAutoSlide();
});

// Keyboard controls
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    prevReview();
    startAutoSlide();
  } else if (e.key === 'ArrowRight') {
    nextReview();
    startAutoSlide();
  }
});

// Resize handling
window.addEventListener('resize', () => updateReviewCarousel(reviewIndex));

// Init
updateReviewCarousel(0);
startAutoSlide();

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
