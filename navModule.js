document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector("#navbar");
    
    function viewNav() {
        navbar.classList.remove("not-sticky-top");
    }

    function hideNav(timeout = 1000) {
        let scrollAmount = (document.documentElement.scrollTop);
        let navbarOffsetPercent = (scrollAmount / navbar.offsetHeight) * 100;

        let navbarOffset = Math.min(navbarOffsetPercent, 100) * -1

        setTimeout(() => {
            document.documentElement.style.setProperty('--scroll-amt', navbarOffset + '%');
            navbar.classList.add("not-sticky-top");   
        }, timeout);
    }

    let hovering = false;

    navbar.addEventListener("mouseover", () => {
        hovering = true;
        viewNav();
    })

    navbar.addEventListener("mouseleave", () => {
        hovering = false;
        hideNav();
    })
    
    window.addEventListener("scroll", function() {
        viewNav();
    });

    window.addEventListener("scrollend", function() {
        if (!hovering) {
            hideNav();
        }
        
    });

    const popInElements = document.querySelectorAll('.pop-in');
    
            const options = {
                root: null, // use the viewport
                rootMargin: '0px',
                threshold: 0.1 // Trigger when 10% of the element is visible
            };
    
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'popIn 0.5s ease forwards'; // Play animation
                        observer.unobserve(entry.target); // Stop observing the element
                    }
                });
            }, options);
    
            popInElements.forEach(el => {
                observer.observe(el); // Start observing each element
            });
});