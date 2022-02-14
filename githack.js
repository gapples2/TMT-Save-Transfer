let l = "https://rawcdn.githack.com/gapples2/TMT-Save-Transfer/4332021f3465f61237bc6180bb0a0045b8316b44/get.html"

const k = document.getElementById("k")
const btn=document.getElementById("send")
var receiver = k.contentWindow;
function sendMessage(e) {
  receiver.postMessage(JSON.stringify(localStorage), l);
}
btn.addEventListener('click', sendMessage);
