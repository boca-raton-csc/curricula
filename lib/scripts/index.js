var colorify = ['container', 'slide'];

for (var i = 0; i < colorify.length; i++) {
  var nodes = document.getElementsByClassName(colorify[i]);
  for (var j = 0; j < nodes.length; j++) {
    nodes[j].style.backgroundColor = generateRandomColor();
  }
}

function generateRandomColor() {
  var hue = rand(1, 360);
  var saturation = (60) + '%';
  var lightness = (88) + '%';

  return 'hsl(' + hue + ',' + saturation + ',' + lightness + ')';
}

function rand(min, max) {
  // `Math.random()` generates a number between 0 and 1
  return (Math.random() * (max - min)) + min;
}
