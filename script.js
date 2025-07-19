document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    e.target.reset();
});

const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Read More button functionality
const readMoreBtn = document.querySelector('.read-more');
const extraInfo = document.querySelector('.extra-info');

readMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (extraInfo.style.display === 'none' || extraInfo.style.display === '') {
        extraInfo.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
    } else {
        extraInfo.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }
});

// Project card flip functionality
document.querySelectorAll('.card-front h4').forEach(title => {
    title.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent any default behavior
        const card = title.closest('.project-card');
        card.classList.toggle('flipped');

        // Adjust height dynamically after the flip
        requestAnimationFrame(() => {
            if (card.classList.contains('flipped')) {
                const backHeight = card.querySelector('.card-back').scrollHeight;
                card.style.height = backHeight + 'px';
            } else {
                const frontHeight = card.querySelector('.card-front').scrollHeight;
                card.style.height = frontHeight + 'px';
            }
        });
    });
});

// Set initial height on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-card').forEach(card => {
        const frontHeight = card.querySelector('.card-front').scrollHeight;
        card.style.height = frontHeight + 'px';
    });
});