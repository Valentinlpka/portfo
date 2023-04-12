const light = document.getElementById('light');
particlesJS("particles-js", { "particles": { "number": { "value": 10, "density": { "enable": true, "value_area": 500 } }, "color": { "value": "#FFFFFF" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 10, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2 }, "move": { "enable": true, "speed": 6, "direction": "bottom", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 0.5 } }, "bubble": { "distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); 
light.addEventListener('click', () => {
  if (light.getAttribute('name') == 'sunny-outline') {
    light.setAttribute('name', 'moon-outline');
    document.body.classList.add('light');
    particlesJS("particles-js", { "particles": { "number": { "value": 10, "density": { "enable": true, "value_area": 500 } }, "color": { "value": "#234acb" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 10, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2 }, "move": { "enable": true, "speed": 6, "direction": "bottom", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 0.5 } }, "bubble": { "distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); 

  } else {
    light.setAttribute('name', 'sunny-outline');
    document.body.classList.remove('light');
    particlesJS("particles-js", { "particles": { "number": { "value": 10, "density": { "enable": true, "value_area": 500 } }, "color": { "value": "#FFFFFF" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 10, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2 }, "move": { "enable": true, "speed": 6, "direction": "bottom", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 0.5 } }, "bubble": { "distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); 

  }
});

const menu = document.getElementById('menu');
const nav = document.getElementById('nav');


menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  nav.classList.toggle('active');
});

var app = document.getElementById('textBonjour');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(900)
  .typeString("LIPKA VALENTIN")
  .start();


// Récupérer les éléments du menu
const menuItems = document.querySelectorAll("nav ul li a");

// Ajouter un événement scroll à la fenêtre
window.addEventListener("scroll", () => {
  // Parcourir les sections et vérifier si l'utilisateur est sur la moitié de la section
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 2 && window.scrollY < sectionTop + sectionHeight / 2) {
      // Si l'utilisateur est sur la moitié de la section, ajouter la classe "active" à l'élément de menu correspondant
      const id = section.getAttribute("id");
      menuItems.forEach((item) => {
        if (item.getAttribute("href") === "#" + id) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }
  });
});



// Add Card for click 


let popup = document.getElementById('popup')

function openPopup() {
  popup.classList.add('open-popup')
}
function closePopup() {
  popup.classList.remove('open-popup')
}