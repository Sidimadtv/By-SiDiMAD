//creates sound effects
var okMain = new Audio("soundEffects/okMain.mp3"); 
var okMain2 = new Audio("soundEffects/okMain.mp3"); 
var okSetting = new Audio("soundEffects/okSetting.mp3"); 
var okChannel = new Audio("soundEffects/okChannel.mp3"); 
var okChannel2 = new Audio("soundEffects/okChannel.mp3"); 
var backSetting = new Audio("soundEffects/backSetting.mp3"); 
var backMain = new Audio("soundEffects/backMain.mp3"); 
var backChannel = new Audio("soundEffects/backChannel.mp3"); 
var splashIn = new Audio("soundEffects/splashScreenIn.mp3"); 
var splashOut = new Audio("soundEffects/splashScreenOut.mp3"); 




//sets language and volume at the start of program
volChange();
if(localStorage.getItem("lang") == null){  setLanguage("en");}
setLanguage(localStorage.getItem("lang"));


//OPTIONS
function iOptions(){

  var idString = document.body.firstChild.id;


  //loads options menu (options.html)
  $("#" + idString).load("../options/options.html",function(){

      //sets ids
      document.body.firstChild.id = "remBody";
      document.body.firstChild.className = "";
      document.documentElement.id = "htmlSettings"


      //MUSIC MENU BUTTON
      var elements = document.querySelectorAll("#mus");
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {


          //saves id and plays sound effect
          okSetting.play();
          var idString = document.body.firstChild.id;


          //loads music menu music.html)
          $("#" + idString).load("../options/music.html",function(){

            if(localStorage.getItem("mute") == "false"){
              document.getElementById("muteButton").checked = true;
            }
            else if(localStorage.getItem("mute") == "true"){ 
              document.getElementById("muteButton").checked = false;  
            }
          

            //BACK BUTTON
            var elements = document.querySelectorAll("#settingBack");
            var song = localStorage.getItem('mus');
            for (var i = 0; i < elements.length; i++) {
              elements[i].addEventListener("click", function() {


                //saves id and plays sound effect
                backSetting.play();
                var idString = document.body.firstChild.id;


                if(!(document.getElementById("url").value === "") && document.getElementById("url").value != song){
                  localStorage.setItem('mus', document.getElementById("url").value);
                  musicChange();
                  muteChange();
                }


                //loads options menu (options.html)
                iOptions();

              })

            }   


            //MUTE BUTTON
            var elements = document.querySelectorAll("#muteButton");
            document.getElementById("url").value = localStorage.getItem('mus');
            for (var i = 0; i < elements.length; i++) {
              elements[i].addEventListener("click", function() {
            

                //plays sound effect
                okSetting.play();


                if(localStorage.getItem("mute") == "false"){
                  localStorage.setItem("mute", "true")
                  document.getElementById("bgMusic").src = document.getElementById("bgMusic").src + "&mute=1";
                }

                else if(localStorage.getItem("mute") == "true"){
                  localStorage.setItem("mute", "false")
                  document.getElementById("bgMusic").src = document.getElementById("bgMusic").src.replace('&mute=1',''); 
                }

              })
            }   
          })
        })
      } 




      //VOLUME MENU BUTTON
      var elements = document.querySelectorAll("#vol");
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {


          //saves id and plays sound effect
          okSetting.play();
          var idString = document.body.firstChild.id;

          //loads volume menu (volume.html)
          $("#" + idString).load("../options/volume.html",function(){


            //Controls sound effect volume
            document.getElementById("sVol").value = localStorage.getItem("seVol") * 100;
            document.getElementById("sVol").addEventListener("change", function() {
            
              okSetting.play();
              okMain.volume = document.getElementById("sVol").value / 100;  
              okSetting.volume = document.getElementById("sVol").value / 100;  
              okChannel.volume = document.getElementById("sVol").value / 100;  
              okChannel2.volume = document.getElementById("sVol").value / 100;  
              backSetting.volume = document.getElementById("sVol").value / 100;  
              backMain.volume = document.getElementById("sVol").value / 100;  
              backChannel.volume = document.getElementById("sVol").value / 100;  

            })


            //Controls channel volume
            document.getElementById("cVol").value = localStorage.getItem("cVol") * 100;
            document.getElementById("cVol").addEventListener("change", function() {
            
              okSetting.play();            
              localStorage.setItem('cVol', document.getElementById("cVol").value / 100);
              
            })



            //BACK BUTTON
            var elements = document.querySelectorAll("#settingBack");
            for (var i = 0; i < elements.length; i++) {
              elements[i].addEventListener("click", function() {


                //saves id and plays sound effect
                backSetting.play();
                var idString = document.body.firstChild.id;

                localStorage.setItem("seVol",  document.getElementById("sVol").value / 100);
                iOptions();

              })
            }
          
          })

        })

      }





      //REMOVE CHANNEL MENU BUTTON
      var elements = document.querySelectorAll("#remCh");
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {


          //saves id and plays sound effect
          okSetting.play();
          var idString = document.body.firstChild.id;


          //loads remove channels menu (removeChannels.html)
          $("#" + idString).load("../options/removeChannels.html",function(){

            document.body.firstChild.id = "remBody";


            //BACK BUTTON
            var elements = document.querySelectorAll("#settingBack");
            for (var i = 0; i < elements.length; i++) {
              elements[i].addEventListener("click", function() {

                //saves id and plays sound effect
                backSetting.play();
                var idString = document.body.firstChild.id;

                iOptions();

              })
            }

          })

        })
      }



      //REMOVE PLAYLIST MENU BUTTON
      var elements = document.querySelectorAll("#remPl");
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {

          //saves id and plays sound effect
          okSetting.play();
          var idString = document.body.firstChild.id;


          //loads remove channels menu (removeChannels.html)
          $("#" + idString).load("../options/removePlaylists.html",function(){

            document.body.firstChild.id = "remBody";


            //BACK BUTTON
            var elements = document.querySelectorAll("#settingBack");
            for (var i = 0; i < elements.length; i++) {
              elements[i].addEventListener("click", function() {

                //saves id and plays sound effect
                backSetting.play();
                var idString = document.body.firstChild.id;

                iOptions();

              })
            }

          })

        })
      }



      //LANGUAGE MENU BUTTON
      var elements = document.querySelectorAll("#lang");
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {


          //saves id and plays sound effect
          okSetting.play();
          var idString = document.body.firstChild.id;


          //loads remove language menu (language.html)
          $("#" + idString).load("../options/language.html",function(){


            langEventHandlers();

            //BACK BUTTON
            var elements = document.querySelectorAll("#settingBack");
            for (var i = 0; i < elements.length; i++) {
              elements[i].addEventListener("click", function() {

                backSetting.play();
                var idString = document.body.firstChild.id;

                iOptions();

              })

            }

          

          })


        })
      } 




    //BACK BUTTON
    var elements = document.querySelectorAll("#settingBack");
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", function() {


        //saves id
        var idString = document.body.firstChild.id;



          //saves id and plays sound effect
          backMain.play();
          var idString = document.body.firstChild.id;
    

          //loads mein menu (base.html)
          $("#" + idString).load("../base.html",function(){
            //sets ids
            document.body.firstChild.id = "body";
            document.documentElement.id = ""
          });

        
       

        
      })
    }

  });

}


