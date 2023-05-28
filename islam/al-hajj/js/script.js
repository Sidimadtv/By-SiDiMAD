var video_player_makah = document.querySelector("#makah-modal #video_player"),
links_makah = video_player_makah.getElementsByTagName('a');
for (var i=0; i<links_makah.length; i++) {
	links_makah[i].onclick = handler_makah;
}

var video_player_jamaraat = document.querySelector("#jamaraat-modal #video_player"),
links_jamaraat = video_player_jamaraat.getElementsByTagName('a');
for (var i=0; i<links_jamaraat.length; i++) {
	links_jamaraat[i].onclick = handler_jamaraat;
}

var video_player_mina = document.querySelector("#mina-modal #video_player"),
links_mina = video_player_mina.getElementsByTagName('a');
for (var i=0; i<links_mina.length; i++) {
	links_mina[i].onclick = handler_mina;
}

var video_player_mozdalefah = document.querySelector("#mozdalefah-modal #video_player"),
links_mozdalefah = video_player_mozdalefah.getElementsByTagName('a');
for (var i=0; i<links_mozdalefah.length; i++) {
	links_mozdalefah[i].onclick = handler_mozdalefah;
}

var video_player_arafaat = document.querySelector("#arafaat-modal #video_player"),
links_arafaat = video_player_arafaat.getElementsByTagName('a');
for (var i=0; i<links_arafaat.length; i++) {
	links_arafaat[i].onclick = handler_arafaat;
}

function handler_makah(e) {
	e.preventDefault();
	videotarget = this.getAttribute("href");
	filename = videotarget.substr(0, videotarget.lastIndexOf('.')) || videotarget;
	video = document.querySelector("#makah-modal #video_player video");
	// video.removeAttribute("controls");
	video.removeAttribute("poster");
	source = document.querySelectorAll("#makah-modal #video_player video source");
	source[0].src = filename + ".mp4";
	video.load();
	video.play();    
}
function handler_jamaraat(e) {
	e.preventDefault();
	videotarget = this.getAttribute("href");
	filename = videotarget.substr(0, videotarget.lastIndexOf('.')) || videotarget;
	video = document.querySelector("#jamaraat-modal #video_player video");
	// video.removeAttribute("controls");
	video.removeAttribute("poster");
	source = document.querySelectorAll("#jamaraat-modal #video_player video source");
	source[0].src = filename + ".mp4";
	video.load();
	video.play();    
}

function handler_mozdalefah(e) {
	e.preventDefault();
	videotarget = this.getAttribute("href");
	filename = videotarget.substr(0, videotarget.lastIndexOf('.')) || videotarget;
	video = document.querySelector("#mozdalefah-modal #video_player video");
	// video.removeAttribute("controls");
	video.removeAttribute("poster");
	source = document.querySelectorAll("#mozdalefah-modal #video_player video source");
	source[0].src = filename + ".mp4";
	video.load();
	video.play();    
}
function handler_mina(e) {
	e.preventDefault();
	videotarget = this.getAttribute("href");
	filename = videotarget.substr(0, videotarget.lastIndexOf('.')) || videotarget;
	video = document.querySelector("#mina-modal  #video_player video");
	// video.removeAttribute("controls");
	video.removeAttribute("poster");
	source = document.querySelectorAll("#mina-modal  #video_player video source");
	source[0].src = filename + ".mp4";
	video.load();
	video.play();    
}
function handler_arafaat(e) {
	e.preventDefault();
	videotarget = this.getAttribute("href");
	filename = videotarget.substr(0, videotarget.lastIndexOf('.')) || videotarget;
	video = document.querySelector("#arafaat-modal  #video_player video");
	// video.removeAttribute("controls");
	video.removeAttribute("poster");
	source = document.querySelectorAll("#arafaat-modal  #video_player video source");
	source[0].src = filename + ".mp4";
	video.load();
	video.play();    
}
function openModalMakah(){
	document.getElementById('makah-modal').style.display = 'flex';
}
function hideModelMakah() {
	document.getElementById('makah-modal').style.display = 'none';
	document.querySelector("#makah-modal #video_player video").pause();
}

function openModalJamaraat(){
	document.getElementById('jamaraat-modal').style.display = 'flex';
}
function hideModelJamaraat() {
	document.getElementById('jamaraat-modal').style.display = 'none';
	document.querySelector("#jamaraat-modal #video_player video").pause();
}

function openModalMina(){
	document.getElementById('mina-modal').style.display = 'flex';
}
function hideModelMina() {
	document.getElementById('mina-modal').style.display = 'none';
	document.querySelector("#mina-modal #video_player video").pause();
}

function openModalMozdalefah(){
	document.getElementById('mozdalefah-modal').style.display = 'flex';
}
function hideModelMozdalefah() {
	document.getElementById('mozdalefah-modal').style.display = 'none';
	document.querySelector("#mozdalefah-modal #video_player video").pause();
}

