alert("start");
//Put Back the variable used to invoke the XSS
var websession  = '1';
var mysessionno  = '1';

//Set LastRefresh
var CurrDT          = new Date();
var TimeAsMS        = CurrDT.getTime();
var LastRefresh = TimeAsMS;
var timeoutlength = 9999000;
