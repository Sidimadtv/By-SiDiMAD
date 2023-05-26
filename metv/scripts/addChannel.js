//array of individual channels
var iChannels = JSON.parse(localStorage.getItem("iChannels"));

if (iChannels == null){
  iChannels = [];
}



//channel object that stores channel metadata
function channel() {
  return {
    
      title: "",
      logoUrl: "",
      url: "",
      pgNmbr: 0
     
  }; 
};



//adds channel
var elements = document.querySelectorAll("#okay");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
  
  //plays sound effect
  okSetting.play();
  //creates and sets variables of channel to be pushed
  tempChannel = new channel();
  tempChannel.title = document.getElementById("name").value;
  tempChannel.logoUrl =  document.getElementById("logoUrl").value;
  tempChannel.url = document.getElementById("url").value;
  
  //if valid
  if(!(tempChannel.url === "" || tempChannel.title === "")){
    //pushes channel to array
    iChannels.push(tempChannel);
    document.getElementById("mform").reset();
    document.activeElement.blur()
    if(localStorage.getItem("lang") ==  'en'){window.alert("Channel Added, press \"back\" to save changes.");}
    else if(localStorage.getItem("lang") == 'es'){window.alert("Canal añadido, presione \"volver\" para guardar los cambios.");}
    else if(localStorage.getItem("lang") == 'fr'){window.alert("Chaîne ajoutée, appuyez sur \"retour\" pour enregistrer les modifications.");}
    else if(localStorage.getItem("lang") == 'gr'){window.alert("Kanal hinzugefügt, drücken Sie \"Zurück\", um die Änderungen zu speichern.");}
    else if(localStorage.getItem("lang") == 'ar'){window.alert("تمت إضافة القناة ، اضغط على \"العودة\" لحفظ التغييرات.");}
    else if(localStorage.getItem("lang") == 'ru'){window.alert("Канал добавлен, нажмите \"назад\", чтобы сохранить изменения.");}
    else if(localStorage.getItem("lang") == 'ch'){window.alert("频道已添加，请按\"返回\"保存更改。");}
    else if(localStorage.getItem("lang") == 'jp'){window.alert("チャンネルが追加されました。「戻る」を押して変更を保存してください。");}
  }
  //if not valid
  else{
    if(localStorage.getItem("lang") ==  'en'){window.alert("Please fill out the required fields");}
    else if(localStorage.getItem("lang") == 'es'){window.alert("Por favor, complete los campos requeridos");}
    else if(localStorage.getItem("lang") == 'fr'){window.alert("Veuillez remplir les champs obligatoires");}
    else if(localStorage.getItem("lang") == 'gr'){window.alert("Bitte füllen Sie die Pflichtfelder aus");}
    else if(localStorage.getItem("lang") == 'ar'){window.alert("يرجى ملء الحقول المطلوبة");}
    else if(localStorage.getItem("lang") == 'ru'){window.alert("Пожалуйста, заполните обязательные поля");}
    else if(localStorage.getItem("lang") == 'ch'){window.alert("请填写必填字段");}
    else if(localStorage.getItem("lang") == 'jp'){window.alert("必須項目を入力してください");}
  }
      
});
  
}

var elements = document.querySelectorAll("#addCBack");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {

    //deletes previous storage item so there are no duplicates
    localStorage.removeItem('iChannels');

    //pushes it to storage
    localStorage.setItem('iChannels', JSON.stringify(iChannels));
    
  });

}




 