function openModalArafaat(){
	document.getElementById('arafaat-modal').style.display = 'flex';
}
function hideModelArafaat() {
	document.getElementById('arafaat-modal').style.display = 'none';
	document.querySelector("#arafaat-modal #video_player video").pause();
}

function openModalAirplane(){
	document.getElementById('airplane-modal').style.display = 'flex';
}
function hideModelAirplane() {
	document.getElementById('airplane-modal').style.display = 'none';
}

function openModalMeqaat(){
	document.getElementById('meqaat-modal').style.display = 'flex';
}
function hideModelMeqaat() {
	document.getElementById('meqaat-modal').style.display = 'none';
}

function openModalAmbulance(){
	document.getElementById('ambulance-modal').style.display = 'flex';
}
function hideModelAmbulance() {
	document.getElementById('ambulance-modal').style.display = 'none';
}

function openModal8(){
	document.getElementById('cal-8-modal').style.display = 'flex';
}
function hideModel8() {
	document.getElementById('cal-8-modal').style.display = 'none';
}

function openModal9(){
	document.getElementById('cal-9-modal').style.display = 'flex';
}

function hideModel9() {
	document.getElementById('cal-9-modal').style.display = 'none';
}

function openModal10(){
	document.getElementById('cal-10-modal').style.display = 'flex';
}
function hideModel10() {
	document.getElementById('cal-10-modal').style.display = 'none';
}

function openModal11(){
	document.getElementById('cal-11-modal').style.display = 'flex';
}
function hideModel11() {
	document.getElementById('cal-11-modal').style.display = 'none';
}

function openModal12(){
	document.getElementById('cal-12-modal').style.display = 'flex';
}
function hideModel12() {
	document.getElementById('cal-12-modal').style.display = 'none';
}

function openModal13(){
	document.getElementById('cal-13-modal').style.display = 'flex';
}
function hideModel13() {
	document.getElementById('cal-13-modal').style.display = 'none';
}

function checklocalStorage() {
  var user = localStorage.getItem('visited');
  if (user == "yes") {

            document.querySelector('.text').style.display = 'none';
            document.querySelector('.text2').style.display = 'none';
            document.querySelector('.text3').style.display = 'none';
            document.querySelector('.border').style.display = 'none';
            document.querySelector('.border2').style.display = 'none';
            document.querySelector('.border').style.display = 'none';
            document.querySelector('.border2').style.display = 'none';
            document.querySelector('.border3').style.display = 'none';
            document.querySelector('.border4').style.display = 'none';
            document.querySelector('.border5').style.display = 'none';
            document.querySelector('.border6').style.display = 'none';
  } else {
        setTimeout(function () {
            document.querySelector('.text').style.display = 'none';
            document.querySelector('.text2').style.display = 'none';
            document.querySelector('.text3').style.display = 'none';
            document.querySelector('.border').style.display = 'none';
            document.querySelector('.border2').style.display = 'none';
            document.querySelector('.border').style.display = 'none';
            document.querySelector('.border2').style.display = 'none';
            document.querySelector('.border3').style.display = 'none';
            document.querySelector('.border4').style.display = 'none';
            document.querySelector('.border5').style.display = 'none';
            document.querySelector('.border6').style.display = 'none';
            }, 6000);
  }
}
window.onload = function() {
    checklocalStorage();
    localStorage.setItem('visited', 'yes');
	if (window.innerHeight> window.innerWidth){
		document.getElementById('hajj-map-container').classList.add("portrait");
        document.getElementById('portrait2').classList.add("portrait2");
	}
   document.getElementById('loader-page').style.display = 'none';
    
    
   document.getElementById('hajj-map-container').style.display = 'block';
    
        
    
};


window.onresize = function() {
	if (window.innerHeight> window.innerWidth){
		document.getElementById('hajj-map-container').classList.add("portrait");
        document.getElementById('portrait2').classList.add("portrait2");
	} else {
		document.getElementById('hajj-map-container').classList.remove("portrait");
        document.getElementById('portrait2').classList.remove("portrait2");
	}
};


//document.querySelector(".modal").addEventListener("click" , function( event ){
//    document.querySelector('.modal').style.display = 'none'; 
//    document.querySelector('.cal-8-modal').style.display = 'none'; 
//});

document.querySelector(".cal-8").addEventListener("mouseenter", function( event ) {
	document.querySelector('.cal-8-animation').style.display = 'block';
});
document.querySelector(".cal-8").addEventListener("mouseleave", function( event ) {
	document.querySelector('.cal-8-animation').style.display = 'none';
});

document.querySelector(".cal-9").addEventListener("mouseenter", function( event ) {
	document.querySelector('.cal-9-animation').style.display = 'block';
});
document.querySelector(".cal-9").addEventListener("mouseleave", function( event ) {
	document.querySelector('.cal-9-animation').style.display = 'none';
});

