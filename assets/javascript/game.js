  $(document).ready(function(){

//Created an array of objects containing my questions, answers options, and correct answers.
  let questions = [  
   {
    question: "What is your quest?",
    answers: [" To find the Holy Grail. ", 
             " To find the Ark of the Covenant. ", 
             " To find the meaning of Life, the Universe, and Everything. ", 
             " To find the Spice, which must flow. "],
    correct: " To find the Holy Grail. "
  },
  
  {
    question: "What is the airspeed velocity of an unladen Swallow?",
    answers: [ " 9.8 m/s. ",
            " As fast as it likes. ",
            " What do you mean? African or European Swallow? ",
            " 88 mph. "],
    correct: " What do you mean? African or European Swallow? "
  },
  
  {
    question: "What is your favorite color?",
    answers: [ " Blue. ",
             " Green. ",
             " Black. ",
             " Pink. "],
    correct: " Green. "
  },
  
  {
    question: "Why must he be a king?",
    answers: [" He's got a crown. ",
            " He hasn't got shit all over him. ",
            " He's got the bling. ",
            " He hasn't got the pox. "],
    correct: " He hasn't got shit all over him. "
  },
   
  {
    question: "What does your father smell of?",
    answers: [" Old Spice. ",
             " Blueberries. ",
             " Hamster. ",
             " Elderberries. "],
    correct: " Elderberries. "
  }
  
  ];

//Created several global variables

  let answerBank = [];
  let ans;
  let right = 0;
  let wrong = 0;
  let timeleft;

//Create a timer and display, counting down from 30 seconds.
  function gameTimer (){
  timeleft = 30;
  let timer = setInterval(function(){
  timeleft--;
  $(".js-countDown").text(timeleft);
  
  if(timeleft === 0){
    clearInterval(timer);
    gameOver();
  }
  },1000);

};

//Function to begin the game. Needs to create divs that call and display the questions and answer options from the array above.
  function startGame(){
  $(".gameBox").append("<div class='gameContainer'>");

  for(var i=0; i<questions.length; i++){
    $(".gameContainer").append("<div class='questionStyle'>" + questions[i].question + "</div>");
    
      for(var j=0; j<questions[i].answers.length; j++){
        $(".gameContainer").append('<div class="answerStyle"><input type="radio" value="' + questions[i].answers[j] + '" name="a' + i + '">' + questions[i].answers[j] + '</input></div>');}
  }; 
};

function eval(){
//This collects input data from the radio buttons and determins if it matches the correct answers.
//For the life of me I couldn't make this work dynamically. Employing a loop, it always returned "undefined."
//So, I simply hard coded it.

answerBank.push($("input[name='a" + 0 + "']:checked").val());
answerBank.push($("input[name='a" + 1 + "']:checked").val());
answerBank.push($("input[name='a" + 2 + "']:checked").val());
answerBank.push($("input[name='a" + 3 + "']:checked").val());
answerBank.push($("input[name='a" + 4 + "']:checked").val());
  
if(answerBank[0] === questions[0].correct){
  right++;
}
else if(answerBank[0] !== questions[0].correct){
  wrong++;
};

if(answerBank[1] === questions[1].correct){
  right++;
}
else if(answerBank[1] !== questions[1].correct){
  wrong++;
};

if(answerBank[2] === questions[2].correct){
  right++;
}
else if(answerBank[2] !== questions[2].correct){
  wrong++;
};

if(answerBank[3] === questions[3].correct){
  right++;
}
else if(answerBank[3] !== questions[3].correct){
  wrong++;
};

if(answerBank[4] === questions[4].correct){
  right++;
}
else if(answerBank[4] !== questions[4].correct){
  wrong++;
};

};

//Function to display player score, and game over message. Needs to create divs to display win/lose value, and an image.
function gameOver(){
timeleft=1;
$(".gameContainer").empty();
$(".gameContainer").append("<div class='questionStyle'>Thou answered " + right + 
" questions rightly, and " + wrong + " questions wrongly.</div>").append("<br><div class='gifBox'><img class='js-gif'></img></div>");
if(wrong > 0){
  $(".js-gif").attr("src", "./assets/images/lose.gif");
  $(".gameContainer").append("<br><div class='questionStyle'>I guess thou didn't make it.</div>");
}
else if(timeleft === 0){
  $(".js-gif").attr("src", "./assets/images/lose.gif");
  $(".gameContainer").append("<br><div class='questionStyle'>Thou didn't even finish. Shame.</div>");
}
else{
  $(".js-gif").attr("src", "./assets/images/win.gif");
  $(".gameContainer").append("<br><div class='questionStyle'>Well done, sir knight! Thou may canter on.</div>");
};
$(".gameContainer").append("<div class='buttonBox'><button class='js-resetBtn button'>Try again!</button></div>")
};

function reset(){
$(".gameContainer").empty();
gameTimer();
startGame();
console.log("blerg")
};

//Start button, initializing game display and timer.
$(".js-startBtn").on("click", function(){

  gameTimer();
  startGame();


});

//Submit button, ending game and evaluating inputs
$(".js-submitBtn").on("click", function(){
eval();
gameOver();
});

//Reset button, return game to its original state.
$(".js-resetBtn").on("click", function(){
reset();
});

})