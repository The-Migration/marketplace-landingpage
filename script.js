// CourseApply Australia - Main Logic
document.addEventListener('DOMContentLoaded', () => {

    // 1. STICKY NAVIGATION EFFECT
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 1b. MOBILE MENU TOGGLE
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });

        // Close menu when link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('open');
            });
        });
    }

    // 2. SMOOTH SCROLL FOR NAVIGATION
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. FORM VALIDATION & SUBMISSION
    const studentForm = document.getElementById('student-form');

    if (studentForm) {
        studentForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Collect Form Data
            const formData = new FormData(studentForm);
            const data = {
                fullName: formData.get('fullName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                visaType: formData.get('visaType'),
                location: formData.get('location'),
                budget: formData.get('budget'),
                timestamp: new Date().toISOString(),
                source: "landing-page"
            };

            // Basic Validation
            if (!validateEmail(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (!validatePhone(data.phone)) {
                alert('Please enter a valid Australian phone number (e.g. +61 4XX XXX XXX).');
                return;
            }

            // Loading State
            const submitBtn = studentForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = "Submitting...";
            submitBtn.disabled = true;

            // Analytics (Placeholder)
            console.log('Event: form_submit_attempt', data);
            /* Google Analytics track: 
               gtag('event', 'form_submit_attempt', { 'event_category': 'Engagement' }); 
            */

            // Simulate API Delay
            setTimeout(() => {
                // Success Handling
                const wrapper = document.querySelector('.form-wrapper');
                wrapper.innerHTML = `
                    <div class="success-message" style="text-align: center; padding: 40px 0;">
                        <div style="font-size: 64px; margin-bottom: 24px;">✅</div>
                        <h2 style="margin-bottom: 16px;">Submission Received!</h2>
                        <p style="color: var(--gray-text); margin-bottom: 24px;">
                            Thank you, <strong>${data.fullName}</strong>. We are matching you to VET colleges. 
                            You will receive your personalized list within 24 hours via email to <strong>${data.email}</strong>.
                        </p>
                        <p style="font-size: 14px; color: var(--gray-text);">Check your inbox and spam folder.</p>
                    </div>
                `;

                console.log('Event: form_submit_success', data);
                /* Google Analytics track: 
                   gtag('event', 'form_submit_success', { 'event_category': 'Conversion' }); 
                */
            }, 2000);
        });
    }

    // 4. ANALYTICS EVENT TRACKING
    function trackEvent(eventName, category, label) {
        if (typeof gtag === 'function') {
            gtag('event', eventName, {
                'event_category': category,
                'event_label': label
            });
            console.log(`Analytics: Tracked ${eventName} (${category}, ${label})`);
        }
    }

    // Track button clicks
    document.querySelector('a[href="#application-form"]').addEventListener('click', () => {
        trackEvent('get_started_click', 'Engagement', 'Hero / Nav Primary CTA');
    });

    document.querySelectorAll('a[href="#sample-college"]').forEach(el => {
        el.addEventListener('click', () => {
            trackEvent('view_colleges_click', 'Engagement', 'Hero Secondary CTA');
        });
    });

    // Track when user focuses on the GHL iframe (approximate form_start)
    const ghlIframe = document.getElementById('ghl-form-iframe');
    if (ghlIframe) {
        ghlIframe.addEventListener('mouseenter', () => {
            trackEvent('form_interaction', 'Engagement', 'GHL Form Hover');
        });
    }

});
