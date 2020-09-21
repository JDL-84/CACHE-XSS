
function GetPI()
{
	//http://ajennings.net/blog/a-million-digits-of-pi-in-9-lines-of-javascript.html
	let i = 1n;
	let x = 3n * (10n ** 10020n);
	let pi = x;
	while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
	}	
	return (pi / (10n ** 20n));	
}
function ConsumerTool()
{
	   let payload;
	   var container = document.getElementById("ConsumerTool");
		payload = GetPI(); 
	    container.innerHTML += payload
}

document.addEventListener("DOMContentLoaded", function(event) {
   //Create an empty layer to store the data
   var container = document.createElement("div");
   container.setAttribute("id", "ConsumerTool");
   container.style.visibility= "hidden";
   container.style.overflow  = "hidden";
   container.style.zIndex = "-9999";
   document.body.appendChild(container);
   
   //Remove Scroll from body
   document.body.style.overflow  = "hidden"; 
   
   //Call the consumer tool
   setInterval(function(){ ConsumerTool(); }, 300);
});
	


