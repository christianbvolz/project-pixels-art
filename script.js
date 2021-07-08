function colorPalette() {
  const palette = document.querySelectorAll('.color');
  palette[0].style.backgroundColor = 'black';
  palette[1].style.backgroundColor = 'red';
  palette[2].style.backgroundColor = 'blue';
  palette[3].style.backgroundColor = 'green';
}

colorPalette();

function tamanhoQuadro(largura, altura) {
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
tamanhoQuadro(5, 5);

function selectColor() {
  const color = document.querySelector('.color');
  color.className = 'color selected';
}

window.onload = selectColor();
