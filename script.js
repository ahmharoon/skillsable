// LOADER ANIMATION 

function disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  // Function to enable scrolling
function enableScroll() {
    document.body.style.overflow = '';
  }


document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Initially hide the triangles and logo text
    gsap.set('.triangle-1, .triangle-2', { autoAlpha: 0, scale: 0.5 });
    gsap.set('.logotext', { autoAlpha: 0 });
    gsap.set('.logotext',{y:"-5vw"})


    gsap.set('.help',{opacity:0,y:'-100%'})



    
    const items = document.querySelectorAll('.contact > div');

    // Set the initial state of each item
    gsap.set(items, {autoAlpha: 0, y: -50});

    // Animation for the triangles to appear and move to their position
    gsap.timeline({defaults: {duration: 1, ease: 'back.out(1.7)'}})
      .to('.triangle-1, .triangle-2', { autoAlpha: 1, scale: 1, stagger: 0.1, onComplete: showLogoText  })

    // Function to reveal the logo text
    function showLogoText() {
      gsap.to('.logotext', {duration: 0.5,autoAlpha:1, y:0, ease: 'power2.out',onComplete:showContact });
    }

    function showContact() {
        

        // Create a timeline
        const tl = gsap.timeline({
        defaults: {duration: 0.5, ease: 'back.out(1.7)'},
        });

        // Add animations to the timeline for each item
        items.forEach(item => {
        tl.to(item, {autoAlpha: 1, y: 0,}, '+=0.1',); // Stagger the animation of each item
        });
    }
    function showNav() {
        gsap.from('.nav-conatiner',{
            delay:2,
            duration: 1,
            y:"-1000%",
           
        })
    };
    showNav()
    function showHelp() {
        gsap.to('.help',{
            delay:4,
            duration: 0.5,
            y:"0",
            opacity:1,
        })
    }
    showHelp()
  });



// search-box open close js code
let navbar = document.querySelector(".navbar");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

// LOADER ANIMATION END 

