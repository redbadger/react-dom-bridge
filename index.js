var React = require('react');
var prelude = require('prelude-ls');
var Obj = prelude.Obj;
var List = prelude.List;
var keys = Obj.keys(React.DOM);
var values = Obj.map(function(it) {
  return React.createFactory(it);
}, keys);

module.exports = Obj.pairsToObj(List.zip(keys, values));
