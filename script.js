const textElement = document.getElementById("loadingText");
const messages = [
  "Loading...",
  "Grabbing snacks 🍕",
  "Finding WiFi 📡",
  "Almost there ⏳"
];

let i = 0;
function changeText() {
  textElement.textContent = messages[i];
  i = (i + 1) % messages.length;
}

setInterval(changeText, 2000);
changeText();
