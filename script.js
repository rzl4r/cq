/* ============================================================
   CARQUARIUM — Interactions & Animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Data Store: Vehicle Profiles
  const vehicleData = {
    'porsche-911-gt3-rs': {
      brand: 'PORSCHE',
      model: '911 GT3 RS',
      type: 'EXOTIC',
      price: '$285,000',
      specs: { hp: '518', speed: '184 MPH', accel: '3.0s', year: '2023', engine: '4.0L Flat-6' },
      description: 'The 911 GT3 RS is a street-legal track masterwork. With its massive swan-neck rear wing and advanced aerodynamics, it generates staggering downforce, turning every corner into a feat of physics.',
      features: [
        { icon: '01', title: 'DRS System', text: 'First-ever street Porsche with Drag Reduction System.' },
        { icon: '02', title: 'Carbon Core', text: 'Extensive use of CFRP in doors, wings, and roof.' },
        { icon: '03', title: '9000 RPM', text: 'Naturally aspirated masterclass in high-revving performance.' }
      ],
      bg: 'linear-gradient(45deg, #2a0808, #050000)'
    },
    'bentley-continental-gt': {
      brand: 'BENTLEY',
      model: 'Continental GT',
      type: 'LUXURY',
      price: '$205,000',
      specs: { hp: '542', speed: '198 MPH', accel: '3.9s', year: '2022', engine: '4.0L V8 Twin-Turbo' },
      description: 'The definitive Grand Tourer. The Bentley Continental GT combined handcrafted luxury with effortless performance, creating a driving experience that is as serene as it is powerful.',
      features: [
        { icon: '01', title: 'Diamond Quilting', text: 'Hand-stitched interior with over 310,000 stitches.' },
        { icon: '02', title: 'Active AWD', text: 'Intelligent torque distribution for all-weather confidence.' },
        { icon: '03', title: 'Rotating Display', text: 'Triple-sided dashboard for classic or digital focus.' }
      ],
      bg: 'linear-gradient(45deg, #0a1a24, #050000)'
    },
    'mclaren-720s-spider': {
        brand: 'MCLAREN',
        model: '720S Spider',
        type: 'EXOTIC',
        price: '$299,500',
        specs: { hp: '710', speed: '212 MPH', accel: '2.8s', year: '2021', engine: '4.0L V8 Twin-Turbo' },
        description: 'McLaren’s supercar for the open air. Light, fast, and engineered with a carbon fiber Monocage II-S, it offers the purity of a coupe with the thrill of a convertible.',
        features: [
            { icon: '01', title: 'Monocage II-S', text: 'Ultra-stiff carbon chassis for unmatched handling.' },
            { icon: '02', title: 'Proactive Chassis', text: 'Hydraulic suspension that reads the road in milliseconds.' },
            { icon: '03', title: 'Glass Roof', text: 'Electrochromic hardtop that tints at the touch of a button.' }
        ],
        bg: 'linear-gradient(45deg, #2a1a05, #050000)'
    },
    'ferrari-f8-tributo': {
        brand: 'FERRARI',
        model: 'F8 Tributo',
        type: 'EXOTIC',
        price: '$345,000',
        specs: { hp: '710', speed: '211 MPH', accel: '2.9s', year: '2023', engine: '3.9L V8 Twin-Turbo' },
        description: 'The F8 Tributo is the pinnacle of Ferrari’s mid-rear-engined V8 sportscars. It pays homage to the most powerful V8 in Ferrari history, delivering explosive performance.',
        features: [
            { icon: '01', title: 'S-Duct', text: 'F1-inspired aero for 15% more downforce than its predecessor.' },
            { icon: '02', title: 'Dynamic Enhancer', text: 'Electronic lateral control for perfect drifts.' },
            { icon: '03', title: 'Lexan Screen', text: 'Louvred engine cover honoring the legendary F40.' }
        ],
        bg: 'linear-gradient(45deg, #2a0505, #050000)'
    },
    'rolls-royce-cullinan': {
        brand: 'ROLLS-ROYCE',
        model: 'Cullinan',
        type: 'LUXURY',
        price: '$390,000',
        specs: { hp: '563', speed: '155 MPH', accel: '4.8s', year: '2021', engine: '6.75L V12 Twin-Turbo' },
        description: 'The Cullinan is the first all-terrain SUV from Rolls-Royce. It makes luxury travel "Effortless, Everywhere," conquering any path with the legendary Magic Carpet Ride.',
        features: [
            { icon: '01', title: 'Magic Carpet Ride', text: 'Self-leveling air suspension for ultimate smoothness.' },
            { icon: '02', title: 'Starlight Headliner', text: '1,344 fiber-optic lights creating a starry sky.' },
            { icon: '03', title: 'Viewing Suite', text: 'Two leather seats that deploy from the tailgate at the touch of a button.' }
        ],
        bg: 'linear-gradient(45deg, #101010, #000000)'
    },
    'aston-martin-vantage-f1': {
        brand: 'ASTON MARTIN',
        model: 'Vantage F1',
        type: 'EXOTIC',
        price: '$155,000',
        specs: { hp: '527', speed: '190 MPH', accel: '3.5s', year: '2022', engine: '4.0L V8 Twin-Turbo' },
        description: 'The Vantage F1 Edition is a track-focused beast inspired by the Official Safety Car of Formula 1. It offers enhanced power, unique chassis tuning, and high-downforce aero.',
        features: [
            { icon: '01', title: 'Aero Kit', text: 'Racing-derived wing and splitter for 200kg of downforce.' },
            { icon: '02', title: '21" Alloys', text: 'Unique F1 Edition wheels for sharper handling.' },
            { icon: '03', title: 'Racing Seats', text: 'Carbon fiber performance seats for ultimate support.' }
        ],
        bg: 'linear-gradient(45deg, #0a2010, #050000)'
    }
  };

  // 2. Load Vehicle Detail Logic
  window.loadVehicleDetails = function(id) {
    const car = vehicleData[id];
    if (!car) {
        document.body.innerHTML = '<div class="container" style="padding:100px; text-align:center;"><h1>Vehicle Not Found</h1><a href="inventory.html">Back to Inventory</a></div>';
        return;
    }

    // Update Text
    document.title = `${car.brand} ${car.model} | Carquarium`;
    document.getElementById('vehicleTypeBadge').textContent = car.type;
    document.getElementById('vehicleFullName').innerHTML = `${car.brand}<br/><span class="gradient-text">${car.model}</span>`;
    document.getElementById('vehiclePrice').textContent = car.price;
    document.getElementById('descriptionText').textContent = car.description;
    
    // Update Specs
    document.getElementById('specHP').textContent = car.specs.hp;
    document.getElementById('specSpeed').textContent = car.specs.speed;
    document.getElementById('specAccel').textContent = car.specs.accel;
    document.getElementById('specYear').textContent = car.specs.year;
    document.getElementById('specEng').textContent = car.specs.engine;

    // Update Background
    const heroBg = document.getElementById('heroBg');
    if (heroBg) heroBg.style.background = car.bg;

    // Load Features
    const container = document.getElementById('featureContainer');
    if (container) {
        container.innerHTML = '';
        car.features.forEach(feat => {
            container.innerHTML += `
                <div class="feature-box reveal">
                    <div class="feat-icon">${feat.icon}</div>
                    <h3>${feat.title}</h3>
                    <p>${feat.text}</p>
                </div>
            `;
        });
    }

    // Set up WhatsApp button triggers
    const whNumber = '918848709080';
    const msg = encodeURIComponent(`Hi! I'm interested in the ${car.brand} ${car.model} priced at ${car.price}. Please share more details.`);
    const whUrl = `https://wa.me/${whNumber}?text=${msg}`;
    
    document.getElementById('detailWhatsApp').onclick = () => window.open(whUrl, '_blank');
    document.getElementById('footerInquiry').onclick = () => window.open(whUrl, '_blank');
  };

  // 3. Floating Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 4. Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const navCta = document.querySelector('.nav-cta');

  if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
      menuBtn.classList.toggle('open');
    });

    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
      if (navLinks && navLinks.classList.contains('open') && !e.target.closest('.nav-links') && !e.target.closest('#menu-btn')) {
        navLinks.classList.remove('open');
        menuBtn.classList.remove('open');
      }
    });

    // Close mobile menu when a link inside is clicked
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuBtn.classList.remove('open');
            });
        });
    }
  }

  // 5. Scroll Reveal Animations (Intersection Observer)
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

  // 6. Generic Click Handler for Global Nav & WhatsApp
  document.addEventListener('click', (e) => {
    // A. WhatsApp Direct Click
    const btn = e.target.closest('.btn-icon');
    if (btn && btn.closest('.bento-card')) {
        e.stopPropagation(); // Prevent card navigation
        const card = btn.closest('.bento-card');
        const brand = card.querySelector('.car-brand')?.textContent || '';
        const model = card.querySelector('.car-model')?.textContent || '';
        const whatsappNumber = '918848709080';
        const message = `Hi Carquarium! I'm interested in the ${brand} ${model}. Could you provide more details?`;
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
        return;
    }

    // B. Vehicle Card Click (Navigate to details)
    const card = e.target.closest('.bento-card');
    if (card && card.dataset.id) {
        window.location.href = `vehicle-detail.html?id=${card.dataset.id}`;
    }
  });

  // 4. Showroom Filtering (Homepage toggle)
  const filterBtns = document.querySelectorAll('.filter-pill');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active to clicked
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const currentCards = document.querySelectorAll('.showroom .bento-card');

      currentCards.forEach(card => {
        if (filter === 'all' || card.classList.contains(filter)) {
          card.style.display = 'block';
          card.style.animation = 'none';
          card.offsetHeight; /* trigger reflow */
          card.style.animation = null;
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4.1 Inventory Page Sidebar Filtering
  const inventoryFilters = document.querySelectorAll('.inventory-filter');
  const allVehiclesCheckbox = document.getElementById('filter-all');
  const inventoryCards = document.querySelectorAll('.inventory-grid .bento-card');

  if (inventoryFilters.length > 0) {
    const applyInventoryFilters = () => {
      const activeFilters = {
        class: [],
        brand: [],
        year: []
      };

      // Gather all checked filters
      inventoryFilters.forEach(filter => {
        if (filter.checked) {
          activeFilters[filter.dataset.type].push(filter.dataset.filter);
        }
      });

      inventoryCards.forEach(card => {
        let isVisible = true;

        // Apply AND logic across categories (Type, Brand, Year)
        // Apply OR logic within a category (e.g., Porsche OR Ferrari)
        for (const category in activeFilters) {
          if (activeFilters[category].length > 0) {
            const hasMatch = activeFilters[category].some(val =>
              card.classList.contains(val) ||
              card.classList.contains(`${category}-${val}`)
            );
            if (!hasMatch) {
              isVisible = false;
              break;
            }
          }
        }

        // If "All" is checked and no specific filters are selected, show everything
        if (allVehiclesCheckbox && allVehiclesCheckbox.checked) {
          isVisible = true;
        }

        // Final visibility toggle with a small fade effect if possible
        card.style.display = isVisible ? 'block' : 'none';
        if (isVisible) {
          card.style.animation = 'none';
          card.offsetHeight;
          card.style.animation = null;
        }
      });
    };

    inventoryFilters.forEach(filter => {
      filter.addEventListener('change', () => {
        // If we check a specific filter, uncheck "All Vehicles"
        if (filter.checked && allVehiclesCheckbox) {
          allVehiclesCheckbox.checked = false;
        }
        applyInventoryFilters();
      });
    });

    if (allVehiclesCheckbox) {
      allVehiclesCheckbox.addEventListener('change', () => {
        if (allVehiclesCheckbox.checked) {
          // If we check "All Vehicles", uncheck everything else
          inventoryFilters.forEach(f => f.checked = false);
        }
        applyInventoryFilters();
      });
    }
  }

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
