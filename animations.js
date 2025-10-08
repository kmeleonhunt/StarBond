// Cosmic Connections - Animation and Visual Effects
// Handles all animations, transitions, and interactive visual elements

// Animation state management
let animationState = {
    isAnimating: false,
    currentPage: 'index',
    particleSystems: []
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupScrollAnimations();
    setupHoverEffects();
});

// Main animation initialization
function initializeAnimations() {
    // Initialize particle systems
    if (typeof p5 !== 'undefined') {
        initCosmicBackground();
    }
    
    // Initialize page-specific animations
    const currentPage = getCurrentPage();
    switch (currentPage) {
        case 'index':
            initHomepageAnimations();
            break;
        case 'register':
            initRegistrationAnimations();
            break;
        case 'search':
            initSearchAnimations();
            break;
        case 'members':
            initMembersAnimations();
            break;
    }
}

// Get current page identifier
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('register')) return 'register';
    if (path.includes('search')) return 'search';
    if (path.includes('members')) return 'members';
    return 'index';
}

// Homepage animations
function initHomepageAnimations() {
    // Hero text animations
    if (typeof anime !== 'undefined') {
        anime.timeline({
            easing: 'easeOutExpo',
            duration: 1000
        })
        .add({
            targets: '.hero-title',
            opacity: [0, 1],
            translateY: [50, 0],
            delay: 300
        })
        .add({
            targets: '.hero-subtitle',
            opacity: [0, 1],
            translateY: [30, 0],
            delay: 200
        }, '-=700')
        .add({
            targets: '.hero-cta',
            opacity: [0, 1],
            scale: [0.8, 1],
            delay: 300
        }, '-=500');
    }
    
    // Initialize featured members carousel
    initFeaturedCarousel();
    
    // Animate zodiac wheel
    initZodiacWheel();
}

// Registration page animations
function initRegistrationAnimations() {
    // Birthdate calculation animations
    setupBirthdateAnimation();
    
    // Form step animations
    setupFormSteps();
    
    // Cosmic calculation reveal
    setupCosmicReveal();
}

// Search page animations
function initSearchAnimations() {
    // Filter toggle animations
    setupFilterAnimations();
    
    // Results grid animations
    setupResultsAnimations();
    
    // Compatibility meter animations
    setupCompatibilityMeters();
}

// Members page animations
function initMembersAnimations() {
    // Member card hover effects
    setupMemberCardEffects();
    
    // Filter panel animations
    setupFilterPanel();
    
    // Infinite scroll loading
    setupInfiniteScroll();
}

// Cosmic background with p5.js
function initCosmicBackground() {
    const canvas = document.getElementById('cosmic-canvas');
    if (!canvas) return;
    
    new p5(function(p) {
        let stars = [];
        let particles = [];
        
        p.setup = function() {
            p.createCanvas(p.windowWidth, p.windowHeight);
            
            // Create stars
            for (let i = 0; i < 200; i++) {
                stars.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    size: p.random(1, 3),
                    brightness: p.random(0.3, 1),
                    twinkleSpeed: p.random(0.01, 0.03)
                });
            }
            
            // Create floating particles
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-0.5, 0.5),
                    vy: p.random(-0.5, 0.5),
                    size: p.random(2, 6),
                    alpha: p.random(0.1, 0.3),
                    color: p.random(['#D4AF37', '#C0C0C0', '#E6E6FA', '#40E0D0'])
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // Draw stars
            stars.forEach(star => {
                star.brightness += p.sin(p.frameCount * star.twinkleSpeed) * 0.1;
                star.brightness = p.constrain(star.brightness, 0.2, 1);
                
                p.fill(255, 255, 255, star.brightness * 255);
                p.noStroke();
                p.ellipse(star.x, star.y, star.size);
            });
            
            // Draw particles
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around screen
                if (particle.x < 0) particle.x = p.width;
                if (particle.x > p.width) particle.x = 0;
                if (particle.y < 0) particle.y = p.height;
                if (particle.y > p.height) particle.y = 0;
                
                p.fill(particle.color + Math.floor(particle.alpha * 255).toString(16));
                p.noStroke();
                p.ellipse(particle.x, particle.y, particle.size);
            });
        };
        
        p.windowResized = function() {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
    }, canvas);
}

// Featured members carousel
function initFeaturedCarousel() {
    const carousel = document.querySelector('.featured-carousel');
    if (!carousel || typeof Splide === 'undefined') return;
    
    new Splide(carousel, {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '2rem',
        autoplay: true,
        interval: 4000,
        pauseOnHover: true,
        breakpoints: {
            768: { perPage: 1 },
            1024: { perPage: 2 }
        }
    }).mount();
}

