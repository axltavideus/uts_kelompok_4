const tocWrapper = document.querySelector('.toc-wrapper');
const mainContent = document.querySelector('.main-content');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links ul li');

// Function to handle the scroll behavior for TOC
function handleScroll() {
    const scrollTop = window.scrollY;

    // Add 'fixed' class if scrolled past the main content's top position
    if (scrollTop > mainContent.offsetTop) {
        tocWrapper.classList.add('fixed');
        mainContent.classList.add('fixed');
    } else {
        tocWrapper.classList.remove('fixed');
        mainContent.classList.remove('fixed');
    }
}

// Function to disable/enable TOC functionality based on screen width
function checkScreenWidth() {
    const screenWidth = window.innerWidth;

    // Disable TOC behavior if screen is less than 950px
    if (screenWidth < 950) {
        // Remove scroll listener and hide TOC
        window.removeEventListener('scroll', handleScroll);
        tocWrapper.style.display = 'none';  // Hide TOC
    } else {
        // Enable scroll listener and show TOC for screen width >= 950px
        window.addEventListener('scroll', handleScroll);
        tocWrapper.style.display = 'block';  // Show TOC

        // Call handleScroll to ensure proper TOC state on resize
        handleScroll();
    }
}

// Initial check on page load
checkScreenWidth();

// Re-check screen width on window resize
window.addEventListener('resize', checkScreenWidth);

// Burger menu functionality
burger.addEventListener('click', () => {
    // Toggle the nav menu
    nav.classList.toggle('nav-active');

    // Burger animation
    burger.classList.toggle('toggle');
});
