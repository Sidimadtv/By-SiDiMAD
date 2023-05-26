// parser
var M3U8FileParser=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){"use strict";var n=r(1),a=/\"/g,s=r(3),i={YES:!0,NO:!1};function o(e){return e in i?i[e]:e}e.exports=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r="",i="",u=arguments[2]||{},c=0;c<e.length;c++)switch(e[c].charCodeAt(0)){case n.SPACE:r="";continue;case n.EQUAL:i=r,r="";continue;case n.COMMA:(i=s(i))&&(u[i]=t?o(r):r),i="",r="";continue;case n.QUOTE:a.lastIndex=c+1;var E=a.exec(e),p=e.slice(c+1,E.index);i&&(u[s(i)]=p),c=E.index+1;continue;default:r+=e[c]}return r&&i&&(u[s(i)]=r),u}},function(e,t,r){"use strict";e.exports={SPACE:" ".charCodeAt(0),COLON:":".charCodeAt(0),COMMA:",".charCodeAt(0),EQUAL:"=".charCodeAt(0),QUOTE:'"'.charCodeAt(0),MINUS:"-".charCodeAt(0),PERIOD:".".charCodeAt(0),NEW_LINE_LF:"\n".charCodeAt(0),NEW_LINE_CR:"\r".charCodeAt(0),BACK_SLASH:"\\".charCodeAt(0),HASH:"#".charCodeAt(0),AT:"@".charCodeAt(0),NUMBER_START:"0".charCodeAt(0),NUMBER_STOP:"9".charCodeAt(0)}},function(e,t,r){"use strict";e.exports={BASIC:"BASIC",MEDIA_SEGMENT:"MEDIA_SEGMENT",MEDIA_PLAYLIST:"MEDIA_PLAYLIST",MASTER_PLAYLIST:"MASTER_PLAYLIST",TRALING_MEDIA_SEGMENT:"TRAILING_MEDIA_SEGMENT",URL_SEGMENT_ENDING:"URL_SEGMENT_ENDING",GROUPING:"GROUPING"}},function(e,t,r){"use strict";var n=r(1);e.exports=function(e){var t="";e=e.toLowerCase();for(var r=0;r<e.length;r++)e[r].charCodeAt(0)!==n.MINUS?t+=e[r]:t+=(e[++r]||"").toUpperCase();return t}},function(e,t,r){"use strict";e.exports=function(e){var t={length:0,offset:0};t.length=parseInt(e);var r=e.lastIndexOf("@");return~r&&(t.offset=parseInt(e.slice(r+1))),t}},function(e,t,r){"use strict";e.exports=function(e){var t=new Date(e.trim());return isNaN(t.getTime()),t}},function(e,t,r){"use strict";var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var a=r(2),s=(r(1),r(7)),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.reset()}return n(e,[{key:"read",value:function(e){var t=e.length;e=e.trim();for(var r="",n=!1,a=!1,s=0,i=0,o=0,u="",c=0;c<t;c++)s=(s=(i=e.indexOf("\n",c))>-1&&i||e.indexOf("\r",c))>-1&&s||t,u=e.slice(c,s).trim(),c=s,a="#"===u[0],o=(n="#EXT"===u.slice(0,4))&&u.indexOf(":")||-1,!(r=n&&~o&&u.slice(0,o))&&a&&(r=u),this.invokeParser(r,u.slice(o+1),a)}},{key:"invokeParser",value:function(e,t,r){if(e&&t){var n=s.get(e);return n?this.dataScope(n,n.parser(t,this.result)):void 0}if((!t||!r)&&t){var a=s.get("URL");this.dataScope(a,a.parser(t,this.result))}}},{key:"dataScope",value:function(e,t){switch(e.scope){case a.MASTER_PLAYLIST:this.currentSegmentData.isMasterPlaylist=!0;case a.MEDIA_SEGMENT:this.currentSegmentData[e.key]=t;break;case a.URL_SEGMENT_ENDING:this.currentSegmentData[e.key]=t,this.result.segments.push(this.currentSegmentData),this.currentSegmentData=Object.assign({},this.trailingData);break;case a.TRALING_MEDIA_SEGMENT:this.trailingData[e.key]=t,this.currentSegmentData=Object.assign(this.currentSegmentData,this.trailingData);break;case a.MEDIA_PLAYLIST:case a.BASIC:this.result[e.key]=t;break;case a.GROUPING:this.result[e.group.root]||(this.result[e.group.root]={});for(var r="",n=this.result[e.group.root],s=e.group.path.length,i=0;i<s-1;i++)n[t[r=e.group.path[i]]]||(n[t[r]]={}),n=n[t[r]];n[t[e.group.path[s-1]]]=t}}},{key:"getResult",value:function(){return this.result}},{key:"reset",value:function(){this.trailingData={},this.currentSegmentData={},this.result={isExtendedM3U:!1,segments:[]}}}]),e}();e.exports=i},function(e,t,r){"use strict";var n=r(8),a=r(9),s=r(4),i=r(10),o=r(11),u=r(12),c=r(13),E=r(14),p=r(15),f=r(16),d=r(17),A=r(18),I=r(19),l=r(20),T=r(21),S=r(22),M=r(23),h=r(2),N={"#EXTM3U":{key:"isExtendedM3U",parser:function(){return!0},scope:h.BASIC},"#EXT-X-VERSION":{key:"version",parser:a,scope:h.BASIC},"#EXTINF":{key:"inf",parser:n,scope:h.MEDIA_SEGMENT},"#EXT-X-BYTERANGE":{key:"byteRange",parser:s,scope:h.MEDIA_SEGMENT},"#EXT-X-DISCONTINUITY":{key:"discontinuity",parser:i,scope:h.MEDIA_SEGMENT},"#EXT-X-KEY":{key:"key",parser:o,scope:h.TRALING_MEDIA_SEGMENT},"#EXT-X-MAP":{key:"map",parser:u,scope:h.TRALING_MEDIA_SEGMENT},"#EXT-X-PROGRAM-DATE-TIME":{key:"programDateTime",parser:c,scope:h.MEDIA_SEGMENT},"#EXT-X-DATERANGE":{key:"dateRange",parser:E,scope:h.MEDIA_SEGMENT},"#EXT-X-TARGETDURATION":{key:"targetDuration",parser:p,scope:h.MEDIA_PLAYLIST},"#EXT-X-MEDIA-SEQUENCE":{key:"mediaSequence",parser:f,scope:h.MEDIA_PLAYLIST},"#EXT-X-DISCONTINUITY-SEQUENCE":{key:"discontinuitySequence",parser:d,scope:h.MEDIA_PLAYLIST},"#EXT-X-ENDLIST":{key:"endList",parser:A,scope:h.MEDIA_PLAYLIST},"#EXT-X-PLAYLIST-TYPE":{key:"playlistType",parser:I,scope:h.MEDIA_PLAYLIST},"#EXT-X-I-FRAMES-ONLY":{key:"iFramesOnly",parser:function(){return!0},scope:h.MEDIA_PLAYLIST},"#EXT-X-MEDIA":{key:"media",parser:l,scope:h.GROUPING,group:{root:"media",path:["type","groupId","name"]}},"#EXT-X-STREAM-INF":{key:"streamInf",parser:T,scope:h.MASTER_PLAYLIST},"#EXT-X-I-FRAME-STREAM-INF":{key:"iFrameStreamInf",parser:T,scope:h.MASTER_PLAYLIST},"#EXT-X-SESSION-DATA":{key:"sessionData",parser:S,scope:h.GROUPING,group:{root:"sessionData",path:["dataId","language"]}},"#EXT-X-SESSION-KEY":{key:"sessionKey",parser:o,scope:h.MASTER_PLAYLIST},"#EXT-X-INDEPENDENT-SEGMENTS":{key:"independentSegments",parser:function(){return!0},scope:h.MEDIA_PLAYLIST},"#EXT-X-START":{key:"start",parser:M,scope:h.MEDIA_PLAYLIST},URL:{key:"url",parser:function(e){return e},scope:h.URL_SEGMENT_ENDING}};e.exports={get:function(e){return N[e]||null},set:function(e,t){N[e]=t},add:function(e,t){N[e]=t}}},function(e,t,r){"use strict";var n=/\"/g,a=/\W/g,s=r(1),i=r(3);e.exports=function(e){var t="",r="",o={duration:"",title:""};n.lastIndex=0,a.lastIndex=0;for(var u=0,c=e[u].charCodeAt(0);c>=s.NUMBER_START&&c<=s.NUMBER_STOP||c===s.MINUS||c===s.PERIOD;)o.duration+=e[u],c=++u>e.length-1?"":e[u].charCodeAt(0);o.duration=o.duration&&parseFloat(o.duration)||-1;for(var E=u;E<e.length;E++){switch(e[E].charCodeAt(0)){case s.SPACE:r="";continue;case s.QUOTE:n.lastIndex=E+1;var p=n.exec(e);r=e.slice(E+1,p.index),E=p&&p.index||E,t&&(o[i(t)]=r),r="",t="";continue;case s.EQUAL:if(t=r,r="",e[E+1].charCodeAt(0)===s.QUOTE)continue;a.lastIndex=E+1;var f=a.exec(e);r=e.slice(E+1,f.index),E=e[f.index].charCodeAt(0)===s.COMMA&&f.index-1||f&&f.index||E,t&&(o[i(t)]=r),r="",t="";continue;case s.COMMA:o.title=e.slice(E+1,e.length).trimLeft(),E=e.length;continue;default:r+=e[E]}}return o}},function(e,t,r){"use strict";e.exports=function(e){return parseInt(e.trim())||0}},function(e,t,r){"use strict";e.exports=function(){return!0}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e){return n(e)}},function(e,t,r){"use strict";var n=r(4),a=r(0);e.exports=function(e){var t=a(e);return t.byterange&&(t.byterange=n(t.byterange)),t}},function(e,t,r){"use strict";var n=r(5);e.exports=function(e){return n(e)}},function(e,t,r){"use strict";var n=r(0),a=r(5);e.exports=function(e){var t=n(e);return t.startDate&&(t.startDate=a(t.startDate)),t.endDate&&(t.endDate=a(t.endDate)),t.duration&&(t.duration=parseFloat(t.duration)),t.plannedDuration&&(t.plannedDuration=parseFloat(t.plannedDuration)),t}},function(e,t,r){"use strict";e.exports=function(e){return parseInt(e)||-1}},function(e,t,r){"use strict";e.exports=function(e){return parseInt(e)||0}},function(e,t,r){"use strict";e.exports=function(e){return parseInt(e)||0}},function(e,t,r){"use strict";e.exports=function(e,t){return t.segments.length+1}},function(e,t,r){"use strict";e.exports=function(e){return e.trim()}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e){var t={groupId:"default"};return n(e,!0,t),t}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e){var t=n(e);return"bandwidth"in t&&(t.bandwidth=parseInt(t.bandwidth)),"averageBandwidth"in t&&(t.averageBandwidth=parseInt(t.averageBandwidth)),"resolution"in t&&(t.resolution=parseInt(t.resolution)),"frameRate"in t&&(t.frameRate=parseFloat(t.frameRate)),"codecs"in t&&(t.codecs=t.codecs.split(";")),t}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e){return n(e)}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e){var t=n(e,!0);return"timeOffset"in t&&(t.timeOffset=parseFloat(t.timeOffset)),t}}]);

//player for playing vids
var player = document.getElementById('curPlaying');

//used for holding current url for arrows
var urlGlobal;

//used for holding all channels in a local playlists
var isLocal;

//kinda dont know what promises do
var playPromise;


//holds index of current channel playing, and whether or not something is playing
var curIndex = 0;
var playing = false;


//array of channels for playlists
var channels = [];
var channelButtons = [];


//used for page functionality
var page = 0;


//declares playlists array
var playlists = [];

//makes video element invisible
document.getElementById('curPlaying').style.display='none';


//used for accessing channels array
var j = 0;



//plays playlist
function playC(url, indexP){

  //something is currently playing
  playing = true;

  //plays sound effect and mutes background music
  okChannel2.play();
  if(!(document.getElementById("bgMusic").src.includes("&mute=1"))){
    document.getElementById("bgMusic").src = document.getElementById("bgMusic").src + "&mute=1";
  }

  //sets current index
  curIndex = indexP;

  //for cors pretected channels
  const proxy_url = 'https://phantoma.up.railway.app/';
  url = proxy_url + url;

  console.log(url);
  //unmutes player and sets source
  player.muted = false;
  var hls = new Hls();
  hls.loadSource(url);

  hls.attachMedia(player);
    
  playPromise = player.play();

  //unhides player and makes it full screen
  player.requestFullscreen();
  document.getElementById('curPlaying').style.display='';


}



//gets data from url
function translate(url) {
  var result = fetch(url).then((resp) => {
    return resp.text();
  });
  return result; // As Promise
}



//function for back button when viewing an individual playlist
//resets everything
function backC (){

  document.getElementById('channelWrapper').innerHTML = "";
  channelButtons = [];
  page = 0;
  loadPlaylists(0);

}



//when user exits fullscreen close video
document.addEventListener("fullscreenchange", function() {

  if (!document.fullscreen) {
  
    //plays sound effect and makes video element invisible, sets playing to false
    backChannel.play();
    document.getElementById('curPlaying').style.display='none';
    playing = false;


    try {
  
      if (playPromise !== undefined) {
        playPromise.then(_ => {})
        .catch(error => {
        });
      }
  
      //mutes player and unmutes background music, destroys player 
      muteChange();
      player.muted = 'true';
      hls.destroy();
             
    } catch (error) {
      console.error(error);
    
    }

  } 


});


  //plays next channel in playlist if user clicks n
  document.removeEventListener('keydown', keys);
  var keys = function(e){

    console.log(Math.floor(channelButtons.length / 12));    
    if (e.key == 'd' && playing == false && (Math.floor(channelButtons.length / 12) > 0) && (page < Math.floor(channelButtons.length / 12))){
      okSetting.play();
      document.getElementById('channelWrapper').innerHTML = "";
      page++; 
      display();  
    }
    else if (e.key == 'a' && (page > 0 && playing == false)){
      okSetting.play();
      document.getElementById('channelWrapper').innerHTML = "";
      page--; 
      display();  
    }
    //plays next channel in playlist if user clicks n
    else if (e.key == 'n' && channels != null && playing == true && curIndex + 1 <= channels.length){
      playC(channels[curIndex + 1].url, ++curIndex);
    }
    //plays prev channel in playlist if user clicks p
    else if (e.key == 'p' && channels != null && playing == true && curIndex - 1 >= 0){
      playC(channels[curIndex - 1].url, --curIndex);
    }
    //plays random channel in playlist if user clicks r
    else if (e.key == 'r' && channels != null && playing == true){
      var rand = Math.floor(Math.random() * channels.length);
      playC(channels[rand].url, rand);
    }
    //adds channel from playlist to channel
    else if (e.key == 'f' && channels != null && playing == true){

      //array of individual channels
      var iChannels = JSON.parse(localStorage.getItem("iChannels"));
  
      if (iChannels == null){
        iChannels = [];
      }
  
      okSetting.play();
      //creates and sets variables of channel to be pushed
      let tempChannel = {

        title : channels[curIndex].inf.title,
        logoUrl : channels[curIndex].inf.tvgLogo,
        url : channels[curIndex].url

      }
  
    
      if(!(tempChannel.url === "" || tempChannel.title === "")){
        //pushes channel to array
        iChannels.push(tempChannel);
      
      }
  
      //deletes previous storage item so there are no duplicates
      localStorage.removeItem('iChannels');
  
      //pushes it to storage
      localStorage.setItem('iChannels', JSON.stringify(iChannels));

      //alerts user
      if(localStorage.getItem("lang") == 'en'){window.alert("Channel Saved");}
      else if(localStorage.getItem("lang") == 'es'){window.alert("Canal Guardado");}
      else if(localStorage.getItem("lang") == 'fr'){window.alert("Chaîne enregistrée");}
      else if(localStorage.getItem("lang") == 'gr'){window.alert("Kanal gespeichert");}
      else if(localStorage.getItem("lang") == 'ar'){window.alert("تم حفظ القناة");}
      else if(localStorage.getItem("lang") == 'ru'){window.alert("Канал сохранен");}
      else if(localStorage.getItem("lang") == 'ch'){window.alert("频道已保存");}
      else if(localStorage.getItem("lang") == 'jp'){window.alert("チャンネルが保存されました");}



    }

  }
  document.addEventListener("keydown", keys);



//---------------------------------LOAD-----------------------------------------//



//responsible for the channel buttons for a specific playlist 
function loadC(url,page){

  console.log(isLocal)
  urlGlobal = url;

  //if its the firstime this function is loaded, play sound effect and 
  //set back button id to "backPlaylist", this is to make sure the back button loads the right html
    okChannel.play();
    document.getElementById("backChannel").id = "backPlaylist";
  


  //increases run amount
  document.getElementById('backPlaylist').onclick = function () { backC(); };


  

 
  urlTemp = url;

  let promise = translate(url);
  promise.then((url) => {

    //  isLocal = true;
    if(isLocal){
      url = urlTemp;
    }
    console.log(isLocal);


    //parses m3u file
    var parser = new M3U8FileParser();
    parser.read(url);
    console.log('result', parser.getResult().segments);
    channels = parser.getResult().segments;



    //deletes all button
    document.getElementById('channelWrapper').innerHTML = '';

    
    //used for generating ids
    let pgCounter = 0;

    //creates button for each channel
    channels.forEach((channel, i) => {

      //for every 12 channels, increases the pgCounter by 1 
      if(i % 12 == 0 && i != 0){ pgCounter++;}
    

      //if page counter matches the current page, displays channel button
        if((!(channel.url === ""))){

          //sets button attributes
          const ch = document.createElement("button");
          ch.title = channel.inf.title;

          //sets alt, if title is empty, use id, if id is empty, use url
          var alt;
          if(channel.inf.title != ""){alt = channel.inf.title; }
          else if(channel.id != ""){alt = channel.inf.tvgId;}
          else{alt = channel.url;}

          //sets channel button settings
          ch.innerHTML = "<img src=\""+channel.inf.tvgLogo+"\" alt=\""+alt+"\">"
          ch.className = 'channelButton';
          ch.onclick = function () { playC(channel.url, i); };
          ch.tabIndex = i + 1;
          ch.lang = localStorage.getItem("lang");
          ch.id = pgCounter;


          //creates html element
          channelButtons.push(ch);

        }      
       
    });
    
    //actually displays buttons
    console.log(channelButtons);
    display();
  
   
  });


};



//loads channels and their respective buttons
function loadPlaylists(page){


  //loads channel from local storage
  playlists = JSON.parse(localStorage.getItem("playlists"));

  if (playlists != null){

    let pgCounter = 0;
  //creates button for each channel
    playlists.forEach((playlist, i) => {

  
      //for every 12 channels, increases the pgCounter by 1 
      if(i % 12 == 0 && i != 0){
        pgCounter++;
      }


     
        //sets button attributes
        const pl = document.createElement("button");
        pl.title = playlist.title;
        pl.innerHTML = "<img src=\""+playlist.logoUrl+"\" alt=\""+playlist.title+"\">"
        pl.className = 'channelButton';
        pl.onclick = function () {
          channelButtons = [];
          page = 0;  
          if(playlist.isLocal){isLocal = true;}
          else {isLocal = false}

          loadC(playlist.url, 0); 
        
        
        };

        pl.tabIndex = i + 1;
        pl.lang = localStorage.getItem("lang");
        pl.id = pgCounter;
        

        //creates html element
        channelButtons.push(pl);

    });

    console.log(channelButtons);

  }

  //change back button id to backchannel
  test = document.getElementById('backPlaylist');
  if(test){
    document.getElementById('backPlaylist').onclick = "";
    document.getElementById("backPlaylist").id = "backChannel";
  }

  display();  
  

};


//---------------------------------DISPLAY-----------------------------------------//

function display(){
  channelButtons.forEach((channelButton, i) => {
    if(channelButton.id == page){ document.getElementById('channelWrapper').appendChild(channelButton);  }
  })
}