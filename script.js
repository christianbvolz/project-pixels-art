function colorPalette() {
  const palette = document.querySelectorAll('.color');
  palette[0].style.backgroundColor = 'black';
  for (let i = 1; i < 4; i += 1) {
    const red = Math.ceil(Math.random() * 255);
    const green = Math.ceil(Math.random() * 255);
    const blue = Math.ceil(Math.random() * 255);
    palette[i].style.backgroundColor = `rgb(${red}, ${green},${blue})`;
  }
}

colorPalette();

function boardSize(largura, altura) {
  const quadro = document.getElementById('pixel-board');
  for (let i = 0; i < largura; i += 1) {
    const coluna = document.createElement('div');
    coluna.className = 'coluna';
    quadro.appendChild(coluna);
    for (let x = 0; x < altura; x += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      coluna.appendChild(pixel);
    }
  }
}
boardSize(5, 5);

window.onload = function selectColor() {
  const color = document.querySelector('.color');
  color.className = 'color selected';
};

document.querySelectorAll('.color').forEach((color) => {
  const selectedColor = color;
  selectedColor.addEventListener('click', () => {
    const allColors = document.querySelectorAll('.color');
    allColors.forEach((colors) => {
      const unselectedColor = colors;
      unselectedColor.className = 'color';
    });
    selectedColor.className = 'color selected';
  });
});

function colorPixel () {
  document.querySelectorAll('.pixel').forEach((pixel) => {
    const selectedPixel = pixel;
    selectedPixel.addEventListener('click', () => {
      const selectedColor = document.querySelector('.selected').style.backgroundColor;
      selectedPixel.style.backgroundColor = selectedColor;
    });
  });
}
colorPixel();

document.getElementById('clear-board').addEventListener('click', () => {
  document.querySelectorAll('.pixel').forEach((pixel) => {
    const clearPixel = pixel;
    clearPixel.style.backgroundColor = 'rgb(255, 255, 255)';
  });
});

function removeBoard() {
  const quadro = document.getElementById('pixel-board');
  const colunas = quadro.children.length;
  for (let index = 0; index < colunas; index += 1) {
    quadro.removeChild(quadro.children[0]);
  }
}

document.getElementById('generate-board').addEventListener('click', () => {
  const input = document.getElementById('board-size').value;
  const inputValue = parseInt(input, 10);
  if (input.length === 0) {
    alert('Board inv??lido!');
  } else if (inputValue < 5) {
    removeBoard();
    boardSize(5, 5);
  } else if (inputValue > 50) {
    removeBoard();
    boardSize(50, 50);
  } else {
    removeBoard();
    boardSize(inputValue, inputValue);
    colorPixel();
  }
});
