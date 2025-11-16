# Tasks for Claude Code Cloud - Design Improvements

## 🎯 Mission: Transform into Authentic Japanese Luxury

**Goal**: Create a $2M ultra-luxury website with **Japanese aesthetic** (not French), smooth animations, and flawless page transitions.

**Brand Identity**: Family wellness + Scientific innovation + Japanese minimalism = Unique luxury

---

## ⚡ PRIORITY 1: Fix Page Transitions (CRITICAL)

### Problem
Current page transitions are jarring, broken, or non-existent. Users experience:
- White flash between pages
- Abrupt content loading
- Lost scroll position
- No visual continuity

### Solution: Implement Barba.js + GSAP

#### Step 1: Add Barba.js to All Pages

Add to `<head>` of all HTML files (index, philosophy, collections, ingredients, atelier, contact):

```html
<!-- Barba.js for Page Transitions -->
<script src="https://cdn.jsdelivr.net/npm/@barba/core@2.9.7/dist/barba.umd.js"></script>
```

#### Step 2: Wrap Content in Barba Container

Wrap all page content (after nav, before footer) in:

```html
<main data-barba="wrapper">
    <div data-barba="container" data-barba-namespace="home">
        <!-- All page content here -->
    </div>
</main>
```

**Important**: Each page needs unique namespace:
- index.html: `data-barba-namespace="home"`
- philosophy.html: `data-barba-namespace="philosophy"`
- collections.html: `data-barba-namespace="collections"`
- ingredients.html: `data-barba-namespace="ingredients"`
- atelier.html: `data-barba-namespace="atelier"`
- contact.html: `data-barba-namespace="contact"`

#### Step 3: Create Transition Animations

Add to `script.js`:

```javascript
// ===================================
// BARBA.JS PAGE TRANSITIONS
// ===================================

barba.init({
    transitions: [{
        name: 'fade-transition',

        // Before leaving current page
        leave(data) {
            return gsap.to(data.current.container, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.inOut'
            });
        },

        // After leaving, before entering
        afterLeave(data) {
            // Scroll to top
            window.scrollTo(0, 0);
        },

        // When entering new page
        enter(data) {
            return gsap.from(data.next.container, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.inOut'
            });
        },

        // After entering new page
        after(data) {
            // Reinitialize scroll animations for new page
            ScrollTrigger.refresh();

            // Re-observe elements for animations
            initScrollAnimations();
        }
    }],

    // Prevent default link behavior
    prevent: ({ el }) => el.classList && el.classList.contains('no-barba')
});

// Reinitialize animations on each page load
barba.hooks.after(() => {
    // Reinit GSAP ScrollTriggers
    ScrollTrigger.refresh();

    // Reinit mobile menu if exists
    initMobileMenu();

    // Reinit form handlers if on contact page
    if (document.querySelector('.contact-form')) {
        initContactForm();
    }
});
```

#### Step 4: Advanced Transition (Japanese Curtain Effect)

For a more premium feel, implement a Japanese-inspired curtain transition:

```javascript
barba.init({
    transitions: [{
        name: 'japanese-curtain',

        async leave(data) {
            // Create curtain overlay
            const curtain = document.createElement('div');
            curtain.className = 'page-curtain';
            curtain.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
                z-index: 9999;
                transform: translateY(-100%);
            `;
            document.body.appendChild(curtain);

            // Animate curtain down
            await gsap.to(curtain, {
                translateY: '0%',
                duration: 0.6,
                ease: 'power3.inOut'
            });

            // Fade out current page
            await gsap.to(data.current.container, {
                opacity: 0,
                duration: 0.3
            });
        },

        async enter(data) {
            const curtain = document.querySelector('.page-curtain');

            // Fade in new page
            await gsap.from(data.next.container, {
                opacity: 0,
                duration: 0.3
            });

            // Animate curtain up
            await gsap.to(curtain, {
                translateY: '100%',
                duration: 0.6,
                ease: 'power3.inOut',
                onComplete: () => curtain.remove()
            });
        }
    }]
});
```

---

## 🎨 PRIORITY 2: Japanese Aesthetic Micro-Interactions

### 1. Refined Button Hover (Not Magnetic, Too Gimmicky)

Replace magnetic buttons with subtle, elegant interactions:

```javascript
// Subtle scale + shadow (Japanese minimalism)
const buttons = document.querySelectorAll('.btn-primary, .contact-btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.02,
            boxShadow: '0 8px 24px rgba(212, 175, 55, 0.15)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    button.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            boxShadow: '0 4px 12px rgba(212, 175, 55, 0.08)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});
```

### 2. Card Hover with Japanese Principle of "Ma" (Space)

```javascript
const cards = document.querySelectorAll('.link-card');

