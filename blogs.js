const elem_btns=document.querySelectorAll(".blog-btn"),elem=document.querySelectorAll(".blog");console.log(elem_btns),console.log(elem),elem_btns.forEach((e,l)=>{e.addEventListener("click",function(){"none"===elem[l].style.display||""===elem[l].style.display?(gsap.to(elem[l],{function(){elem[l].style.display="block"}}),e.innerText="Show Less"):(e.innerText="Show More",gsap.to(elem[l],{function(){elem[l].style.display="none"}}))})});