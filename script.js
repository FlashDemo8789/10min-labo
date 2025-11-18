/* ===================================
   ULTRA LUXURY COSMETICS WEBSITE
   10min labo - JavaScript
   =================================== */

// ===================================
// NAVIGATION SCROLL EFFECT
// ===================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// SMOOTH SCROLL
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// SCROLL REVEAL ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay') || 0;

            setTimeout(() => {
                entry.target.classList.add('active');
            }, delay * 200);

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all reveal elements
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach(element => {
    observer.observe(element);
});

// Observe collection items
const collectionItems = document.querySelectorAll('.collection-item');
collectionItems.forEach(element => {
    observer.observe(element);
});

// Observe ingredient cards
const ingredientCards = document.querySelectorAll('.ingredient-card');
ingredientCards.forEach(element => {
    observer.observe(element);
});

// Observe atelier images
const atelierImages = document.querySelectorAll('.atelier-image');
atelierImages.forEach(element => {
    observer.observe(element);
});

// Observe collection showcase items
const showcaseItems = document.querySelectorAll('.collection-showcase-item');
showcaseItems.forEach(element => {
    observer.observe(element);
});

// Observe link cards
const linkCards = document.querySelectorAll('.link-card');
linkCards.forEach(element => {
    observer.observe(element);
});

// Observe principle cards
const principleCards = document.querySelectorAll('.principle-card');
principleCards.forEach(element => {
    observer.observe(element);
});

// Observe value items
const valueItems = document.querySelectorAll('.value-item');
valueItems.forEach(element => {
    observer.observe(element);
});

// Observe ingredient showcase items
const ingredientShowcaseItems = document.querySelectorAll('.ingredient-showcase-item');
ingredientShowcaseItems.forEach(element => {
    observer.observe(element);
});

// Observe craft items
const craftItems = document.querySelectorAll('.craft-item');
craftItems.forEach(element => {
    observer.observe(element);
});

// Observe team members
const teamMembers = document.querySelectorAll('.team-member');
teamMembers.forEach(element => {
    observer.observe(element);
});

// ===================================
// PARALLAX EFFECT
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    // Hero video parallax
    const heroVideo = document.querySelector('.hero-video-container');
    if (heroVideo) {
        heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
    }

    // Philosophy image parallax
    const philosophyImage = document.querySelector('.philosophy-image img');
    if (philosophyImage && isInViewport(philosophyImage)) {
        const imageTop = philosophyImage.getBoundingClientRect().top;
        philosophyImage.style.transform = `translateY(${imageTop * -0.1}px) scale(1.1)`;
    }
});

// Helper function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===================================
// COLLECTION HOVER EFFECTS
// ===================================
const collectionItemsHover = document.querySelectorAll('.collection-item');

collectionItemsHover.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===================================
// FORM VALIDATION & SUBMISSION
// ===================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);

        // Add loading state to button
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success animation
            submitBtn.textContent = 'Sent Successfully';
            submitBtn.style.backgroundColor = '#d4af37';

            // Reset form
            setTimeout(() => {
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
            }, 2000);
        }, 1500);
    });

    // Input focus effects
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 10px 40px rgba(212, 175, 55, 0.1)';
        });

        input.addEventListener('blur', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
}

// ===================================
// LANGUAGE SWITCHER
// ===================================
const LANGUAGE_STORAGE_KEY = '10min-labo-language';
const supportedLanguages = ['en', 'ja'];

function applyLanguage(lang) {
    const safeLang = supportedLanguages.includes(lang) ? lang : 'en';

    // Set HTML lang attribute and data attribute for CSS
    document.documentElement.setAttribute('lang', safeLang === 'ja' ? 'ja' : 'en');
    document.documentElement.setAttribute('data-lang', safeLang);

    // Persist choice
    try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, safeLang);
    } catch (e) {
        // Ignore storage errors (private mode, etc.)
    }

    // Update language label and active state in dropdown
    const languageLabel = document.querySelector('.language-label');
    const languageOptions = document.querySelectorAll('.language-option');

    if (languageLabel) {
        languageLabel.textContent = safeLang === 'ja' ? '日本語' : 'English';
    }

    languageOptions.forEach(option => {
        const optionLang = option.getAttribute('data-lang');
        option.classList.toggle('active', optionLang === safeLang);
    });
}

