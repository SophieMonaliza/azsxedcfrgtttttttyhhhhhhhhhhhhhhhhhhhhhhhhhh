const firebaseConfig = {
  apiKey: "AIzaSyCsNf51dEIjSireM-njdllblGcV91W3vcM",
  authDomain: "euodeioessesite-c4a43.firebaseapp.com",
  databaseURL: "https://euodeioessesite-c4a43-default-rtdb.firebaseio.com",
  projectId: "euodeioessesite-c4a43",
  storageBucket: "euodeioessesite-c4a43.appspot.com",
  messagingSenderId: "564576024337",
  appId: "1:564576024337:web:5249f6d595f08d92f5feb0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");














user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adicionar sala"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
   Room_names = childKey;
   console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}