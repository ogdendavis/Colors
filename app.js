const app = document.querySelector('.app');

const container = document.createElement('div');
container.classList.add('app__container');
app.appendChild(container);

const controls = document.createElement('div');
controls.classList.add('app__controls');
container.appendChild(controls);

const output = document.createElement('div');
output.classList.add('app__output');
container.appendChild(output);

const input = document.createElement('form');
input.id = 'rgb';
input.classList.add('app__input');
controls.appendChild(input);

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

const colorSwatch = document.createElement('div');
colorSwatch.classList.add('app__swatch');
output.appendChild(colorSwatch);

const rgbValues = document.createElement('div');
output.appendChild(rgbValues);

const hexValues = document.createElement('div');
output.appendChild(hexValues);

const hslValues = document.createElement('div');
output.appendChild(hslValues);

function initColors(values) {
  red.value = values.rgb.red;
  green.value = values.rgb.green;
  blue.value = values.rgb.blue;

  hexValues.innerText = 'hi!';

  updateColors();
}

function updateColors() {
  values = {
    rgb: {
      red: red.value,
      green: green.value,
      blue: blue.value
    },
  }
  values.hex = calcHex(values);
  values.hsl = calcHsl(values);

  console.log(values);

  displayColors(values);
}

function displayColors(values) {
  const rgb = `rgb(${values.rgb.red || 0}, ${values.rgb.green || 0}, ${values.rgb.blue || 0})`;
  colorSwatch.style.background = rgb;
  rgbValues.innerText = rgb;

  app.style.background = `linear-gradient(to top left, rgba(${values.rgb.red || 0}, ${values.rgb.green || 0}, ${values.rgb.blue || 0}, 0.25), ${rgb}`;

  hexValues.innerText = `#${values.hex.red.length > 1 ? values.hex.red : '0' + values.hex.red}${values.hex.green.length > 1 ? values.hex.green : '0' + values.hex.green}${values.hex.blue.length > 1 ? values.hex.blue : '0' + values.hex.blue}`;

  hslValues.innerText = `hsl(${values.hsl.h}, ${values.hsl.s}%, ${values.hsl.l}%)`;
}

function calcHsl(values) {
  // Figuring out HSL. Based on http://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
  const redRatio = Number(values.rgb.red) / 255;
  const greenRatio = Number(values.rgb.green) / 255;
  const blueRatio = Number(values.rgb.blue) / 255;
  const ratioMax = Math.max(redRatio, greenRatio, blueRatio);
  const ratioMin = Math.min(redRatio, greenRatio, blueRatio);
  const lRatio = (ratioMax + ratioMin) / 2;
  const sRatio = ratioMax === ratioMin ? 0 :
                 lRatio > 0.5 ? (ratioMax - ratioMin)/(2 - ratioMax - ratioMin) :
                 (ratioMax - ratioMin)/(ratioMax + ratioMin);
  const hRatio = ratioMax === ratioMin ? 0 :
                 redRatio === ratioMax ? (greenRatio - blueRatio) / (ratioMax - ratioMin) :
                 greenRatio === ratioMax ? 2 + (blueRatio - redRatio) / (ratioMax - ratioMin) :
                 4 + (redRatio - greenRatio) / (ratioMax - ratioMin);

  return {
    h: hRatio >= 0 ? Math.round(hRatio * 60) : Math.round(hRatio * 60) + 360,
    s: Math.round(sRatio * 100),
    l: Math.round(lRatio * 100),
  }
}

function calcHex(values) {
  return {
    red: Number(values.rgb.red).toString(16),
    green: Number(values.rgb.green).toString(16),
    blue: Number(values.rgb.blue).toString(16),
  }
}

red.addEventListener('change', updateColors);
green.addEventListener('change', updateColors);
blue.addEventListener('change', updateColors);

window.onload = function() {
  const r = Math.floor(Math.random() * 256).toString();
  const g = Math.floor(Math.random() * 256).toString();
  const b = Math.floor(Math.random() * 256).toString();

  initColors({
    rgb: {
      red: r,
      green: g.toString(),
      blue: b.toString(),
    }
  });
}
