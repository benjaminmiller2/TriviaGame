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

let ans = [];
let a1;


  function start(){
    setTimeout(timer, 1000 * 30);

    for(var i=0; i<questions.length; i++){
      $(".js-q").append("<div class='questionStyle'>" + questions[i].question + "</div>");
      
        for(var j=0; j<questions[i].answers.length; j++){
          $(".js-q").append('<div class="answerStyle"><input type="radio" value="' + questions[i].answers[j] + '" name="a' + i + '">' + questions[i].answers[j] + '</input></div>');}
    };  
  };

  function eval(){
    for(var i=0; i<questions.length; i++){
      for(var j=0; j<questions[i].answers.length; j++){
  a1 = $("input[name='a" + i + "']:checked").val()};
  ans.push(a1);
  console.log(ans)
  };};

  function timer(){
    eval();
  };


  $(".js-startGame").on("click", start());
  $(".js-submit").on("click", eval())








})