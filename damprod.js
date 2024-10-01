const tocWrapper = document.querySelector('.toc-wrapper');
const mainContent = document.querySelector('.main-content');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const tocHeight = tocWrapper.offsetHeight;
    const mainContentHeight = mainContent.offsetHeight;

    if (scrollTop > mainContent.offsetTop) {
        tocWrapper.classList.add('fixed');
    } else {
        tocWrapper.classList.remove('fixed');
    }
});
