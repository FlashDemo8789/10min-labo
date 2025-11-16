# 10min labo Website - Agent Guide

## Project Overview

This is a **$2 million ultra-luxury website** for **10min labo**, a Japanese cosmetics company specializing in professional-grade skincare that delivers results in 10 minutes. The website is designed to appeal to ultra-high net worth individuals while maintaining authenticity to the brand's core values of family wellness and safety.

### Project Type
- **Multi-page static website** (HTML, CSS, JavaScript)
- **No frameworks** - Pure vanilla code for maximum control
- **Luxury aesthetic** - Japanese minimalism meets premium design
- **Fully responsive** - Mobile-first approach

### Key Brand Values (IMPORTANT - Must be reflected in all content)
1. **Family wellness over profit margins** - This is the core philosophy
2. **Baby-safe materials** - Every ingredient must be safe for babies
3. **10-minute results** - Professional skincare in just 10 minutes
4. **Patented technology** - World's first Innovative 3D Nanotechnology®
5. **Award-winning** - Gold winner at "Professionals' Choice Cosmetics"

---

## Technical Stack

### Frontend
- **HTML5** - Semantic markup with lang="ja"
- **CSS3** - Custom properties, Grid, Flexbox, smooth animations
- **Vanilla JavaScript** - Intersection Observer API for scroll animations
- **Google Fonts** - Cormorant Garamond + Montserrat

### Development Server
- **Python HTTP Server** - `python3 -m http.server 8000`
- **Port**: 8000
- **URL**: http://localhost:8000

### Version Control
- **Git** - Initialized repository
- **Commits**: Must include Claude Code signature
- **Branch**: main

### GitHub Repository
- **Repository**: https://github.com/FlashDemo8789/10min-labo
- **Owner**: FlashDemo8789
- **Visibility**: Public
- **Clone URL**: `https://github.com/FlashDemo8789/10min-labo.git`
- **Default Branch**: main

---

## GitHub Repository Details

### Repository Information

**Repository URL**: https://github.com/FlashDemo8789/10min-labo

**Description**: Ultra-luxury cosmetics website for 10min labo - Japanese skincare brand with patented 3D Nanotechnology

**Status**: Active, public repository

### Cloning the Repository

```bash
# Clone via HTTPS
git clone https://github.com/FlashDemo8789/10min-labo.git

# Navigate to project
cd 10min-labo

# Install dependencies (none required - vanilla HTML/CSS/JS)
# Start development server
python3 -m http.server 8000

# Open browser
# http://localhost:8000
```

### Working with the Repository

#### First Time Setup
```bash
# Clone the repository
git clone https://github.com/FlashDemo8789/10min-labo.git
cd 10min-labo

# Check current branch
git branch

# Check remote
git remote -v
```

#### Daily Workflow
```bash
# Pull latest changes
git pull origin main

# Make your changes...

# Check status
git status

# Add files
git add .

# Commit with proper message
git commit -m "Your descriptive commit message

Detailed explanation of changes

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to GitHub
git push origin main
```

#### Branch Strategy
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Work on feature...

# Commit changes
git add .
git commit -m "Add feature description"

# Push feature branch
git push origin feature/your-feature-name

# Create pull request on GitHub
# Merge after review
```

### Collaboration Guidelines

#### Before Making Changes
1. Always pull latest changes: `git pull origin main`
2. Create a new branch for features: `git checkout -b feature/name`
3. Keep commits atomic (one feature/fix per commit)
4. Write descriptive commit messages

#### Commit Message Format
```
[Short description - 50 chars max]

[Detailed explanation of what changed and why]

Changes:
- Bullet point 1
- Bullet point 2
- Bullet point 3

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

#### Code Review Process
1. Push your branch to GitHub
2. Create a Pull Request
3. Request review from team members
4. Address feedback
5. Merge when approved

### Using Claude Code Cloud