// Zodiac wheel animation
function initZodiacWheel() {
    const wheel = document.querySelector('.zodiac-wheel');
    if (!wheel) return;
    
    let rotation = 0;
    
    function animateWheel() {
        rotation += 0.1;
        wheel.style.transform = `rotate(${rotation}deg)`;
        requestAnimationFrame(animateWheel);
    }
    
    animateWheel();
    
    // Interactive zodiac signs
    const zodiacSigns = wheel.querySelectorAll('.zodiac-sign');
    zodiacSigns.forEach(sign => {
        sign.addEventListener('mouseenter', function() {
            if (typeof anime !== 'undefined') {
                anime({
                    targets: this,
                    scale: 1.2,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            }
        });
        
        sign.addEventListener('mouseleave', function() {
            if (typeof anime !== 'undefined') {
                anime({
                    targets: this,
                    scale: 1,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            }
        });
    });
}

// Birthdate calculation animation
function setupBirthdateAnimation() {
    const birthdateInput = document.getElementById('birthdate');
    if (!birthdateInput) return;
    
    birthdateInput.addEventListener('change', function() {
        if (this.value) {
            animateBirthdateCalculation(new Date(this.value));
        }
    });
}

function animateBirthdateCalculation(birthDate) {
    const calculationSteps = [
        { id: 'zodiac-calc', delay: 0 },
        { id: 'chinese-calc', delay: 500 },
        { id: 'lifepath-calc', delay: 1000 }
    ];
    
    calculationSteps.forEach((step, index) => {
        setTimeout(() => {
            const element = document.getElementById(step.id);
            if (element && typeof anime !== 'undefined') {
                anime({
                    targets: element,
                    opacity: [0, 1],
                    scale: [0.8, 1],
                    duration: 600,
                    easing: 'easeOutBack'
                });
            }
        }, step.delay);
    });
}

// Form step animations
function setupFormSteps() {
    const steps = document.querySelectorAll('.form-step');
    let currentStep = 0;
    
    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            if (index === stepIndex) {
                step.classList.add('active');
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: step,
                        opacity: [0, 1],
                        translateX: [50, 0],
                        duration: 500,
                        easing: 'easeOutQuad'
                    });
                }
            } else {
                step.classList.remove('active');
            }
        });
    }
    
    // Next/Previous button handlers
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('next-step')) {
            e.preventDefault();
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        }
        
        if (e.target.classList.contains('prev-step')) {
            e.preventDefault();
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        }
    });
    
    // Initialize first step
    if (steps.length > 0) {
        showStep(0);
    }
}

// Cosmic reveal animation
function setupCosmicReveal() {
    const revealElements = document.querySelectorAll('.cosmic-reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        scale: [0.9, 1],
                        duration: 800,
                        easing: 'easeOutQuad',
                        delay: anime.stagger(100)
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    });
    
    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// Filter toggle animations
function setupFilterAnimations() {
    const filterToggles = document.querySelectorAll('.filter-toggle');
    
    filterToggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            const filterCard = this.closest('.filter-card');
            
            if (typeof anime !== 'undefined') {
                anime({
                    targets: filterCard,
                    scale: [1, 1.05, 1],
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            }
            
            // Update results with animation
            updateSearchResults();
        });
    });
}

// Results grid animations
function setupResultsAnimations() {
    const resultCards = document.querySelectorAll('.result-card');
    
    if (typeof anime !== 'undefined') {
        anime({
            targets: resultCards,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            easing: 'easeOutQuad',
            delay: anime.stagger(100)
        });
    }
}

// Compatibility meter animations
function setupCompatibilityMeters() {
    const meters = document.querySelectorAll('.compatibility-meter');
    
    meters.forEach(meter => {
        const score = meter.dataset.score;
        const fill = meter.querySelector('.meter-fill');
        
        if (fill && typeof anime !== 'undefined') {
            anime({
                targets: fill,
                width: `${score}%`,
                duration: 1500,
                easing: 'easeOutQuad',
                delay: 500
            });
        }
    });
}

