const k = document.getElementById("k")

  var receiver = k.contentWindow;
  
  function receiveMessage(e) {
    if (e.origin !== "https://gapples2.github.io/TMT-Save-Transfer/")
      return;

    sendMessage()
  }
  
  function sendMessage(e) {
    receiver.postMessage(JSON.stringify(localStorage), 'https://gapples2.github.io/TMT-Save-Transfer/');
  }
  window.addEventListener('message', receiveMessage);