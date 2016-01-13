setInterval (function(){
	var kol = document.getElementsByClassName ("_1dwg");
	var size = kol.length;
	var tabId;
	if (size >20) {
	alert("Ki");
		chrome.extension.sendMessage({type:getTabId},function(res){
			tabId = res.tabId;
		});
	alert(tabId);
	}
},1000)
