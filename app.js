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

const hslValues = document.createElement('div');
app.appendChild(hslValues);

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

  const hslRaw = hslCalc(values);
  values.hsl = hslRaw;
  const hsl = `hsl(${hslRaw.h}, ${hslRaw.s}%, ${hslRaw.l}%)`;


  app.style.background = rgb;
  rgbValues.innerText = rgb;
  hexValues.innerText = hex;
  hslValues.innerText = hsl;

  console.log(values);
}

function hslCalc(values) {
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
  const hRatio = redRatio === ratioMax ? (greenRatio - blueRatio) / (ratioMax - ratioMin) :
           greenRatio === ratioMax ? 2 + (blueRatio - redRatio) / (ratioMax - ratioMin) :
             blueRatio === ratioMax ? 4 + (redRatio - greenRatio) / (ratioMax - ratioMin) : 0;
  return {
    h: Math.round(hRatio * 60),
    s: Math.round(sRatio * 100),
    l: Math.round(lRatio * 100),
  }
}

red.addEventListener('change', updateColors);
green.addEventListener('change', updateColors);
blue.addEventListener('change', updateColors);
