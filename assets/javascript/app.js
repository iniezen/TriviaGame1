// questions for Mike:
// better way to use "this" to connect html choices to array choices
// setintervals not working correctly!
// game restart not working correctly.
// look at code and suggest better ways


// declare global variables:
var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var quizOver = false;
var checkAnswer;
var result = "";
var number = 20;
var clock = 20;
var val="";
var firstRound;
var run;
var stop;
var delayNumber = 3;
var runDelay;
var counter=0;
var nextQuestion;





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
	pic: "assets/images/answer2pic.jpeg",

}, {

	question: "What Two Teams Make Up 'El Clasico' In The Spanish League?",
	choices: ["Atletico Madrid and Real Madrid","Bilbao and Barcelona","Sevilla and Milan",
	"Barcelona and Real Madrid"],
	correctAnswer: 3,
	pic: "assets/images/answer3pic.jpeg",

}, {

	question: "Which Team Lost The 1978 World Cup?",
	choices: ["Argentina","Netherlands","Germany","Brazil"],
	correctAnswer: 1,
	pic: "assets/images/answer4pic.jpeg",

}, {

	question: "Which Country Has Won The Most World Cups?",
	choices: ["Germany","Argentina","Brazil","Italy"],
	correctAnswer: 2,
	pic: "assets/images/answer5pic.jpeg",
}, {

	question: "Who is currently the top scorer in Barcelona?",
	choices: ["Ronaldo","Messi","Xavi","Suarez"],
	correctAnswer: 1,
	pic: "assets/images/answer6pic.jpeg",

}, {

	question: "Who is currently the top scorer in Real Madrid?",
	choices: ["Messi","Di Maria","Ronaldo","Higuain"],
	correctAnswer: 2,
	pic: "assets/images/answer7pic.jpeg",
}, {

	question: "Which team won the 1988 Eurocup?",
	choices: ["Germany","France","Italy","Netherlands"],
	correctAnswer: 3,
	pic: "assets/images/answer8pic.jpeg",
}];

