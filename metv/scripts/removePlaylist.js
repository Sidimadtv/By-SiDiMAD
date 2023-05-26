 //declares ichannel array
 var playlists = [];


  //loads channels and their respective buttons
  function remPlaylistsLoad(){

    //loads channel from local storage
    playlists = JSON.parse(localStorage.getItem("playlists"));


    if (playlists != null){
     
      //creates button for each channel
      playlists.forEach((playlist, i) => {

        console.log(i);
        const ch = document.createElement("button");
      
        ch.id = i;
        ch.innerHTML = playlist.title;
      
    
        ch.className = 'settingsButton';

        ch.onclick = function () { removePl(playlist.title, i); };
        document.getElementById('remChannelWrapper').appendChild(ch);

      });
    } 

  

  };


  function removePl(title, id){
    okSetting.play();
    document.getElementById(id).style.display = 'none';

    let tempPlaylists = [];

    playlists.forEach((playlist, i) => {

      console.log(title + id);
      console.log(playlist.title + i);

      if (id !== i){
        tempPlaylists.push(playlist);
      }

    });
    playlists = tempPlaylists;

      
    //deletes previous storage item so there are no duplicates
    localStorage.removeItem('playlists');

    //pushes it to storage
    localStorage.setItem('playlists', JSON.stringify(playlists));
     


  }

  
  //removes all
  var elements = document.querySelectorAll("#removeAll");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function() {

    //removes all buttons
    document.getElementById("remChannelWrapper").innerHTML = "";

    //deletes previous storage item so there are no duplicates
    localStorage.removeItem('playlists');

    okSetting.play();
    remPlaylistsLoad();

    })
  }