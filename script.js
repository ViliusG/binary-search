var maxNumber = 300;
var number = 1 + Math.floor(Math.random() * maxNumber);
console.log("selected number is "+number);

function printNumbers(){
	for (var i = 1; i<=maxNumber; i++){
		$(".numbers").append("<span class='n"+i+"' value='"+i+"'>"+i+" </span>");
	}
}
function guessRandomNumber(){
	var guess = Math.floor(maxNumber/2);
	if(guess==number){
		console.log("congratz");
	} else if(guess>number){
		console.log("it's lower");
	} else if(guess<number){
		console.log("it's higher");
	}
}