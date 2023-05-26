
//Creates and implement a time and date div in the clock div
function updateClock(){

    var dt = new Date();
    document.getElementById("clock").innerHTML = "<div id=\"time\">" +dt.getUTCHours() +":"+ (dt.getUTCMinutes()) + "</div><br><div id=\"date\"><strong>" + (dt.toLocaleDateString(getClientLocale(), { weekday: 'short' })) + " " + (("0"+(dt.getMonth()+1)).slice(-2)) + "/" +(("0"+dt.getDate()).slice(-2)) + "</strong></div>";
}


//gets country/language of user
function getClientLocale() {
    if (typeof Intl !== 'undefined') {
      try {
        return Intl.NumberFormat().resolvedOptions().locale;
      } catch (err) {
        console.error("Cannot get locale from Intl")
      }
    }
  }



