// solidify on passing in variables to the brackets for objects. 

// Your mission, should you choose to accept it, is to write a console.log after each line of code saying what you expect that variable to be at that point in time, and then logging the variable itself. I'll demonstrate with the first one below: 

console.log('I expect myFirstVariable to be undefined',myFirstVariable);
var myFirstVariable;
console.log('I still expect myFirstVariable to be undefined',myFirstVariable);
myFirstVariable = 8;
console.log('I expect myFirstVariable to be 8',myFirstVariable);


// Note that there are explanations at the bottom of this document for many of these answers. Definitely try to reason through this with a partner before looking through the explanations though!

// Alrigt, now it's your turn!
// I'll get you started with another obvious example, then I'll start leaving you more on your own:
// 1. What is the value of mySecondVar before we declare it? Can you explain why to your partner?
var mySeondVar;
console.log("The value of mySeondVar is undefined " + mySeondVar);
mySecondVar = 1;
// 2. What is the value of mySecondVar now?
console.log("the value of mySecondVar is 1 " + mySecondVar);
mySeondVar = 2;
// 3. And what is it now?
console.log("The value of mySeondVar is 2 " + mySeondVar)

// 1. What is the value of myThirdVar?
  // Uncomment the following line, and fill in what you expect myThirdVar to be. 
  var myThirdVar;
  console.log('I expect myThirdVar to be undefined:' + myThirdVar);

// Ok, now you should be pretty comfortable with the main takeaway from hoisting: don't try to use variables before you define them for the first time, because they'll just be undefined, not anything useful!

// Let's continue with this game though. It's kind of fun acting as the interpreter ourselves! 

var myBike = {};
myBike.color = 'pink';

var bikeCopy = myBike;
// What would we expect bikeCopy.color to be?
console.log("I expect bikeCopy.color to be pink " + bikeCopy.color);
bikeCopy.brand = 'Public';
// What would we expect bikeCopy.brand to be?
console.log("I expect bikeCopy.brand to be Public " + bikeCopy.brand);
// What would we expect myBike.brand to be? Can you explain why to your pair?
console.log("I expect myBike.brand to be Public " + myBike.brand);
var sparklyBikeMechanic = function(inputBike) {
  inputBike.sparklerCount = 2;
};

sparklyBikeMechanic(bikeCopy);
// What do we expect bikeCopy.sparklerCount to be?
console.log("I expect bikeCopy.sparklerCount to be 2 " + bikeCopy.sparklerCount);
// What do we expect myBike.sparklerCount to be? Again, take a minute here to explain why to your pair. My explanation would go something like this: 
console.log("I expect myBike.sparklerCount to be 2 " + myBike.sparklerCount);
  // Objects are passed by reference. That is, when you store them into a variable, what you're actually storing is just a reference to where that object sits in memory. So when we set bikeCopy = myBike, what we're actually doing is setting bikeCopy equal to the REFERENCE that myBike holds that points to where the object sits in memory. 
  // This just like they're both links pointing to the same webpage. 
  // So then we create a variable called sparklyBikeMechanic, which is a function that has a single parameter. All this function does is set a property on that object the user passed in to us. 
  // We then invoke sparklyBikeMechanic, and pass in bikeCopy. Remember that bikeCopy is just a link to where the object actually sits in memory.
  // So what we're doing inside sparklyBikeMechanic is looking up what that reference or link points to, and setting a property on that object where it sits in our computer's memory. 
  // inputBike is equal to what we pass in, which is bikeCopy. So those two are the same. And bikeCopy is a reference that is the same reference as myBike. So those two are the same. So inputBike, bikeCopy, and myBike are all links or references to the same place in memory. So when we modify a property on one of them, we're modifying that property on all of them!
  // So that is why we would expect bikeCopy and myBike to both have a sparklerCount of 2 after invoking sparklyBikeMechanic and passing in bikeCopy. 
  // SIDE NOTE: Talk through your code in this level of specificity! Say things that are so obvious to you that they bore you. This is exactly what interviewers want to hear- you need to prove to them that you know all this stuff inside and out. While it seems obvious to you that you know it well enough that you can skip over portions of the explanation, it is not obvious to the interviewer that you know this much yet- that's the point of the interview!

