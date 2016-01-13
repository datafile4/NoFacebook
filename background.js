chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "content_script.js"});
  chrome.extension.onMessage.addListener(
  	function(message, sender, sendResponse){
  		if(message.type == 'getTabId'){
  			sendResponse({tabId:sender.tab.id});
  		}
  	}
  );
});