//-----------------------INDEX BUTTONS----------------------------------//


//PLAY PLAYLIST 
var elements = document.querySelectorAll("#playPlaylist");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {

    //saves id and plays sound effect
    okMain2.play();
    var idString = document.body.firstChild.id;


    //loads play playlist menu (playPlaylist.html)
    $("#" + idString).load("../play/playPlaylist.html",function(){
  
      //sets ids
      document.body.firstChild.id = "def";
      document.body.firstChild.className = "playVid";

      //sets channel volume
      document.getElementById("curPlaying").volume = localStorage.getItem("cVol");
   

      //BACK BUTTON
      var elements = document.querySelectorAll("#backChannel");
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {


          //saves id and plays sound effect
          backSetting.play();
          var idString = document.body.firstChild.id;

          //if user is on choose playlist screen, loads play playlist menu (playPlaylist.html.html)
          if(document.getElementById("backPlaylist") == null){
            //loads main menu (base.html)
            $("#" + idString).load("../base.html",function(){
              document.body.firstChild.id = "body";      
            });
          }

        })
      }


      //OPTIONS BUTTON
      var elements = document.querySelectorAll("#optionsChannel");
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {


          //saves id and plays sound effect
          okSetting.play();
          var idString = document.body.firstChild.id;


          //loads play options menu (options.html)
          iOptions();
  
        })
      }

    });

  });
}


