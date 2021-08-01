// const constants = require('/constant.js');

document?.addEventListener('DOMContentLoaded', function() {
  let konamiIndex = 0;
  let googleIndex = 0;
  let hadokenIndex = 0;
  let reactIndex = 0;

  let konamiCode = [38,38,40,40,37,39,37,39,66,65];
  let googleCode = [17, 71];
  let hadokenCode = [40,39,90];
  let reactCode = [17,74, 83, 88];
  
  document?.addEventListener('keydown', onKeyDown, false);

  function onKeyDown(event) {
    console.log("test")

    // event.keyCode === konamiCode[konamiIndex] ? konamiIndex++ : konamiIndex = 0;
    // event.keyCode === googleCode[googleIndex] ? googleIndex++ : googleIndex = 0;
    // event.keyCode === hadokenCode[hadokenIndex] ? hadokenIndex++ : hadokenIndex = 0;
    // event.keyCode === reactCode[reactIndex] ? reactIndex++ : reactIndex = 0;

    switch(event.keyCode) {
    case reactCode[reactIndex]:
      reactIndex++
      break;
    case konamiCode[konamiIndex]:
      konamiIndex++
      break;
    case googleCode[googleIndex]:
      googleIndex++
      break;
    case hadokenCode[hadokenIndex]:
      hadokenIndex++
      break;
    default: 
      konamiIndex = 0;
      hadokenIndex = 0;
      googleIndex = 0;
      reactIndex = 0;
      break;
  }

    if(konamiCode.length === konamiIndex) {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }

    if(googleCode.length === googleIndex) {
      window.open('https://www.google.co.th');
    }

    if(googleCode.length === googleIndex) {
      window.open('https://www.google.co.th');
      googleIndex = 0;
    }
  
    if(hadokenCode.length === hadokenIndex) {
      window.open('https://streetfighter.com/');
      hadokenCode = 0;
    }
  }
}, false);

