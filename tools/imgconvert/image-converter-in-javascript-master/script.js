$(document).ready(function () {
  let imageUrl;

  $("#image").change(function (e) {
    var file= e.target.files[0];
    readImage(file)
  });

  function readImage(file){
    if (file.type && file.type.indexOf('image') === -1) {
        alert("file is not an image")
        return;
      }
    
      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        imageUrl = event.target.result;
        console.log(imageUrl)
      });
      reader.readAsDataURL(file);
  }

  $("#myForm").submit(function (e) {
    e.preventDefault();

    if ($("#url").val() !== "") {
      imageUrl = $("#url").val();
      convertImage(imageUrl);
    } else {
      convertImage(imageUrl);
    }
  });

  function convertImage(imageUrl) {
    var imageType = $("#format option:selected").text();
    if (browserImageCoverter.downloadImageWithType(imageUrl, imageType)) {
    } 
  }
});
