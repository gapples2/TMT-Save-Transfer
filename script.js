let l = "https://raw.githack.com/gapples2/TMT-Save-Transfer/glitch/githack.html"
const k = document.getElementById("k")

  var receiver = k.contentWindow;
  var messageEle = document.getElementById('message');
  var btn = document.getElementById('send');
  
  function receiveMessage(e) {
    if (e.origin !== l)
      return;

    console.log(JSON.parse(e.data))
  }
  
  function sendMessage(e) {
    e.preventDefault();

    receiver.postMessage('storage please', l);
  }
  btn.addEventListener('click', sendMessage);
  window.addEventListener('message', receiveMessage);