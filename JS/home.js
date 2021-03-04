const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.navlinks li');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
        navLinks.classList.toggle("open");
        hamburger.classList.toggle("open");
        menu.classList.toggle("open");
});

function turnOffHamburger(){
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
    menu.classList.remove("open");
}
var a=1;
function showCreators(){
    if(a==1){
        document.getElementById('creatorsExpand').style.display="inline";
        return a=0;
    }
    else{
        document.getElementById('creatorsExpand').style.display="none";
        return a=1;
    }
    
}

// If window is resized then class open is being removed
window.onresize = turnOffHamburger;

$(".slider section").on('wheel', function(e) {
    e.preventDefault();        
    if (e.originalEvent.wheelDelta >= 0) {
        if ($(this).prev().length) {
            var prev = "#" + $(this).prev().attr("id");
            document.querySelector(prev).scrollIntoView({behavior: 'smooth'});
        }
    } else {
        if ($(this).next().length) {
            var next = "#" + $(this).next().attr("id");
            document.querySelector(next).scrollIntoView({behavior: 'smooth'});
        }
    }
  });