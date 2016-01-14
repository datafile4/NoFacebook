//start when activate tab
chrome.tabs.onActivated.addListener(function(tab) {
  console.log("foo1");
  //RegExp to detect facebook
  var reg = /\bfacebook/g;
  //chrome query fot detect fb tab
  chrome.tabs.query({'active':true,'lastFocusedWindow':true},function(tabs){
      var url = tabs[0].url;
      var res = url.match(reg);
      if(res.length !=null){
        console.log("foo2");
        //execute content_script.js
        chrome.tabs.executeScript(null, {file: "content_script.js"});
        //listener for message from content_script.js
        chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
          //if message from content_script.js is false, tab will be closed
          if(message.greeting == false){
            chrome.tabs.query({ active: true },function(tabs){
              chrome.tabs.remove(tabs[0].id);
            });
          }
        });
      }
  });


});