// "But wait, we didn't return anything from sparklyBikeMechanic!" you might exclaim. Take a few minutes here to talk with your partner about why this worked even without a return statement, because of side effects. 

// And now, let's explore that a bit more! 

var racingBikeMechanic = function(inputBike) {
  inputBike.carbonFiber = 'everything';
  return inputBike;
};
var returnedBike = racingBikeMechanic(bikeCopy);
// What do we expect bikeCopy.carbonFiber to be?
console.log("I expect bikeCopy.carbonFiber to be everything " + bikeCopy.carbonFiber);
// What do we expect myBike.carbonFiber to be? Explain it again to your partner to get practice explaining it. 
console.log("I expect myBike.carbonFiber to be everything " + myBike.carbonFiber);
// Now what do we expect returnedBike to be? Talk it out with your partner. Talk through how inputBike inside the function is nothing more than a reference, and we can return that same reference. 
console.log("I expect returnedBike to be [object object] " + returnedBike);

returnedBike.color = 'black';
// What do we expect bikeCopy.color to be now?
console.log("We expect bikeCopy.color to be black " + bikeCopy.color);
// Let's think through return statements again for a moment longer. 
var forgetfulMechanic = function(inputBike) {
  inputBike.condition = 'flawless';
};

var noBikeHere = forgetfulMechanic(bikeCopy);
// What do we expect myBike.condition to be?
console.log("I expect myBike.condition to be flawless " + myBike.condition);
// What do we expect noBikeHere to be? 
console.log("I expect noBikeHere to be undefined " + noBikeHere);
  // Talk through this with your partner for a few mintues, then read through what my description would be below:
  // A bike mechanic is an apt analogy here. This particular bike mechanic does a bunch of work modifying the bike and making it flawless (ok, they're actually just really good at that part of their job and can do it by simply modifying a property on the inputBike). 
  // But then when the customer comes to pick up her bike, the mechanic forgets to give it back! So the bike itself is fixed. But it's sitting in the back storage room. Unless the customer has some other way of accessing the bike, the mechanic not returning it is going to be a bit of an issue!
  // What does that mean in our example? 
    // We're declaring a function called forgetfulMechanic, that takes in a single object as it's parameter, and sets a property on that object. It does nothing else. 
    // Then we invoke forgetfulMechanic, passin gin bikeCopy as the argument. We set noBikeHere equal to the results of what forgetfulMechanic returns to us. 
    // forgetfulMechanic goes through and sets the condition property on inputBike equal to the string flawless. 
    // Since objects are passed by reference, inputBike is nothing more than a link to where that object sits in memory. So we go and look up the object at that position in memory, and set a property on that object in memory. 
    // This means that any other variable that points to this same position in memory will be able to see this updated property. 
      // This is called a side effect: modifying something that is accessible outside of our function.
    // In this case, we are not returning anything. So JavaScript will return undefined for us by default. 
    // Remember that JS is super modular. It evaluates each expression, and then passes the results of that expression on to the next thing. 
    // In this case, it will evaluate forgetfulMechanic(bikeCoyp);
    // Whatever that evaluates to is what noBikeHere will be set equal to.
    // You can think of noBikeHere as waiting to "catch" whatever forgetfulMechanic returns. If there's no variable there to catch the results, the function will return something, and the rest of the program will totally ignore it/ drop it on the floor. 
    // In this case, what it's "catching" is undefined, since forgetfulMechanic doesn't return anything. 

var confusedMechanic = function(inputBike) {
  return inputBike.condition = 'forgotten';
};

