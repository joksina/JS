var number = [1, 2, 3, 4, 5];

var object = {
	name: "Ajoke Salau",
  email: "jksalaudeen@yahoo.com",
  phoneNumber: 4435258006
  };
  
  var logger = function(val, index, arr){
  	console.log(val, index, arr);
  };

var each = function(list, callback){
	if(Array.isArray(list)) {
		for(var i = 0; i < list.length; i++){
			callback(list[i], i, list)
      
		}
  }else{

  	for(var key in list){
    	callback(list[key], key, list);
      }
    }
  };
  
each(number, logger);

each(number, function(val, index, list){console.log(val, index, list);});

function map(list, iteration){
  var mapped = [];
  each(list, function(value, index, list){
    mapped.push(iteration(value, index, list));
  });
  return map;
}

function filter(list, test){
  var filt = [];
  each(list, function(value, index, list){
    if (test(value, index, list)){
      filt.push(value);
    }
  });
  return filt
}

function reduce(list, accum, current){
  each(list, function(value, index, arr){
    current = accum(current, value, index, arr);
  });
  return current;
}

var callOnce = function(f) {
    var called = false;
    return function() {
        if (!called) {
            f();
        }
        called = true;
    };
};



//
function reduce(list, combine, current){
  current = current || 0;
  if(arguments.length < 3){
    if(Array.isArray(list)){
      current = list[0];
     list = list.slice(1);
     console.log(list);
      }
    }
    each(list, function(value, index, list){
        current = combine(current, value);
        });
 return current;
   }


// func remove
function remove(array, index){
  return array.slice(0, index).concat(array.slice(index + 1));
}

function power(base, exponent){
  if (exponent === 0){
    return 1
  }else {
  return base * power(base, exponent - 1);
  }

}console.log(power(2,3));

function factorial(num){
  if (num < 0){
  return -1;
  }else if (num === 0){
    return 1;
  }else{
    return num * factorial(num - 1);
  }
}console.log(factorial(3));




function reduce(list, combine, current){
  current = current || 0;
  if(arguments.length < 3){
    if(Array.isArray(list)){
      current = list[0];
     list = list.slice(1);
      }
    }
    each(list, function(value, index, list){
        current = combine(current, value);
        });
 return current;
   }
//solve filter using reduce
   function filter(list, test){
  return reduce(list, function(accum, curr){
    if(test(curr)){
      accum.push(curr)
    }
    return accum;
  },[])
  
}

//solve shuffle
function shuffle(array) {
  var random = array.map(Math.random);
  array.sort(function(a, b) {
    return random[a] - random[b];
  });
return array;
}
