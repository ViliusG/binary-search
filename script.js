var maxNumber = 300;
var number = 1 + Math.floor(Math.random() * maxNumber);
console.log("selected number is "+number);

function printNumbers(){
	for (var i = 1; i<=maxNumber; i++){
		$(".numbers").append("<span class='n"+i+"' value='"+i+"'>"+i+" </span>");
	}
}
function guessRandomNumber(){
	var minNumber=0;
	
	for(var i=0;i<9;i++){
		var guess = Math.floor((minNumber+maxNumber)/2);
		console.log("my guess is "+guess);
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
		console.log("min:"+minNumber+"max:"+maxNumber)
	}
}