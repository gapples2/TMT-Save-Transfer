let l = "https://gapples2.github.io/TMT-Save-Transfer/"

const k = document.getElementById("k")
const btn=document.getElementById("send")
var receiver = k.contentWindow;
function sendMessage(e) {
  receiver.postMessage(JSON.stringify(localStorage), l);
}
btn.addEventListener('click', sendMessage);