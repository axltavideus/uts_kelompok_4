
const buttons = document.querySelectorAll('button:not(.navbar button)');


buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.2)';
        button.style.transition = 'all 0.3s ease'; 
        button.style.backgroundColor = 'var(--satu)'; 
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = 'none';
        button.style.backgroundColor = ''; 
    });
});



const backgrounds = [
    'url(assets/mainbg1.jpg)',  
    'url(assets/mainbg2.jpg)',  
    'url(assets/mainbg3.jpg)',  
    'url(assets/mainbg4.jpg)'   
];


const mainSection = document.querySelector('#main');


let currentIndex = 0;


function changeBackground() {
    mainSection.style.backgroundImage = backgrounds[currentIndex];
    
    mainSection.style.transition = 'background-image 1s ease-in-out';

    currentIndex = (currentIndex + 1) % backgrounds.length;
}

setInterval(changeBackground, 3000);
changeBackground();

const textToType = "Sustainable Fashion";
const typingElement = document.querySelector('.heading');
let typingSpeed = 150;
let index = 0;

function typeText() {
    if (index < textToType.length) {
        typingElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    } else {
        typingElement.style.borderRight = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeText, 500);
});