//PLAY CHANNEL
var elements = document.querySelectorAll("#playChannel");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {

    //saves id and plays sound effect
    okMain2.play();
    var idString = document.body.firstChild.id;


    //loads play channel menu (playChannel.html)
    $("#" + idString).load("../play/playChannel.html",function(){


      //sets channel volume
      document.getElementById("curPlaying").volume = localStorage.getItem("cVol");
  

      //sets ids
      document.body.firstChild.id = "def";
      document.body.firstChild.className = "playVid";


      //BACK BUTTON
      var elements = document.querySelectorAll("#backChannel");
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {


          //saves id and plays sound effect
          backMain.play();
          var idString = document.body.firstChild.id;

        
          //loads main menu (base.html)
          $("#" + idString).load("../base.html",function(){
            document.body.firstChild.id = "body";      
          });
    

        })

      }


      //OPTIONS BUTTON
      var elements = document.querySelectorAll("#optionsChannel");
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {


          //saves id and plays sound effect
          okSetting.play();
          var idString = document.body.firstChild.id;

          //loads options menu (options.html)
          iOptions();

    
        })
      }


    });


  });
}

//ADD PLAYLIST
var elements = document.querySelectorAll("#addPlaylist");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {

    //saves id and plays sound effect
    var idString = document.body.firstChild.id;        
    okSetting.play();


    //loads add playlist menu (addPlaylist.html)
    $("#" + idString).load("../add/addPlaylist.html",function(){

      //sets ids
      document.body.firstChild.id = "remBody";
      document.body.firstChild.className = "";
      document.documentElement.id = "htmlSettings"



      //BACK BUTTON
      var elements = document.querySelectorAll("#addPBack");
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {

          //saves id and plays sound effect
          backMain.play();
          var idString = document.body.firstChild.id;

        
          //loads main menu (base.html)
          $("#" + idString).load("../base.html",function(){
            document.body.firstChild.id = "body";  
            document.documentElement.id = ""
    
          });
      
        });
      }

    });


  });
}

//ADD CHANNEL
var elements = document.querySelectorAll("#addChannel");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {

    //saves id and plays sound effect
    okSetting.play();
    var idString = document.body.firstChild.id;


    //loads add channels menu (addChannel.html)
    $("#" + idString).load("../add/addChannel.html",function(){


      //sets ids
      document.body.firstChild.id = "remBody";
      document.body.firstChild.className = "";
      document.documentElement.id = "htmlSettings"


      //BACK BUTTON
      var elements = document.querySelectorAll("#addCBack");
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {

          //saves id and plays sound effect
          backMain.play();
          var idString = document.body.firstChild.id;

        
          //loads main menu (base.html)
          $("#" + idString).load("../base.html",function(){
            document.body.firstChild.id = "body";  
            document.documentElement.id = ""
    
          });

        });
      }
    });

  });
}


//OPTIONS
var elements = document.querySelectorAll("#optionsChannel");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {

    //saves id and plays sound effect
    okMain.play();
    var idString = document.body.firstChild.id;

    
    //loads options menu (options.html)
    iOptions();


  }); 
}

