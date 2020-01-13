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
    red: {
      rgb: red.value,
      hex: Number(red.value).toString(16),
    },
    green: {
      rgb: green.value,
      hex: Number(green.value).toString(16),
    },
    blue: {
      rgb: blue.value,
      hex: Number(blue.value).toString(16),
    },
  }

  console.log(values);

  const rgb = `rgb(${values.red.rgb || 0}, ${values.green.rgb || 0}, ${values.blue.rgb || 0})`
  const hex = `#${values.red.hex.length > 1 ? values.red.hex : '0' + values.red.hex}${values.green.hex.length > 1 ? values.green.hex : '0' + values.green.hex}${values.blue.hex.length > 1 ? values.blue.hex : '0' + values.blue.hex}`

  app.style.background = rgb;
  rgbValues.innerText = rgb;
  hexValues.innerText = hex;
}

red.addEventListener('change', updateColors);
green.addEventListener('change', updateColors);
blue.addEventListener('change', updateColors);

const rgbValues = document.createElement('div');
app.appendChild(rgbValues);

const hexValues = document.createElement('div');
app.appendChild(hexValues);
