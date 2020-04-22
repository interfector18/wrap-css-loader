var utils = require('loader-utils');
var cssWrap = require('@interfector18/css-wrap')

module.exports = function (source) {
  this.cacheable();
  //get options
  var options = utils. getOptions(this);
  //pass options to cssWrap
  return cssWrap(source, options);
};
