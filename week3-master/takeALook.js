function filter(list, test){
  var filt = [];
  each(list, function(value, index, list){
    if (test(value, index, list)){
      filt.push(value);
    }
  });
  return filt;
}

function reduce(list, accum, current){
  each(list, function(value, index, arr){
    current = accum(current, value, index, arr);
  });
  return current;
}

//please Take a look at the once func
var callOnce = function(f) {
    var called = false;
    return function() {
        if (!called) {
            f();
        }
        called = true;
    };
};

//OR This
function onlyOnce(func, context) {
  var result;
  return function(){
    if(func) {
      result = func.apply(context || this, arguments);
      func = null;

    }
    return result;
  };
}