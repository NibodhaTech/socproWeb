var userId = "";
function loadUserData(userName)
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
   jsonData = xmlhttp.responseText;
   	extractReputations();
    }
  }
 // alert("userName is "+userName);
//xmlhttp.open("GET","http://api.stackexchange.com/2.2/users?order=desc&sort=reputation&inname="+userName+"&site=stackoverflow",true);
xmlhttp.open("GET","https://nibodha-socpro-v1.p.mashape.com/users?order=desc&sort=reputation&inname="+userName+"&site=stackoverflow",true);
xmlhttp.setRequestHeader("X-Mashape-Key","VssIjowCahmshHMZUAD30M7T993dp1OJPrZjsn4pUVbA65Exql");
xmlhttp.send();
}

function extractReputations(){
	
	jsonData0 = JSON.parse(jsonData);

	  document.getElementById('bronze').innerHTML = jsonData0.items[0].badge_counts.bronze;
	  document.getElementById('silver').innerHTML = jsonData0.items[0].badge_counts.silver;
	  document.getElementById('gold').innerHTML = jsonData0.items[0].badge_counts.gold;
	  document.getElementById('reputation').innerHTML = jsonData0.items[0].reputation;

	  userId = jsonData0.items[0].user_id;
	  
	  
	  //loadTopQuestion();
	  loadTopTags();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////


function loadTopTags()
{
var xmlhttp3;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp3 = new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp3 = new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp3.onreadystatechange=function()
  {
  if (xmlhttp3.readyState==4 && xmlhttp3.status==200)
    {
   jsonData3 = xmlhttp3.responseText;
   //alert('json3 '+jsonData3);
   extractData3();
    }
  }
xmlhttp3.open("GET","https://nibodha-socpro-v1.p.mashape.com/users/"+userId+"/top-tags?site=stackoverflow",true);
xmlhttp3.setRequestHeader("X-Mashape-Key","VssIjowCahmshHMZUAD30M7T993dp1OJPrZjsn4pUVbA65Exql");
xmlhttp3.send();
}

function extractData3(){

jsonDataTag = JSON.parse(jsonData3);
  var tagLink = ""; 
  for(var i = 0; i < jsonDataTag.items.length; i++){
	  
	   tagLink = tagLink + "<li><a href=''>"+ jsonDataTag.items[i].tag_name +"</a></li>"
	  
  }
  document.getElementById('stackOverFlowTags').innerHTML = tagLink;
  loadCanvas();

}