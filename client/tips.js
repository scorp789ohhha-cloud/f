const tips = [
  "Change your color to an image from Catbox for Pomf2 by doing /color [URL].",
  "If you're blessed, you can do polls and announcements!",
  "Check out Applets for potentially useful tools!",
  "Modify your settings by clicking the Settings button.",
  "There are multiple themes! Try /theme purple, blue, red, green, or black!",
  "bonzi.gay is full of facisits, dont trust them!"
];

function showRandomTip() {
  const tipBox = document.getElementById("tip-box");
  if (!tipBox) return; // Safety check
  const randomIndex = Math.floor(Math.random() * tips.length);
  tipBox.innerText = tips[randomIndex];
}

window.onload = function () {
  showRandomTip();
  setInterval(showRandomTip, 20000);
};
