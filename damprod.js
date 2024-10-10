const tocWrapper = document.querySelector('.toc-wrapper');
const mainContent = document.querySelector('.main-content');

// Function to handle the scroll behavior for TOC
function handleScroll() {
    const scrollTop = window.scrollY;
    const tocHeight = tocWrapper.offsetHeight;
    const mainContentHeight = mainContent.offsetHeight;

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

    // Disable the TOC behavior if screen is less than 950px
    if (screenWidth < 950) {
        // Remove scroll listener to disable TOC functionality
        window.removeEventListener('scroll', handleScroll);
        tocWrapper.style.display = 'none';  // Hide TOC
    } else {
        // Re-enable scroll listener when screen is 950px or above
        window.addEventListener('scroll', handleScroll);
        tocWrapper.style.display = 'block';  // Show TOC
    }
}

// Initial check on page load
checkScreenWidth();

// Re-check screen width on window resize
window.addEventListener('resize', checkScreenWidth);

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Burger menu functionality
burger.addEventListener('click', () => {
    // Toggle the nav menu
    navLinks.classList.toggle('nav-active');

    // Burger animation
    burger.classList.toggle('toggle');
});