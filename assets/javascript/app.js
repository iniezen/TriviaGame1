// declare global variables:
var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var quizOver = false;
var checkAnswer;
var result = "";
var clock = 0;
var val="";


// setup array of objects made up of questions, choices, correct answer & pic

var questions = [{
	question: "Which Team Won The 1986 World Cup?", 
	choices: ["Argentina", "Germany", "England", "Italy"],
	correctAnswer: 0,
	pic: "assets/images/answer1pic.jpeg",
}, {
	question: "Who Is The All-Time Highest-Scoring Foreigner in The Bundesliga?", 
	choices: ["Diego Maradona", "Pele", "Claudio Pizarro", "Jurgen Klinsman"],
	correctAnswer: 2,
	pic: "assets/images/answer1pic.jpeg",

}, {

	question: "What 2 Teams Make Up “El Clasico” In The Spanish League?",
	choices: ["Atletico Madrid and Real Madrid","Bilbao and Barcelona","Sevilla and Milan",
	"Barcelona and Real Madrid"],
	correctAnswer: 3,
	pic: "assets/images/answer1pic.jpeg",

}, {

	question: "Which Team Lost The 1978 World Cup?",
	choices: ["Argentina","Netherlands","Germany","Brazil"],
	correctAnswer: 1,
	pic: "assets/images/answer1pic.jpeg",

}, {

	question: "Which Country Has Won The Most World Cups?",
	choices: ["Germany","Argentina","Brazil","Italy"],
	correctAnswer: 2,
	pic: "assets/images/answer1pic.jpeg",
}, {

	question: "Who is currently the top scorer in Barcelona?",
	choices: ["Ronaldo","Messi","Xavi","Suarez"],
	correctAnswer: 1,
	pic: "assets/images/answer1pic.jpeg",

}, {

	question: "Who is currently the top scorer in Real Madrid?",
	choices: ["Messi","Di Maria","Ronaldo","Higuain"],
	correctAnswer: 2,
	pic: "assets/images/answer1pic.jpeg",
}, {

	question: "Which team won the 1988 Eurocup?",
	choices: ["Germany","France","Italy","Netherlands"],
	correctAnswer: 3,
	pic: "assets/images/answer1pic.jpeg",
}];

$(document).ready(function(){
	$(window).load(function(){


	$('#startButton').show();
	$('#clock').hide();	
	// $('#question').hide();
	// $('#answer1').hide();
	// $('#answer2').hide();
	// $('#answer3').hide();
	// $('#answer4').hide();	

});

$('#startButton').click(function(){
	$('#startButton').hide();
	$('#clock').toggle();	


	$('#clock').html("Time Remaining: "+clock+" Seconds")
	$('#question').html(questions[currentQuestion].question);
	$('#answer1').html(questions[currentQuestion].choices[0]);
	$('#answer2').html(questions[currentQuestion].choices[1]);
	$('#answer3').html(questions[currentQuestion].choices[2]);
	$('#answer4').html(questions[currentQuestion].choices[3]);	

	// }
});

// function checkAnswer:
// When choices clicked, launch SETINTERVAL (6 seconds) function that
// stops clock (clears interval of clock)
// hides/toggles question, answer1, answer2, answer3, answer4
// shows result, correctAnswer
// after 6 seconds, launches nextQuestion function

$('.choices').click(function(){
	var rightAnswer ="answer"+(questions[currentQuestion].correctAnswer+1);
	var userAnswer = (this.id);
	$('#clock').toggle();	
	$('#question').toggle();
	$('#answer1').toggle();
	$('#answer2').toggle();
	$('#answer3').toggle();
	$('#answer4').toggle();	

	if(userAnswer==rightAnswer){

		$('#resultMessage').html("You Are Correct!");
		$('#imagediv').html('<img src='+questions[currentQuestion].pic+'>');	
	}
		else{
		
			$('#resultMessage').html("Nope! Stick To Baseball!");
			$('#correctAnswerWas').html("The Correct Answer Was: "+questions[currentQuestion].choices[questions[currentQuestion].correctAnswer])
			$('#imagediv').html('<img src='+questions[currentQuestion].pic+'>');				
		}
	

});


// function nextQuestion:
// launch SETINTERVAL (20 seconds) function that
// starts clock
// shows/toggles question, answer1, answer2, answer3, answer4
// hides/toggles result, correctAnswer
// called when checkanswer calls it, and also when clock setinterval runs out

// function endGame
// called when currentQuestion=questions.length
// stops clock
// displays correctAnswers
// displays incorrectAnswers
// start over button like start button that launches game again (checkanswers & clock)










// }

});

