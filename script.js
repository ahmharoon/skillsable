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
    gsap.set('.logotext',{y:"-5vw"});
    gsap.set('.nav-conatiner',{opacity:0,y:"-1000%"});


    // Animation for the triangles to appear and move to their position
    gsap.timeline({defaults: {duration: 1, ease: 'back.out(1.7)'}})
      .to('.triangle-1, .triangle-2', { autoAlpha: 1, scale: 1, stagger: 0.1, onComplete: showLogoText  })

    // Function to reveal the logo text
    function showLogoText() {
      gsap.to('.logotext', {duration: 0.5,autoAlpha:1,opacity:1, y:0, ease: 'power2.out',onComplete:hideLoader });
    }

    function hideLoader() {
      const tl = gsap.timeline(); // Corrected: Added parentheses after 'timeline'
      const viewport = window.innerHeight
      // window.scrollTo(0, viewport);
      tl.to('.loader',{
        y:"-100%",
        duration:1,
        ease: 'power2.out',
      })
      tl.to('.loader', {
        display: "none",
        onComplete:showNav
      });
      function showNav() {
          gsap.to('.nav-conatiner',{
              opacity:1,
              duration: 1,
              y:"0",
             
          })
      };
  }
  
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
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

// LOADER ANIMATION END 

const card_anc = document.querySelectorAll('.card-anc');
const card_img_top = document.querySelectorAll('.card-img-top');

card_anc.forEach((card, index) => {
  card.addEventListener('mouseover', () => {
    gsap.to(card_img_top[index], {
      duration:0.2,
      height: "110%"
    });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card_img_top[index], {
      height: "100%"
    });
  });

});

gsap.from('.right-side-form',{
  x:"200%",
  duration:1,
  power:"ease-in",
  scrollTrigger: {
    trigger: '.container-support',
    start: '40% 80%',
    
  }
})



