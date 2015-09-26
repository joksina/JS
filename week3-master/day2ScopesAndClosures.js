// Welcome to the exercises for scopes and closures!

// Much like yesterday, a lot of today is going to involve explaining your code to your pair. Follow a similar pattern to yesterday: Think through what you expect the code to do, explain that your pair, and then test it out to see what it actually does (with clear labels!!). Once you see the actual results (which will often be different than your expectations), explain why we're seeing that behavior to your pair. 

// Today we're going to use a restaurant's kitchen as our example. We're going to have a couple different areas to our fancy kitchen: 
// bbqMeatCooker
// vegetarianCorner
// pastryConcoctions
// Clearly, each of these will have their own set of tools, and we need to make sure they share some things (a common restaurant name) and not others (say the cutting board from the bbqMeatCooker and the vegetarian friendly one from vegetarianCorner). 

// First, let's put the name and address of our restaurant in the global scope. 
var restaurantName = 'Telegraph Cook';
var address = '1600 Shattuck Ave';

// Next we'll create the vegetarianCorner. We want to hold some variables here that are only accessible inside vegetarianCorner, so we can keep it vegan friendly. How do we keep some variables private in JS? Local Scope! And what's the only way to create local scope in JS? Inside a function body, using the var keyword! So we'll create a function for our vegetarianCorner. 

var vegetarianCorner = function() {
  // We have a dedicated veggie chef (yeah, we're a super fancy restaurant). Let's set her name here: 
  var chef = 'Amanda';
  // And a favorite dish: 
  var favoriteDish = 'saag paneer';

  // To warm up, what do you expect chef to be if we console log it right here? 
  console.log("we expect chef to be Amanda " + chef);
    // Explain to your partner the process the JS interpreter will go through to figure out what chef is. 
    // My explanation would go something like "First, it encounters chef, which it recognizes is a variable since it's not wrapped in quotes. It goes to look up what that variable is equal to. It looks in it's own scope first, and finds chef there! chef is equal to the string 'Amanda', and so it console.logs that string."

  // And what would we expect address to be right here?
  console.log("We expect address to be '1600 Shattuck Ave' " + address);
};
vegetarianCorner();

// Now that we're back in the global scope (we're no longer inside the function body), what is chef?
/*console.log("Chef is undefined " + chef);*/
  // Explain why to your pair. 
// What is address in this scope? Why?
console.log("Adress is 1600 Shattuck Ave " + address)
// because it is outside the scope
// Great! Now let's create the rival bbqMeatCooker section of our kitchen. 

var bbqMeatCooker = function() {
  var chef = 'Raka';
  var favoriteDish = 'grilled salmon';
  // Whoa, see what we did there? We have the same variable names in this function as we do in the vegetarianCorner function. Are they going to conflict at all?
  // Talk through this with your pair, then console.log chef and favoriteDish (with labels saying that we're inside bbqMeatCooker) to see the results!
  console.log("My chef is Raka " + chef + " My favorite dish is grilled salmon " + favoriteDish);
    // If you forget what we mean by labels, check out this slide, and the one below it: http://slides.com/climbsrocks/debugging#/7/3
  
  // Each function body has it's own scope. Variables created in there using the var keyword will ONLY exist within that scope. So everything inside our bbqMeatCooker has absolutely no idea what's happening inside our vegetarianCorner, as long as we use the var keyword. 

  // Our bbqMeatCooker got a bit too smoky to share a kitchen with everything else, so we had to move it out back. 
  var address = 'shed in the back yard at 1600 Shattuck Ave';

  // What happens if we console.log address here? 
  console.log("The address is 'shed in the back yard at 1600 Shattuck Ave' " + address);
    // Explain why to your pair! 
    // My explanation would go something like "the interpreter goes to look up what the address variable is equal to. Just like in our topSecretClearance example, it first looks in it's own scope, before heading out into the broader scopes. While checking in it's own local scope, it finds address! We don't have to look any further, so we log 'shed in the back yard...', and never have to reach out to the global scope to try to find this variable."

  // Ok, we realized pretty quickly that we need something slightly nicer than a shed to house our bbqMeatCooker in. So we move the address again:
  address = '1610 Shattuck Ave';

  // What is address here? What is the process by which it figures that out? Talk through this with your partner- this will likely trip up some of you!
  console.log("adress is '1610 Shattuck Ave' " + address);
};
bbqMeatCooker();

// Now that we're back in the global scope, what is address here? Have we changed it at all based on what we did inside bbqMeatCooker? 
console.log("address: " + address);
// Explain why or why not to your pair, then console.log address here (with a label!), and explain why again once you've seen the results. 

