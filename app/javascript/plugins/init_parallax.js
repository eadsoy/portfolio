const Parallax = require('parallax-js')

const initParallax = () => {
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);
};

export { initParallax };
