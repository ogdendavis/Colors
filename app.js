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

const rgbValues = document.createElement('div');
app.appendChild(rgbValues);

const hexValues = document.createElement('div');
app.appendChild(hexValues);


function updateColors() {
  values = {
    rgb: {
      red: red.value,
      green: green.value,
      blue: blue.value
    },
    hex: {
      red: Number(red.value).toString(16),
      green: Number(green.value).toString(16),
      blue: Number(blue.value).toString(16),
    }
  }

  const rgb = `rgb(${values.rgb.red || 0}, ${values.rgb.green || 0}, ${values.rgb.blue || 0})`
  const hex = `#${values.hex.red.length > 1 ? values.hex.red : '0' + values.hex.red}${values.hex.green.length > 1 ? values.hex.green : '0' + values.hex.green}${values.hex.blue.length > 1 ? values.hex.blue : '0' + values.hex.blue}`





  app.style.background = rgb;
  rgbValues.innerText = rgb;
  hexValues.innerText = hex;

  console.log(values);
}

red.addEventListener('change', updateColors);
green.addEventListener('change', updateColors);
blue.addEventListener('change', updateColors);
