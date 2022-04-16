const button = document.querySelector(".button");
const flame = document.querySelector(".flame");
const glow = document.querySelector(".glow");
const blinkingBlow = document.querySelector(".blinking-blow");

button.addEventListener("click", () => {
  flame.style.opacity = "1";
  glow.style.opacity = "1";
  blinkingBlow.style.opacity = "1";
  blinkingBlow.style.animation = "blinkIt .1s infinite;";
});