document.querySelector(".cal-10").addEventListener("mouseenter", function( event ) {
	document.querySelector('.cal-10-animation').style.display = 'block';
});
document.querySelector(".cal-10").addEventListener("mouseleave", function( event ) {
	document.querySelector('.cal-10-animation').style.display = 'none';
});

document.querySelector(".cal-11").addEventListener("mouseenter", function( event ) {
	document.querySelector('.cal-11-animation').style.display = 'block';
});
document.querySelector(".cal-11").addEventListener("mouseleave", function( event ) {
	document.querySelector('.cal-11-animation').style.display = 'none';
});

document.querySelector(".cal-12").addEventListener("mouseenter", function( event ) {
	document.querySelector('.cal-12-animation').style.display = 'block';
});
document.querySelector(".cal-12").addEventListener("mouseleave", function( event ) {
	document.querySelector('.cal-12-animation').style.display = 'none';
});

document.querySelector(".cal-13").addEventListener("mouseenter", function( event ) {
	document.querySelector('.cal-13-animation').style.display = 'block';
});
document.querySelector(".cal-13").addEventListener("mouseleave", function( event ) {
	document.querySelector('.cal-13-animation').style.display = 'none';
});

var modal1 = document.getElementById('makah-modal');
function hideModal1() {
    
    window.onclick = function( event ) {
    if( event.target === modal1 ) {
        document.querySelector("#makah-modal #video_player video").pause();
        modal1.style.display = 'none';
        
    }
    }
}

var modal2 = document.getElementById('jamaraat-modal');
function hideModal2() {

    window.onclick = function( event ) {
    if( event.target === modal2 ) {
        document.querySelector("#jamaraat-modal #video_player video").pause();
        modal2.style.display = 'none';
        }
    }
}

var modal3 = document.getElementById('mina-modal');
function hideModal3() {

    window.onclick = function( event ) {
    if( event.target === modal3 ) {
        document.querySelector("#mina-modal #video_player video").pause();
        modal3.style.display = 'none';
        }
    }
}

var modal4 = document.getElementById('mozdalefah-modal');
function hideModal4() {

    window.onclick = function( event ) {
    if( event.target === modal4 ) {
        document.querySelector("#mozdalefah-modal #video_player video").pause();
        modal4.style.display = 'none';
        }
    }
}

var modal5 = document.getElementById('arafaat-modal');
function hideModal5() {

    window.onclick = function( event ) {
    if( event.target === modal5 ) {
        document.querySelector("#arafaat-modal #video_player video").pause();
        modal5.style.display = 'none';
        }
    }
}

var modal6 = document.getElementById('airplane-modal');
function hideModal6() {

    window.onclick = function( event ) {
    if( event.target === modal6 ) {
        modal6.style.display = 'none';
        }
    }
}

var modal7 = document.getElementById('meqaat-modal');
function hideModal7() {

    window.onclick = function( event ) {
    if( event.target === modal7 ) {
        modal7.style.display = 'none';
        }
    }
}

var modal8 = document.getElementById('ambulance-modal');
function hideModal8() {

    window.onclick = function( event ) {
    if( event.target === modal8 ) {
        modal8.style.display = 'none';
        }
    }
}

var modal9 = document.getElementById('cal-8-modal');
function hideModal9() {

    window.onclick = function( event ) {
    if( event.target === modal9 ) {
        modal9.style.display = 'none';
        }
    }
}

var modal10 = document.getElementById('cal-9-modal');
function hideModal10() {

    window.onclick = function( event ) {
    if( event.target === modal10 ) {
        modal10.style.display = 'none';
        }
    }
}

var modal11 = document.getElementById('cal-10-modal');
function hideModal11() {

    window.onclick = function( event ) {
    if( event.target === modal11 ) {
        modal11.style.display = 'none';
        }
    }
}

var modal12 = document.getElementById('cal-11-modal');
function hideModal12() {

    window.onclick = function( event ) {
    if( event.target === modal12 ) {
        modal12.style.display = 'none';
        }
    }
}

var modal13 = document.getElementById('cal-12-modal');
function hideModal13() {

    window.onclick = function( event ) {
    if( event.target === modal13 ) {
        modal13.style.display = 'none';
        }
    }
}

var modal14 = document.getElementById('cal-13-modal');
function hideModal14() {

    window.onclick = function( event ) {
    if( event.target === modal14 ) {
        modal14.style.display = 'none';
        }
    }
}





//function hideModal1() {
//var modal1 = document.getElementById('cal-8-modal');
//window.onclick = function( event ) {
//    if( event.target === modal1 ) {
//        modal1.style.display = 'none';
//    }
//    }
//}


//document.querySelector("text-modal").addEventListener("click", function( event ) {
//	event.preventDefault();
//});

