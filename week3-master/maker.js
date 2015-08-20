//single thread one thing at a time.
function loopAWhile(){
	var  count = 0;
	while(count < 9999999){
	count += 0.1;
	}
	//console.log("done");
}
//loopAWhile();

function printDone(){
	console.log("done");
}

function callMe(){
	loopAWhile();
	//printDone();
	setTimeout(function(){
	console.log("Timeout is done");
	}, 2000);
	printDone();
}
callMe();

//callStack is where your function execute and how it does


//printDone()
//loopAWhile()
//callme()
//main() 1st
// you cant click anything while the while loop is running
// how to avoid blocking code

//Web APIs
	//timeout 2secs

//Task Queue
	//function will be in task queue

//Asychronics, node, promises


// There will be infinite loop 
function loopAWhile(){
	var stop = false;
	setTimer(function(){
	stop = true;
	}, 1000);
	while(stop !== true){

	}
	console.log("done");
}

//Exercise
function async([function(cb)){
	setTimeout(function(){
		cb("one");
	}, 200);
}
function(cb){
	setTimeout(function(){
	cb("two");
	}, 100)
}]
function(result){
	console.log(results);
});
//[one, two];

function async(tasks, callback){
	var result = [];
	forEach(tasks, function(val){
	result.push(callback(val))
	});
	return result;
}


function async(task, callback){
	var result = [];
	for(var i = 0; i < task.length; i++){
		task[i](function(){
		setTimeout(function(){
	console.log("Two");
	}, 200);
		
	}

	for(var i = 0; i < task.length; i++){
		task[i](setTimer(function(){
		console.log("Two")
		}, 100));
	}
	result.push(task[i]);
}

function async(task, callback){
	var result = [];
	for(var i = 0; i < task.length; i++){
		task[i](function(){
		setTimeout(function(){
	console.log("Two");
	}, 200);
		
	}
var result =[];
vary =	setTimeout(function(){
	console.log("two")
	},200);

var x = setTimeout(function(){
	console.log("one")
}, 100)

result.push(x, y);

function async(tasks, callback){
	var result = [];
	forEach(tasks, function(val){
	result.push(val)
	});
	return result;
}

function async(task, callback){
	var result = [];
	for(var i = 0; i < task.length; i++){
	(function(i){
		task[i](function(val){
		result.push(val);
		if(result.length === task.length){
		callback(result);
			}

		});
	})(i);
	}
}
function someIndex(i){
	setTimeout(function(){
	console.log("two")
	},200);
}


		