// Initialize language from storage or default
let initialLanguage = 'en';
try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && supportedLanguages.includes(stored)) {
        initialLanguage = stored;
    }
} catch (e) {
    // Ignore storage issues
}
applyLanguage(initialLanguage);

// Wire up dropdown interactions
const languageSwitcher = document.querySelector('.language-switcher');
const languageToggleButton = document.querySelector('.language-toggle');
const languageOptionButtons = document.querySelectorAll('.language-option');

if (languageSwitcher && languageToggleButton) {
    languageToggleButton.addEventListener('click', (event) => {
        event.stopPropagation();
        languageSwitcher.classList.toggle('open');
    });

    languageOptionButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            const selectedLang = button.getAttribute('data-lang');
            applyLanguage(selectedLang);
            languageSwitcher.classList.remove('open');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!languageSwitcher.contains(event.target)) {
            languageSwitcher.classList.remove('open');
        }
    });
}

// ===================================
// PAGE TRANSITION EFFECT
// ===================================
window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');

        // Animate menu toggle icon
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = menuToggle.classList.contains('active')
            ? 'rotate(45deg) translateY(8px)'
            : 'rotate(0) translateY(0)';
        spans[1].style.opacity = menuToggle.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = menuToggle.classList.contains('active')
            ? 'rotate(-45deg) translateY(-8px)'
            : 'rotate(0) translateY(0)';
    });
}

// ===================================
// INGREDIENT CARDS STAGGER ANIMATION
// ===================================
const ingredientCardsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.ingredient-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                    card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                }, index * 150);
            });
            ingredientCardsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

const ingredientsList = document.querySelector('.ingredients-list');
if (ingredientsList) {
    ingredientCardsObserver.observe(ingredientsList);
}

// ===================================
// VIDEO PLAYBACK CONTROL
// ===================================
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
    // Ensure video plays on load
    heroVideo.play().catch(error => {
        console.log('Video autoplay prevented:', error);
    });

    // Pause video when out of view to save resources
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroVideo.play();
            } else {
                heroVideo.pause();
            }
        });
    }, { threshold: 0.5 });

    videoObserver.observe(heroVideo);
}

// ===================================
// SCROLL PROGRESS INDICATOR
// ===================================
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background: linear-gradient(to right, #d4af37, #f4e4c1);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
}

createScrollProgress();

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Lazy load images
const images = document.querySelectorAll('img[src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ===================================
// LUXURY LOADING ANIMATION
// ===================================
window.addEventListener('load', () => {
    // Fade in body
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);

    // Animate logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            logo.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0)';
        }, 500);
    }
});

// ===================================
// TESTIMONIAL SLIDER (Simple Version)
// ===================================
const testimonialItems = document.querySelectorAll('.testimonial-item');
if (testimonialItems.length > 1) {
    let currentTestimonial = 0;

    setInterval(() => {
        testimonialItems[currentTestimonial].style.opacity = '0';
        testimonialItems[currentTestimonial].style.transform = 'translateY(20px)';

        currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;

        setTimeout(() => {
            testimonialItems[currentTestimonial].style.transition = 'all 0.8s ease';
            testimonialItems[currentTestimonial].style.opacity = '1';
            testimonialItems[currentTestimonial].style.transform = 'translateY(0)';
        }, 500);
    }, 6000);
}

// ===================================
// CONSOLE BRANDING
// ===================================
console.log('%c10min labo', 'font-size: 24px; font-weight: 300; color: #d4af37; font-family: serif;');
console.log('%c東京 - Ultra Luxury Cosmetics', 'font-size: 12px; color: #8b7355; letter-spacing: 3px;');
