//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAFU7r7fJ1uIACjjD7-9TCP08cwH9saZCI",
      authDomain: "kwitter-c3f19.firebaseapp.com",
      databaseURL: "https://kwitter-c3f19-default-rtdb.firebaseio.com",
      projectId: "kwitter-c3f19",
      storageBucket: "kwitter-c3f19.appspot.com",
      messagingSenderId: "264451436019",
      appId: "1:264451436019:web:35de86960c47834a5b3686",
      measurementId: "G-KKQBX0PE03"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();