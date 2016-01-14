//start when activate tab
chrome.tabs.onActivated.addListener(function(tab) {
  //detect facebook tab
  var reg = /\bfacebook/g;
  chrome.tabs.query({'active':true,'lastFocusedWindow':true},function(tabs){
      var url = tabs[0].url;
      var res = url.match(reg);
      if(res.length !=null){
        console.log("foo");
        chrome.tabs.executeScript(null, {file: "content_script.js"});
        chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
          if(message.greeting == false){
            chrome.tabs.query({ active: true },function(tabs){
              chrome.tabs.remove(tabs[0].id);
            });
          }
        });
      }
  });


});
