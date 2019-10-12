import {Test} from "./Test.js";
import {TestBox} from "./TestBox.js";

const config = {
    apiKey: "AIzaSyDN_Td0B6cFzF0ZP2w-0SNBDrSbz1OSRqo",
    authDomain: "zkazkaz.firebaseapp.com",
    projectId: "zkazkaz"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const database = firebase.firestore();
const containerElement = document.getElementById("content");

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
data.forEach(createTestBox);

function createTestBox(item) {
    new TestBox(item,containerElement);
}
let day11 = 0, day12 = 0;
async function date(data) {
    for (const item of data){
        if(item.date.getDate() == 12){
            day12++;
        } else {
            day11++;
        }
    }
}
date(data).then(renderChart(day11,day12));

});

