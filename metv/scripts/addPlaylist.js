//array of individual playlists
var playlists = JSON.parse(localStorage.getItem("playlists"));

if (playlists == null){
    playlists = [];
}



//playlist object that stores channel metadata
function playlist() {
  return {
    
    title: "",
    logoUrl: "",
    url: "",
    pgNmbr: 0,
    isLocal: false
     
  };
};



//adds channel
var elements = document.querySelectorAll("#okay");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
  
    okSetting.play();
   
    //creates and sets variables of channel to be pushed
    tempPlaylist = new playlist();
    tempPlaylist.title = document.getElementById("name").value;
  
    tempPlaylist.logoUrl =  document.getElementById("logoUrl").value;
    


    //is playlist is local, ask user for file prompt
    if(document.getElementById("isLocal").checked){
      tempPlaylist.isLocal = true;
      var input = document.createElement('input');
      input.type = 'file';

      input.onchange = e => { 
        
        // getting a hold of the file reference
        var file = e.target.files[0]; 

        // setting up the reader
        var reader = new FileReader();
        reader.readAsText(file,'UTF-8');

        // here we tell the reader what to do when it's done reading...
        reader.onload = readerEvent => {
          var content = readerEvent.target.result; // this is the content!
          
          tempPlaylist.url = content;
          console.log( tempPlaylist.url );
          document.getElementById("url").value = file.name;


          //repeated if statement because the other one will run before 
          //the reader is finished, and thus wont push it into the array
          if(!(tempPlaylist.url === "" || tempPlaylist.title === "")){
            //pushes channel to array
            playlists.push(tempPlaylist);
            document.getElementById("mform").reset();
            document.activeElement.blur()
            displayAlert(0);
          }
          else{ displayAlert(1);}
          

        }
      }

      input.click();
    }
    //if playlist isnt local
    else{
      tempPlaylist.url = document.getElementById("url").value;
      tempPlaylist.isLocal = false;

      //if url and title arent empty, push
      if(!(tempPlaylist.url === "" || tempPlaylist.title === "")){
        //pushes channel to array
        playlists.push(tempPlaylist);
        document.getElementById("mform").reset();
        document.activeElement.blur();
        displayAlert(0);
      }
      else {displayAlert(1);}
    }
  });
}
  

//pushes channels array to local storage
var elements = document.querySelectorAll("#addPBack");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {

    //deletes previous storage item so there are no duplicates
    localStorage.removeItem('playlists');

    //pushes it to storage
    localStorage.setItem('playlists', JSON.stringify(playlists));
    
  });
}

function displayAlert(mode){
  console.log("called");
  if (mode == 0){
    if(localStorage.getItem("lang") ==  'en'){window.alert("Playlist Added, press \"back\" to save changes.");}
    else if(localStorage.getItem("lang") == 'es'){window.alert("Lista de reproducción añadida, presione \"volver\" para guardar los cambios.");}
    else if(localStorage.getItem("lang") == 'fr'){window.alert("Playlist ajoutée, appuyez sur \"retour\" pour enregistrer les modifications.");}
    else if(localStorage.getItem("lang") == 'gr'){window.alert("Wiedergabeliste hinzugefügt, drücken Sie \"Zurück\", um die Änderungen zu speichern.");}
    else if(localStorage.getItem("lang") == 'ar'){window.alert("تمت إضافة قائمة التشغيل ، اضغط على \"العودة\" لحفظ التغييرات.");}
    else if(localStorage.getItem("lang") == 'ru'){window.alert("Плейлист добавлен, нажмите \"назад\", чтобы сохранить изменения.");}
    else if(localStorage.getItem("lang") == 'ch'){window.alert("播放列表已添加，请按\"返回\"保存更改。");}
    else if(localStorage.getItem("lang") == 'jp'){window.alert("プレイリストが追加されました。「戻る」を押して変更を保存してください。");}
  }
  else {
    if(localStorage.getItem("lang") ==  'en'){window.alert("Please fill out the required fields");}
    else if(localStorage.getItem("lang") == 'es'){window.alert("Por favor, complete los campos requeridos");}
    else if(localStorage.getItem("lang") == 'fr'){window.alert("Veuillez remplir les champs obligatoires");}
    else if(localStorage.getItem("lang") == 'gr'){window.alert("Bitte füllen Sie die Pflichtfelder aus");}
    else if(localStorage.getItem("lang") == 'ar'){window.alert("يرجى ملء الحقول المطلوبة");}
    else if(localStorage.getItem("lang") == 'ru'){window.alert("Пожалуйста, заполните обязательные поля");}
    else if(localStorage.getItem("lang") == 'ch'){window.alert("请填写必填字段");}
    else if(localStorage.getItem("lang") == 'jp'){window.alert("必須項目を入力してください");}
  }
}

  
//adds channel
var elements = document.querySelectorAll("#isLocal");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
    console.log("TEST");
  })

};
