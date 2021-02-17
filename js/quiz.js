$(document).ready(function(){

  //add our event listener which is our button
  $("#btn-submit").on("click", function(event){
    //prevent the default action of our button
    event.preventDefault();

    let amount = $("#amount").val();
    let difficulty = $("#difficulty").val();
    if (amount == ""){
    alert("Don't leave it empty!");
    return false;
    }
    if (amount < 1) {
      alert("Number of questions cannot be lesser than 1!");
      return false;
    }
    if (amount > 50) {
      alert("Number of questions cannot be greater than 50!");
      return false;
    }
    
    let urlAPI= "https://opentdb.com/api.php?amount=" + amount + "&category=9&difficulty=" + difficulty + "&type=multiple";

    ($('#selector')[0]).classList.add('hidden');
    ($('#loader')[0]).classList.remove('hidden');

let options = ($('.option-text').toArray());
let pointsText = $('#points')[0];
let currentQn = {};
let acceptingAnswers = false;
let points = 0;
let qnCounter = 0;
let availQn = [];
let questions = [];
//GET opentdb data 
$.ajax({
          url: urlAPI,
          method: "GET",
          success: function(data) {
          initGame(data);},
          error:function() {
          alert( "API retrival error" );}

        })



//Load data into html
function initGame(loadQns){
  //Internal retrival error
  if (loadQns.response_code !== 0){
    alert("API retrival error");
    window.location.assign('index.html');

  }
  questions = loadQns.results.map(function (loadQn)
     {
       //Format data to use
       let formatQn = {
                question: loadQn.question,
            };

            let answerOptions = [...loadQn.incorrect_answers];
            formatQn.answer = Math.round(Math.random() * 4) + 1;
            answerOptions.splice(
                formatQn.answer - 1,0,loadQn.correct_answer
            );

            answerOptions.forEach((option, index) => {
                formatQn['option' + (index + 1)] = option;
            });


            return formatQn;
        });

        startGame();}


let correctPoints;
if (difficulty == "easy"){
correctPoints = 1;
}
else if (difficulty == "medium"){
correctPoints = 2;
}
else if (difficulty == "hard"){
correctPoints = 3;
}
let maxQn = amount;

startGame = () => {
    qnCounter = 0;
    points = 0;
    availQn = [...questions];
    getQn();
    ($('#loader')[0]).classList.add('hidden');
    ($('#game')[0]).classList.remove('hidden');
};

//Retrive and display question
getQn = () => {
  //Check available and questions & redirect when all has been answered
    if (availQn.length === 0 || qnCounter >= maxQn) {
        localStorage.setItem('latestPoint', points);
        window.location.assign('end.html');
    }
    else{
      //Update game info display
    qnCounter++;
    questionNumber.innerText = `${qnCounter}/${maxQn}`;
    pointsText.innerText = points;

    let questionIndex = Math.floor(Math.random() * availQn.length);
    currentQn = availQn[questionIndex];
    question.innerHTML = currentQn.question;

    options.forEach(function(option)  {
        let number = option.dataset['number'];
        option.innerHTML = currentQn['option' + number];
    });
    //Remove answeed question from loaded question array
    availQn.splice(questionIndex, 1);
    acceptingAnswers = true;

    }
    
};

options.forEach(function(option) {
    option.addEventListener('click', (event) => {
      //Ignore input
      if (acceptingAnswers == true){
        //Reject multiple inputs
        acceptingAnswers = false;
        //Retain input details
        let selectedOption = event.target;
        let selectedAnswer = selectedOption.dataset['number'];
        //Apply correct wrong classes for display
        let classToApply = 'incorrect'
        if (selectedAnswer == currentQn.answer){
          classToApply = 'correct';
        }
        //Allow visual changes in css
        $(selectedOption).parent().addClass( classToApply )
        //Update game info display (points)
        if (classToApply === 'correct') {
          points += correctPoints;
          pointsText.innerText = points;
        }
        //Allow visual changes to retain before removing for next question
        setTimeout(function() {
            
            $(selectedOption).parent().removeClass( classToApply );
            getQn();
        }, 1000);

      }
        
    });
});

  })
  $("#amount").ForceNumericOnly();
});
jQuery.fn.ForceNumericOnly =
function()
{
    return this.each(function()
    {
        $(this).keydown(function(e)
        {
            var key = e.charCode || e.keyCode || 0;
            // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
            // home, end, period, and numpad decimal
            return (
                key == 8 || 
                key == 9 ||
                key == 13 ||
                key == 46 ||
                key == 110 ||
                key == 190 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
};