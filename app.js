const app = document.querySelector('.app');
app.innerHTML = 'Hello, world!';

const input = document.createElement('form');
app.appendChild(input);

const red = document.createElement('input');
input.appendChild(red);

const green = document.createElement('input');
input.appendChild(green);

const blue = document.createElement('input');
input.appendChild(blue);


function updateColors() {
  values = {
    red: red.value,
    green: green.value,
    blue: blue.value,
  }
  redy = red.value > 255 ? red.value % 255 : red.value;
  greeny = green.value > 255 ? green.value % 255 : green.value;
  bluey = blue.value > 255 ? blue.value % 255 : blue.value;

  app.style.background = `rgb(${redy || 0},${greeny || 0},${bluey || 0})`;
}

red.addEventListener('change', updateColors);
green.addEventListener('change', updateColors);
blue.addEventListener('change', updateColors);