cards.forEach(card => {
    const image = card.querySelector('.link-card-image img');
    const content = card.querySelector('.link-card-content');

    card.addEventListener('mouseenter', function() {
        // Subtle lift (not dramatic)
        gsap.to(this, {
            y: -8,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
            duration: 0.4,
            ease: 'power2.out'
        });

        // Zoom image slightly
        gsap.to(image, {
            scale: 1.05,
            duration: 0.6,
            ease: 'power2.out'
        });

        // Fade in content slightly
        gsap.to(content, {
            opacity: 1,
            duration: 0.3
        });
    });

    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            y: 0,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
            duration: 0.4,
            ease: 'power2.out'
        });

        gsap.to(image, {
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
        });

        gsap.to(content, {
            opacity: 0.95,
            duration: 0.3
        });
    });
});
```

### 3. Japanese Text Reveal (Not Character-by-Character - Too Much)

Simpler, more elegant reveal:

```javascript
// Fade + slide reveal (refined)
gsap.utils.toArray('.intro-title, .page-title').forEach(title => {
    gsap.from(title, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
});
```

---

## ⚡ PRIORITY 3: Performance Optimizations

### 1. Lazy Load Images

```javascript
// Native lazy loading
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.loading = 'lazy';
    img.decoding = 'async';
});

// Intersection Observer for advanced lazy loading
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.dataset.src || img.src;

            // Fade in image when loaded
            img.addEventListener('load', () => {
                gsap.to(img, {
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power2.out'
                });
            });

            img.style.opacity = '0';
            img.src = src;
            imageObserver.unobserve(img);
        }
    });
}, { rootMargin: '50px' });

images.forEach(img => imageObserver.observe(img));
```

### 2. Video Performance

```javascript
// Optimize hero video
const heroVideo = document.querySelector('.hero-video');

if (heroVideo) {
    // Pause when not visible
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroVideo.play();
            } else {
                heroVideo.pause();
            }
        });
    }, { threshold: 0.25 });

    videoObserver.observe(heroVideo);

    // Preload only first few seconds
    heroVideo.preload = 'metadata';
}
```

### 3. Throttle Scroll Events

```javascript
// Throttle scroll animations
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(() => {
        // Scroll-based animations here
        updateParallax();
        updateNavbar();
    });
});
```

---

## 🎯 PRIORITY 4: Hero Section Enhancement

### Current Issues
- Basic parallax
- No depth
- Video just sits there

### Solution: Multi-Layer Parallax

```javascript
// Advanced hero parallax
const hero = document.querySelector('.hero');
const heroVideo = document.querySelector('.hero-video-container');
const scrollIndicator = document.querySelector('.scroll-indicator');

if (hero && heroVideo) {
    gsap.to(heroVideo, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5
        }
    });

    // Fade out scroll indicator
    gsap.to(scrollIndicator, {
        opacity: 0,
        y: -30,
        scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: '15% top',
            scrub: 1
        }
    });

    // Add subtle scale to video on scroll
    gsap.to('.hero-video', {
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: 2
        }
    });
}
```

---

## 🎨 PRIORITY 5: Scroll Animations (Refined)

### Principles
- ✅ Subtle, not dramatic
- ✅ Fast (0.3-0.4s)
- ✅ Small movement (20-30px, not 60-100px)
- ✅ Stagger for grids
- ✅ One animation per element

### Implementation

```javascript
// Reveal animations (refined)
gsap.utils.toArray('.reveal').forEach(element => {
    gsap.from(element, {
        opacity: 0,
        y: 30,  // Small movement
        duration: 0.6,  // Fast
        ease: 'power2.out',  // Smooth
        scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            toggleActions: 'play none none none'
        }
    });
});

// Grid stagger (elegant)
const animateGrid = (gridSelector) => {
    const grids = document.querySelectorAll(gridSelector);

    grids.forEach(grid => {
        const items = grid.children;

        gsap.from(items, {
            opacity: 0,
            y: 20,
            stagger: 0.08,  // Subtle stagger
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: grid,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });
};

// Apply to grids
animateGrid('.links-grid');
animateGrid('.principles-grid');
animateGrid('.values-grid');
```

---

## 🖱️ PRIORITY 6: Cursor Enhancement (Subtle, Japanese)

### Current: Too flashy, blend mode issues
### Solution: Minimal dot that expands on interactive elements

```javascript
// Subtle cursor dot (Japanese minimalism)
const cursor = document.createElement('div');
cursor.className = 'cursor-dot';
cursor.style.cssText = `
    position: fixed;
    width: 6px;
    height: 6px;
    background: #d4af37;
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    opacity: 0;
    transition: width 0.2s, height 0.2s, opacity 0.2s;
`;
document.body.appendChild(cursor);

// Follow mouse
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 3 + 'px';
    cursor.style.top = e.clientY - 3 + 'px';
    cursor.style.opacity = '0.6';
});

// Expand on interactive elements
const interactives = document.querySelectorAll('a, button, input, textarea');
interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.opacity = '0.3';
    });

    el.addEventListener('mouseleave', () => {
        cursor.style.width = '6px';
        cursor.style.height = '6px';
        cursor.style.opacity = '0.6';
    });
});