var notABike = confusedMechanic(bikeCopy);
// What do we expect myBike.condition to be now?
console.log("I expect myBike.condition to be forgotten " + myBike.condition);
// What do we expect notABike to be?
console.log("I expect notABike to be forgotten " + notABike); 
  // Test this out!
  // Now talk it through with your pair. 
  // Really. 
  // Remember that JS is super modular. It evaluates each expression, passing the results of that onto the next step. 
  // In this case, it evaluates the expression "inputBike.condition = 'forgotten'; ", and returns the result of what that expression evaluates to. What is the result of an assignment statement like that? 
    // Test this out in your console! 
    // type in something like var x = 8;
    // If you're using Chrome's developer tools console, the thing you see on the line after you enter this in is what's returned from that line being evaluated. In the case of var x = 8;, the value 8 is returned from that assignment. 
    // In the case of setting a property on our inputBike, we see a very similar thing happening: it returns only the thing on the right hand side of the equals sign. 
    // So in this case, it evaluates inputBike.condition = 'forgotten';, and that evaluates to just 'forgotten'. Then it retuns the result of that expression, which is simply the string 'forgotten'. 
// But note that we are still having the side effect (the object stored where the inputBike reference points to is updated). 

// So what happens if we refactor the code to be something like the below:
var awesomeMechanic = function(inputBike) {
  inputBike.condition = 'gleaming';
  return inputBike;
};

var shiningBike = awesomeMechanic(bikeCopy);
// What do we expect bikeCopy.condition to be?
console.log("I expect bikeCopy.condition to be gleaming " + bikeCopy.condition);
// What do we expect shiningBike to be? Can you explain why to your pair?
console.log("I expect shiningBike to be [object object] " + shiningBike)
  // Why is this different than confusedMechanic? 
  // Let's talk through it!
  // First, inside awesomeMechanic, we are overwriting a property on our inputBike.
    // Note: inputBike.condition = 'gleaming'; will still give 'gleaming' to anything listening for the result of that expression. So if we were to do something like console.log(inputBike.condition = 'gleaming');, we would log 'gleaming'.
  // Then, on the next line, we return what the expression inputBike evaluates to. In this case, inputBike is simply a variable. That variable is equal to a reference to an object. So inputBike as an expresion will evaluate to that reference, and we then return that reference. So shiningBike is now equal to the same reference that we passed in as our argument to awesomeMechanic. 

// By this point, you should be fairly comfortable with how objects and arrays are passed by reference, as well as how JS is a very modular language that evalutes each expression, then passes along the results of that expression. 

// Just to close out, let's confirm that numbers, strings, and booleans are NOT passed by reference. 
var numVar = 8;
var num2 = numVar;
// What do we expect numVar to be?
console.log("I expect numVar to be 8 " + numVar);
// What do we expect num2 to be?
console.log("I expect num2 to be 8 " + num2);

num2 = num2 + 10;
// What do we expect num2 to be?
console.log("I expect num2 to be 18 " + num2);
// What do we expect numVar to be? Can you explain why to your pair?
  // Remember, only objects and arrays are passed by reference. If this isn't super clear, check out this example:
  console.log("I expect numVar to be 18 " + numVar);

var myHeightInInches = 81;
var nineSquared = 81;
// Now, say I move to Mars where there's less gravity, and so I get taller by an inch. 
myHeightInInches = 82;
// Do we expect this to have any impact on our nineSquared variable? 
  // Of course not! The result of nineSquared should be totally independent of my height. And indeed, when we're passing around numbers, that's exactly the case. Numbers (and strings and booleans) are passed by value, not by reference. Only arrays and objects are passed by reference. 

// Congrats, you've now finished a slew of exercises on how arrays and objects are passed by reference! 
// I'd encourage you to go play with this on your own. If you had any questions as you went through the exercises, go explore those now. Or just try replicating some of what we did above with another example (maybe a chef, instead of a bike mechanic). This is an important area of JS, so solidifying on this could help prevent a lot of future confusion. 
