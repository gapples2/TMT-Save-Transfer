let l = "https://gapples2.github.io/TMT-Save-Transfer/"

const k = document.getElementById("k")

  var receiver = k.contentWindow;
function receiveMessage(e) {
    sendMessage()
  }
  
  function sendMessage(e) {
    receiver.postMessage(JSON.stringify(localStorage), l);
  }
  window.addEventListener('message', receiveMessage);