// Time to create our next area, pastryConcoctions!
var pastryConcoctions = function() {
  // Our pastry chef is a bit haughty. 
  chef = 'Michael';
  address = '1517 Shattuck Ave';

  // What are the values of chef and address here? 
  console.log("Chef: " + chef + "\n" + "address: " + address);
};
pastryConcoctions();

// What are the values of chef and address here?
console.log("Chef: " + chef + "\n" + "address: " + address);
  // Explain why to your pair!
  // because they arent in var, its only local if they are in variables

// Talk through what happens when we try to access address inside of vegetarianCorner and bbqMeatCooker. 

vegetarianCorner = function() {
  var chef = 'Amanda';
  var favoriteDish = 'saag paneer';
  // What is the value of address here? 
  console.log("address: " + address);
    // Why? becasue it is not a private scope, it can only be local if it is var. this makes it accessible.
};
vegetarianCorner();

bbqMeatCooker = function() {
  var chef = 'Raka';
  var favoriteDish = 'grilled salmon';
  var address = 'shed in the back yard at 1600 Shattuck Ave';
  address = '1610 Shattuck Ave';
  // What is the value of address here? 
  console.log("Address is 1610 Shattuck Ave: " + address);
    // Why? because it is re-assigned to the value 1610...
  // What is the value of chef here?
  console.log("The value of chef is Raka " + chef);
    // Why? becasue that is what is being assigned to in the local scope
  window.chef = 'Raka rules!';
  console.log("The value of chef will still be Raka " + chef);
  // What is the window object? What happens when we set properties on it? it adds the the assigned value in an open browser, it represents an open window in a browser. so therefore it opens chef and adds whatever value assigned to it but does not change the variable itself
  // What is the value of chef right here after that update?
  
};
bbqMeatCooker();

// Ok, by now you should have solidified on a couple of key points:
  // 1. Each function body has it's own local scope. 
    // 2. Each function invocation gets it's own scope too, but we'll get to that next :)
  // 3. To create a 'hidden' variable inside that local scope, you must use the var keyword to make sure the variable exists in that local scope.
  // 4. Not using the var keyword modifies global variables. 
  // 5. functions will first look to their own local scope before reaching out to the global scope. If two variables with the same name exist in local and global scope, the function will first find the value in the lcoal scope, and never have to reach outside to the global scope. 
  // 6. The window object is synonymous with global scope. Properties set on the window object are available in the global scope. 

// Whew, that's a lot of learning so far! 
// One of the key uses of scoping and closures is to 'stash' or 'save' a variable for later use. 
// When might this be useful for us?
  // When a variable is changing frequently, and we want to save it's current value. 
  // One example of this is inside for loops. We might want to save what i is for that particular iteration. 
  // If we stash i inside a local scope by passing it into a function, it will get to exist there, untouched and unchanged, until we do something inside that function later on. 
    // There are certain concepts in programming that are incredibly powerful tools for complex situations. 
      // Oftentimes, these concepts seem a bit useless in less complex situations. 
      // This is one of those moments. 
      // Our example below won't go into this level of complexity, but let me illustrate a moment where I used this pattern of using closures to save the current value of i inside a for loop. 
      // And hopefully then you can see how this is a valuable pattern to learn, even if you don't see an immediate use for it. 
        // I was working through a table in a database recently. In that table, we had the locations for each of our users. But the problem was, they just typed in a string of their location ('New York City', 'NYC', 'New York, NY', etc.), rather than latitude and longitude which we could plot on a map. 
        // To get the latitude and longitude, I had to iterate through the entire table, grabbing each row one by one, and then make a request to an external API to get the lat/long for that row. 
        // My connection let me make three concurrent requests, which was great, because I had 60,000 users to go through!
        // But this mean that my value for i, which represented the row number, was changing constantly, and I couldn't count on it being stable by the time I got data back from the external API. 
        // To get around this, I stashed i into a local scope by passing it into a function, and inside that function doing the API call. 
        // Each function invocation gets it's own local scope. You can think of it kind of like a secret, peaceful cave. The rest of the program can be changing like mad, but that doesn't affect things inside our peaceful little cave. 
        // So even though my row number was changing once every millisecond or so, and my API requests took several dozen milliseconds to complete, the value of i that I'd stashed into a local scope, was totally protected, unchanged, stable. 
  // Let's see what this looks like in practice! 

