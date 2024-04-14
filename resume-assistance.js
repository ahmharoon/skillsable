// Select all buttons and divs
const buttons = document.querySelectorAll('.faq button');
const contents = document.querySelectorAll('.faq .ans');

// Add click event listeners to each button
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Hide all divs

        // Toggle the display of the div corresponding to the clicked button's index
        if (contents[index].style.display === 'block') {
            contents[index].style.display = 'none';
        } else {
            contents[index].style.display = 'block';
        }
    });
});





// Define animations for headings and paragraphs
gsap.utils.toArray('.card-admission').forEach((element) => {
    gsap.from(element, {
        opacity: 0,
        x: '-100%',
        duration: 1,
        scrollTrigger: {
            trigger: element,
            start: 'top bottom', // Adjust start position as needed
            end: 'bottom center', // Adjust end position as needed
            toggleActions: 'play none none reset', // Play animation when element enters viewport
        },
    });
});
