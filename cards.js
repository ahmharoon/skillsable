
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

// BLOGS ANIATION
const tl = gsap.timeline();
tl.from(".innerblogs",{
    x:"-100%",
    duration: 1,
    opacity: 0,
    stagger:0.5,
    scrollTrigger:{
      trigger: ".blog-container" ,
      start: 'top bottom',
      end:'bottom bottom',
      scrub:true,
    }
  })
// BLOGS ANIATION END


// RPL ANIMATION 
// Initial position of the elements
gsap.set('.left-rpl', { x: '100%', opacity: 0 });
gsap.set('.right-rpl', { opacity: 0 });

// Animation for the image to come from the left
gsap.to('.left-rpl', {
    x: '0%',
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: '.rpl',
        start: 'top bottom', // Adjust the start position as needed
        end: 'center bottom', // Adjust the end position as needed
        scrub: 1, // Smooth scrolling effect
    }
});

gsap.to('.right-rpl', {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: '.main-skill',
      start: 'top bottom', // Adjust the start position as needed
      end: 'center bottom', // Adjust the end position as needed
      scrub: 1, // Smooth scrolling effect
    }
  });

// RPL ANIMATION END



// STEPS

// Assume we start at step 1
let currentStep = 1;
const totalSteps = document.querySelectorAll('.step').length;

// Function to go to the next step
function nextStep() {
  goToStep(currentStep + 1);
}

// Function to go to the previous step
function prevStep() {
  goToStep(currentStep - 1);
}
// Function to handle the step transition
function goToStep(step) {
    // Adjust the step number if it's out of bounds
    if (step < 1) {
      step = totalSteps; // loop back to the last step
    } else if (step > totalSteps) {
      step = 1; // loop back to the first step
    }
    
    const tl = gsap.timeline({
      onComplete: () => {
        // Once the fade-out is complete, instantly hide the previous step and show the new step
        gsap.set(`.step-${currentStep}`, { opacity: 0, display: 'none' });
        gsap.set(`.step-${step}`, { opacity: 1, display: 'block' });
        
        // Update the active class
        document.querySelector(`.step-${currentStep}`).classList.remove('active');
        document.querySelector(`.step-${step}`).classList.add('active');
        
        // Update the current step
        currentStep = step;
      }
    });

    // Sequence: fade out the current step, then trigger the fade-in of the next step
    tl.to(`.step-${currentStep}`, { opacity: 0, duration: 0.5 })
      .to(`.step-${step}`, { opacity: 1, display: 'block', duration: 0.5 }, '+=0.5'); // Starts the next animation 0.1s after the previous one starts
  }

// Auto-transition functionality
let autoTransition = setInterval(nextStep, 5000); // Change slide every 5 seconds

// Reset auto-transition on user interaction
document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', () => {
    clearInterval(autoTransition);
    autoTransition = setInterval(nextStep, 5000); // Restart auto-transition
  });
});

// Initialize the slider
goToStep(1);
// STEPS END