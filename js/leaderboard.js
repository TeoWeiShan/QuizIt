let leaderboardList = $("#leaderboardList")[0];
//Get values from local storage
let pointData = JSON.parse(localStorage.getItem("pointData")) || [];
//Loop and insert values to display
pointData.forEach(initData);
function initData(pointData){
  leaderboardList.innerHTML += `<li class="high-score">${pointData.dateTime} - ${pointData.point}</li>`
}
//Hide clear button if nothing in local storage
if (pointData.length == 0){
  ($('#clrBtn')[0]).classList.add('hidden');
}
//Clear local storage
clrStorage = function(e) {
    e.preventDefault();
    localStorage.removeItem("pointData");
    leaderboardList.innerHTML = '';
    ($('#clrBtn')[0]).classList.add('hidden');}

