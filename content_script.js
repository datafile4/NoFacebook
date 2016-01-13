setInterval (function(){
	var kol = document.getElementsByClassName ("_1dwg");
	var size = kol.length;
	var tabId;
	if (size >20) {
		console.log("Fuck Facebook");
		// 	chrome.extension.sendMessage({type:getTabId},function(res){
		// 		tabId = res.tabId;
		// 	});
		// alert(tabId);
		chrome.runtime.sendMessage({greeting: false}, function(response) {
	  	console.log(response.farewell);
		});
	}
},1000)
