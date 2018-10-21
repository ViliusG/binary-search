var maxNumber = 300;
var number = 1 + Math.floor(Math.random() * maxNumber); //generate random number
console.log("selected number is "+number);


function guessRandomNumber(){
	var minNumber=1; 
	var guessNo = 1; //number of guess 
	
	while(guess!==number){
		console.log("now I'm guessing from "+minNumber+" to "+maxNumber);
		var guess = Math.floor((minNumber+maxNumber)/2); 
		console.log(guessNo+") My guess is "+guess);
		//check if number is higher or lower and set variables accordingly
		if(guess>number)
		{
			console.log("it's lower");
			maxNumber=guess-1;
		} else if(guess<number)
		{
			console.log("it's higher");
			minNumber=guess+1;
		}

		if(guess==number)
		{
			console.log("congratz");
		}
		guessNo++;
	}
}