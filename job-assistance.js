const elem = document.querySelectorAll('.card');
elem.forEach((card)=>{
    card.addEventListener('mouseenter',()=>{
        gsap.to(card,{
            y:'-10',
            duration:0.5,
        })
    })
    card.addEventListener('mouseleave',()=>{
        gsap.to(card,{
            y:'0',
            duration:0.5,
        })
    })
})


gsap.registerPlugin(ScrollTrigger);

// Define animations for headings and paragraphs
gsap.utils.toArray('.card').forEach((element) => {
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
gsap.utils.toArray('.inner-card-online').forEach((element) => {
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