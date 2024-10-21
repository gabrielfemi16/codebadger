const button = document.getElementById("Button");
const box = document.getElementById("myBox");
const boxText = document.getElementById("boxText");

button.addEventListener("click", () => {
  if (box.style.display === "none") {
    box.style.display = "block";
    boxText.textContent = "The box is visible";
  } else {
    box.style.display = "none";
    boxText.textContent = "The box is not visible";
  }
});
