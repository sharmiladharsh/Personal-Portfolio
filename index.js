/*======= toggle icon navbar ========*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*======= scroll sections active link ========*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })
    };
  });
  
  /*======= sticky navbar ========*/
  
  let header = document.querySelector('header')
  
  header.classList.toggle('sticky', window.scrollY > 100);

/*======= remove toggle icon an navbar when click navbar link(scroll) ========*/

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
   
};

/*======= scroll reveal ========*/

ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: 2000, 
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*======= typed js========*/

const typed = new Typed('.multiple-text', {
  strings: ['Python Developer', 'Fullstack Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// This script will reset the form after submission
    document.querySelector('form').addEventListener('submit', function() {
        setTimeout(function() {
            document.querySelector('form').reset();
        }, 2000); // Delay to let the form submit before resetting
    });

/* function animateProgress(percentage) {
  const progressCircle = document.querySelector('.path-creativity');
  const percentageText = document.querySelector('.percentage');

  // Calculate the stroke-dashoffset
  const offset = 502 * (1 - percentage / 100);

  // Apply the new offset
  progressCircle.style.strokeDashoffset = offset;

  // Animate the percentage text
  let current = 0;
  const step = percentage / 50; // Control speed of number animation
  const interval = setInterval(() => {
      if (current >= percentage) {
          percentageText.innerText = `${percentage}%`;
          clearInterval(interval);
      } else {
          percentageText.innerText = `${Math.floor(current)}%`;
          current += step;
      }
  }, 30);
} */

// Call function with desired percentage (e.g., 80%)
/* animateProgress(80); */



/* document.addEventListener("DOMContentLoaded", () => {
  // Progress Bars
  document.querySelectorAll(".progress").forEach(progress => {
      let percent = progress.getAttribute("data-percent");
      progress.style.width = percent + "%";
      progress.textContent = percent + "%";
  }); */

  // Circular Progress Counters
 /*  document.querySelectorAll(".counter").forEach(counter => {
      let target = +counter.getAttribute("data-target");
      let count = 0;
      let increment = target / 50; // Smooth animation

      let updateCounter = () => {
          if (count < target) {
              count += increment;
              counter.textContent = Math.floor(count) + "%";
              requestAnimationFrame(updateCounter);
          } else {
              counter.textContent = target + "%";
          }
      };

      updateCounter();
  });
}); */

