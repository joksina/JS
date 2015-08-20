//each
function each(list, callback){
	if(Array.isArray(list)){
	for(var i = 0; i <= list.length; i++){
		callback(list[i], i, list);
		}
	}else{
	for(var key in list){
		callback(list[key], key, list);
		}
	}
};

function shuffle(array) {
  var random = array.map(Math.random);
  array.sort(function(a, b) {
    return random[a] - random[b];
  });
return array;
}

//map
function map(list, callback){
	var mapped = [];
	each(list, function(value){
		mapped.push(callback(value))
	});
	return mapped;
}

//filter
function filter(list, test){
	var filtered = [];
	each(list, function(value){
		if(test(value)){
		filtered.push(value);
		}
	});
	return filtered;
};

//reduce
function reduce(list, func, accum){
	each(list, function(value){
	accum = func(value, accum);
	});
	return accum;
}

//call once
function once(func){
	var called = false;
	return function(){
	if(!called){
		func();
		}
		called = true
	}
}

//call once
function once(func){
	var called = false;
	return function(){
	if(!called){
	func();
	}
	called = true;
	}
}

//
var cards = [{'suit':'♦', 'face':'4'},
             {'suit':'♠', 'face':'J'},
             {'suit':'♠', 'face':'Q'},
             {'suit':'♣', 'face':'Q'},
             {'suit':'♠', 'face':'2'},
             {'suit':'♦', 'face':'7'},
             {'suit':'♥', 'face':'K'}];

//count
var count = 0;
cards.forEach(function(card) {
	if (['K', 'Q', 'J'].indexOf(card.face) !== -1) {
		count += 1;
	} 
});
console.log(count);

//with filter
var count = cards.filter(function(card){
	return ['K', 'Q', 'J'].indexOf(card.face) !== -1
}).length;
console.log(count);

//with reduce
var result = cards.reduce(function(count, card) {
	return ['K', 'Q', 'J'].indexOf(card.face) !== -1 ? count + 1 : count;
}, 0);
console.log(result);

//new game
var players = [
{"lastName":"Duncan", "team":"Spurs", "FGM":5, "FGA":10},
{"lastName":"Parker", "team":"Spurs", "FGM":7, "FGA":18},
{"lastName":"Ginobili", "team":"Spurs", "FGM":6, "FGA":11},
{"lastName":"James", "team":"Heat", "FGM":10, "FGA":21},
{"lastName":"Wade", "team":"Heat", "FGM":4, "FGA":12},
{"lastName":"Bosh", "team":"Heat", "FGM":6, "FGA":14}
];

function average(arr) {
	var total = arr.reduce(function(sum, val) { return sum + val}); 
	return (total / arr.length).toFixed(2);
}

function heat(player) {return player.team == 'Heat';}
function spurs(player) {return player.team == 'Spurs';}
function shootingPercentage(player) {return player.FGM/player.FGA;}

console.log(average(players.filter(heat).map(shootingPercentage)));
console.log(average(players.filter(spurs).map(shootingPercentage)));

//function filter(list, test){
	return reduce(list, function(accum, curr){
		if(test(curr)){
		accum.push(curr)
		}
		return accum;
	}, [])
}

function letterCount(str){
	var coll = str.split("");
	return reduce(coll, function(accum, curr){
		if (accum[curr]){
		 accum[curr] += 1;
		}else{
			accum[curr] = 1;
		}
		return accum;
	},{})
}

var sentence = "The Shattuck is the best"
var words = sentence.split(" ")

words.reduce(function(a, b) {return a.length > b.length ? a : b})


function count(str){
	var coll = str.split(" ");
	return coll.reduce(function(accum, curr){
	var longest;
		if(accum.length > curr.length){
		longest = accum;

		}else{
		longest = curr;
		}
		return longest;
	})
}

function once(func){
	var called = false;
	return function(){
		if (!called){
		func();
		}
		called = true;
	}
}