#### Setup
1. Go to https://claude.ai/projects
2. Click "New Project" or "Import from GitHub"
3. Authenticate with GitHub (if needed)
4. Select `FlashDemo8789/10min-labo` repository
5. Start coding with Claude in the cloud

#### Benefits
- Access from anywhere (no local setup needed)
- Automatic syncing with GitHub
- Claude has full context of the project
- Collaborative editing
- Version history preserved

#### Workflow in Claude Code Cloud
1. Make changes in Claude Code Cloud
2. Changes are automatically committed
3. Push to GitHub when ready
4. Pull changes locally if needed

### Repository Maintenance

#### Regular Tasks
- **Weekly**: Review and merge pull requests
- **Monthly**: Clean up stale branches
- **Quarterly**: Update dependencies (if any added)
- **As needed**: Update documentation

#### Branch Management
```bash
# List all branches
git branch -a

# Delete local branch
git branch -d feature/old-feature

# Delete remote branch
git push origin --delete feature/old-feature

# Prune deleted remote branches
git fetch --prune
```

#### Keeping Fork Updated (if forked)
```bash
# Add upstream remote
git remote add upstream https://github.com/FlashDemo8789/10min-labo.git

# Fetch upstream changes
git fetch upstream

# Merge upstream main into your main
git checkout main
git merge upstream/main

# Push to your fork
git push origin main
```

### Repository Settings

#### Recommended Settings
- **Branch Protection**: Enable for `main` branch
  - Require pull request reviews before merging
  - Require status checks to pass
  - Require branches to be up to date
- **Issues**: Enable for bug tracking and feature requests
- **Projects**: Enable for project management
- **Wiki**: Enable for extended documentation
- **Discussions**: Enable for community engagement

#### .gitignore Configuration
The repository includes a `.gitignore` file to exclude:
- `.DS_Store` (macOS system files)
- `node_modules/` (if npm packages added later)
- `.env` (environment variables)
- `*.log` (log files)
- `.vscode/` (editor-specific settings)
- Backup files and temp files

### Deployment from GitHub

#### GitHub Pages (Simple Static Hosting)
```bash
# Enable GitHub Pages in repository settings
# Settings > Pages > Source: main branch

# Your site will be available at:
# https://FlashDemo8789.github.io/10min-labo/
```

#### Vercel (Recommended for Production)
1. Go to https://vercel.com
2. Import GitHub repository
3. Configure build settings (none needed for static site)
4. Deploy
5. Custom domain: Configure in Vercel settings

#### Netlify (Alternative)
1. Go to https://netlify.com
2. New site from Git
3. Connect to GitHub
4. Select repository
5. Deploy settings: None needed
6. Deploy

### Continuous Integration (Optional)

#### GitHub Actions Workflow
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### Repository Backup

#### Local Backup
```bash
# Create complete backup including history
git clone --mirror https://github.com/FlashDemo8789/10min-labo.git backup-10min-labo

# Restore from backup if needed
cd backup-10min-labo
git push --mirror https://github.com/FlashDemo8789/10min-labo.git
```

#### Export Repository
```bash
# Create archive of current state
git archive --format=zip --output=10min-labo-backup-$(date +%Y%m%d).zip main
```

### Troubleshooting

#### Common Issues

**Issue**: Push rejected (non-fast-forward)
```bash
# Solution: Pull and merge first
git pull origin main
# Resolve conflicts if any
git push origin main
```

**Issue**: Accidentally committed large file
```bash
# Remove from last commit
git rm --cached path/to/large/file
git commit --amend

# Remove from history (use with caution)
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch path/to/large/file" \
  --prune-empty --tag-name-filter cat -- --all
```

**Issue**: Need to undo last commit
```bash
# Keep changes (soft reset)
git reset --soft HEAD~1

# Discard changes (hard reset - dangerous!)
git reset --hard HEAD~1
```

**Issue**: Authentication failed
```bash
# Re-authenticate with GitHub CLI
gh auth login

# Or use personal access token
# Settings > Developer settings > Personal access tokens
# Use token as password when pushing
```

