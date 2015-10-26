//Behavior Delegation, Inheritence
//Object Oriented Function
//object constructors


var sum = function(a){
	var b;
	return a + b;
};

var myObject = {};

//new objects gets created 
var myTree = new tree();

function foo(who){
	this.me = who;
}

//identity is an object created
foo.prototype.identify = function(){
	return "I am " + this.me;
};

//creating an Object
//this creates a link to foo.prototype
//new: a brand new obj gets created
//the object gets linked to .prototype
//context gets set to "this" this becomes a1
//return this
var a1 = new foo("a1");
var a2 = new foo("a2");

//this.identify goes out of the scope to find identity
a2.speak = function(){
	alert("Hello, " + this.identify() + ".");
};

a1.constructor === foo;
a1.constructor === a2.constructor;

//a way to reference the actual prototype
a1.__proto__ === foo.prototype;
a1.__proto__ === a2.__proto__;

a1.__proto__ === Object.getPrototypeOf(a1);


//Shadowing... creating a reference to something
function foo(who){
	this.me = who;
}

foo.prototype.identify = function(){
	return "I am " + this.me;
};

var a1 = new foo("a1");
a1.identify();

a1.identify() = function(){
	alert("hello, " + foo.prototype.identify.call(this) + ".");
};
a1.identify(); //

//link prototype chain to prototype chain
Bar.prototype = Object.create(foo.prototype);


//fraction converter
//turn decimal into one frac
//multiply 10/10
//divide numerator with denominator
//reduce to the smallest fraction
function fractionConverter(number){
	var denominator = 1;
	if(number < 0){
	return "-" + fractionConverter(-number)
	}
	while(number % 1 !== 0){
		number = number * 10;
		denominator = denominator * 10;
	}
	var gcd = 1
	for(var i = number; i > 0; i--) {
		if(number % i === 0 && denominator%i === 0){
		gcd = i;
		break;
	}
}
return number / gcd + "/" + denominator/gcd;

}
fractionConverter(0.5); // 1/2


//lettercount("ajoke")
//{a:1, j:1, o:1, k:1, e:1}

var letterCount = function(str){
	//split str []
	//return reduce iteration
	//set your first value to empty {}
	//

	str = str.split('');
	return reduce(str, function(acc, curr){
		if(acc[curr]){
		acc[curr] += 1;
		}else {
		acc[curr] = 1;
		}
	return acc;
	}, {});
};