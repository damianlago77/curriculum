
var btnBackToTop = document.getElementById("btn-back-to-top");

window.addEventListener("scroll", function() {
  if (window.scrollY > 100) {
    btnBackToTop.style.display = "block";
  } else {
    btnBackToTop.style.display = "none";
  }
});

btnBackToTop.addEventListener("click", function() {
  window.scrollTo(0, 0);
});

const btn = document.getElementById('btn-submit');

btn.addEventListener('mouseover', function() {
  this.style.backgroundColor = 'green';
});

btn.addEventListener('mouseout', function() {
  this.style.backgroundColor = '';
});


const navLinks = document.querySelectorAll('nav a');
const navMenu = document.querySelector('nav ul');

navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    if (navMenu.classList.contains('show-menu')) {
      navMenu.classList.remove('show-menu');
    }
  });
});