### Repository Statistics

**Current Stats**:
- **Commits**: 4+
- **Branches**: 1 (main)
- **Contributors**: 1 (FlashDemo8789)
- **Total Size**: ~7 MB (including hero video)
- **Languages**: HTML (40%), CSS (35%), JavaScript (25%)
- **Files**: 15 files
- **Documentation**: 2 comprehensive guides (agents.md, ENHANCEMENT_PLAN.md)

### Important Links

- **Repository**: https://github.com/FlashDemo8789/10min-labo
- **Issues**: https://github.com/FlashDemo8789/10min-labo/issues
- **Pull Requests**: https://github.com/FlashDemo8789/10min-labo/pulls
- **Commits**: https://github.com/FlashDemo8789/10min-labo/commits/main
- **Code**: https://github.com/FlashDemo8789/10min-labo/tree/main

---

## File Structure

```
/Users/sf/10min-labo/
├── index.html              # Home page with hero video
├── philosophy.html         # Brand story and values
├── collections.html        # Product showcase (10min Labo Cream)
├── ingredients.html        # Key ingredients and technology
├── atelier.html           # Tokyo workshop and team
├── contact.html           # Contact form and information
├── style.css              # All styling (~2000+ lines)
├── script.js              # Animations and interactions
├── assets/
│   └── hero-video.mp4     # 6.4 MB hero video
└── agents.md              # This file
```

### Page Purposes

#### index.html - Home Page
- **Purpose**: First impression, hero video, navigation hub
- **Key Elements**:
  - Hero video section (minimal overlay, video has own text)
  - Brand introduction with family wellness focus
  - 4 link cards to main sections
  - CTA section for product
  - Footer with social links

#### philosophy.html - Brand Story
- **Purpose**: Communicate family wellness mission
- **Key Content**:
  - "Creating Truly Good Products" header
  - Baby-safe materials emphasis
  - 4 principles: Safety First, 10-Minute Results, Patented Technology, Family Wellness
  - Brand story about research and family-driven values
  - Core values section

#### collections.html - Product Showcase
- **Purpose**: Showcase the main product
- **Key Content**:
  - 10min Labo Cream details
  - Pricing: ¥19,800 (150g), ¥680 (5g)
  - Three showcases: Main Product, Patented Technology, Family Safe
  - Award recognition section

#### ingredients.html - Science & Technology
- **Purpose**: Explain patented technology and key ingredients
- **Key Content**:
  - 3 real ingredients:
    1. Human Stem Cell Culture Liquid (細)
    2. Specially Electrolyzed Water (水)
    3. Innovative 3D Nanotechnology® (技)
  - Science section on biotechnology
  - Ethical sourcing promise

#### atelier.html - Tokyo Workshop
- **Purpose**: Show craftsmanship and team
- **Key Content**:
  - Tokyo atelier information
  - Craftsmanship process
  - Team members (currently fictional - can be updated with real data)
  - Consultation information

#### contact.html - Contact Form
- **Purpose**: Lead generation and consultation booking
- **Key Content**:
  - Contact information (Tokyo atelier address, phone, email)
  - Contact form with services dropdown
  - Hours: By Appointment Only

---

## Real Product Information (10minlabo.com)

### Product Details
**Name**: 10min Labo Cream
**Type**: Face & Body Cream
**Sizes**: 150g, 5g
**Prices**: ¥19,800 (150g), ¥680 (5g)
**Application Time**: 10 minutes via massage
**Safety**: Safe for entire family including babies

### Key Ingredients (REAL - DO NOT CHANGE)
1. **Human Stem Cell Culture Liquid** (ヒト幹細胞培養液)
   - Activates skin's natural regenerative capacity
   - Promotes skin rejuvenation and cell activation
   - Anti-aging benefits

2. **Specially Electrolyzed Water** (特殊電解水)
   - Antimicrobial properties
   - Protects against external threats
   - Supports barrier function

