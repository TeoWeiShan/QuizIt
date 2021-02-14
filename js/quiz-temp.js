const urlAPI = "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple";

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
function initGame(loadedQuestions){
    //Internal retrival error
    if (loadedQuestions.response_code != 0){
    alert("API retrival error");
    window.location.assign('/index.html');

    }
    //console.log(loadedQuestions)
    alert("Loaded Successfully");
    loader.classList.add('hidden');
    game.classList.remove('hidden');
}
    