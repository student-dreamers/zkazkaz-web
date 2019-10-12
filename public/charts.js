import {Test} from "./Test.js";

const config = {
    apiKey: "AIzaSyDN_Td0B6cFzF0ZP2w-0SNBDrSbz1OSRqo",
    authDomain: "zkazkaz.firebaseapp.com",
    projectId: "zkazkaz"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const database = firebase.firestore();

async function readData(){
    let tests = [];
    let i = 0;
    var photos = await database.collection("photos").get();
    photos.forEach((doc) => {
        tests[i] = new Test(doc.data());
        i++;
    });
    return tests;

}
readData().then(function(value) {
    const data = value;

let day11 = 0, day12 = 0;
let a = 0, b = 0, c = 0;
async function date(data) {
    for (const item of data){
        if(item.date.getDate() == 12){
            day12++;
        } else {
            day11++;
        }
        if(item.user_id == "a321") {
            b++;
        }
        if(item.user_id == "123"){
            a++;
        }
        if (item.user_id != "123" || item.user_id != "a321"){
            c++
        }
    }
}
date(data).then(renderChart(day11,day12)).then(renderMax(a, b, c));
})

function renderChart(day11, day12) {
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['11. 10.', '12. 10.'],
            datasets: [{
                label: ['Počet zkoušek'],
                data: [day11, day12,],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            aspectRatio: 1,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
function renderMax(a, b, c){
    var ctx = document.getElementById('max');
    var max = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ['123', 'a321', 'ostatní'],
            datasets: [{
                label: ['Nejaktivnější zaměstnanci'],
                data: [a, b, c],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            aspectRatio: 1,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}