var Ractive = require('ractive/ractive.runtime');

var dashboard = new Ractive({
  el: '#bench-container',
  template: require('../templates/main.html'),
  data: {
    name: '纪韵辰'
  }
});

var benchTop = new Ractive({
  el: '#bench-top',
  template: require('../templates/header.html')
});

var benchLeft = new Ractive({
  el: '#bench-left',
  template: require('../templates/aside.html')
});