var options = {
	textColour : '#000',
	outlineColour : '#ff9999',
	textHeight : 20,
	depth : 0.99,
	zoom : 1.7
};


function loadCanvas() {
	try {
		TagCanvas.Start('myCanvas', '', options);
	} catch (e) {
		// something went wrong, hide the canvas container
		document.getElementById('myCanvasContainer').style.display = 'none';
	}
};

function fullcontactData()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    jsonData=xmlhttp.responseText;
    extractJsonData(jsonData);
    }
  }
xmlhttp.open("GET","https://fullcontact-fullcontact.p.mashape.com/v2/person.json?apiKey=15779a611f991d97&email=rad.rads@gmail.com",true);
xmlhttp.setRequestHeader("X-Mashape-Key","VssIjowCahmshHMZUAD30M7T993dp1OJPrZjsn4pUVbA65Exql");
xmlhttp.send("apiKey=15779a611f991d97&email=rad.rads@gmail.com");
}

function extractJsonData(jsonData){
jsonFullCont = JSON.parse(jsonData);

var userName = jsonFullCont.contactInfo.givenName;
var webSites = jsonFullCont.contactInfo.websites[0].url;
var organization = jsonFullCont.organizations[0].name;

document.getElementById('userNameVal').innerHTML = userName;
document.getElementById('userWebSiteVal').innerHTML = webSites;
document.getElementById('userOrgVal').innerHTML = organization;

var imgData = "";
for(var i = 0; i < jsonFullCont.photos.length; i++) {
    var photoUrl = jsonFullCont.photos[i].url;
    
    imgData = imgData + '<img src='+photoUrl+'>';
    console.log(photoUrl);
}
$("#images").html(imgData);

}