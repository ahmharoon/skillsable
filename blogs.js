const elem_btns = document.querySelectorAll('.blog-btn');
const elem = document.querySelectorAll('.blog');

console.log(elem_btns)
console.log(elem)
elem_btns.forEach((btn, index) => {
    btn.addEventListener('click', function () {
        // Check if the corresponding element is visible
        if (elem[index].style.display === "none" || elem[index].style.display === "") {
            gsap.to(elem[index], {
                function() {
                    elem[index].style.display = "block";
                }
            });
            btn.innerText='Show Less'
        } else {
            btn.innerText='Show More'
            gsap.to(elem[index], {
                function() {
                    elem[index].style.display = "none";
                }
            });
        }
    });
});

