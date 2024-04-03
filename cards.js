
// CARDS ANIMATION 
gsap.registerPlugin(ScrollTrigger);

// Function to animate the cards
function animateCards() {
  gsap.from('.card', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2, // Stagger the animation by 0.2 seconds
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.cards-custom',
      start: 'top 80%', // Start the animation when the top of the cards is 80% in view
      end:'bottom bottom',
      scrub:true,
    }
  });
}

// Call the animateCards function when the DOM is loaded
document.addEventListener('DOMContentLoaded', animateCards);
// CARDS ANIMATION END



// CARD-2 ANIMATON
gsap.from(".inerr-card-2",{
    x:"-100%",
    duration: 1,
    opacity: 0,
    stagger:0.5,
    scrollTrigger:{
      trigger: ".card-2" ,
      start: 'top bottom',
      end:'bottom bottom',
      scrub:true,
    }
  })
  // CARD-2 ANIMATON END



//   MISSION
gsap.from('.left',{
    x:'100%',
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".mission",
        start:'top bottom',
        end :'bottom bottom',
        scrub:true,
    }

})
//   MISSION END
