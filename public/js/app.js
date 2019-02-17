var contentMessage;
var messages = {
  "true": "✅ The network connection has been restored",
  "false": "🚫 The network connection has been lost"
};

function checkConnection() {
  console.log(messages[window.navigator.onLine]);
  contentMessage.classList.remove("true");
  contentMessage.classList.remove("false");
  setTimeout(function (){
    contentMessage.innerHTML = messages[window.navigator.onLine];
    contentMessage.classList.add(window.navigator.onLine);
  }, 600);
}

window.addEventListener("online",  checkConnection);
window.addEventListener("offline", checkConnection);
window.addEventListener("load", function(){
  contentMessage = document.querySelector("#contentMessage");
});