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
// tiktok carousel
const feedWrapper = document.querySelector('.carousel-track-wrapper');
const feed = document.querySelector('.social-feed');
const socialItems = document.querySelectorAll('.social-item video');
const dots = document.querySelectorAll('.carousel-dots .dot');
let socialIndex = 0;
let autoSlide;

// Update carousel to a specific index
const updateCarousel = (index) => {
  const wrapperWidth = feedWrapper.clientWidth;
  feed.style.transform = `translateX(-${index * wrapperWidth}px)`;
  socialIndex = index;

  socialItems.forEach(vid => {
    vid.pause();
    vid.currentTime = 0;
  });
  socialItems[socialIndex].play();

  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
};

// Dot click navigation
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    updateCarousel(i);
    resetAutoSlide();
  });
});

// Autoplay
const startAutoSlide = () => {
  autoSlide = setInterval(() => {
    let nextIndex = (socialIndex + 1) % socialItems.length;
    updateCarousel(nextIndex);
  }, 5000); // change every 5 seconds
};

const resetAutoSlide = () => {
  clearInterval(autoSlide);
  startAutoSlide();
};

// Responsive
window.addEventListener('resize', () => updateCarousel(socialIndex));

// Initialize
updateCarousel(0);
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
