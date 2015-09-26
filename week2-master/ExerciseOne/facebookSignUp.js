/*

Congratulations on making it to part two of Objects! This section
is about using your new knowlege to debug a small program.

Imagine you're a contracted engineer brought on by Facebook to fix 
some of their internal bugs. The programmer before you
made a lot of mistakes and its your job to use your new knowledge
to clean up the mess.

Even though they weren't a very good programmer, they
were VERY thorough about leaving comments. Read the 
comments to get tips about the bugs as well as insights
into new information about JavaScript.

This section focuses on Objects. The code is running with pretty
limited functionality. Throughout the day we'll fix bugs,
which will unlock more robust functionality so that you can see
how your fundamentals will be used in the wild.

*TIPS*

1. Each function depends on the one before it. 
Don't uncomment the next function until you've fixed the 
previous one. 

2. This is a bug treasure hunt. It is up to you to
find and fix the bugs in given parts of the program. Some
mistakes are obvious, others are not -- attention to detail is key.

3. The console is your friend and will *usually* lead you in the
right direction to the next bug.

4. If you don't recognize something look it up. The internet
is every programmer's best friend - make sure you utilize it and expand
your programming knowlege. Full time engineers use Google and
StackOverflow constantly- this is a part of your required learning. 

5. Have fun, if you're stuck for too long it becomes tedious.
Don't feel bad for using the hints, these are tough exercises!

*/

// Here we make our facebookUser form which, in this case,
// is an object. Each part of the form will be filled out
// by the user using prompts. If you're unfamiliar with 
// prompts heres a good article: http://bit.ly/1CzM0Oe 

var facebookUser = {
	firstName: null,
	lastName: null,
	password: null,
	email: null,
	confirmPassword: null,
};

/*

 The signUpNewMember function runs as soon the user gets to the site.
 It will ask the user questions and store answers in our 
 facebookUser object so we can add it to the (fictional) database.

 There are a few bugs in our function.

 Follow the console, 1 bug will lead to the next.


*/

function signUpNewMember(){
  
    /* 
	
    first we've created a signUp function that gets the users
    information  and stores it in our facebookUser object
	according to the corresponding key. First and foremost
	uncomment line 225 so we can invoke the function and start fixing
	it.

    */

	function signUp(){

		for (var key in facebookUser) {
		/*
		we need to check to see if the values assigned 
		to our keys are null 
		*/
		console.log(facebookUser[key]);

		 if (facebookUser[key] === null) {
		
		 /*
		 if a value is null, ask the user to enter their
		 information with a prompt on line 96
		 */
		 
		 //console.log(hintTwo());
		 	var userInput = prompt("What's your " + key + '?');
		 console.log(userInput);
		 /* 
		 reassign the key value to the usersInput we just
		 gathered from the user.
		 */

		 	facebookUser[key] = userInput;
		 // console.log(facebookUser);
		 
		  
		 //uncomment line 121 to see the reassignment working.
		 //Remember to comment it back when you move on to avoid
		 //cluttering the console.

		 //Your object should look something like this:
		 	// facebookUser = {
				// firstName: 'Earth',
				// lastName: 'Wind, and Fire',
				// password: 'bestOfAllTime',
				// confirmPassword: 'bestOfAllTime',
				// email: 'septemberIsAClassic@gmail.com'
		 	// };
		  

		 //console.log(hintThree())

		 } else {
		 	//console.log(hintOne())
		 	console.log(facebookUser[key]);
		 }
		}

		// Working? Uncomment the checkAllFields function on line 226 and 
		// get started on the next function

	}

	/*

	Next we need to make sure the user didn't forget to put 
	any information in. If they have, we have to have them
	fill out that part of the form.
	
	*/
    
    function checkAllFields(){
    	facebookUser['favoriteFood'] = null;
    	/* iterate through the facebookUser object*/
    	for (var key in facebookUser) {
    		// check to see if the assigned value is null
    		if (facebookUser[key] === null) {
    			
			/* 
			if it is null, prompt the user to fill in the field 
			they missed and save the answer as a value in your object.
			*/

    			// console.log(hintFive());
    		facebookUser[key] = prompt("You missed an input field " + "what's your " + key + '?');
    			
    		} else {

    			//console.log(hintFour());
    		}
    	}
    	
    	// uncomment 165 to see if the field has been filled with
    	// the value your user entered.

    	console.log(facebookUser);

 		// If your finished, go ahead an uncomment line 227 and
 		// move on to the last function, confirmInformation.
    }


    /*
		Next we need a function that confirms with the user
		that their information is correct. This way, they can
		double check before they make their profile.

    */

    function confirmInformation(){
    	// userPrompt variable holds the explanation for the prompt
    	var userPrompt = "Check to make sure the following information is correct. " +
    	"If it is, type the word 'yes' into the textbox and press enter.\n"
    	
    	// iterate through the facebookUser object
    	for (var key in facebookUser) {
    		
		/* 
		 add our list of key's and values to the userPrompt string
		 so they can see the full list of the information they
		 entered.
		*/
    		userPrompt += (key.toUpperCase() + ': ' + facebookUser[key] + '\n'); 
    		console.log(hintSix());
    	}
    	
    	// save the users answer in a variable

    	var userAnswer = prompt(userPrompt);

    	/* 
    	check to see whether the users answer is yes, they've
    	agreed that it's the right information. Let's go ahead
    	and let them sign in.
    	*/

    	if (userAnswer === 'yes') {
    		/*
    		if yes, alert the user that they are signed in by using
    		*/

    		// console.log(hintSeven())

    		var userFirstName = facebookUser.firstName;
    		var userLastName = facebookUser.lastName;
    		
    		var signInPrompt = "Hello " + userFirstName + " " + userLastName +  " you've been signed in!"
    		
    		alert(signInPrompt);
    		//uncomment 220 once your functions all work
    		window.location.assign('http://media.tumblr.com/tumblr_m3ppveMgu71r4lux2.gif');
    	}

    }

    signUp();
    checkAllFields();
   confirmInformation();

    return facebookUser;
}

signUpNewMember();































function hintOne(){
	return "Put a console.log into your if statement (line 89) to see if it's running. If its not, what's wrong with our if statement?"
}

function hintTwo(){
	return "Do we want our prompt printing null? If not, how can we make our prompt look like this 'What is your firstName?'"
}

function hintThree(){
	return "Look at your object in the console, shouldn't the 'null' values be replaced with the users input?"
}

function hintFour(){
	return "What's the difference between '=' and '==='";
}

function hintFive(){
	return "Is our prompt asking the user for the right information?"
}

function hintSix(){
	return "Are your fields quite right? Double check and make sure everything makes sense!"
}
function hintSeven(){
	return "Always strive to write more human-sounding code. How do we access a key using a variable?"
}
