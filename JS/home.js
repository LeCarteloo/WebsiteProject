const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.navlinks li');

hamburger.addEventListener('click', () => {
        navLinks.classList.toggle("open");
        hamburger.classList.toggle("open");
});

function turnOffHamburger(){
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
}

// If window is resized then class open is being removed
window.onresize = turnOffHamburger;