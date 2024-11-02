export function initBearAnimation() {
  document.addEventListener('DOMContentLoaded', () => {
    const bear = document.querySelector('.splitter__element') as HTMLElement;
    const directions = ['left', 'right'];
    // const delays = [0, 3000, 6000, 9000]; // in milliseconds
    const delays = [0]; // in milliseconds
    // Randomize direction and delay
    const direction = directions[Math.floor(Math.random() * directions.length)];
    const delay = delays[Math.floor(Math.random() * delays.length)];
    // Set the bear's initial position and direction
    setTimeout(() => {
      if (direction === 'left') {
        bear.style.animationName = 'walkLeft';
        bear.style.backgroundImage = 'url(/bear_1.gif)';
        bear.style.right = '100px';
        bear.style.animationDuration = '50s';
      } else {
        bear.style.animationName = 'walkRight';
        bear.style.backgroundImage = 'url(/bear_2.gif)';
        bear.style.left = '-100px';
      }
    }, delay);
  });
}
