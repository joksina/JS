var youDontNeedToWorryAboutAnythingInHere = function() {
	var NameArray = ['Noel Plain', 'Steffanie Plain', 'Hester Sanderfur', 'Retta Plain', 'Idella Saur','Shila Plain', "Marybeth Peavler", "Chadwick Jin", "Jerold Chauez", "Roselle Plain", "Doria Figgins", "Seth Arvizu", 'Gloria Wyche', "Melodi Plain", "Robin Shackleford", "Jack Plain", "Marina Prost", "Melvina Plain", "Ryan Plemons", "Janis Ohare", "Assata Shakur", "Kanye West", "Jay-Z", "Mariah Carey", "Bianca Gandolfo", "Cedric the Entertainer", "Chloe Plain"];
	var JobArray = ['Mortician', 'Broadcaster', 'Craftsperson', 'Engineer', 'Interior designer', 'Nun'];
	var CityArray = ["Scottsdale, Arizona", "Oakland, California", "Stockton, California", "New York, NY"];
	var emptyNetwork = [];
	
	function createNetwork(collection){

		for (var i = 0; i < NameArray.length; i++) {
			var randomJob = JobArray[Math.floor(Math.random() * JobArray.length)];
			var randomCity = CityArray[Math.floor(Math.random() * CityArray.length)];

			collection.push(createNewUser(NameArray[i], randomJob, randomCity));
		}

		return collection
	}

	return createNetwork(emptyNetwork);

}

function createNewUser(username, job, city){
	var newUser = {
		username: username,
		job: job,
		city: city,
		friends: [],
		family: [],
		coworkers: [],
	};

	return newUser;

};
// creating the user you're going to be adding to
var joeyProfile = createNewUser('Joey Plain', 'Engineer', 'Oakland, California');
// creating the network collection you're going to be pulling
var allUsers = youDontNeedToWorryAboutAnythingInHere();
// check the console to see what these look like


//console.dir(ourUser);
//console.dir(userNetwork);



// YOUR CODE HERE
// If users are from the same city as joey, make them friends
for (var i in allUsers) {
	if (typeof allUsers[i] === 'object' && allUsers[i].city === "Oakland, California") {
		joeyProfile.friends.push(allUsers[i].username);
	} else {

	}
}

// if users has the same job as joey, make them coworkers

for (var j in allUsers) {
	if (typeof allUsers[j] === 'object' && allUsers[j].job === "Engineer") {
		joeyProfile.coworkers.push(allUsers[j].username);
	} else {

	}
}

// if users has the same lastName as Joey, make them families

for(var i in allUsers) {
	// var j = joeyProfile.username.split(" ");
	var u = allUsers[i].username.split(" ");
	if (typeof allUsers[i] === 'object' && u[1] === 'Plain') {
		joeyProfile.family.push(allUsers[i].username);

	} else {

	}
}
for(var i = 0; i < joeyProfile.friends.length; i++){
    for(var j = 0; j < joeyProfile.family.length; j++){
        if(joeyProfile.friends[i] === joeyProfile.family[j]){
            joeyProfile['friends'].splice(i);
        }
    }

}

for(var i = 0; i < joeyProfile.friends.length; i++){
    for(var j = 0; j < joeyProfile.coworkers.length; j++){
        if(joeyProfile.friends[i] === joeyProfile.coworkers[j]){
            joeyProfile['coworkers'].splice(j);
        }
    }

}

// Sorting our array

var nameSort = function(array) {
	return array.sort();

};
nameSort(joeyProfile.family);
nameSort(joeyProfile.friends);
nameSort(joeyProfile.coworkers);
console.log(joeyProfile);

// create a netwrok to see if joey knows anyone

// var networkCheck = function(friendArray, name) {
// 	for (var i = 0; i < friendArray.length; i++) {
// 		if (name === friendArray[i].username) {
// 			return alert("nameCheck(" + friendArray+ ','+name+');\n\nName: ' + name + "\nJob: " + friendArray[i].job + "\nCity: " + friendArray[i].city + "\nFriends: " + friendArray[i].friends +"\nFamily: " + friendArray[i].family + "\nCoworkers: " + friendArray[i].coworkers)

// 		} 
// 	}

// 	//var Profile = prompt("Enter your friends info " + networkCheck(createNewUser()));

// 		//RyanProfile.push(joeyProfile.friends);


// }
// networkCheck( 'Ryan Plemons');
// //friendArray.push(createNewUser(Ryan, ))

function networkCheck(arr, name){
    var flag = 0;
    for(var j = 0; j<allUsers.length; j++){
        if(allUsers[j].username === name){
            flag++;
        }
    }
    if(flag === 0){
        var jobType = prompt("please enter your job type: ");
        var city1 = prompt("please enter your city: ");
        var newObj = createNewUser(name, jobType, city1);
        allUsers.push(newObj);
        return allUsers[allUsers.length - 1];
    }
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j<allUsers.length; j++){
            if(allUsers[j].username === name && arr[i] === name){
                var str = "'Name: " + allUsers[j].username + "\n" + " Job: " + allUsers[j].job + "\n" + " City: " + allUsers[j].city + "\n" + " Friends: " + allUsers[j].friends.length + ",\n" + " Family: " + allUsers[j].family.length + ",\n" + " Coworkers: " + allUsers[j].username.length + "'";
                return str;
            }                
        }                    
    }    
};

var friendsArray = joeyProfile.friends;
console.log(friendsArray);
var networkInfo = networkCheck(friendsArray,'Doria Figgins');
console.log(networkInfo);
//networkCheck(friendsArray, 'Solomon Daniels');

/*for(var key in allUsers){
    console.log(allUsers[key].username);
}*/
// var networkCheck = function(inputArray, userName) {
// 	for (var j = 0; j < inputArray.length; i++) {
// 	for (var i = 0; i < allUsers.length; i++) {
// 		if (inputArray[j].match(userName) === allUsers[i].username)
// 			return allUsers[i];
// 	}
// 	}

// };

// networkCheck(joeyProfile.friends, 'Mariah Carey');
// console.log(networkCheck);

