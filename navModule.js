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
  d  })

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
});