// document ready function
$(document).ready(function(){

	// window.load function that shows start button and hides clock
	$(window).load(function(){


	$('#startButton').show();
	$('#clock').hide();	


	});

// function that launches firstRound of game when start button clicked

	$('#startButton').click(function(){

		counter=0;
		firstRound();

	});

// function firstRound defined

function firstRound(){
	currentQuestion=currentQuestion+counter;
	
		// testing
		console.log(currentQuestion);
	// shows question, answer1, answer2, answer3, answer4
	// hides resultMessage, correctAnswerWas, hides imagediv
		$('#startButton').hide();
		$('#clock').show();	
		$('#question').show();
		$('#answer1').show();
		$('#answer2').show();
		$('#answer3').show();
		$('#answer4').show();
		$('#resultMessage').hide();
		$('#correctAnswerWas').hide();
		$('#imagediv').hide();	

// writes HTML for variables above

		$('#clock').html("Time Remaining: "+clock+" Seconds")
		$('#question').html(questions[currentQuestion].question);
		$('#answer1').html(questions[currentQuestion].choices[0]);
		$('#answer2').html(questions[currentQuestion].choices[1]);
		$('#answer3').html(questions[currentQuestion].choices[2]);
		$('#answer4').html(questions[currentQuestion].choices[3]);	
		// calls the clock interval function, frozen for now to debug
		run();
		

}

// launch checkAnswer function

checkAnswer();


// function checkAnswer defined:
    function checkAnswer(){
    	

		// testing
    	console.log(currentQuestion);
    	// when user clicks any of 4 choices
    	$('.choices').click(function(){
    		// stops clock, frozen for now to debug
    		stop();
			// When choices clicked, launch SETINTERVAL (3 seconds) 
			
			runDelay();

			// set variables rightAnswer & userAnswer & compare to each other using this.id, thought there has to be a better way!!

			var rightAnswer ="answer"+(questions[currentQuestion].correctAnswer+1);
			console.log(rightAnswer);
			var userAnswer = (this.id);
			console.log(userAnswer);


			// hides/toggles question, answer1, answer2, answer3, answer4
			$('#question').hide();
			$('#answer1').hide();
			$('#answer2').hide();
			$('#answer3').hide();
			$('#answer4').hide();


			// shows result of comparing userAnswer to rightAnswer
		if(userAnswer==rightAnswer){
			correctAnswers++;
			$('#resultMessage').show();
			$('#imagediv').show();
			$('#resultMessage').html("You Are Correct!");
			$('#imagediv').html('<img src='+questions[currentQuestion].pic+'>');
			console.log("currentQuestion"+currentQuestion);
			console.log("correctanswers="+correctAnswers)

			// shows result, wrongAnswer

		}
			else{
				incorrectAnswers++;
				console.log("currentQuestion"+currentQuestion);
				console.log("incorrectanswers="+incorrectAnswers)
				$('#resultMessage').show();
				$('#correctAnswerWas').show();
				$('#imagediv').show();

		
				$('#resultMessage').html("Nope! Stick To Baseball, Fool");
				$('#correctAnswerWas').html("The Correct Answer Was: "+questions[currentQuestion].choices[questions[currentQuestion].correctAnswer])
				$('#imagediv').html('<img src='+questions[currentQuestion].pic+'>');	

			}
	            
              


              
              

		});

		 


  	};



	// };    

//function to define & launch SETINTERVAL (20 seconds) 
	function run(){
            clock = setInterval(decrement, 1000);
    };

        // The decremeent function.
        function decrement(){
            // Decrease number by one.
            number--;
            // Show the number in the #show-number tag.
            $('#clock').html("Time Remaining: "+number+" Seconds");



            // Once number hits zero...
            if (number <= 0){
                // ...run the stop function.
                clearInterval(clock);
                unanswered++;
                // Alert the user that time is up.
	            $('#question').hide();
				$('#answer1').hide();
				$('#answer2').hide();
				$('#answer3').hide();
				$('#answer4').hide();
				$('#resultMessage').show();
				$('#correctAnswerWas').show();
				$('#imagediv').show();



	            $('#resultMessage').html("You're Out Of Touch & Out Of Time!");
				$('#correctAnswerWas').html("The Correct Answer Was: "+questions[currentQuestion].choices[questions[currentQuestion].correctAnswer])
				$('#imagediv').html('<img src='+questions[currentQuestion].pic+'>');

            }
        };    

        // newRound();

        // The stop function
        function stop(){
            // Clears our "counter" interval.

            clearInterval(clock);
 
		};


	    function runDelay(){
            delayCounter = setInterval(delay, 1000);

        };

        // The decremeent function.
        function delay(){
        	// counter++;
        	console.log("counter"+counter)
            // Decrease number by one.
            delayNumber--;


            if (delayNumber <= 0){
                // ...run the stop function.

            	
     			counter++;
                clearInterval(delayCounter);

               
                // Alert the user that time is up.
                alert('Time Up!');
                 nextQuestion();
            }

  			

        };



       function nextQuestion(){

        currentQuestion=counter;
        		console.log(currentQuestion);
	// shows question, answer1, answer2, answer3, answer4
	// hides resultMessage, correctAnswerWas, hides imagediv
		// $('#startButton').hide();
		if (currentQuestion<8){

			$('#clock').show();	
			$('#question').show();
			$('#answer1').show();
			$('#answer2').show();
			$('#answer3').show();
			$('#answer4').show();
			$('#resultMessage').hide();
			$('#correctAnswerWas').hide();
			$('#imagediv').hide();	



			$('#clock').html("Time Remaining: "+clock+" Seconds")
			$('#question').html(questions[currentQuestion].question);
			$('#answer1').html(questions[currentQuestion].choices[0]);
			$('#answer2').html(questions[currentQuestion].choices[1]);
			$('#answer3').html(questions[currentQuestion].choices[2]);
			$('#answer4').html(questions[currentQuestion].choices[3]);	
			// calls the clock interval function
			number=20;
			run();
		}
			else{
				stop();
				
				$('#resultMessage').html("Game Over!  Here is how you did:");
				$('#correctAnswers').html("Correct Answers: "+correctAnswers);
				$('#incorrectAnswers').html("Incorrect Answers: "+incorrectAnswers);
				$('#unanswered').html("Unanswered: "+unanswered);
				$('#imagediv').hide();
				$('#startButton').show();
				$('#startButton').html("Play Again?");


		}

		// checkAnswer();

    	}


// function endGame
// called when currentQuestion=questions.length
// stops clock
// displays correctAnswers
// displays incorrectAnswers
// start over button like start button that launches game again (checkanswers & clock)










});

