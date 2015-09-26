// fruits.reduce(function(acc, curr){
// return acc.concat(curr);
// }, []).map(function(name){
// return name}).filter(function(ora){
// return ora === "orange";
// });
// ["orange"]
// var fruits = [["orange", "juice"],["hop", "malt"]];

// Welcome to the final project for Telegraph Prep! Here we'll be pulling together everything we've learned so far in the course.

// The $(document).ready(function() {}) just says "Wait to run the code inside here until after everything we need on the page has loaded." We need this to make sure that we've gotten the underscore library back from the Internet before running our code.
// Since it nests everything inside of another function, it creates a local scope! This means that you will need to write console.logs in this file to see them show up in your console, rather than interrogating your console directly. Writing all your console.logs in your .js file here is a good pattern to get used to. 

$(document).ready(function() {
// NOTE: it is an explicit goal of this project to get you familiar with functional programming. Functional programming is a whole new way of thinking that requires some practice and experience to feel natural. These prompts are designed to give you experience using functional programming, so go through them as they're written, even if you can think of other ways of doing them without using functional programming. 

// We've created a sparse handful of helper functions in helperFunctions.js to handle making things appear on the screen. If you're interested in understanding it, feel free to look at that file! 
// In programming, it's a super useful skill to get used to just looking at the interfaces of things, and not worrying too much about how they work inside. If you try to figure out how everything works inside you'll find yourself descending through many deep, dark, and scary caves that oftentimes don't expand your programming knowledge very much. As much as possible, try to look at only the interfaces (what arguments a function takes, and what it returns). I'd strongly recommend that you take this approach with makeGameBoard and renderGameBoard. 

// Let's start off by getting used to the gameBoard and how this project is structured.

var gameBoard = makeGameBoard(8);

// When in doubt, always console.log whatever it is you're working with to investigate it more. Try that now with gameBoard to figure it out!
console.log('our gameBoard is:', gameBoard);

// We've included the underscore.js library on the page, so feel free to use it throughout this project. 

// gameBoard is an array of arrays (an array that is filled with other arrays). Let's start by using each to iterate through the gameBoard array, console.logging each item inside the gameBoard array. You should see 8 arrays, each of length 8, logged to your console. Each array here represents a row. 

// Ok, now that we see the gameBoard array contains 8 arrays representing the 8 rows in the board, let's investigate a single row. 
// Let's use each again, this time invoking it with the first row in the gameBoard. Let's go through and console.log each item in that row. 

// What you'll see is 8 different objects logged to your console. Click into them to explore them more. 
// Each of these objects represents a square. We have many different pieces of information we want to store about each square: what color it is, what position it is on the board, what gamePiece is at that position, etc. An object is a perfect way to store information about all these different properties associated with that square. 

// gameBoard[row][column] will get you the squareObj at that position in the gameBoard. So gameBoard[2][6] will point to the squareObj on row 3 column 7. Quick review on how this works: JS chains operators together, the results of each one being passed to the next operation. So first we're accessing the thing at index 2 in our gameBoard when we say gameBoard[2]. Then, within that thing (which is an array representing a row), we're asking for the item at the 6th index (which is going to be a squareObj). 
// We could chain this together even more. Explain with your pair each individual operation that's going on when we say:
gameBoard[3][5].color = 'black';
//gameBoard[3][5].color = 'red';


// Alright! Now that we've figured out the gameBoard is an array of arrays, and that each square is just an object with some useful properties on it, let's start using our functional programming tools to make some changes to the board. 
// Use each to iterate through the first row of the gameBoard (the array at position 0 in the gameBoard array). 
_.each(gameBoard[0], function(sqr) {
  console.log(sqr);
});
  // console.log each item that's passed into our callback. 
  // What is it that's being passed into each invocation of our callback? Can we name this parameter something obvious that makes it clear what it represents?
  // Let's change every square to a different color of your choosing. 

    // If you're not familiar with colors in JS, you can do this in three main ways: through rgb values, hex values (the way we've done it right now), or just typing in a color name like 'orange'.
      // Random aside: hex values are really useful if you're trying to create random colors :)
  // Now let's do the same thing using map on the second row of our gameBoard.
    // First, create an array of 8 color strings. Mine would be ['orange','purple','orange','purple','orange','purple','orange','purple']
    // What's the key difference between map and each? map returns an array, whereas each only has side effects, and does not return anything. 

// _.map(gameBoard, function(square) {
//  var color = "#";
//  var letters = '0123456789ABCDEF'.split('');
//  console.log(letters);
//  for (var i = 0; i < gameBoard.length; i++) {
//    for (var j = 0; j < gameBoard.length; j++) {
//      for (var k = 0; k < 6; k++) {
//        color += letters[Math.floor(Math.random() * 16)];
//        gameBoard[i][j].color = color;
//      }
//      color = '#';
//    }
//  }
 //_.each(square, function(square.color) {
 //square.color = 'red';
//});
//console.log(gameBoard);

  // This works
// 

// gameBoard[0] = newRowTwo;
// var y = _.map(gameBoard[1], function(value) {
//  if(value % 2 === 0) {
//    value.color = "orange";
//  } else {
//    value.color = "purple";
//  };
// });


var Colors = [ 'orange','purple','orange','purple','orange','purple','orange','purple' ];
//colors += '#'+(Math.random()*0xFFFFFF<<0).toString(16);
var mapRow2Colors = _.map(Colors, function(value, index, list) {
 return gameBoard[1][index].color = value; });

console.log(mapRow2Colors);

    // Think through how we'd use each and map in different ways to accomplish the same goal. 
    // The key part here is how to leverage the fact that map returns an array of values to you. So what we're going to do in the end is overwrite the second row of the gameBoard with the mutated array map returns to us. 
    // Let's pseudocode!
      // map through an array of colors
      // remember that the callback function has to do three three things:
      _.each(gameBoard,function(row){
          _.each(row, function(square){
             square.color = "purple";
           } );
        });
        // 1. Take in an item.
        // 2. Do something to change that item into what we want to see in the output array.
        // 3. Return the changed item. 
      // On each iteration of map
        // Take in a color
        // Change that color into a squareObj
          // Recall that each squareObj on our board looks like this: 
            // var square = {
            //     position: [row, column],
            //     color: colorToBeDisplayed,
            //     gamePiece: '', // This is the property that will contain our gamePiece object if one is on that square. 
            //     text: ''
            // };
//var count = 0

var colorArr =  [ 'orange','purple','orange','purple','orange','purple','orange','purple' ];
var newRowTwo = [];
_.each(gameBoard, function(row) {
  newRowTwo = _.map(colorArr, function(value){
 return {
   position: [],
   color: value,
   gamePiece: "",
   text: ""
 }
})
  gameBoard[0] = newRowTwo;

});
        // Return the squareObj
        // Set the second row of our gameBoard equal to what map returns to us. 
        // Remember, the key difference between map and each is that each purely has side effects, while map is designed to return a new array that is the same length as the old array. In order to use map properly, we must put this returned array to use. 
  // Now that we've figured out how to use map and each to change the colors in a row, let's nest them inside of another each to change all of the rows!
    // Let's warm up to this by doing it the way we would have before we knew how to program functionally: using nested for loops. 
      // Use an outer for loop to iterate through the entire gameBoard.
        // Each iteration will access one of the rows in the gameBoard. 
      // Use an inner for loop to iterate through a row. 
        // Each iteration will access one of the squareObjs in that row. 
        // While iterating through each object, change it's color property to 'orange' (or any other color of your choosing).

    // Great! Now that we've changed the color of each square to orange using for loops, let's transition this over to functional programming.
      // First, replace the inner for loop with an each statement that changes the color of each square to blue. Be sure to write a new each statement for this- don't just copy and paste the one you've written up above. We want you to get as much practice typing these out as possible!


      // Now that all the squares are changed to blue, let's replace the outer for loop with an each statement. Again, write a whole new one from scratch here. 
        // Change the color in the inner each statement to green, just to make sure everything's working. 
        // Remember, when in doubt, console.log the item you're working with to make sure you understand what it is at each step! 
          // This is a really useful pattern to get used to. As you work with more and more complex codebases at various jobs, you won't be able to just look at the code and know exactly what you're working with; you'll have to log the results to see what the variables represent. 
        // This is where naming your variables something descriptive makes a ton of sense. What is the thing that is being passed into the callback function on either each statement? Could you name it something that reflects exactly what's being passed in?

    // Awesome! Hopefully at this point you've fully grasped that each is just another way of executing some code on each item in a collection. And that you can make that code do whatever you want it to. 
      // Let's replace our inner each loop with map, changing the colors of all the squares to purple this time. 
      // Remember that to do this, you'll have to first create an array that is just filled with the word purple 8 times. 

// One of the things you'll need to be great at as an engineer is debugging. Debugging is nothing more than problem solving, or having fun with a puzzle. 
// As you work through this project, you will get stuck on things. That's totally normal and expected! Getting your code to work when it isn't is called debugging. When you get stuck, follow the debugging pattern we outline below. 
  // Debugging pattern:
    // 1. Verify all of your assumptions by logging them to the console with clear comments on what each log is. For example: console.log('squareObj inside _.each callback', squareObj);
    // 2. Find the last point in your code where things are doing what you expect them to/ the first point in your code where they're not doing what you expect.
    // 3. Iterate rapidly. Try new things (and console.log them!) until you get to a solution that works. Pay attention to each new result along the way (even if it's not what you expect it to be) to see what new information you can learn from it.
    // 4. High five someone nearby when you figure it out!

// Now that we have a decent understanding of the gameBoard. Now let's test out the makePiece function. 
  // Let's add a new piece (name it anything you want. babyDino is my current favorite, but I'm sure you'll have fun coming up with your own favorite gamePieces!). Try invoking makePiece with the right arguments and make sure it worked by opening up your browser. Uncomment the following lines to make this work. 
  makePiece(gameBoard, [3,5], 'babyDino');
  gameBoard[3][5].gamePiece.imageURL = "http://cs307103.vk.me/v307103801/4aad/kGuRYIMoJnw.jpg";

  // Now that we've added a piece to the board, let's use that piece to practice filter. If you're not familiar with filter, look it up in the underscorejs docs! 
  // Invoke _.filter on the row that you just added the gamePiece to. See if you can use it to return an array of only the square(s) that have a gamePiece on them. Do you remember the property name where we're storing gamePiece on each squareObj? 
  var filt = _.filter(gameBoard[3], function(square){
      return square.gamePiece !== "";
   });
console.log("f", filt);
  // Now try adding gamePieces to a couple of different rows throughout the board using this makePiece funcion. 
  makePiece(gameBoard, [4,6], "purpDino");
gameBoard[4][6].gamePiece.imageURL = "http://images2.fanpop.com/images/photos/6300000/The-Flintstones-Dino-the-flintstones-6386240-500-582.jpg";

var y = []
_.each(gameBoard, function(row){
  _.each(row, function(square){
     y = _.filter(square, function(filt) {
      return filt.gamePiece !== "";
    }
      )
  }

    )
}

  )
console.log(y);
  // Go ahead and find all the pieces on the whole board, organized by row.
  // The output should be an array that is filled with nested arrays, one for each row. Each object in those nested row arrays should be a square that has a gamePiece on it. 
    // example output: "results after filter: [Array[0], Array[0], Array[0], Array[3], Array[0], Array[2], Array[0], Array[0]]" for a gameBoard that has three gamePieces on row 3 and two gamePieces on row 5. 
    var mapped = _.map(gameBoard, function(row){
     
        return _.filter(row, function(obj){

        return obj.gamePiece !== "";
      })

   }) 
    console.log(mapped);
  // Think about whether you might want to use each or map. Discuss with your pair why you might want to choose one over the other. 
    // Hint: Remember that each can't return anything, but it can have side effects (that is, modify variables it has scope access to). On the other hand, map DOES return something... what does it return?
    // Bonus: Write two implementations! One using each and one using map. Be sure to label the output "results after filter using each" & "results after filter using map"

// Before we move onto the next section, consider commenting out any console.logs you have so far. This will make your console easier to read, and your code look more professional. 

// We're now going to go on a mini-sprint covering reduce, the last critical functional programming tool. Understanding reduce will let us take this messy nested array we have, and turn it into a single, flattened array. 

//Reduce mini-sprint:
// You'll notice that oftentimes what you're doing with for loops and each statements is reducing an entire collection down to a single answer. This is such a common pattern that there's a canonical functional programming tool called reduce. Let's explore what reduce does, and how it boils a collection down to a single answer!
// What reduce does is:
  // 1. Iterate over a collection, and invoke a callback function on each item in that collection. 
  // 2. The callback function takes two parameters: the accumulated result from the previous iteration, and the current item.
  // 3. The callback performs some logic, and 
  // 4. The callback returns a single item, given these two inputs. 
  // 5. The result returned from the previous iteration is now passed in as the accumulated result to the next iteration. 
  // 6. reduce returns the final accumulated value for us. 
  // An obvious way of using reduce is to sum up the values in an array. That would look like so:
  var testArr = [6,7,8,9,10];
  var sum = _.reduce(testArr, function(accumulated, current) {
    return accumulated + current;
  });
  console.log('the sum returned from reduce is:',sum);
  // Let's break this down for a moment. 
  // We're creating a variable sum, and setting it equal to the result of invoking reduce with some arguments. 
  //var sum = _.reduce(te)
    // Those arguments are the testArr we just created, and a callback function. 
      // The callback function takes in two parameters: the accumulated result from the previous invocation of the callback function, and the current value being iterated over. 
      // The callback then performs some logic on these two things and returns a single thing. 
      // In our case, the callback function adds these two things together and returns the result of that addition. 
      // This result is then passed in as accumulated to our next invocation of the callback. 
      // At the end, reduce returns the accumulated value for us. 
  // Write out your own invocation of reduce that gives you the results of multiplying all the values in testArr together. 
  var myInvo = _.reduce(testArr, function(acc, curr){
    return acc * curr;
  }
    );
   console.log('the sum returned from reduce is:',myInvo);
  // Reduce also works on the values stored in an object. 
  var codingPoints = {
    coderByte: 1200,
    eloquentJavaScript: 80,
    codeCademy: 700,
    telegraphPrep: 8000000
  };
  // Let's use reduce to add together all the values in our codingPoints object. 
  var add = _.reduce(codingPoints, function(accu, curr){
    return accu + curr;
});
  console.log(add);
  // reduce also takes an optional starting value that we haven't been giving it yet. 
    // What is this starting value used for? It's the value that is passed in as "accumulated" on the first iteration. 
    // Let's say that you already came in with 10 codingPoints before starting on coderByte or codeCademy. We can pass that in as the starting value to reduce. All you need to do is put it after a comma after the callback function, like so: 
    var pointTotal = _.reduce(codingPoints, function(accumulated, current) {
      return accumulated + current
      //logic goes here
    }, 10);
    console.log(pointTotal);
    // Try writing a new invocation of reduce that gives yourself 50 starting codingPoints and then sums up the rest of the codingPoints. 
    // Remember that reduce returns a value. Feel free to store it in a variable if you like.
    // Now try writing another invocation of reduce that multiplies the values in testArr together, but starts with the value of 10. 
      // What do you expect to happen?
      var multiply = _.reduce(codingPoints, function(acc, curr){
        return acc * curr
      }, 10);
      console.log(multiply);
      // Hint: think through what happens on the first iteration through reduce. 
        // Let's step through it: 10 will be passed in as the value for accumulated, and 6 will be passed in as the value for current. We'll multiply them together, and return the result, 60. 
        // 60 will then be passed in as the value for accumulated on the next iteration, and 7 will be passed in as the value for current. Multiply them together, we get 420, and return that value. 
        // We repeat this through the last item in the array, eventually getting to an answer that is 10x the value we got when we did not pass in 10 as the starting value. 
  // Reduce is super flexible. You can use it like filter if you wanted to. 
  // Let's write out code that reduces the codingPoints object down to just an array of values that are larger than 1000. So we'd expect to get the following: [1200, 8000000]
    // HINT: you can pass in anything you want as a starting value, even an empty array.
    //var larg = ._map(codingPoints, function(value){
      var arr = [];
        var larg = _.reduce(codingPoints, function(val, curr){
          if (curr > 1000) {
            return arr.concat(curr);
          }
         return arr
        }, [])
  //  })
    console.log(larg);

  // Now let's think through how we could use reduce to turn an array of nested arrays into a single array. 
    var nestedArrs = [[1,2,3],[4],[5,6,7,8],[9,10]];
    // We can use reduce to simplify that down to a single value of [1,2,3,4,5,6,7,8,9,10].
    // As always, when in doubt, log the variables you're working with to the console with a clear note. 
    // Write out the code to take each value from a nested array and push it into an accumulated array. 
      // When in doubt, pseudocode!
      var combine = _.reduce(nestedArrs, function(acc, curr){
        return acc.concat(curr);
      })
      console.log(combine);
    // Make sure you're using reduce for this!

  // Another interesting use of reduce is with booleans. 
    var friends = {
      rihanna: true,
      taylorSwift: true,
      katyPerry: false
    };
    // Say you have a collection of people, and a true or false value marking whether you're friends with them or not. Maybe you want to iterate through the whole collection and see if you're friends with everyone. We can use reduce for that!
      // Let's think about this for a moment. On each iteration, we want to check two things: 
        // 1. Whether we're friends with the current person (current value)
        // 2. AND whether we're friends with everyone who came before (accumulated value)
      var f = _.reduce(friends, function(accumulated, current) {
        // This will return true ONLY IF both the current value is true, and the result of all accumulated iterations is true too. This will return false if either the current or the accumulated is false. 
        return accumulated && current; 
      }, true); //start with true. What happens if we start with false? 
      console.log(f)
    // Now let's put this to use another way. 
      var bouncersNightmare= {ashley: 21, bobby:23, camila:25, gabriela:22, ben:21, miranda:24, jayden:22, sofia:23, matias:21, hannah:21, makayla:21, justin:22, isaiah:25, caleb:22, chloe:24};
      // Let's make this poor bouncer's job a bit easier by reducing this collection down to a single true or false value of whether everyone in this group is at least 21 or not. 
        // Use reduce to turn bouncersNightmare into a single boolean value certifying whether everyone in the collection is at least 21. 
        // Test it out by switching one of the ages to be less than 21. Does your function return false now? 
        var ov21 = _.reduce(bouncersNightmare, function(acc, cur) {
          return (acc && cur) >= 21;
        }, [])
        console.log(ov21);
  // Awesome job! You've now covered several different uses of reduce. There's a bit of a running joke amongst programmers that any problem can be solved using reduce. With these tools in your belt, you're going to be well-suited to do just that! 


// Let's return to our gameBoard now. Step back up to just before we started the reduce mini-sprint to remind yourself what we were doing. 
// Remember that we'd just used each and filter to find all the gamePieces on the board: "results after filter: [Array[0], Array[0], Array[0], Array[3], Array[0], Array[2], Array[0], Array[0]]" for a gameBoard that has three gamePieces on row 3 and two game pieces on row 5.
// var filtG = []
// filtG = _.map(gameBoard, function(value, index){
//   return _.reduce(value, function(acc, cur){
//     // if (cur.gamePiece !== "") {
//     if (typeof (acc && cur) === "object" && typeof ((acc && cur).gamePiece) !== "") {
//       return acc && cur;
//     }
//   }, [])
// })
// console.log(filtG);

var filtG  = _.map(gameBoard, function(value){
  return _.filter(value, function(square){
    return square.gamePiece !== "";
  })
})

var red = _.reduce(filtG, function(acc, curr){
  if(curr !== ""){
    return acc.concat(curr);
  }
})
console.log(red)


// Putting all the above functions together
var theDinos = _.reduce(gameBoard, function(accum, row){
  _.each(row, function(square){
    if(square.gamePiece !== "") {
      accum.push(square);
    }
  })
  return accum;
}, [])
console.log(theDinos);

// Putting it together without writing flattened

//
// Having that information scattered throughout a bunch of different arrays seems messy. You can probably think of plenty of cases where we'd want to have all that information collected into a single array. 
  // Wait, that's starting to sound like reduce! We're taking a collection of a bunch of things, and reducing it down to a single thing. 
    // Can you think of a way we could reduce an array filled with arrays to a single array just filled with all the values contained in each subarray? 
    // Hint: what if we tried passing in an empty array as the starting value?

// This ends our intro to the capstone project. By this point you should be pretty familiar with the gameBoard, the makePiece function, and all four of the main functional programming tools (each, map, filter, and reduce). From here on out, we're intentionally going to give you less guidance. One of the key skills to be a successful engineer is autonomy in accomplishing tasks that are given to you. We want you to get used to that feeling with these upcoming exercises. 


// 1. Create an array called piecesToAdd that holds the names of each of the pieces we'll create for each player. For example: ['kuddlyKoala', 'babyDino','babyDino', 'babyDino', 'fierceDragon', 'lazyPanda', 'lazyPanda']
var piecesToAdd = ['kuddlyKoala', 'babyDino','babyDino', 'babyDino', 'fierceDragon', 'lazyPanda', 'lazyPanda'];
// use switch
// 2. Create an array of the playerNames. For example: ['hermoineGranger', 'graceHopper']
var playerNames = ['hermoineGranger', 'graceHopper'];
// 3. Now use two (nested) each loops to add these pieces to the board. Remember that we have the makePiece function! 
  // Question1: How can you make sure each piece ends up on a different square on the board? 
  
  // Question2: What happens when you get to the end of a line? How do you know to start on the first position of the next line? Think if you can use the modulus "%" operator for this. If you're not familiar with the modulus operator, it gives you the remainder from dividing two numbers. So if we divide 12 by 8, that gives us a remainder of 4 (we have 4 left over after taking 8 out of 12). As always, feel free to google around for more information!
  // Question3: How can we line these pieces up on opposite sides of the board?
  // BEST PRACTICE: Pseudocode the specific steps you'll need to accomplish. This takes a seemingly large and complex task and breaks it down into solvable chunks. 
  _.each(gameBoard, function(row, index){
    _.each(row, function(square, index2){

      if (index2 % 2 === 0) {
        makePiece(gameBoard, [index, index2], "lazyPanda" );
        gameBoard[index][index2].gamePiece.imageURL = "http://images2.fanpop.com/images/photos/6300000/The-Flintstones-Dino-the-flintstones-6386240-500-582.jpg";
      }
      //  else
      // if (index2 % 2 !== 0) {
      //   makePiece(gameBoard, [index, index2], "lazyPanda" );
      //   gameBoard[index][index2].gamePiece.imageURL = "http://cs307103.vk.me/v307103801/4aad/kGuRYIMoJnw.jpg";
      // }
    })
  })


// 4. Great! Now we have two fierce opposing armies (or two groups of friends just trying to gather together on the same square for a group hug?!) arranged on the board. It's time to make them look intimidating or pretty for their impending battle or hugfest. 
  // Let's use a couple of our functional programming skills here. We'll chain them together, slowly building up to do some fairly complex operations. 
    // A. Use filter to iterate through a single row, returning an arr of the squareObj in that row that have a gamePiece on them. 
    // B. Use map to change each of the objects in the array returned from filter to an array of their positions. Positions are a property saved as a property on each object. Console.log each object to check it out!
    // C. Use each to repeat this process on each row in your gameBoard
    // D. At this point, you should have an array of subarrays. Each of those subarrays will contain the positions of the squares in a given row that have a gamePiece on them. Now, let's use reduce to reduce this down to a single array that contains the position of all the squares we're interested in. 
    // E. Whew! You've now used all four of the canonical functional programming functions! Great job getting here. Now we have a single array that holds the position of all the gamePieces. Let's use each to go through that array and do something for each item in that array. Except we're going to use it in a slightly creative way (yay for creativity in programming! And here my momma thought I'd never be an artist.). We're just going to use each item in the positionsArray as information to go find the gamePiece at that position. Then, once we have those gamePieces, let's add an imageURL to each gamePiece so we can see the gamePieces on the board. 
      // imageURL is just a property on each object. All you need to do is add a link to an image. If you haven't done this before, you can right click on any image online, and get a link to that image. Set the imageURL property equal to that string, and voila! Your image will appear on the screen. 

// 5. Use filter to grab all gamePieces of the same type, and then use each to iterate through them and set their movement descriptions. Don't worry about building out the logic of how you'd make them move- for now just have fun coming up with moves you'd want your various pieces to do. For example, maybe scaredKitty goes and hides in the corner, and impetuousDragon frequently flies off and leaves the board entirely. 

// 6. Use reduce to create an object that has a tally of all our gamePieces. For example, the result might be: 
// { babyDino: 3,
//   impetutousDragon: 2,
//   scaredKitty: 4,
//   hobblingPirate:8,
//   groupHuggers:12 }
  // You should be able to do this from scratch by just using reduce inside of another reduce if you're feeling ambitious!

// 7. When a user clicks on a square, the app will invoke a function on the global scope called 'clickHandler'. 
  // This funnction will be invoked with the indices of the square clicked on. For example, if the user clicked on the square in the top-left corner of the board, the clickHandler will be invoked like so: clickHandler([0,0]);
  // TODO: Uncomment lines 70-72 in helperFunctions.js. The program will now try to invoke a clickHandler function every time the user clicks on a square on the board. 
  // TODO: Uncomment the lines below and see what happens when you click on a square on the board!
    // window.clickHandler = function(positionArr) {
    //   var row = positionArr[0];
    //   var column = positionArr[1];
    //   console.log('the user clicked on square:', gameBoard[row][column]);
    //   // IMPORTANT: make sure that renderGameBoard(gameBoard) always comes at the end of your clickHandler function. Otherwise, your lovely UI enhancements won't show up!
    //   renderGameBoard(gameBoard);
    // };
  // Write some logic inside of clickHandler that highlights all the squares in the row that has been clicked on by turning them pink. 
  // Now expand this to include all the squares in the same column as the square that was clicked on. So if the user clicks on a square in row 3, column 4, all squares in row 3 and all squares in column 4 should become pink. 

// 8. Now let's go through and create a function to undo highlightPieces so the board returns to it's default pattern of alternating colors. There are several different approaches that will work well here. Choose whichever one you want (but do keep practicing functional programming- that will be incredibly valuable, particularly if it's still a bit painful for you). Just keep in mind that the end goal is to return the board to a "normal" looking state where the color of the pieces alternates as it originally did, with the gamePieces still being displayed on the relevant squares. 

// 9. Now let's abstract out the logic of highlighting the squares in the same row and column and put it into a function on each of our gamePieces. 
  // Our end goal here is to allow each gamePiece type to have it's own highlightSquares pattern. So some gamePiece types might move diagonally, some might move horizontally, some might jump randomly, etc. 
  // To do this, we'll have to make highlightSquares a method on each gamePiece so we can customize it to that gamePiece type. 
  // Create a function on each gamePiece called highlightSquares. 
  // Remove the highlightSquares from being hardcoded into our clickHandler function and put it into the highlightSquares method on each object. 
  // Now, inside clickHandler, let's see if there is a gamePiece on the square that was clicked on. If there is, invoke highlightSquares as a method on that object. 

// 10. Now that highlightSquares is a method on each gamePiece object, we can change what each gamePiece's movement pattern is! Go through and change the logic of which squares on the board are highlighted for each different type of piece. For our scaredKitten example, whose movement description is "Runs to a corner and hides", we would highlight only the four corner squares. 
  // Each gamePiece of the same type should have the same highlightSquares functionality. 
  // See if you can highlight all the diagonal squares from a piece. 
    // HINT: This is going to sound obvious, but what math do you have to do to move from square [0,0] to it's lower-right diagonal of [1,1]? 
    // HINT: There are 4 potential diagonals from a given square: 
      // 1. up and to the right
      // 2. down and to the right
      // 3. down and to the left
      // 4. up and to the left
      // Each one will have it's own logic and will likely have to be built out separately. Don't feel bad about this! Start by making just one of those four work. 
        // This is a super valuable pattern called MVP, or "Minimum Viable Product". All it means is get the tiniest possible version of something working first, then work on expanding it out to a full feature set. In this case, make one diagonal work first, then worry about the other three afterwards. 

// 11. Now we're highlighting specific squares that represent where each piece can move to. Let's build out some logic, starting in our clickHandler, that lets us highlight squares on the board when a piece is clicked, and then un-highlight the board (return it to it's default state) when that same piece is clicked again. There are many different ways of accomplishing this too- we're going to challenge you to figure out which path you want to take!

// 12. Now we can click on a piece to highlight the available squares it can move to, and click on it again to un-highlight those squares. Let's expand the logic of the highlightPieces methods! Check each square that gets highlighted to see if it has a piece on it or not. If there is a piece on that square already, set the text property of that square to be the following two lines:
  // "OXO
  // XOX"
  // This should tell the user that there is a potential collision on that square, if the piece were to move there. 

// 13. Now let's build out the ability to make each piece move on the board! 
  // While a piece is clicked (i.e., while the squares it can move to on the board are highlighted), if one of those squares is clicked on, move the piece there! 
  // For now, let's assume our user is being nice to us and will only try to move the gamePiece to a square that is eligible to be moved to. 
  // When this happens, there are a few things we need to do:
    // 1. Add the piece to it's new location
    // 2. Remove the piece from it's current location
    // 3. Remove highlighting from the board
    // 4. Depending on your implementation, set that piece as inactive. 

// 14. Great! Now we can click on a piece and then click on another square to move it there. That's pretty cool. But we've been assuming that our user would be nice to us by only trying to move a piece to where it's allowed to move. What if we wanted to allow not-so-nice people to play our game too? Let's add in a logic check here. Make sure the square the user clicks on to try to move a piece to is a square that piece can actually move to. 
  // How can we accomplish this? Well we've already highlighted the eligible squares on the board with a certain color, right? Let's use that to our advantage!
  // If the user-selected square isn't eligible, pop up an alert for the user telling them to either:
    // A. Choose a different square that is highlighted in pink to move the piece to
    // B. Click on the same original square again to de-select that piece. 

/*
CONGRATULATIONS!!
You've now gotten in extensive practice on functional programming, and should be incredibly comfortable with a variety of creative ways to put functional programming to use!
You've typed up many, many lines of code, debugged extensively, and learned some basics of making things show up on the user's screen. 
You've built out the basic functionality needed for a board game. From here, you can easily extend this to be whatever you want it to be! You can build out your own game logic from here to make it into any game you want. You can add in your own gamePieces (with their own funny images!), and style the board any way you want. 
Hope you've had an awesome time on these first parts of your JS Journey! We're honored that we got to share them with you. Can't wait to see the amazing things your future holds in store with these newfound skills :)
Sincerely,
The team at Telegraph Academy
*/


  // NOTE: there are two separate things going on: you making a change to the javascript code/logic behind the app, and rendering that new "state" to the DOM (what appears on the screen). In order to see any changes you make rendered to the screen, we need to call renderGameBoard() and pass in the updated gameBoard as an argument. 
  renderGameBoard(gameBoard); // DON'T REMOVE THIS LINE. This line makes sure that any changes you make to your JS code will actually show up on the screen. Try commenting it out and see how the gameBoard is no longer rendered to the browser, even though your logic is clearly still running, as seen by your console.logs. 

});
