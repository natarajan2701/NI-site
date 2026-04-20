// Page Loader with enhanced animations
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        // Add a slight delay for better UX
        setTimeout(() => {
            loader.classList.add('loaded');
            // Enable body scroll after loader disappears
            document.body.style.overflow = 'auto';
        }, 1500);
    }
});

// Prevent scrolling during page load
document.body.style.overflow = 'hidden';

// Smooth scrolling for navigation links with enhanced behavior
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Add offset for sticky header
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Service navigation with animated loading viewer
const serviceData = {
    piston: {
        title: 'Piston For Air Spring',
        tag: 'Air Spring Precision',
        description: 'High-quality pistons crafted for air spring systems used in commercial vehicles and buses. Each component is engineered for strength, accuracy and longevity.',
        features: [
            'Precision machining for low-tolerance assemblies',
            'Durable finishing for long cycle life',
            'Optimized for high-load automotive systems'
        ],
        benefits: [
            'Improved system reliability',
            'Faster production and delivery',
            'Certified quality and traceability'
        ]
    },
    railway: {
        title: 'Railway Air Spring System',
        tag: 'Railway Suspension Experts',
        description: 'Advanced metal parts for railway air spring systems, designed to support heavy loads and ensure smooth travel across rail networks.',
        features: [
            'Robust components for rail applications',
            'Superior vibration damping design',
            'Precision joining and sealing techniques'
        ],
        benefits: [
            'Enhanced ride comfort',
            'Reduced maintenance overhead',
            'Compliant with railway safety standards'
        ]
    },
    pressure: {
        title: 'Pressure Parts & Steam Plant Equipment',
        tag: 'Power Plant Manufacturing',
        description: 'Comprehensive pressure part manufacturing and steam power plant equipment fabrication, including air lock vessels, spray assemblies and hanging systems.',
        features: [
            'Custom pressure vessel assemblies',
            'High-strength steam system components',
            'Expert fabrication for critical plant equipment'
        ],
        benefits: [
            'Reliable performance under pressure',
            'Engineered for thermal stability',
            'Fit-for-purpose solutions for power plants'
        ]
    },
    fabrication: {
        title: 'Structural Fabrication',
        tag: 'Heavy Fabrication Services',
        description: 'Structural fabrication for galleries, frames, trusses, build-up beams, conveyors, handrails and elevated platforms with precision engineering.',
        features: [
            'Large-scale steel assembly work',
            'Certified welding and finishing',
            'Flexible design for plant infrastructure'
        ],
        benefits: [
            'Durable structural integrity',
            'Faster installation timelines',
            'Built to rigorous industry standards'
        ]
    },
    'spm-panel': {
        title: 'SPM Panel Bending Machine',
        tag: 'Precision Panel Bending',
        description: 'We build customized panel bending machine for bending different width welded panels which can be bended upto 120deg.',
        features: [
            'High-precision CNC bending capabilities',
            'Automated panel forming processes',
            'Custom tooling for specific bending requirements'
        ],
        benefits: [
            'Consistent bending accuracy',
            'Increased production efficiency',
            'Reduced material waste and rework'
        ]
    }
};

const serviceDetails = document.getElementById('service-details');
const serviceLoader = document.getElementById('serviceLoader');
const serviceTitle = document.getElementById('serviceTitle');
const serviceTag = document.getElementById('serviceTag');
const serviceDescription = document.getElementById('serviceDescription');
const serviceFeatures = document.getElementById('serviceFeatures');
const serviceBenefits = document.getElementById('serviceBenefits');

function renderServiceDetails(serviceKey) {
    const service = serviceData[serviceKey];
    if (!service || !serviceDetails) return;

    serviceDetails.classList.remove('hidden');
    serviceDetails.classList.remove('active');
    serviceLoader.classList.add('visible');

    setTimeout(() => {
        serviceTag.textContent = service.tag;
        serviceTitle.textContent = service.title;
        serviceDescription.textContent = service.description;

        serviceFeatures.innerHTML = service.features.map(item => `<li>${item}</li>`).join('');
        serviceBenefits.innerHTML = service.benefits.map(item => `<li>${item}</li>`).join('');

        serviceLoader.classList.remove('visible');
        serviceDetails.classList.add('active');

        const sectionTop = serviceDetails.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }, 900);
}

document.querySelectorAll('.service-menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const serviceKey = this.dataset.service;
        renderServiceDetails(serviceKey);
    });
});

// Service card links from services grid
document.querySelectorAll('.service-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const serviceKey = this.dataset.service;
        renderServiceDetails(serviceKey);
    });
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
        card.style.boxShadow = '0 20px 60px rgba(32, 88, 255, 0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 10px 40px rgba(16, 64, 145, 0.08)';
    });
});

// Enhanced customer card animations
document.querySelectorAll('.customer-card').forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Video section interaction enhancements
const videoWrapper = document.querySelector('.video-wrapper');
if (videoWrapper) {
    videoWrapper.addEventListener('mouseenter', () => {
        videoWrapper.style.transform = 'scale(1.02)';
    });

    videoWrapper.addEventListener('mouseleave', () => {
        videoWrapper.style.transform = 'scale(1)';
    });
}

// Advanced scroll-triggered animations
function createScrollObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animations
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.service-card, .about-card, .customer-card, .contact-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(card);
    });
}

// Initialize advanced animations
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createScrollObserver);
} else {
    createScrollObserver();
}

// Enhanced parallax effects
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    // Parallax for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `0 ${rate}px`;
    }

    // Floating animation for customer logos
    document.querySelectorAll('.customer-logo').forEach((logo, index) => {
        const floatRate = scrolled * (0.1 + index * 0.05);
        logo.style.transform = `translateY(${Math.sin(floatRate * 0.01) * 5}px)`;
    });
});

// Dynamic header shadow based on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        header.style.boxShadow = '0 20px 60px rgba(16, 64, 145, 0.15)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.boxShadow = '0 18px 50px rgba(16, 64, 145, 0.08)';
        header.style.backdropFilter = 'blur(16px)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced scroll handler
window.addEventListener('scroll', debounce(() => {
    // Any heavy scroll operations can go here
}, 16));

// Scroll to top button behavior
const scrollTopBtn = document.getElementById('scrollTopBtn');

function updateScrollButton() {
    if (!scrollTopBtn) return;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
}

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

window.addEventListener('scroll', debounce(updateScrollButton, 16));
window.addEventListener('DOMContentLoaded', updateScrollButton);

// Optional: Add Google Analytics (replace 'GA_TRACKING_ID' with actual ID)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_TRACKING_ID');