/* التبديل بين وضعي (اظهار / اخفاء) القائمة عند ضغط المستخدم على الزر */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // اغلق القائمة اذا ضغط المستخدم على منطقة في الصفحة غيرها
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      //مهما ضغطت على زر (...) تنزل قائمة العناصر
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }