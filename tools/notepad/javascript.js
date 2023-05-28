
function fontSizeSet()
{

	var font = document.getElementById('optn').value;
    document.getElementById('textInput').style.fontSize=font;
}

function textFileDownload()
{
	var userInput = document.getElementById('textInput').value;
    		var dname = document.getElementById('textDocName').value;
	
			var blob = new Blob([userInput], {type: "text/plain:charset=utf-8"});
			var url = window.URL.createObjectURL(blob);
			var downloadLink = document.createElement("a");
			downloadLink.href = url;

			if(userInput=="")
			{
				alert("Write something in Notepad :)");
				window.moveTo();
			}
			else if(dname=="")
			{
				alert("File name missing :)");
				window.moveTo();
			}
			else
			{
	 	 		downloadLink.download = dname+".txt";
    		}
				downloadLink.click();
				window.URL.revokeObjectURL(url);
}

function wordFileDownload()
{
	var userInput = document.getElementById('textInput').value;
    		var blob = new Blob([userInput], {type: "doc/msword:charset=utf-8"});
    		var dname = document.getElementById('wordDocName').value;
			var url = window.URL.createObjectURL(blob);
   			var downloadLink = document.createElement("a");

    			if(userInput=="")
				{
					alert("Write something in Notepad :)");
					window.moveTo();

				}
				else if(dname=="")
				{
					alert("File name missing :)");
					window.moveTo();
				}
				else
				{
	  				downloadLink.download = dname+".doc";
    			}

    			document.body.appendChild(downloadLink);
        		downloadLink.href = url;
        		downloadLink.click();
    			document.body.removeChild(downloadLink);
}