// Hide on mouse leave
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});
```

---

## 📱 PRIORITY 7: Mobile Optimization

### Issues to Fix
1. Touch interactions need refinement
2. Mobile menu animation choppy
3. Images too large for mobile

### Solutions

```javascript
// Smooth mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.contains('active');

        if (!isActive) {
            // Opening
            navMenu.classList.add('active');

            gsap.fromTo(navMenu,
                {
                    opacity: 0,
                    x: '100%'
                },
                {
                    opacity: 1,
                    x: '0%',
                    duration: 0.4,
                    ease: 'power3.out'
                }
            );

            gsap.from('.nav-menu .nav-link', {
                opacity: 0,
                x: 30,
                stagger: 0.05,
                duration: 0.3,
                delay: 0.2,
                ease: 'power2.out'
            });
        } else {
            // Closing
            gsap.to(navMenu, {
                opacity: 0,
                x: '100%',
                duration: 0.3,
                ease: 'power3.in',
                onComplete: () => {
                    navMenu.classList.remove('active');
                }
            });
        }
    });
}

// Touch-friendly interactions
if ('ontouchstart' in window) {
    // Disable hover effects on touch devices
    document.body.classList.add('touch-device');

    // Add touch feedback
    const touchElements = document.querySelectorAll('.link-card, .btn-primary');
    touchElements.forEach(el => {
        el.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });

        el.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}
```

---

## 🎯 PRIORITY 8: Loading Sequence

### Create Elegant Page Load

```javascript
window.addEventListener('load', () => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Fade in page
    tl.to('body', {
        opacity: 1,
        duration: 0.6
    })

    // 2. Animate logo
    .from('.logo', {
        opacity: 0,
        y: -20,
        duration: 0.8
    }, '-=0.3')

    // 3. Animate nav links
    .from('.nav-link', {
        opacity: 0,
        y: -15,
        stagger: 0.06,
        duration: 0.6
    }, '-=0.5')

    // 4. Fade in hero
    .from('.scroll-indicator', {
        opacity: 0,
        y: 30,
        duration: 1
    }, '-=0.4');
});
```

---

## ✅ TESTING CHECKLIST

Before committing, test:

### Page Transitions
- [ ] All pages transition smoothly (no white flash)
- [ ] Scroll position resets to top
- [ ] Animations reinitialize on new page
- [ ] Mobile menu closes on page transition
- [ ] No JavaScript errors in console

### Animations
- [ ] Hero parallax smooth at 60fps
- [ ] Scroll animations trigger at right time
- [ ] Grid stagger looks elegant
- [ ] No jank or stuttering
- [ ] Reduced motion respected

### Performance
- [ ] Images lazy load
- [ ] Video pauses when off-screen
- [ ] Lighthouse score >90
- [ ] Mobile performance good
- [ ] No layout shifts

### Cross-Browser
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Mobile Safari
- [ ] Mobile Chrome

---

## 🚫 WHAT NOT TO DO

❌ **Don't**:
- Add character-by-character text reveals (too much)
- Use magnetic buttons (too gimmicky)
- Copy Dior's cold aesthetic (wrong brand)
- Add excessive 3D tilt effects
- Use blend modes that cause flickering
- Create transitions longer than 0.6s
- Add too many particles or effects
- Make cursor too large or distracting

✅ **Do**:
- Keep Japanese aesthetic (warm, minimal)
- Use subtle, fast animations (0.3-0.4s)
- Maintain family-friendly warmth
- Emphasize scientific innovation
- Keep gold accent (#d4af37)
- Focus on smooth, bug-free experience
- Test on real devices
- Respect reduced-motion preferences

---

## 📊 SUCCESS METRICS

### Technical
- Lighthouse Performance: 95+
- Lighthouse Accessibility: 100
- Lighthouse Best Practices: 100
- Lighthouse SEO: 100
- First Contentful Paint: <1.5s
- Time to Interactive: <3s

### User Experience
- Page transitions: Smooth, <0.6s
- Scroll animations: 60fps
- Touch interactions: Immediate response
- Mobile menu: Instant open/close
- Image loading: Progressive, lazy

### Brand Alignment
- Feels Japanese (not French)
- Feels warm (not cold)
- Feels premium (not cheap)
- Feels innovative (not generic)
- Feels accessible (not intimidating)

---

## 🎬 FINAL NOTES

**Remember**: This is a **Japanese brand** focused on **family wellness** and **scientific innovation**.

Every animation, transition, and interaction should reinforce:
1. 🇯🇵 Japanese aesthetic principles
2. 👨‍👩‍👧‍👦 Family-friendly warmth
3. 🧬 Cutting-edge science
4. ⏱️ 10-minute efficiency
5. 💎 Premium quality

**Make it smooth, make it fast, make it Japanese. Not French.**

---

## 🚀 READY TO CODE

Execute these tasks in order. Test thoroughly. Create a PR when done.

**Good luck, Claude Code Cloud! Make this website absolutely stunning.** ✨
