var React, ref$, Obj, List, keys, values;
React = require('react');
ref$ = require('prelude-ls'), Obj = ref$.Obj, List = ref$.List;
keys = Object.keys(React.DOM);
values = Obj.map(function(it){
  return React.createFactory(it);
}, keys);
module.exports = Obj.pairsToObj(List.zip(keys, values));