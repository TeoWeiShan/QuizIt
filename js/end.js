let finalPoint = $('#finalPoint')[0];
//Obtain total points from quiz
let latestPoint = localStorage.getItem('latestPoint');
//Load points data from local save
let pointData = JSON.parse(localStorage.getItem('pointData')) || [];
//Display total points from quiz
finalPoint.innerText = latestPoint;
//DateTime structuring
let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();
let dateTime = date + " " + time;
//Save point data to local save
function savePoint(e) {
    e.preventDefault();
    //structure data save
    let point = {
        point: latestPoint,
        dateTime: dateTime,
    };
    //save
    pointData.push(point);
    //sort data
    pointData.sort(function(a, b) { return b.point - a.point; });
    //retain 10 data
    pointData.splice(10);
    //save
    localStorage.setItem('pointData', JSON.stringify(pointData));
    //disable re-save 
    ($('#saveBtn')[0]).classList.add('hidden');
}