 //declares ichannel array
 var iChannels = [];


  //loads channels and their respective buttons
  function remChannelsLoad(){

    //loads channel from local storage
    iChannels = JSON.parse(localStorage.getItem("iChannels"));



    if (iChannels != null){
    //creates button for each channel
    iChannels.forEach((channel, i) => {


        const ch = document.createElement("button");
      
        ch.id = i;
        ch.innerHTML = channel.title;
          
        ch.className = 'settingsButton';

        ch.onclick = function () { removeCh(channel.title, i); };
        document.getElementById('remChannelWrapper').appendChild(ch);

    });
    }
  };


  function removeCh(title, id){

    document.getElementById(id).style.display = 'none';

    let tempChannels = [];

    iChannels.forEach((channel, i) => {

      console.log(title + id);
      console.log(channel.title + i);

      if (id !== i){
        tempChannels.push(channel);
      }

    });
    iChannels = tempChannels;
    okSetting.play();
      
    //deletes previous storage item so there are no duplicates
    localStorage.removeItem('iChannels');

    //pushes it to storage
    localStorage.setItem('iChannels', JSON.stringify(iChannels));
     


  }


  //removes all
  var elements = document.querySelectorAll("#removeAll");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function() {
 
      okSetting.play();
      //removes all buttons
      document.getElementById("remChannelWrapper").innerHTML = "";

      //deletes previous storage item so there are no duplicates
      localStorage.removeItem('iChannels');

    
      remChannelsLoad();

    })

  }