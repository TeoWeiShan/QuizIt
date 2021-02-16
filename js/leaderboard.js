let leaderboardList = $("#leaderboardList")[0];
//Get values from local storage
let pointData = JSON.parse(localStorage.getItem("pointData")) || [];
//Loop and insert values to display
pointData.forEach(initData);
function initData(pointData){
  leaderboardList.innerHTML += `<li class="high-score">${pointData.dateTime} - ${pointData.point}</li>`
}