var iSaver = function(index, val) {
  return function() {
    console.log('inside of our closure scope, i is still:',index,'val is:',val);
  };
}

var testArr = [1,2,3,4];

for (var i = 0; i < testArr.length; i++) {
  if(i === 1) {
    var func1 = iSaver(i, testArr[i]);
  }
}
// What is i at this point in our code? 
console.log('at this point in our code, i is:', i);

// What do you expect to get when we invoke func1?
func1();

// what iSaver returns to us is a function. Which is really just a fancy object. 
  // We can push objects into arrays, and then access their values, doing something like arr[i].propName. 
  // We can also push fancy function objects into arrays, and then invoke them, doing something like arr[i](). 
    // Remember that JS is super modular.
      // First, it will evaluate the arr variable, which is a link pointing to a certain spot in memory. 
      // Then, it will enter the brackets. 
      // Next, it will evaluate whatever is inside those brackets, and look up the results of that as a property name inside our array. 
        // In this case, it will recognize that i is a variable (since we don't have quotes around it), and evaluate what that variable is equal to. Let's suppose i is 1. 
      // It will then grab the thing at the 1 index position in our array. 
      // Now arr[i] has evaluated to what that thing is in our array. In this case, it is a function. 
      // We can then invoke that function with the open and closed parens (). 

// Let's put that pattern to use!
  // Create an empty array called closureFuncs. 
  var closureFuncs = [];
  // Create a new for loop. 
  for (var i = 0; i < testArr.length; i++) {
    if ((i%2)===0) {
      var func1 = iSaver(i, testArr[i]);
      console.log(closureFuncs.push(func1));
    }
  }
 console.log(i);
 
 func1();
  // Let's create a new iSaver function for every even i in the array, and push that function into closureFuncs. 
  // Then, once you're done with the entire for loop, log what the value of i is outside the for loop. 
  // And then go through and invoke each function in our closureFuncs array. 
  // Remember, when in doubt, console.log things with labels!
  // What you should see logged out is 
    // 'inside of our closure scope, i is still: 0, val is: 1'
    // 'inside of our closure scope, i is still: 2, val is: 3'
  // Try doing this again with a longer array! Or try building out different logic for what we save into our closure scopes. Generally, do what you can to get comfortable with saving values for future access into closure scopes. 

// Extra Credit: 
// Using the module pattern, create a toaster. 
// The cool part about this is that you get to decide what the user should be able to access/modify, and what we'll keep private from them. 
var toaster = function() {
  //some private properties here
  return {
    // public properties and methods here.
    // Those public methods can access and change the private variables. 
  }
};

// var nameMaker = function(firstName, lastName) {
//   if (lastName == undefined) {
//     console.log("Welcome to the party, " + firstName + " Thinklestein.");
//   } else {
//   console.log("Welcome to the party, " + firstName + " " + lastName + ".");
//   };
// };


// var reunionGreeter = function(lastName) {
//   var firstName = prompt("What's your first name?");
//   var nameMaker = function(firstName) {
//     console.log("Welcome to the party, " + firstName + " " + lastName + ".");
//   };
//   return nameMaker(firstName);
// };

// console.log(i);
//  for (j=0; j<closureFuncs.length; i++) {
//    console.log("inside our closure scope, i is still: " + i + ", val is: " + closureFuncs[i]())
//  }

// Extra Credit2: 
// Let's imagine you're heading off to a huge family reunion. And you nicely volunteered to make name tags for everyone! Oddly, your family is super well organized, and everyone has the same last name, Thinklestein. 
// Create a function called nameMaker that takes in a first name as it's only argument, and then returns the robotic greeting "Welcome to the party, FIRSTNAME Thinklestein.", where FIRSTNAME is replaced by the person's first name. 
// Now we're going to generalize this: 
// First, let's take the minor step of removing the hard-coded value of 'Thinklestein' from the function, and allow the user to pass in both a first and last name. 
// Next, Create an entirely new function called reunionGreeter. We've found that we're just so good at greeting people at reunions that we decide to expand and do this for more families! reunionGreeter will let us modularize our code to the point we can do this. reunionGreeter takes in a last name, and returns a function that greets people with the first name they pass in. 
var nameMaker = function(firstName) {
  console.log("Welcome to the party, " + firstName + " Salau.")
}; console.log(nameMaker("AJ"));

var reunionGreeter = function(lastName) {
  return function(firstName){
    console.log("Welcome to the party, " + firstName + " " + lastName + ".");

  }
}
var last = reunionGreeter("Salau");
console.log(last("AJ"));
