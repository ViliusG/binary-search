var maxNumber = 300	;
var number = 1 + Math.floor(Math.random() * maxNumber); //generate random number
console.log("selected number is "+number);


function guessRandomNumber(){
	var minNumber=0; 
	var guessNo = 1; //number of guess 
	
	while(guess!==number){
		var guess = Math.floor((minNumber+maxNumber)/2); 
		console.log("My "+guessNo+" guess is "+guess);
		//check if number is higher or lower and set variables accordingly
		if(guess>number)
		{
			console.log("it's lower");
			maxNumber=guess;
		} else if(guess<number)
		{
			console.log("it's higher");
			minNumber=guess;
		}

		if(guess==number)
		{
			console.log("congratz");
		}
		guessNo++;
	}
}