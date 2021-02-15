let urlAPI = "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple";
let question = $('#question')[0];
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
    window.location.assign('/index.html');

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

//CONSTANTS
let correctPoints = 10;
let maxQn = 5;

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
        window.location.assign('/end.html');
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
