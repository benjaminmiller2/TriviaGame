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


$("button").on("click", function(){
  $("body").append("<div class='gameContainer'>");
  gameTimer();
})


function gameTimer (){
  let timeleft = 30;
  let timer = setInterval(function(){
  timeleft--;
  $(".js-countDown").text(timeleft);
  
  if(timeleft <= 0)
      clearInterval(timer);
  },1000);


}






})