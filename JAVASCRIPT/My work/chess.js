const boardElement = document.getElementById("board");

function fillBoard() {
  for (let j = 1; j <= 8; j++) {
    for (i = 0; i <= 8; i++) {
      const greenbox = document.createElement("div");
      const whitebox = document.createElement("div");
      greenbox.className = "boxgreen";
      whitebox.className = "boxwhite";

      if (i % 2 === 0) {
        boardElement.appendChild(whitebox);
      } else {
        boardElement.appendChild(greenbox);
      }

      if (i === 8 && j % 2 !== 0) {
        i = 1;
        break;
      }
    }
  }
}

fillBoard();
