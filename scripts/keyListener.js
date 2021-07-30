// const constants = require('/constant.js');

document?.addEventListener('DOMContentLoaded', function() {
  let konamiCode = [
    38,38,40,40,37,39,37,39,66,65
  ]

  let index = 0;
  
  document?.addEventListener('keydown', onKeyDown, false);
  // document?.querySelector('#alert-btn').addEventListener('click', onClick, false);

  function onClick() {
    console.log("tests")
    alert("test")
    chrome?.tabs.query({
      currentWindow: true,
      active: true
    }, function (tabs) {
        chrome?.tabs.sendMessage(tabs[0].id, 'hi');
        console.log("tabs:", tabs)
      }
    );
  }

  function onKeyDown(event) {
    // console.warn(JSON.stringify())
    event.keyCode === konamiCode[index] ? index++ : index = 0;

    if(konamiCode.length === index) {
      alert("success")
    }
  }
}, false);