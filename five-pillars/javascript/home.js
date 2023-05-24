var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

// ooooo تحكم الازرار
function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n) 
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}//يعني لما يكون عند صورة الحج و تقلب ل التالي يروح لأول صورة اللي هي الشهادة
  if (n < 1) {slideIndex = slides.length}//لما نضغط على زر السابق و احنا واقفين عند اول صورة يروح على اخر صورة
  for (i = 0; i < slides.length; i++) //عشان زرار التالي و السابق لكل الصور
  {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) //عشان النقط اللي بنقلب بيها
  {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// -----------------------------------------------------------------------------------------------------------------------


var color = localStorage.getItem("myflag");
var size = localStorage.getItem("mysize");
var image = localStorage.getItem("myimage");

if (color == 1) {
    document.body.style.background = 'red';
} else if (color == 2) {
    document.body.style.background = 'blue';
} else if (color == 3) {
    document.body.style.background = 'green';

}

if (size == 0) {
    document.body.style.fontSize = "12px";
} else if (size == 1) {
    document.body.style.fontSize = "18px";
} else if (size == 2) {
    document.body.style.fontSize = "35px";
} else if (size == 3) {
    document.body.style.fontSize = "50px";
} else if (size == 4) {
    document.body.style.fontSize = "65px";
}

if (image==1)
{
  document.body.style.backgroundImage="url(img/954817.jpg)"
}

else if (image==2)
{
  document.body.style.backgroundImage="url(img/ground.jpg)"
}

else if (image==3)
{
  document.body.style.backgroundImage="url(img/ground3.jpg)"
}