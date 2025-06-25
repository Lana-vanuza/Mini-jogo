const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');
const jumpSound = document.getElementById('jumpSound');
const hitSound = document.getElementById('hitSound');

let gameOver = false;

function jump() {
  if (!player.classList.contains('jump') && !gameOver) {
    player.classList.add('jump');
    jumpSound.currentTime = 0;
    jumpSound.play();
    setTimeout(() => {
      player.classList.remove('jump');
    }, 500);
  }
}

function checkCollision() {
  if (gameOver) return;

  const playerBottom = parseInt(window.getComputedStyle(player).bottom);
  const obstacleLeft = parseInt(window.getComputedStyle(obstacle).left);

  if (obstacleLeft > 40 && obstacleLeft < 90 && playerBottom < 60) {
    hitSound.currentTime = 0;
    hitSound.play();
    obstacle.style.animation = 'none';
    obstacle.style.left = `${obstacleLeft}px`;
    gameOver = true;
    setTimeout(() => {
      alert('Você perdeu!');
      location.reload();
    }, 200);
  } else {
    requestAnimationFrame(checkCollision);
  }
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' || e.code === 'ArrowUp') {
    jump();
  }
});

requestAnimationFrame(checkCollision);
