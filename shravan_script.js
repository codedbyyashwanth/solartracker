
const firebaseConfig = {
  apiKey: "AIzaSyBjB1JqWhchs3w12SUwapUhA4Vmjj2NdoE",
  authDomain: "solartracker-36bcd.firebaseapp.com",
  databaseURL: "https://solartracker-36bcd-default-rtdb.firebaseio.com",
  projectId: "solartracker-36bcd",
  storageBucket: "solartracker-36bcd.appspot.com",
  messagingSenderId: "76976084406",
  appId: "1:76976084406:web:5e6fdd23c46171d7069d17"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database().ref("/");

  const btn = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  var clicked = false;
  var clicked2 = false;

  btn.addEventListener("click", () => {
    if (clicked) {
        database.child("btn1").set("0");
      clicked = false;
    } else {
      database.child("btn1").set("1");
      clicked = true;
    }
  });

  btn2.addEventListener("click", () => {
    if (clicked2) {
      
      database.child("btn2").set("0");
    clicked2 = false;
  } else {
    
    database.child("btn2").set("1");
    clicked2 = true;
  }
  });