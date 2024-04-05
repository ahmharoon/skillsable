
// CONTACT FORM 
// Get the appointment element using querySelector since there's likely only one
const appointment = document.querySelector('.contact-btn');
const close = document.querySelector('.close-form')

// Add click event listener to the appointment element
appointment.addEventListener("click", () => {

    // Animate the appointment form using GSAP
    gsap.to(".appointment-form", {
        y: '100%',
        opacity: 1,
        display:'flex',
        duration: 1,
    });
});
close.addEventListener("click", () => {

    // Animate the appointment form using GSAP
    gsap.to(".appointment-form", {
        y: '-100%',
        opacity: 1,
        display:'flex',
        duration: 1,
    });
});




// CONTACT FORM END 


