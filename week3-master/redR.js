var keys = function(obj) {
var arr = [];
	for(var keys in obj) {
		arr.push(keys);
	}
	return arr;
};

var reduceRight = function(list, iterator, accum) {
var length = list.length;
if (!length) {
	var key = keys(list);
	length = key.length;
}

_.each(list, function(value, index, list){
	index = key ? key[--length] : --length;
	if(accum === undefined) {
		accum = list[index];
	} else {
		accum = iterator(accum, list[index], index, list);
	}

});
return accum;
};


var reduceRight = function(list, iterator, accum) {
	var index, key;
	if (Array.isArray(list)) {
		index = list.length-1;
	} else {
		key = Object.keys(list);
		index = keys.length-1
	}
}

//just for array
var reduceRight = function(list, iterator, accum) {
	for (var i = list.length - 1; i >= 0; i--) {
		if(accum === undefined){
			accum = list[i];
		} else {
		accum = iterator(accum, list[i]);
		}
	}
	return accum;
};