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

function readData(){
    let tests = [];
    let i =0;
    database.collection("photos").get().then((snapshot) => {
       snapshot.forEach((doc) => {
           tests[i] = new Test(doc);
           i++;
           console.log(doc);
       });
       console.log(snapshot);
    });
    return tests;

}

const data = readData();
console.log(data);
console.log("ok");
for (const test of data) {
    new TestBox(test,containerElement);
}
