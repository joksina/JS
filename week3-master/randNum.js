var randomNumber = Math.floor(Math.random() * 100) + 1;
var guess = prompt ("Guess a number from 1 to 100");
var counter = guess;
guess = parseInt();
if (guess  === randomNumber) {
	this.message = ' Yay you guessed the number' + "." +  " It took you " + counter + " tries to get right.";
}
if (randomNumber<guess){
	this.message = 'Lower than '+ guess;
}

if (randomNumber>guess){
	this.message = 'Higher than '+ guess;
}
else if (guess === counter) {
  this.message = "You already guessed that number " +  guess  + " try again!";
 }

 

var guessme=Math.round(Math.random()*(99)+1);
var speech='Guess my number (from 1 to 100)';

function process(mystery) {
var guess=document.forms.guessquiz.guess.value;
var speech='"'+guess+ '" does not make sense to me.';
document.forms.guessquiz.guess.value='';

if (guess==mystery)
{
document.forms.guessquiz.prompt.value='Congratulations! '+mystery+' is correct!';
alert ('Well done - the mystery number is '+mystery+'! \n\nPress this button to reload the page for another game.');
speech='';
document.location=document.location;
}

if (mystery<guess)
{
speech='Less than '+ guess;
}

if (mystery>guess)
{
speech='Greater than '+ guess;
}

if (guess=='')
{
speech='You didn\'t guess anything!'
}

document.forms.guessquiz.prompt.value=speech; document.forms.guessquiz.guess.focus();

}
