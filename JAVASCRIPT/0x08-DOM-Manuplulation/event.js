// const colorButton = document.getElementById("changeColor");
// const box = document.getElementById("box");

// colorButton.addEventListener("click", () => {
//   if (box.style.background === "green") {
//     box.style.background = "red";
//   } else {
//     box.style.background = "green";
//   }
// });

const colorButton = document.getElementById("changeColor");
const box = document.getElementById("box");

colorButton.addEventListener("click", () => {
  if (box.style.color === "green") {
    box.style.color = "red";
  } else {
    box.style.color = "green";
  }
});
