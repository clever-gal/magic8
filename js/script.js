$(document).ready(function(){
var magic8 = {};
magic8.answerList = [" Without a doubt ", " Yes, definitely ", " You may rely on it ", " Reply hazy, try again ", " Ask later ", " Don't count on it ", " My sources say no "];

$("#answer").hide();

magic8.askQuestion = function(question) {
   $("#8ball").effect("shake");	    $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").fadeIn(4000);
  var randomNumber = Math.random();
  var randomNumberArray = randomNumber * this.answerList.length;
  var randomIndex = Math.floor(randomNumberArray);
  var answer = this.answerList[randomIndex];

    $("#answer").text( answer );
};

var onClick = function() {
  $("#answer").hide();
  $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
 setTimeout(
   function() {
   var question = prompt("ASK A YES/NO QUESTION")
   magic8.askQuestion(question)
   }, 500);
};

	$("#questionButton").click( onClick );

});