// Member card hover effects
function setupMemberCardEffects() {
    const memberCards = document.querySelectorAll('.member-card');
    
    memberCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (typeof anime !== 'undefined') {
                anime({
                    targets: this,
                    translateY: -10,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (typeof anime !== 'undefined') {
                anime({
                    targets: this,
                    translateY: 0,
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            }
        });
    });
}

// Filter panel animations
function setupFilterPanel() {
    const filterToggle = document.getElementById('filter-toggle');
    const filterPanel = document.getElementById('filter-panel');
    
    if (filterToggle && filterPanel) {
        filterToggle.addEventListener('click', function() {
            const isOpen = filterPanel.classList.contains('open');
            
            if (isOpen) {
                filterPanel.classList.remove('open');
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: filterPanel,
                        translateX: ['0%', '-100%'],
                        duration: 300,
                        easing: 'easeOutQuad'
                    });
                }
            } else {
                filterPanel.classList.add('open');
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: filterPanel,
                        translateX: ['-100%', '0%'],
                        duration: 300,
                        easing: 'easeOutQuad'
                    });
                }
            }
        });
    }
}

// Scroll animations
function setupScrollAnimations() {
    const scrollElements = document.querySelectorAll('.scroll-animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                if (typeof anime !== 'undefined') {
                    const animationType = entry.target.dataset.animation || 'fadeInUp';
                    
                    switch (animationType) {
                        case 'fadeInUp':
                            anime({
                                targets: entry.target,
                                opacity: [0, 1],
                                translateY: [30, 0],
                                duration: 600,
                                easing: 'easeOutQuad'
                            });
                            break;
                        case 'fadeInLeft':
                            anime({
                                targets: entry.target,
                                opacity: [0, 1],
                                translateX: [-30, 0],
                                duration: 600,
                                easing: 'easeOutQuad'
                            });
                            break;
                        case 'scaleIn':
                            anime({
                                targets: entry.target,
                                opacity: [0, 1],
                                scale: [0.8, 1],
                                duration: 600,
                                easing: 'easeOutBack'
                            });
                            break;
                    }
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    scrollElements.forEach(element => {
        observer.observe(element);
    });
}

// Hover effects
function setupHoverEffects() {
    // Button hover effects
    const buttons = document.querySelectorAll('.cosmic-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (typeof anime !== 'undefined') {
                anime({
                    targets: this,
                    scale: 1.05,
                    duration: 200,
                    easing: 'easeOutQuad'
                });
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (typeof anime !== 'undefined') {
                anime({
                    targets: this,
                    scale: 1,
                    duration: 200,
                    easing: 'easeOutQuad'
                });
            }
        });
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.cosmic-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (typeof anime !== 'undefined') {
                anime({
                    targets: this,
                    translateY: -5,
                    boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (typeof anime !== 'undefined') {
                anime({
                    targets: this,
                    translateY: 0,
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            }
        });
    });
}

// Utility functions
function updateSearchResults() {
    const resultsContainer = document.querySelector('.search-results');
    if (!resultsContainer) return;
    
    // Fade out current results
    if (typeof anime !== 'undefined') {
        anime({
            targets: resultsContainer.children,
            opacity: 0,
            duration: 200,
            complete: function() {
                // Update results here
                // Then fade in new results
                anime({
                    targets: resultsContainer.children,
                    opacity: 1,
                    duration: 400
                });
            }
        });
    }
}

function setupInfiniteScroll() {
    let isLoading = false;
    
    window.addEventListener('scroll', function() {
        if (isLoading) return;
        
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        
        if (scrollTop + windowHeight >= docHeight - 100) {
            isLoading = true;
            
            // Load more content here
            setTimeout(() => {
                isLoading = false;
            }, 1000);
        }
    });
}

// Loading animations
function showLoadingAnimation(element) {
    if (typeof anime !== 'undefined') {
        anime({
            targets: element,
            rotate: '1turn',
            duration: 1000,
            easing: 'easeInOutQuad',
            loop: true
        });
    }
}

function hideLoadingAnimation(element) {
    if (typeof anime !== 'undefined') {
        anime.remove(element);
    }
}

// Success/error animations
function showSuccessAnimation(element) {
    if (typeof anime !== 'undefined') {
        anime({
            targets: element,
            scale: [1, 1.1, 1],
            backgroundColor: ['#4CAF50', '#4CAF50'],
            duration: 600,
            easing: 'easeOutQuad'
        });
    }
}

function showErrorAnimation(element) {
    if (typeof anime !== 'undefined') {
        anime({
            targets: element,
            translateX: [-10, 10, -10, 10, 0],
            duration: 400,
            easing: 'easeOutQuad'
        });
    }
}

// Export animation functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeAnimations,
        animateBirthdateCalculation,
        setupResultsAnimations,
        showLoadingAnimation,
        hideLoadingAnimation,
        showSuccessAnimation,
        showErrorAnimation
    };
}