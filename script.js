// .............................the home section.......................................
//
//
//
        //change background when scrolling up !!
        let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Check if scrolling up
    if (currentScroll < lastScrollTop) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update the lastScrollTop to currentScroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
// menu button on smaller screens
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navLinks');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});

// animated word
const words = ["Developer", "Designer"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
const speed = 150; // Typing speed in milliseconds
const delay = 2000; // Delay between word switches

function typeWord() {
    const animatedWord = document.getElementById('animated-word');
    const currentWord = words[wordIndex];

    if (!isDeleting && letterIndex < currentWord.length) {
        // Typing forward
        animatedWord.textContent += currentWord.charAt(letterIndex);
        letterIndex++;
        setTimeout(typeWord, speed);
    } else if (isDeleting && letterIndex > 0) {
        // Deleting
        animatedWord.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(typeWord, speed);
    } else if (!isDeleting && letterIndex === currentWord.length) {
        // Pause before deleting
        setTimeout(() => isDeleting = true, delay);
        setTimeout(typeWord, delay);
    } else if (isDeleting && letterIndex === 0) {
        // Move to the next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWord, speed);
    }
}

// Start the typing effect
typeWord();

//--------------------------------portfolio section -------------------------------------
//
//
//
const portfolioItems = document.querySelectorAll('.portfolio-item');
const portfolioNav = document.querySelectorAll('.portfolio-nav li');

portfolioNav.forEach((navItem) => {
    navItem.addEventListener('click', function() {
        // Remove 'active' class from all nav items
        portfolioNav.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        
        // Filter portfolio items based on clicked category
        const category = this.textContent.toLowerCase();
        portfolioItems.forEach(item => {
            item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
        });
    });
});
//--------------------------------counter section -------------------------------------
//
//
//

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;

        const increment = target / 200; // Adjust speed of counting

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

//--------------------------------feedback section -------------------------------------
//
//
//
