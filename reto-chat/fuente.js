var from = "";
var to = "";
var count = 0;
var count1 = 0;
var count2 = 0;
var vector = {};
var long = 0;
var keys;
var db1;
var db2;
var res1;
var res2;
var title = "other users to talk: ";
var u1 = '<p id="chat" class="row d-flex justify-content-end">';
var u2 = '<p id="chat" class="row d-flex justify-content-start">';
var config = {
    apiKey: "AIzaSyChft7nj9k44d611_gq-18gKTTDeqfaEQA",
    authDomain: "testchat-22650.firebaseapp.com",
    databaseURL: "https://testchat-22650.firebaseio.com",
    projectId: "testchat-22650",
    storageBucket: "testchat-22650.appspot.com",
    messagingSenderId: "561164670289"
};
firebase.initializeApp(config);
var database = firebase.database();
function enviar(user, msg) {
    baseDatos.push().set({ title: user, body: msg.val() });
    msg.val('');
}
function enviar2() {
    baseDatos.push().set({ to: "ee", from: "dad", sec: "44", msg: "¿cómo estás?" });
}
function login() {
    if ($('#user').val().length == 0) {
        return;
    }
    from = $('#user').val();
    $('#username').html('User: **' + $('#user').val() + '**');
}
function connect() {
    if ($('#user2').val().length == 0 || from.length == 0) {
        return;
    }
    to = $('#user2').val();
    $('#status').html('User: ' + from + ' connected with user ' + to);
    initChat(from, to);
}

function initChat(user1, user2) {
    db1 = firebase.database().ref(user1 + "/" + user2);
    db2 = firebase.database().ref(user2 + "/" + user1);
    db1.orderByChild("sec").on("value", function (snapshot) {
        res1 = (snapshot.val());
        if (res1 != null) {
            count1 = res1[Object.keys(res1)[Object.keys(res1).length-1]].sec;
        }else{
            res1 = "";
        }
        
        db2.orderByChild("sec").on("value", function (snapshot) {
            res2 = (snapshot.val());
            if (res2 != null) {
                count2 = res2[Object.keys(res2)[Object.keys(res2).length-1]].sec;
            }else{
                res2 = "";
            }
            if(count1>count2){
                count = count1 + 1;
            }else{
                count = count2 + 1;
            }
            $('#chat').css('display','inline');
            join();
        }, function (error) {
            console.log("Error: " + error.code);
        });
    }, function (error) {
        console.log("Error: " + error.code);
    });
    
    
}
function send(){
    if($('#msg').val().length==0){
        return;
    }
    db1.push().set({sec:count,msg:$('#msg').val()});
    $('#msg').val('')
}
function join(){
    vector = {};
    keys = Object.keys(res1);
    keys.forEach(
        element=>{
            vector[res1[element].sec] = u1 + res1[element].msg + "</p>"; 
        }
    );
    keys = Object.keys(res2);
    keys.forEach(
        element=>{
            vector[res2[element].sec] = u2 + res2[element].msg + "</p>"; 
        }
    );
    let aux = "";
    long= Object.keys(vector).length;
    Object.keys(vector).forEach(e=>{aux += vector[e];});
    $("#msgs").html(aux);
}
  