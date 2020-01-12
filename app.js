const app = document.querySelector('.app');

const input = document.createElement('form');
input.id = 'rgb';
app.appendChild(input);

const red = document.createElement('input');
red.setAttribute('name', 'red');
red.setAttribute('type', 'range');
red.setAttribute('min', '0');
red.setAttribute('max', '255');
red.setAttribute('value', '0');

const redLabel = document.createElement('label');
redLabel.setAttribute('for', 'red');
redLabel.innerText = 'Red';

input.appendChild(redLabel);
input.appendChild(red);

const green = document.createElement('input');
green.setAttribute('name', 'green');
green.setAttribute('type', 'range');
green.setAttribute('min', '0');
green.setAttribute('max', '255');
green.setAttribute('value', '0');

const greenLabel = document.createElement('label');
greenLabel.setAttribute('for', 'green');
greenLabel.innerText = 'Green';

input.appendChild(greenLabel);
input.appendChild(green);

const blue = document.createElement('input');
blue.setAttribute('name', 'blue');
blue.setAttribute('type', 'range');
blue.setAttribute('min', '0');
blue.setAttribute('max', '255');
blue.setAttribute('value', '0');

const blueLabel = document.createElement('label');
blueLabel.setAttribute('for', 'blue');
blueLabel.innerText = 'Blue';

input.appendChild(blueLabel);
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
