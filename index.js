var utils = require('loader-utils');
var cssWrap = require('css-wrap')

module.exports = function (source) {
  this.cacheable();
  //get options
  var options = utils. getOptions(this);
  //pass options to cssWrap
  return cssWrap(source, options);
};
