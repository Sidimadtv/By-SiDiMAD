var flag = 0;
var size = 0;
var image = 0;
function red() {
    document.body.style.background = 'red';
    flag = 1;
}

function blue() {
    document.body.style.background = 'blue';
    flag = 2;
}

function green() {
    document.body.style.background = 'green';
    flag = 3;
}

function verysmall() {
    document.body.style.fontSize = "12px";
    size = 0;
}

function small() {
    document.body.style.fontSize = "18px";
    size = 1;
}

function medium() {
    document.body.style.fontSize = "35px";
    size = 2;
}

function big() {
    document.body.style.fontSize = "50px";
    size = 3;
}

function verybig() {
    document.body.style.fontSize = "65px";
    size = 4;
}

function image1() {
    document.body.style.backgroundImage = "url(img/954817.jpg)"
    image = 1;
}

function image2() {
    document.body.style.backgroundImage = "url(img/ground.jpg)"
    image = 2;
}
function image3() {
    document.body.style.backgroundImage = "url(img/ground3.jpg)"
    image = 3;
}

function check() {
    localStorage.setItem("myflag", flag);
    
    localStorage.setItem("mysize", size);
    
    localStorage.setItem("myimage", image);
    window.location.href = 'Home.html';
}

function reset() {
    localStorage.removeItem("myflag");
    localStorage.removeItem("mysize");
    localStorage.removeItem("myimage");
    window.location.href = 'Home.html';
}

var users = localStorage.getItem("myusers");
var userspasswords = localStorage.getItem("myuserspasswords");
var admins = localStorage.getItem("myadmins");
var adminspasswords = localStorage.getItem("myadminspasswords");

document.getElementById("users").innerHTML="Users : " + users;
document.getElementById("users_passwords").innerHTML= "Users Passwords : " + userspasswords;
document.getElementById("admins").innerHTML="Admins : " + admins;
document.getElementById("admins_passwords").innerHTML="Admins Passwords : " + adminspasswords;