//BACK
var elements = document.querySelectorAll("#backChannel");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {

    const splash = document.createElement('div'); splash.classList.add('splashControls'); 
    
    if(localStorage.getItem("lang") ==  'en'){
      splash.innerHTML = "Next Channel - N <br> Previous Channel - P <br> Random Channel - R <br> Save Channel - F <br> Next Page - <span onclick=\"location.href = 'misc/doom/index.html';\">D</span> <br> Previous Page - A <p style=\"position: absolute;bottom: 0; margin-right: 2vw; right: 0;\"> Created by George S.</p>";
    }
    else if(localStorage.getItem("lang") ==  'es'){
      splash.innerHTML = "Siguiente canal - N <br> Canal anterior - P <br> Canal aleatorio - R <br> Guardar canal - F <br> Siguiente página - <span onclick=\"location.href = 'misc/doom/index.html';\">D</span> <br> Página anterior - A <p style=\"position: absolute;bottom: 0; margin-right: 2vw; right: 0;\"> Creado por George S.</p>";    
    }
    else if(localStorage.getItem("lang") ==  'fr'){
      splash.innerHTML = "Chaîne suivante - N <br> Chaîne précédente - P <br> Chaîne aléatoire - R <br> Enregistrer la chaîne - F <br> Page suivante - <span onclick=\"location.href = 'misc/doom/index.html';\">D</span> <br> Page précédente - A <p style=\"position: absolute;bottom: 0; margin-right: 2vw; right: 0;\"> Créé par George S.</p>";   
    }
    else if(localStorage.getItem("lang") ==  'gr'){
      splash.innerHTML = "Nächster Kanal - N <br> Vorheriger Kanal - P <br> Zufälliger Kanal - R <br> Kanal speichern - F <br> Nächste Seite - <span onclick=\"location.href = 'misc/doom/index.html';\">D</span> <br> Vorherige Seite - A <p style=\"position: absolute;bottom: 0; margin-right: 2vw; right: 0;\"> Erstellt von George S.</p>";    
    }
    else if(localStorage.getItem("lang") ==  'ar'){
      splash.innerHTML = "القناة التالية - N <br> القناة السابقة - P <br> القناة العشوائية - R <br> حفظ القناة - F <br> الصفحة التالية - <span onclick=\"location.href = 'misc/doom/index.html';\">D</span> <br> الصفحة السابقة - A <p style=\"position: absolute;bottom: 0; margin-right: 2vw; right: 0;\"> تم الإنشاء بواسطة جورج S.</p>";
    }
    else if(localStorage.getItem("lang") ==  'ru'){
      splash.innerHTML = "Следующий канал - N <br> Предыдущий канал - P <br> Случайный канал - R <br> Сохранить канал - F <br> Следующая страница - <span onclick=\"location.href = 'misc/doom/index.html';\">D</span> <br> Предыдущая страница - A <p style=\"position: absolute;bottom: 0; margin-right: 2vw; right: 0;\"> Создано Георгом С.</p>";
    }
    else if(localStorage.getItem("lang") ==  'ch'){
      splash.innerHTML = "下一个频道 - N <br> 上一个频道 - P <br> 随机频道 - R <br> 保存频道 - F <br> 下一页 - <span onclick=\"location.href = 'misc/doom/index.html';\">D</span> <br> 上一页 - A <p style=\"position: absolute;bottom: 0; margin-right: 2vw; right: 0;\"> 创建者：George S.</p>";
    }
    else if(localStorage.getItem("lang") ==  'jp'){
      splash.innerHTML = "次のチャンネル - N <br> 前のチャンネル - P <br> ランダムのチャンネル - R <br> チャンネルを保存する - F <br> 次のページ - <span onclick=\"location.href = 'misc/doom/index.html';\">D</span> <br> 前のページ - A <p style=\"position: absolute;bottom: 0; margin-right: 2vw; right: 0;\"> 作成者：ジョージ・S．</p>";
    }
    const body = document.getElementsByTagName('body')[0];
    body.insertBefore(splash, body.firstChild);  
    splashOut.play();

    
    splash.style.opacity = 1;

    var splashScreen = document.querySelector('.splashControls');
        splashScreen.addEventListener('click',()=>{
          document.getElementById("bgMusic").src = document.getElementById("bgMusic").src;

          splashIn.play();

          splashScreen.style.opacity = 0;
          setTimeout(()=>{
             splashScreen.remove()},1200)
        })


  }); 
}
  
