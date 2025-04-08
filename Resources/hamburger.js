// Select the hamburger menu and the navigation menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

// Add event listener to the hamburger menu
hamburger.addEventListener('click', () => {
    // Toggle the "active" class to show or hide the menu
    navMenu.classList.toggle('active');
});
