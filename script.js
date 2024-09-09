const correctUsername = "test";
const correctPassword = "1234";
const usernameTry = document.getElementById("username");
const passwordTry = document.getElementById("password");
const btnLogin = document.getElementById ("loginBtn");

btnLogin.addEventListener("click", function(){
if (usernameTry.value == correctUsername, passwordTry.value == correctPassword) {
    console.log("rätt username och lösenord");
}
else {
    console.log("Fel username eller lösenord");
}});