//----------------------------SETTINGS FUNCTIONS--------------------------------//

//controls language
function setLanguage(lang) {
  localStorage.setItem('lang', lang);

  $('[lang]').each(function() {
    if ($(this).attr('lang') === lang) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });

  //if page changes, makes sure language stays correct
  $(document.body.firstChild).on('DOMSubtreeModified', function(){
    $('[lang]').each(function() {
      if ($(this).attr('lang') === lang) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

    focusableElements = document.querySelectorAll(
      'button:not([tabindex="-1"])[lang="'+ CSS.escape(localStorage.getItem("lang"))+'"]'      
    );
  });
}

//controls the music, gets song url from local storage 
function musicChange(){


  //if music setting is null, sets it to default track
  if(localStorage.getItem("mus") == null){

    document.getElementById("bgMusic").src = "https://www.youtube.com/embed/5k3uAtQ8vlg?rel=0&autoplay=1&loop=1";
    localStorage.setItem('mus', "https://www.youtube.com/embed/5k3uAtQ8vlg");
  
  }
  //sets song url
  else{
    document.getElementById('bgMusic').src = localStorage.getItem("mus") + "?rel=0&autoplay=1&loop=1";
  }


}



//controls whether music is muted or not 
function muteChange(){

  //if music setting is null, sets it to unmmuted, otherwise it sets it via the user setting
  if(localStorage.getItem("mute") == null){
    localStorage.setItem("mute", "false");
    document.getElementById("bgMusic").src = document.getElementById("bgMusic").src.replace('&mute=1','');
  }
  else if(localStorage.getItem("mute") == "true" && !(document.getElementById("bgMusic").src.includes("&mute=1"))){
    document.getElementById("bgMusic").src = document.getElementById("bgMusic").src + "&mute=1";
  }
  else if(localStorage.getItem("mute") == "false"){
    document.getElementById("bgMusic").src = document.getElementById("bgMusic").src.replace('&mute=1','');
  }

}



//controls the volume for sound effects and channels, gets the values from local storage
function volChange(){


  //if setting is null, sets default sound effect volume
  if(localStorage.getItem("seVol") == null){
    
    localStorage.setItem('seVol', "1");
  
  }
  else{


    //sets volume for sound effects
    okMain.volume = parseFloat(localStorage.getItem("seVol"));  
    okMain2.volume = parseFloat(localStorage.getItem("seVol"));  
    okSetting.volume = parseFloat(localStorage.getItem("seVol"));  
    okChannel.volume = parseFloat(localStorage.getItem("seVol"));  
    okChannel2.volume = parseFloat(localStorage.getItem("seVol"));  
    backSetting.volume = parseFloat(localStorage.getItem("seVol"));  
    backMain.volume = parseFloat(localStorage.getItem("seVol"));  
    backChannel.volume = parseFloat(localStorage.getItem("seVol"));  
    splashIn.volume = parseFloat(localStorage.getItem("seVol"));  
    splashOut.volume = parseFloat(localStorage.getItem("seVol"));  

    

  }
  //if setting is null, sets default sound effect volume
  if(localStorage.getItem("cVol") == null){
    
    localStorage.setItem('cVol', "1");
  
  }
  

}


//language eventhandler
function langEventHandlers(){

  const langArray = ["en", "es", "fr", "gr", "ar", "ru", "ch", "jp"]

  langArray.forEach(function (element){
    
    console.log(element);
    
    var elements = document.querySelectorAll("#" + element);
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", function() {
    
        okSetting.play();
        localStorage.setItem('lang', element);
        setLanguage(element);


      })

    }
    
  });

  
}


//------------------------------CONTROLLER NAVIGATION---------------------------//



/*Controller navigation in the menus is mainly handled by having the
user use a button to cycle through and focus input elements, then clicking them
with another button. However the next and previous channel buttons are handled 
by just dispatching a keydown event, which a listener in playPlaylist/playChannel.js 
responds too
*/

//used for constantly calling update loop
const rAF = window.mozRequestAnimationFrame || window.requestAnimationFrame; 

