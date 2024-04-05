

// SELF LEARNING ANIMATION 
gsap.registerPlugin(ScrollTrigger);

// Define animations for headings and paragraphs
gsap.utils.toArray('.heading, .para').forEach((element) => {
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
// SELF LEARNING ANIMATION END
