  $(document).ready(function(){
               
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

  let answerBank = [];
  let ans;
  let right = 0;
  let wrong = 0;

  function gameTimer (){
  let timeleft = 30;
  let timer = setInterval(function(){
  timeleft--;
  $(".js-countDown").text(timeleft);
  
  if(timeleft <= 0)
      clearInterval(timer);
  },1000);
};

  function startGame(){
  $("body").append("<div class='gameContainer'>");
  
  for(var i=0; i<questions.length; i++){
    $(".gameContainer").append("<div class='questionStyle'>" + questions[i].question + "</div>");
    
      for(var j=0; j<questions[i].answers.length; j++){
        $(".gameContainer").append('<div class="answerStyle"><input type="radio" value="' + questions[i].answers[j] + '" name="a' + i + '">' + questions[i].answers[j] + '</input></div>');}
  };  
};

function eval(){

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



console.log(answerBank);
console.log(right);
console.log(wrong);
};



$(".js-startBtn").on("click", function(){

  gameTimer();
  startGame();

});

$(".js-submitBtn").on("click", function(){
eval();
});


})