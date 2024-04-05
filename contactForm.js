
// CONTACT FORM 
// Get the appointment element using querySelector since there's likely only one
const appointment = document.querySelector('.contact-btn');

// Add click event listener to the appointment element
appointment.addEventListener("click", () => {

    // Animate the appointment form using GSAP
    gsap.to(".appointment-form", {
        y: '100%',
        opacity: 1,
        duration: 1,
    });
});

// Get the close-form element
// Select all close-form elements
const closeForms = document.querySelectorAll('.close-form, .close-form-1, .close-form-2');

// Function to close the form
const closeTheForm = () => {
    // Animate the appointment form(s) closing using GSAP
    gsap.to(".appointment-form, .appointment-form-1, .appointment-form-2, .appointment-form-3", {
        y: '-100%',
        opacity: 0,
        duration: 1,
    });
};

// Iterate over each close-form element and attach the click event listener
closeForms.forEach(closeForm => {
    closeForm.addEventListener("click", closeTheForm);
});

// CONTACT FORM END 






// CONTACT FORM 
// Get the appointment element using querySelector since there's likely only one
const appointment1 = document.querySelector('.contact-btn-1');

// Add click event listener to the appointment element
appointment1.addEventListener("click", () => {

    // Animate the appointment form using GSAP
    gsap.to(".appointment-form-2", {
        y: '100%',
        opacity: 1,
        duration: 1,
    });
});
const appointment2 = document.querySelector('.contact-btn-2');

// Add click event listener to the appointment element
appointment2.addEventListener("click", () => {

    // Animate the appointment form using GSAP
    gsap.to(".appointment-form-3", {
        y: '100%',
        opacity: 1,
        duration: 1,
    });
});


const previosForm1 = document.querySelector('.previous-btn-1');

// Add click event listener to the close-form element
previosForm1.addEventListener("click", () => {
    // Animate the appointment form using GSAP to close it
    gsap.to(".appointment-form-2", {
        y: '-100%',
        opacity: 0,
        duration: 1,
    });
});


const previosForm2 = document.querySelector('.previous-btn-2');

// Add click event listener to the close-form element
previosForm2.addEventListener("click", () => {
    // Animate the appointment form using GSAP to close it
    gsap.to(".appointment-form-3", {
        y: '-100%',
        opacity: 0,
        duration: 1,
    });
});



// CONTACT FORM END 


