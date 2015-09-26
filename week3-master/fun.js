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

function g(h, m) {
    var mPos = m * 6;
    var hPos = h * 5 * 6 + (m * 0.5);
    log("Minute hand position: " + mPos + "&deg; Hour hand position: " + hPos + "&deg;");
    if (mPos === hPos) return 0;
    var diff = Math.abs(mPos - hPos);
    return Math.min(360 - diff, diff);
}

function reduce(coll, func, curr){
	var accum = curr === undefined;
	each(coll, function(value){
		if(accum){
			curr = value;
			accum = false;
		} else {
			curr = func(curr, value);
		}
	})
	return curr;
}

function count(str){
	var coll = str.split(" ");
	return coll.reduce(function(accum, curr){
		if(accum.length > curr.length){
		return accum;

		}else{
		return curr;
		}
	}, 0)
}
var isPalindrome = function (str) {
	return str === str.split('').reverse().join('');
};


function count(str){
	var coll = str.split(" ");
	return coll.reduce(function(accum, curr){
		curr = isPalindrome(curr);
		if(accum.length > curr.length){
		return accum;

		}else{
		return curr;
		}
	}, 0)
}








function is_Palindrome(str1) {
var rev = str1.split("").reverse().join("");
return str1 == rev;
}

function longest_palindrome(str1){

var max_length = 0,
maxp = '';

for(var i=0; i < str1.length; i++) 
{
var subs = str1.substr(i, str1.length);

for(var j=subs.length; j>=0; j--) 
{
var sub_subs_str = subs.substr(0, j);
if (sub_subs_str.length <= 1)
continue;

if (is_Palindrome(sub_subs_str))
{
if (sub_subs_str.length > max_length) 
{
max_length = sub_subs_str.length;
maxp = sub_subs_str;
}
}
}
}

return maxp;
}
console.log(longest_palindrome("abracadabra"));

console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));

function longestPalindromeIn(input) {
    var palArr = input.split('');
    return palArr.map(function(e,i){ return longestPalindromeAt(i);}).reduce(function(p,c){ return p.length>=c.length ? p: c;},'');

    function fromPalArr(index,length) {
       return palArr.slice(index-Math.floor(length/2),index+Math.ceil(length/2)).join('');
    }

    function palindromeAt(index, length){
       if (Math.min(index, palArr.length-index) - Math.floor(length/2) >= 0) {
          if (length %2 == 0) {
             for (var i = 1; i <= length/2; i++) {
                if (palArr[index-i] != palArr[index+i-1]){
                   return false;
                }
             }
             return true;
          }
          if (length %2 == 1) {
             for (var i = 1; i <= length/2; i++) {
                if (palArr[index-i] != palArr[index+i]){
                   return false;
                }
             }
             return true;
          }
       }
       return false;
    }

    function longestPalindromeAt(index) {
       var i = 1;
       if (palindromeAt(index, 2)) {
          i = 2;
       } else if (palindromeAt(index,3)) {
          i = 1;
       } else {
          return fromPalArr(index,1);
       }
       while(palindromeAt(index,i)) {
         i += 2;
       }
       return fromPalArr(index,i-2);
    }
}