//when gamepad is connected, start listening for button input
window.addEventListener('gamepadconnected', function() {
  updateLoop();
}); 


//constantly recursivley calls itself to check for button input
function updateLoop() {
  rAF(updateLoop);
}


//gets an array of all buttons clickable by the controller (focusbaleElements)
var focusableElements = document.querySelectorAll(
  'button:not([tabindex="-1"])[lang="'+ CSS.escape(localStorage.getItem("lang"))+'"], input:not([tabindex="-1"])[lang="'+ CSS.escape(localStorage.getItem("lang"))+'"]'
);


//sets current index of focuabsle elements
let current = 0;


//controls what buttons do what
function updateLoop() {

  //gets gamepad object 
  const gamepad = navigator.getGamepads()[0]

  //A - Select:Clicks current element
  const gamepadA = gamepad.buttons[0]
  if (gamepadA.pressed) { clickItem(current)}

  //B - Back:focuses the back button and clicks it
  const gamepadB = gamepad.buttons[1]
  if (gamepadB.pressed && !(document.getElementById('iPlay'))) { 

    document.querySelector('[id*="Back" i]').focus();
    document.querySelector('[id*="Back" i]').click();
    
  }

  //Left Bumper - Focuses previous menu item
  const gamepadBumperL = gamepad.buttons[4]
  if (gamepadBumperL.pressed) { prevItem(current) }
  
  //Right Bumper - Focuses next menu item
  const gamepadBumperR = gamepad.buttons[5]
  if (gamepadBumperR.pressed) { nextItem(current) }
  
  //Left Trigger - Plays next channel
  const gamepadLT = gamepad.buttons[6]
  if (gamepadLT.pressed) { document.dispatchEvent(new KeyboardEvent('keydown', {'key':'p'} )); }

  //Right Trigger - Plays previous channel
  const gamepadRT = gamepad.buttons[7]
  if (gamepadRT.pressed) { document.dispatchEvent(new KeyboardEvent('keydown', {'key':'n'} )); }

  //Back - Exits channel
  const gamepadBack = gamepad.buttons[8]
  if (gamepadBack.pressed) { document.exitFullscreen();}

  //Settings/Start - Settings:focuses the settings button and clicks it
  const gamepadSettings = gamepad.buttons[9]
  if (gamepadSettings.pressed && document.documentElement.id !== 'htmlSettings') { 
    
    document.querySelector('[id*="options" i]').focus();
    document.querySelector('[id*="options" i]').click();

  } 

  //D-Pad Up - Random Channel:plays a random channel
  const gamepadUp = gamepad.buttons[12]
  if(gamepadUp.pressed){document.dispatchEvent(new KeyboardEvent('keydown', {'key':'r'} ));}
    
  //D-Pad Down - Fav Channel:Copies a channel from the playlist into the individual channel thing
  const gamepadDown = gamepad.buttons[13]
  if(gamepadDown.pressed){document.dispatchEvent(new KeyboardEvent('keydown', {'key':'f'} ));}

  //D-Pad Left - Prev Page:focuses the previous page button and clicks it
  const gamepadLeft = gamepad.buttons[14]
  if (gamepadLeft.pressed) { document.dispatchEvent(new KeyboardEvent('keydown', {'key':'a'} )); }

  //D-Pad Right - Next Page:focuses the next page button and clicks it
  const gamepadRight = gamepad.buttons[15]
  if (gamepadRight.pressed){ document.dispatchEvent(new KeyboardEvent('keydown', {'key':'d'} )); }
  
  //used to set how long before another button press is registered
  setTimeout(() => rAF(updateLoop), 125)
}


//focuses previous element
function prevItem(index) {

  --current;

  //if current will lead to index out of bounds, focuses the last element
  if(current < 0){
    current = focusableElements.length - 1;
  }

  focusableElements[current].focus()
}

//focuses next element
function nextItem(index) {
  
  ++current;

  //if current will lead to index out of bounds, focuses the last element
  if(current >  focusableElements.length - 1){
    current = 0;
  }

  focusableElements[current].focus()
}


//clicks current focused element
function clickItem(current) {
  focusableElements[current].click();
}

