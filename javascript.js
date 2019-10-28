var quotes = [
	"A body makes his own luck, be it good or bad.",
	"Change yourself and fortune will change.",
	"Good things come when you least expect them.",
	"Happy is the bride that the sun shines on.",
	"It is possible to have too much of a good thing.",
	"Lightning never strikes the same place twice.",
	"May the wind be always at your back.",
	"Sum up at night what thou hast done by day.",
	"The new boat will find the old stones.",
	"Venture a small fish to catch a great one.",
	"Diligence is the mother of good fortune."
]

var massType = 0;
var inputArray = [];
var caseCount = 0;

function openNav(){
  document.getElementById("navbar").style.height = "100%";
}

function closeNav(){
  document.getElementById("navbar").style.height = "0%";
}

function newQuote(){
	var randomNumber = Math.floor(Math.random()*(quotes.length));
	document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

function changeColor(color){
	var x = document.getElementsByTagName("div1")[0];
	if(color == red){
		if(x.id == "quoteDisplay"){
			document.getElementById("quoteDisplay").id = "redStyle";
		}else if(x.id == "redStyle"){
			document.getElementById("redStyle").id = "redStyle";
		}else if(x.id == "blueStyle"){
			document.getElementById("blueStyle").id = "redStyle";
		}else if(x.id == "silverStyle"){
			document.getElementById("silverStyle").id = "redStyle";
		}else{
			document.getElementById("goldenStyle").id = "redStyle";
		}
    }else if((color == blue)){
        if(x.id == "quoteDisplay"){
			document.getElementById("quoteDisplay").id = "blueStyle";
		}else if(x.id == "redStyle"){
			document.getElementById("redStyle").id = "blueStyle";
		}else if(x.id == "blueStyle"){
			document.getElementById("blueStyle").id = "blueStyle";
		}else if(x.id == "silverStyle"){
			document.getElementById("silverStyle").id = "blueStyle";
		}else{
			document.getElementById("goldenStyle").id = "blueStyle";
		}
    }else if((color == silver)){
        if(x.id == "quoteDisplay"){
			document.getElementById("quoteDisplay").id = "silverStyle";
		}else if(x.id == "redStyle"){
			document.getElementById("redStyle").id = "silverStyle";
		}else if(x.id == "blueStyle"){
			document.getElementById("blueStyle").id = "silverStyle";
		}else if(x.id == "silverStyle"){
			document.getElementById("silverStyle").id = "silverStyle";
		}else{
			document.getElementById("goldenStyle").id = "silverStyle";
		}
    }else{
		if(x.id == "quoteDisplay"){
			document.getElementById("quoteDisplay").id = "goldenStyle";
		}else if(x.id == "redStyle"){
			document.getElementById("redStyle").id = "goldenStyle";
		}else if(x.id == "blueStyle"){
			document.getElementById("blueStyle").id = "goldenStyle";
		}else if(x.id == "silverStyle"){
			document.getElementById("silverStyle").id = "goldenStyle";
		}else{
			document.getElementById("goldenStyle").id = "goldenStyle";
		}
	}
}

function massTypeSelector(mass){
	if(mass == 0){
		massType = 0;
	}else{
		massType = 1;
	}
}

function massConverter(valNum){
	if(massType == 0){
		document.getElementById("output").innerHTML=valNum*2.2046+" kilograms";
	}else{
		document.getElementById("output").innerHTML=valNum*0.4536+" pounds";
	}
}

function userInput(input){
	var x = 0;
	var avg = 0;
	input = input.replace(/\s/g,'');
	for(var i = input.length; input.length>0; i--, x++){
		inputArray[x] = parseInt(input);
		if(inputArray[x].toString().length < input.length){
			input = input.slice(inputArray[x].toString().length+1);
		}else{
			input = input.slice(inputArray[x].toString().length);
		}
	}
	if(!document.getElementById("inputs").value){
		document.getElementById("output1").innerHTML=null;
	}else{
		document.getElementById("output1").innerHTML=Math.max.apply(null, inputArray);
	}
	if(!document.getElementById("inputs").value){
		document.getElementById("output2").innerHTML=null;
	}else{
		document.getElementById("output2").innerHTML=Math.min.apply(null, inputArray);
	}
	if(!document.getElementById("inputs").value){
		document.getElementById("output3").innerHTML=null;
	}else{
		sum = inputArray.reduce((a, b) => a + b, 0);
		document.getElementById("output3").innerHTML=sum;
	}
	if(!document.getElementById("inputs").value){
		document.getElementById("output4").innerHTML=null;
	}else{
		document.getElementById("output4").innerHTML=sum/inputArray.length;
	}
	if(!document.getElementById("inputs").value){
		document.getElementById("output5").innerHTML=null;
	}else{
		document.getElementById("output5").innerHTML=inputArray.reverse();
	}
}

function capitalize(){
	caseCount++;
	var string = document.getElementById("inputBox").value;
	if(caseCount%2 != 0){
		document.getElementById("inputBox").value = string.toUpperCase();
	}else{
		document.getElementById("inputBox").value = string.toLowerCase();
	}
}

function userInput2(selector){
	var string = document.getElementById("inputBox").value;
	inputArray = [];
	inputArray = string.split("\n");
	if(selector == 0){
		document.getElementById("inputBox").value = inputArray.sort().join("\r\n");
	}else if(selector == 1){
		var newArray = [];
		for(var i = 0; i < inputArray.length; i++){
			var x = inputArray[i];
			newArray = x.split(" ");
			inputArray[i] = newArray.reverse().toString().replace(/,/g," ");
		}
		document.getElementById("inputBox").value = inputArray.join("\r\n");
	}else if(selector == 2){
		var newArray = [];
		for(var i = 0, j = 0; i < inputArray.length; i++){
			if(inputArray[i] != null){
				var x = inputArray[i].trim();
				newArray = x.split(" ");
				inputArray[j] = newArray.toString().replace(/,/g," ");
				j++;
			}
		}
		for(var i = 0, j = 0; i < inputArray.length; i++){
			if(!inputArray[i]){
			}else{
				newArray[j] = inputArray[i];
				j++;
			}
		}
		document.getElementById("inputBox").value = newArray.join("\r\n");
	}else if(selector == 3){
		for(var i = 0; i < inputArray.length; i++){
			var x = i+1;
			inputArray[i] = x+". "+inputArray[i];
		}
		document.getElementById("inputBox").value = inputArray.join("\r\n");
	}else{
		var numList = new Array(inputArray.length);
		var x = Math.floor(Math.random()*(inputArray.length));
		numList[0] = x;
		for(var i = 1; i < inputArray.length; i++){
			x = Math.floor(Math.random()*(inputArray.length));
			for(var j = 0; j < i; j++){
				if(numList[j] == x){
					i--;
					break;
				}
				if(j == i-1){
					numList[i] = x;
				}
			}
		}
		var newArray = new Array(inputArray.length);
		for(var i = 0; i < newArray.length; i++){
			newArray[i] = inputArray[numList[i]];
		}
		document.getElementById("inputBox").value = newArray.join("\r\n");
	}
}

window.addEventListener("load", newQuote);