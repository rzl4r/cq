/* ============================================================
   CARQUARIUM — Interactions & Animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Floating Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const navCta = document.querySelector('.nav-cta');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.style.display === 'flex';

      if (isOpen) {
        navLinks.style.display = 'none';
        if (navCta) navCta.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(5,0,0,0.95)';
        navLinks.style.padding = '20px';
        navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.08)';

        if (navCta) {
          navCta.style.display = 'inline-flex';
          navCta.style.marginTop = '10px';
        }
      }
    });
  }

  // 3. Scroll Reveal Animations (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');

  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // 4. Showroom Filtering (Simple toggle)
  const filterBtns = document.querySelectorAll('.filter-pill');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active to clicked
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const currentCards = document.querySelectorAll('.bento-card');

      currentCards.forEach(card => {
        if (filter === 'all' || card.classList.contains(filter)) {
          card.style.display = 'block';
          // Re-trigger small animation
          card.style.animation = 'none';
          card.offsetHeight; /* trigger reflow */
          card.style.animation = null;
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4.5. Load More Vehicles Simulation
  const loadMoreBtn = document.getElementById('load-more-btn');
  const loadMoreContainer = document.getElementById('load-more-container');
  const bentoGrid = document.querySelector('.bento-grid');

  if (loadMoreBtn && bentoGrid) {
    loadMoreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      loadMoreBtn.innerHTML = 'Authenticating Inventory...';
      loadMoreBtn.style.opacity = '0.7';
      loadMoreBtn.style.cursor = 'wait';

      // Fake network delay (1.2s)
      setTimeout(() => {
        const newCars = [
          { tag: '2023', brand: 'FERRARI', model: 'F8 Tributo', price: '$345,000', type: 'exotic' },
          { tag: '2021', brand: 'ROLLS-ROYCE', model: 'Cullinan', price: '$390,000', type: 'luxury' },
          { tag: '2022', brand: 'ASTON MARTIN', model: 'Vantage', price: '$155,000', type: 'exotic' }
        ];

        let newHTML = '';
        newCars.forEach(car => {
          newHTML += `
            <article class="bento-card ${car.type} reveal">
              <div class="card-bg" style="background: linear-gradient(45deg, #1a1a24, #0a0a0a);"></div>
              <div class="card-gradient"></div>
              <div class="card-content">
                <div class="car-tags"><span class="tag">${car.tag}</span></div>
                <div class="car-info">
                  <h3 class="car-brand">${car.brand}</h3>
                  <h4 class="car-model">${car.model}</h4>
                  <div class="car-bottom">
                    <div class="price">${car.price}</div>
                    <button class="btn btn-outline btn-icon">+</button>
                  </div>
                </div>
              </div>
            </article>
          `;
        });

        bentoGrid.insertAdjacentHTML('beforeend', newHTML);

        // Hide the button container since "all" inventory is loaded
        if (loadMoreContainer) {
          loadMoreContainer.style.display = 'none';
        }

        // Attach scroll-reveal to newly added items
        const newReveals = bentoGrid.querySelectorAll('.reveal:not(.visible)');
        newReveals.forEach(el => revealObserver.observe(el));

        // Re-apply currently active filter so new cars don't break the layout
        const activeFilterBtn = document.querySelector('.filter-pill.active');
        if (activeFilterBtn) {
          activeFilterBtn.click();
        }

      }, 1200);
    });
  }

  // 5. WhatsApp Integration for Vehicle Buttons
  document.addEventListener('click', (e) => {
    // Check if the click was on a car card's action button
    const btn = e.target.closest('.btn-icon');
    if (btn && btn.closest('.bento-card')) {
      const card = btn.closest('.bento-card');
      const brand = card.querySelector('.car-brand')?.textContent || '';
      const model = card.querySelector('.car-model')?.textContent || '';

      // CONFIGURATION: Replace with your actual WhatsApp number (include country code, no +)
      const whatsappNumber = '918848709080';
      const message = `Hi Carquarium! I'm interested in the ${brand} ${model}. Could you provide more details?`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, '_blank');
    }
  });

  // 6. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simulate form sending
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.reset();

        // Show success message
        formSuccess.style.display = 'block';
        setTimeout(() => {
          formSuccess.style.display = 'none';
        }, 5000);
      }, 1500);
    });
  }
});
