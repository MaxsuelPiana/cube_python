const cube = document.getElementById('magicCube');

function randomRotation() {
  const x = Math.floor(Math.random() * 360);
  const y = Math.floor(Math.random() * 360);
  const z = Math.floor(Math.random() * 360);
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
}

setInterval(randomRotation, 2000);