3. **Innovative 3D Nanotechnology®** (革新的3Dナノテクノロジー®)
   - **PATENTED** - World's first
   - Stable ingredient absorption
   - Rapid skin penetration without greasiness
   - Enables 10-minute results

### Brand Philosophy (REAL - DO NOT CHANGE)
- Creating "truly good products" through extensive research
- Using only baby-safe materials
- Prioritizing family wellness over profit margins
- From babies to adults can use the same product
- Professional-grade results accessible to families

### Awards & Recognition
- Gold winner at "Professionals' Choice Cosmetics" (Esthetics Selection)
- Featured in health and beauty publications

---

## Design Principles

### Visual Design
1. **Japanese Aesthetic**
   - Minimalism and negative space (Ma - 間)
   - Clean typography hierarchy
   - Subtle animations and transitions
   - Gold accents (#d4af37) for luxury

2. **Color Palette**
   - Primary: #1a1a1a (near black)
   - Secondary: #f8f5f0 (warm white)
   - Accent: #d4af37 (gold)
   - Background: #0a0a0a (deep black)

3. **Typography**
   - Headings: Cormorant Garamond (serif, elegant)
   - Body: Montserrat (sans-serif, clean)
   - Line height: 1.8 for readability
   - Letter spacing: 0.05em for luxury feel

4. **Spacing**
   - Generous padding and margins
   - Section padding: 120px vertical
   - Container max-width: 1400px
   - Breathing room between elements

### User Experience
1. **Scroll Animations**
   - Intersection Observer API
   - .reveal class for fade-in effects
   - data-delay for staggered animations
   - Smooth, subtle movements

2. **Navigation**
   - Fixed navbar that appears on scroll
   - Transparent initially, solid when scrolled
   - "Contact" button styled differently
   - Mobile hamburger menu

3. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: 768px, 1024px, 1440px
   - Touch-friendly buttons (min 44px)
   - Flexible images with object-fit: cover

4. **Performance**
   - Lazy loading for images
   - Optimized video compression
   - Minimal JavaScript
   - CSS animations over JavaScript

---

## Development Workflow

### Starting the Project

```bash
# Navigate to project directory
cd /Users/sf/10min-labo

# Start local server
python3 -m http.server 8000

# Open in browser
# http://localhost:8000
```

### Making Changes

1. **Read the file first**
   ```bash
   # Always read before editing
   Read tool: /Users/sf/10min-labo/[filename]
   ```

2. **Edit with precision**
   - Use Edit tool, not Write (for existing files)
   - Preserve exact indentation
   - Match existing code style
   - Test changes in browser

3. **Test responsively**
   - Desktop: 1920px, 1440px
   - Tablet: 1024px, 768px
   - Mobile: 375px, 414px

4. **Commit changes**
   - Check git status
   - Stage relevant files
   - Write descriptive commit message
   - Include Claude Code signature

### Git Workflow

```bash
# Check status
git status

# Check diff
git diff
git diff --stat

# Stage files
git add [files]

# Commit with message
git commit -m "$(cat <<'EOF'
[Concise title]

[Detailed description of changes]

- Bullet point 1
- Bullet point 2

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

# Check commit history
git log --oneline -5
```

### Commit Message Format

```
[Title - What changed]

[Why the change was made]

[Specific changes]:
- Point 1
- Point 2
- Point 3

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

---

## Common Tasks

### Task 1: Adding a New Section to a Page

**Steps**:
1. Read the HTML file to understand structure
2. Identify where to insert (usually before footer)
3. Follow existing section pattern:
   ```html
   <section class="[section-name]">
       <div class="container">
           <div class="[content-wrapper] reveal">
               <!-- Content here -->
           </div>
       </div>
   </section>
   ```
4. Add corresponding CSS to style.css
5. Add scroll observation in script.js if needed
6. Test in browser
7. Commit changes

### Task 2: Updating Product Information

**IMPORTANT**: Always verify against 10minlabo.com first

**Steps**:
1. Fetch latest content from 10minlabo.com using WebFetch
2. Identify what changed (price, features, ingredients)
3. Update relevant HTML files:
   - collections.html for product details
   - ingredients.html for ingredient info
   - philosophy.html for brand messaging
   - index.html for USPs
4. Maintain luxury design language
5. Test all updated pages
6. Commit with detailed message about what was updated

### Task 3: Fixing Responsive Issues

**Steps**:
1. Identify breakpoint where issue occurs
2. Read style.css and find relevant media query
3. Test on actual devices or DevTools
4. Common fixes:
   - Adjust flex-direction
   - Change grid columns
   - Update font sizes
   - Modify padding/margins
5. Test across all breakpoints
6. Commit changes

### Task 4: Adding New Animations

**Steps**:
1. Read script.js to understand existing pattern
2. Add element to Intersection Observer:
   ```javascript
   const newElements = document.querySelectorAll('.new-class');
   newElements.forEach(element => {
       observer.observe(element);
   });
   ```
3. Add .reveal class to HTML elements
4. Optionally add data-delay="0.1" for stagger
5. Test scroll behavior
6. Commit changes

### Task 5: Updating Navigation

**Steps**:
1. Update ALL 6 HTML files (index, philosophy, collections, ingredients, atelier, contact)
2. Maintain consistent structure:
   ```html
   <li><a href="[page].html" class="nav-link">Text</a></li>
   ```
3. Keep "Contact" button with class="nav-link contact-btn"
4. Test navigation from all pages
5. Check mobile menu functionality
6. Commit changes

---

## Styling Guidelines

### CSS Organization (style.css)

```css
/* 1. CSS Variables */
:root {
    --primary-color: #1a1a1a;
    --accent-gold: #d4af37;
    /* etc */
}

/* 2. Reset & Base Styles */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { /* base styles */ }

/* 3. Typography */
h1, h2, h3, h4, h5, h6 { /* heading styles */ }

/* 4. Layout */
.container { /* container styles */ }
.container-fluid { /* full width container */ }

/* 5. Components (in order of appearance) */
/* Navigation */
.navbar { /* navbar styles */ }

/* Hero */
.hero { /* hero styles */ }

/* Individual page sections */
.page-header { /* page header */ }
.brand-intro { /* brand intro */ }
/* etc */

/* 6. Utilities */
.reveal { /* animation class */ }
.btn-primary { /* buttons */ }

/* 7. Media Queries (mobile-first) */
@media (min-width: 768px) { /* tablet */ }
@media (min-width: 1024px) { /* desktop */ }
@media (min-width: 1440px) { /* large desktop */ }
```

### CSS Naming Conventions

- **BEM-inspired**: `.block__element--modifier`
- **Semantic names**: `.brand-intro` not `.section-1`
- **Descriptive**: `.showcase-content` not `.sc`
- **Consistent prefixes**:
  - `.page-*` for page-level sections
  - `.section-*` for reusable sections
  - `.btn-*` for buttons
  - `.nav-*` for navigation elements

### JavaScript Patterns

```javascript
// Intersection Observer pattern
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Observe elements
const elements = document.querySelectorAll('.reveal');
elements.forEach(el => observer.observe(el));

// Navbar scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    // Logic here
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
```

---

## Key Skills Required

### 1. HTML/CSS Mastery
- Semantic HTML5 markup
- Advanced CSS (Grid, Flexbox, animations)
- Responsive design patterns
- Cross-browser compatibility
- Performance optimization

### 2. JavaScript Proficiency
- Vanilla JavaScript (no frameworks)
- Intersection Observer API
- Event handling
- DOM manipulation
- Smooth animations

### 3. Design Sense
- Japanese aesthetic principles
- Luxury brand design
- Typography and spacing
- Color theory
- User experience design

### 4. Content Strategy
- Understanding brand voice
- Translating Japanese concepts
- Maintaining authenticity
- Luxury copywriting
- Product positioning

### 5. Version Control
- Git fundamentals
- Commit message best practices
- Branch management
- Diff reading
- Conflict resolution

### 6. Web Performance
- Image optimization
- Video compression
- Lazy loading
- CSS/JS minification
- Lighthouse optimization

---

## Brand Voice & Copywriting

### Tone
- **Sophisticated** but not pretentious
- **Scientific** but accessible
- **Luxury** but family-focused
- **Japanese** but international
- **Professional** but warm

### Key Phrases to Use
✅ "Family wellness over profit margins"
✅ "Baby-safe materials"
✅ "Professional results in 10 minutes"
✅ "Patented Innovative 3D Nanotechnology®"
✅ "Award-winning formulation"
✅ "Creating truly good products"
✅ "Extensive research and development"
✅ "Safe for the entire family"

### Phrases to Avoid
❌ "Ancient Japanese secrets"
❌ "Exclusive luxury for the elite"
❌ "Mysterious ingredients"
❌ "Miracle cream"
❌ Anything that emphasizes exclusivity over accessibility
❌ Fictional luxury narratives

### Writing Style
1. **Lead with benefits**: What does it do for the family?
2. **Back with science**: How does the technology work?
3. **Emphasize safety**: Always mention baby-safe when relevant
4. **Be specific**: Use exact ingredient names, patent info, awards
5. **Stay humble**: Let the technology speak for itself

---

## User Requirements & Preferences

### Established Preferences
1. **Normal cursor** - No custom cursor JavaScript
2. **Minimal hero overlay** - Video has own text, only scroll indicator needed
3. **Multi-page structure** - Not single-page scroll
4. **Shortened navigation** - "Contact" not "Private Consultation"
5. **Real content** - Use actual product info from 10minlabo.com
6. **Luxury aesthetic** - Appeal to ultra-high net worth individuals
7. **No AR/VR** - Keep it simple and elegant

### Design Decisions Made
- Hero video: 6.4 MB, autoplay, muted, loop
- Video overlay: 0.3 opacity (reduced from 0.7)
- Color scheme: Black (#0a0a0a) + warm white (#f8f5f0) + gold (#d4af37)
- Typography: Cormorant Garamond + Montserrat
- Scroll animations: Intersection Observer with .reveal class
- Navigation: Fixed, appears on scroll, contact button styled differently

---

## Content Sources

### Primary Source
**Website**: https://www.10minlabo.com
**Fallback**: http://10minlabo.com

### What to Fetch
- Product names, sizes, prices
- Ingredient information
- Brand philosophy and mission
- Technology details (patents, awards)
- Company information
- Contact details

### What NOT to Change
Once fetched from the real website:
- Ingredient names and descriptions
- Patent information (Innovative 3D Nanotechnology®)
- Pricing (¥19,800, ¥680)
- Safety claims (baby-safe)
- Award information (Gold winner)
- Core brand philosophy

### What CAN Be Adapted
- Presentation style (maintain luxury aesthetic)
- Layout and design
- Typography and spacing
- Animation effects
- Supporting copy (as long as it aligns with brand values)

---

## Testing Checklist

### Before Committing

- [ ] **Visual Check**
  - All pages load without errors
  - Images display correctly
  - Video plays automatically (muted)
  - Fonts load properly
  - Colors match design system

- [ ] **Responsive Check**
  - Mobile (375px, 414px)
  - Tablet (768px, 1024px)
  - Desktop (1440px, 1920px)
  - No horizontal scroll
  - Touch targets min 44px

- [ ] **Interactive Check**
  - All navigation links work
  - Mobile menu toggles
  - Scroll animations trigger
  - Forms validate properly
  - Buttons have hover states

- [ ] **Content Check**
  - No Lorem Ipsum text
  - Prices are correct (¥19,800, ¥680)
  - Ingredient names match real product
  - Brand philosophy is accurate
  - No spelling/grammar errors

- [ ] **Performance Check**
  - Page loads in < 3 seconds
  - No console errors
  - Smooth 60fps animations
  - Video compression acceptable
  - Images optimized

- [ ] **Accessibility Check**
  - Semantic HTML used
  - Alt text on images
  - Proper heading hierarchy
  - Sufficient color contrast
  - Keyboard navigation works

### Browser Testing
- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

---

## Troubleshooting

### Issue: Broken Navigation Button
**Symptom**: "Contact" button has broken border
**Cause**: CSS ::after pseudo-element conflict
**Fix**: Add to style.css:
```css
.contact-btn::after {
    display: none;
}
```

### Issue: Hero Video Not Playing
**Symptom**: Video doesn't autoplay
**Cause**: Browser autoplay policy
**Fix**: Ensure video has `muted` attribute:
```html
<video autoplay muted loop playsinline>
```

### Issue: Scroll Animations Not Triggering
**Symptom**: Elements don't fade in on scroll
**Cause**: Elements not observed or .reveal class missing
**Fix**:
1. Add .reveal class to HTML elements
2. Ensure script.js observes the elements
3. Check threshold value (0.1 is good default)

### Issue: Mobile Menu Not Toggling
**Symptom**: Hamburger doesn't open menu
**Cause**: JavaScript not attached or CSS missing
**Fix**:
1. Check .menu-toggle has click listener
2. Verify .nav-menu.active CSS exists
3. Test on actual mobile device

### Issue: Fonts Not Loading
**Symptom**: System fonts display instead of Google Fonts
**Cause**: Font link missing or incorrect
**Fix**: Verify in <head>:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@200;300;400;500&display=swap" rel="stylesheet">
```

### Issue: Images Not Displaying
**Symptom**: Broken image icons
**Cause**: Unsplash URL issues or network
**Fix**:
1. Check image URL is valid
2. Verify internet connection
3. Consider downloading and hosting locally

---

## Future Enhancement Ideas

### Short-term (Easy Wins)
- [ ] Add loading animation for hero video
- [ ] Implement image lazy loading
- [ ] Add smooth scroll behavior
- [ ] Create 404 error page
- [ ] Add favicon and meta tags
- [ ] Implement form validation
- [ ] Add success message after form submission

### Medium-term (Requires More Work)
- [ ] Multi-language support (Japanese/English toggle)
- [ ] Blog section for skincare tips
- [ ] Customer testimonials section
- [ ] Before/after gallery
- [ ] Product usage video tutorials
- [ ] FAQ section
- [ ] Newsletter signup integration

### Long-term (Major Features)
- [ ] E-commerce integration for direct purchase
- [ ] User account system
- [ ] Consultation booking calendar
- [ ] Live chat support
- [ ] Product recommendation quiz
- [ ] Skin analysis tool
- [ ] CMS for easy content updates

### Technical Improvements
- [ ] Convert to static site generator (11ty, Hugo)
- [ ] Implement build process (PostCSS, minification)
- [ ] Add service worker for offline support
- [ ] Implement critical CSS
- [ ] Add WebP image format with fallbacks
- [ ] Implement advanced analytics
- [ ] A/B testing framework

---

## Resources & References

### Design Inspiration
- Japanese minimalist websites
- Luxury cosmetics brands (La Mer, SK-II, Clé de Peau)
- High-end fashion websites
- Japanese cultural websites

### Technical Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Google Fonts](https://fonts.google.com/)

### Tools
- Browser DevTools (Chrome, Firefox)
- Lighthouse for performance
- WAVE for accessibility
- Responsive design mode
- Git for version control

### Inspiration
- [10minlabo.com](https://www.10minlabo.com/) - The real website
- Japanese aesthetic principles (Ma, Wabi-sabi, Kanso)
- Luxury brand guidelines
- Japanese typography

---

## Agent Prompt Template

When working on this project, use this prompt structure:

```
I'm working on the 10min labo luxury cosmetics website project.

CONTEXT:
- This is a multi-page static website for a Japanese cosmetics brand
- The brand prioritizes family wellness over profit margins
- The product is 10min Labo Cream with patented 3D Nanotechnology®
- All content must reflect real product information from 10minlabo.com
- Design aesthetic: Japanese minimalism meets ultra-luxury

TASK:
[Describe specific task here]

REQUIREMENTS:
- Maintain luxury design aesthetic
- Use real product information (¥19,800/¥680 pricing, baby-safe materials)
- Follow existing code patterns in style.css and script.js
- Test responsively across all breakpoints
- Commit changes with descriptive message + Claude Code signature

FILES INVOLVED:
[List specific files: index.html, style.css, etc.]

EXPECTED OUTCOME:
[Describe what success looks like]

Please:
1. Read relevant files first
2. Make precise edits maintaining existing style
3. Test changes
4. Commit with proper message format
```

---

## Quick Reference

### Key Files
- **index.html** - Home page, hero video
- **collections.html** - Product showcase
- **ingredients.html** - Technology & ingredients
- **philosophy.html** - Brand story
- **style.css** - All styling
- **script.js** - Animations

### Key Classes
- `.reveal` - Scroll animation trigger
- `.navbar` - Fixed navigation
- `.hero` - Hero video section
- `.container` - Max-width wrapper (1400px)
- `.btn-primary` - Primary button style

### Key Variables (CSS)
- `--primary-color: #1a1a1a`
- `--accent-gold: #d4af37`
- `--bg-dark: #0a0a0a`
- `--text-light: #f8f5f0`

### Key Breakpoints
- `768px` - Tablet
- `1024px` - Desktop
- `1440px` - Large desktop

### Key Commands
```bash
# Start server
python3 -m http.server 8000

# Git status
git status

# Git commit
git add . && git commit -m "message"

# View recent commits
git log --oneline -5
```

---

## Contact & Support

### Project Location
`/Users/sf/10min-labo/`

### Git Repository
Local repository initialized, no remote configured

### Development Server
http://localhost:8000

### Source Website
https://www.10minlabo.com

---

## Version History

### v1.0 - Initial Multi-Page Website
- Created 6-page structure
- Implemented hero video
- Added luxury design aesthetic
- Fixed navigation button styling

### v1.1 - Real Content Integration
- Updated with real product information from 10minlabo.com
- Replaced fictional collections with 10min Labo Cream
- Updated ingredients with real biotechnology
- Revised philosophy to family wellness focus
- Updated home page with real USPs

---

## Final Notes

### Important Reminders

1. **ALWAYS verify product information against 10minlabo.com** - Don't make up features or benefits

2. **Maintain the balance** - Luxury design + family accessibility

3. **Read before editing** - Use Read tool first, then Edit (not Write)

4. **Test responsively** - Mobile users are important too

5. **Commit descriptively** - Future you will thank present you

6. **Preserve brand voice** - Family wellness over profit margins

7. **No custom cursor** - User explicitly requested normal cursor

8. **Minimal hero overlay** - Video has its own text

9. **Real content only** - No fictional luxury narratives

10. **Think family-first** - If it's not safe for babies, it doesn't belong

### Success Metrics

A successful update to this project should:
- ✅ Maintain luxury aesthetic
- ✅ Reflect accurate product information
- ✅ Work flawlessly on all devices
- ✅ Load quickly (< 3 seconds)
- ✅ Have smooth animations
- ✅ Be easy to navigate
- ✅ Communicate brand values clearly
- ✅ Appeal to target audience (UHNW individuals)
- ✅ Build trust through authenticity

---

**Last Updated**: 2024
**Version**: 1.1
**Maintained by**: Claude Code

---

_"Creating truly good products through extensive research, prioritizing family wellness over profit margins."_
— 10min labo Philosophy
