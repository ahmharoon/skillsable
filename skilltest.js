

// // Get the close-form element
// // Select all close-form elements
// const closeForms = document.querySelectorAll('.close-form-0, .close-form-1, .close-form-2');

// // Function to close the form
// const closeTheForm = () => {
//     // Animate the appointment form(s) closing using GSAP
//     gsap.to(".appointment-form-1, .appointment-form-2, .appointment-form-3", {
//         y: '-100%',
//         opacity: 0,
//         display:'none',
//         duration: 1,
//     });
// };

// // Iterate over each close-form element and attach the click event listener
// closeForms.forEach(closeForm => {
//     closeForm.addEventListener("click", closeTheForm);
// });

// // CONTACT FORM END 





// // CONTACT FORM 

// const appointment0 = document.querySelector('.contact-btn-0');

// // Add click event listener to the appointment element
// appointment0.addEventListener("click", () => {

//     // Animate the appointment form using GSAP
//     gsap.to(".appointment-form-1", {
//         y: '100%',
//         opacity: 1,
//         display:'flex',
//         duration: 1,
//     });
// });
// // Get the appointment element using querySelector since there's likely only one
// const appointment1 = document.querySelector('.contact-btn-1');

// // Add click event listener to the appointment element
// appointment1.addEventListener("click", () => {

//     // Animate the appointment form using GSAP
//     gsap.to(".appointment-form-2", {
//         y: '100%',
//         opacity: 1,
//         display:'flex',
//         duration: 1,
//     });
// });
// const appointment2 = document.querySelector('.contact-btn-2');

// // Add click event listener to the appointment element
// appointment2.addEventListener("click", () => {

//     // Animate the appointment form using GSAP
//     gsap.to(".appointment-form-3", {
//         y: '100%',
//         opacity: 1,
//         display:'flex',
//         duration: 1,
//     });
// });


// const previosForm1 = document.querySelector('.previous-btn-1');

// // Add click event listener to the close-form element
// previosForm1.addEventListener("click", () => {
//     // Animate the appointment form using GSAP to close it
//     gsap.to(".appointment-form-2", {
//         y: '-100%',
//         opacity: 0,
//         display:'none',
//         duration: 1,
//     });
// });


// const previosForm2 = document.querySelector('.previous-btn-2');

// // Add click event listener to the close-form element
// previosForm2.addEventListener("click", () => {
//     // Animate the appointment form using GSAP to close it
//     gsap.to(".appointment-form-3", {
//         y: '-100%',
//         opacity: 0,
//         display:'none',
//         duration: 1,
//     });
// });










var userMenuDiv = document.getElementById("userMenu");
var userMenu = document.getElementById("userButton");

 var helpMenuDiv = document.getElementById("menu-content");
 var helpMenu = document.getElementById("menu-toggle");

document.onclick = check;

function check(e){
  var target = (e && e.target) || (event && event.srcElement);

  //User Menu
  if (!checkParent(target, userMenuDiv)) {
	// click NOT on the menu
	if (checkParent(target, userMenu)) {
	  // click on the link
	  if (userMenuDiv.classList.contains("invisible")) {
		userMenuDiv.classList.remove("invisible");
	  } else {userMenuDiv.classList.add("invisible");}
	} else {
	  // click both outside link and outside menu, hide menu
	  userMenuDiv.classList.add("invisible");
	}
  }

   //Help Menu
   if (!checkParent(target, helpMenuDiv)) {
	// click NOT on the menu
	if (checkParent(target, helpMenu)) {
	  // click on the link
	  if (helpMenuDiv.classList.contains("hidden")) {
		helpMenuDiv.classList.remove("hidden");
	  } else {helpMenuDiv.classList.add("hidden");}
	} else {
	  // click both outside link and outside menu, hide menu
	  helpMenuDiv.classList.add("hidden");
	}
   }

}

function checkParent(t, elm) {
  while(t.parentNode) {
	if( t == elm ) {return true;}
	t = t.parentNode;
  }
  return false;
}





var lastId,
    topMenu = $("#menu-content"),
    topMenuHeight = topMenu.outerHeight()+175,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  if (!helpMenuDiv.classList.contains("hidden")) {
		helpMenuDiv.classList.add("hidden");
	  }
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("font-bold border-red-600")
         .end().filter("[href='#"+id+"']").parent().addClass("font-bold border-red-600");
   }                   
});
