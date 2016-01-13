chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "content_script.js"});

  // chrome.extension.onMessage.addListener(
  // 	function(message, sender, sendResponse){
  // 		if(message.type == 'getTabId'){
  // 			sendResponse({tabId:sender.tab.id});
  // 		}
  // 	}
  // );
  chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if(message.greeting == false){
      chrome.tabs.query({ active: true },function(tabs){
        chrome.tabs.remove(tabs[0].id);
      });
    }
  });
});
