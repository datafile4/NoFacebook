setInterval (function(){
	//Facebook posts placed inside div with "_1dwg" class
	var kol = document.getElementsByClassName ("_1dwg");
	var size = kol.length;
	var tabId;
	if (size >20) {
		chrome.runtime.sendMessage({greeting: false}, function(response) {
	  	console.log(response.farewell);
		});
	}
},1000)
