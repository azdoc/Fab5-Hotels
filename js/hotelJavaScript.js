window.onload = function(){
	
	var content = document.getElementById("imageInfo");
	var btn = document.getElementById("showMore");
	btn.onclick = function(){
		if(content.className =="open"){
			content.className ="";
			btn.innerHTML = "Show More";
		}
		else{
			content.className ="open";
			btn.innerHTML = "Show Less";
		}
	}
	
	
	



	/*function addImages(){
		var x = document.createElement("IMG");
		x.setAttribute("src", "rooms/2.jpeg");
		x.setAttribute("width","40%");
		x.setAttribute("height","40%");
		//x.setAttribute("src", "rooms/1.jfif");
		document.body.appendChild(x);
	}
	*/
}
