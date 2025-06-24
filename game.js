const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');
const jumpSound = document.getElementById('jumpSound');
const hitSound = document.getElementById('hitSound');

function jump() {
  if (!player.classList.contains('jump')) {
    player.classList.add('jump');
    jumpSound.currentTime = 0;
    jumpSound.play();
    setTimeout(() => {
      player.classList.remove('jump');
    }, 500);
  }
}

function checkCollision() {
  const playerTop = parseInt(window.getComputedStyle(player).bottom);
  const obstacleLeft = parseInt(window.getComputedStyle(obstacle).left);

  if (obstacleLeft > 40 && obstacleLeft < 90 && playerTop < 50) {
    hitSound.play();
    alert('Você perdeu!');
    obstacle.style.animation = 'none';
    obstacle.style.left = `${obstacleLeft}px`;
  } else {
    requestAnimationFrame(checkCollision);
  }
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' || e.code === 'ArrowUp') {
    jump();
  }
});

checkCollision();
