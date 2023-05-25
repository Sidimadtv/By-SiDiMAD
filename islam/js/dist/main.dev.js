"use strict";

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      this.classList.remove("active");
      content.style.maxHeight = null;
    } else {
      this.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
} // var closeAccordion = (accordion) => {
// 	var content = accordion.querySelector(".item__answer");
// 	accordion.classList.remove("open");
// 	content.style.maxHeight = null;
// };
// scroll up


var scrollBtn = document.querySelector(".scrollBtn");
window.addEventListener("scroll", function () {
  scrollup();
});
scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "auto"
  });
});
scrollup();

function scrollup() {
  window.scrollY > 100 ? scrollBtn.classList.add('active') : scrollBtn.classList.remove('active');
} // Accordin


var accordion = document.getElementsByClassName('item__content');

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
    remove.classList.toggle('active');
  });
}

var links = document.querySelectorAll(".scroll-to");
links.forEach(function (item) {
  item.addEventListener("click", function () {
    var el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  });
}); // var plus = document.getElementsByClassName('fa-plus');
// var dash = document.getElementsByClassName('fa-minus');
// function myFunction() {
//     coll.addEventListener('click', () => {
//         minus.style.display = 'block';
//         plus.style.display = 'none';
//     });
//     // rest.addEventListener('click', () => {
//     //     success.style.display = 'none';
//     // });
// }
// Scroll to anchor ID using scrollTO event

var scrollSmoothly = function scrollSmoothly() {
  document.addEventListener('click', function (e) {
    var target = e.target;
    if (!target.classList.contains('item__content')) return;
    e.preventDefault();
    var targetClass = target.hash;
    document.querySelector(targetClass).scrollIntoView({
      inline: 'nearest',
      block: 'start',
      behavior: 'smooth'
    });
  });
}; // Scroll to section on link click


scrollSmoothly();

function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar"); // Add the "show" class to DIV

  x.className = "show"; // Audio

  var audio = document.getElementById("song");
  audio.play(); // After 3 seconds, remove the show class from DIV

  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
} // let docTitle = document.title;
// window.addEventListener("focus", () => {
//     document.title = docTitle;
// })
// window.addEventListener("blur", () => {
//     document.title = "Come Back ♡";
// })
//# sourceMappingURL=main.dev.js.map
