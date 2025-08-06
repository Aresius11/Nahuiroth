// rompecabezas.js

const grid = document.getElementById('puzzleGrid');
const totalPieces = 9;
let pieces = [];

// 🔀 Función para mezclar aleatoriamente los índices
function mezclar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 📊 Crear arreglo de índices mezclados
const indicesRevueltos = mezclar([...Array(totalPieces).keys()]);

// 🧩 Crear y colocar las piezas revueltas
indicesRevueltos.forEach(i => {
  const piece = document.createElement('div');
  piece.className = 'puzzlePiece';
  piece.style.backgroundImage = "url('cielo_fondo.jpeg')";
  piece.style.backgroundPosition = `${-(i % 3) * 100}px ${-Math.floor(i / 3) * 100}px`;
  piece.draggable = true;
  piece.dataset.index = i;
  grid.appendChild(piece);
  pieces.push(piece);
});

// 🎯 Lógica para intercambiar posiciones al arrastrar
let dragged = null;

pieces.forEach(piece => {
  piece.addEventListener('dragstart', () => {
    dragged = piece;
  });

  piece.addEventListener('dragover', e => {
    e.preventDefault();
  });

  piece.addEventListener('drop', () => {
    if (dragged !== piece) {
      const tempPos = piece.style.backgroundPosition;
      piece.style.backgroundPosition = dragged.style.backgroundPosition;
      dragged.style.backgroundPosition = tempPos;
    }
  });
});