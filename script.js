function welcomePage(){
    const newH1 = document.createElement("h1");
    newH1.textContent="Välkommen in Test!";
    document.body.appendChild(newH1);
}

function clearButton(){
    const logout = document.createElement("button");
    logout.textContent = "Logga ut!";
    logout.addEventListener("click", function(){
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        kollaStorage();
    });
    document.body.appendChild(logout);
}

function addHeader1(){
    const loginHeader = document.createElement("h1");
    loginHeader.textContent ="Logga in";
    document.body.appendChild(loginHeader);
}

function addUsernameInput(){
    const newNInput = document.createElement("input");
    newNInput.type="Text";
    newNInput.placeholder="Username";
    newNInput.id="username";
    document.body.appendChild(newNInput);
}

function addPasswordInput(){
    const newPInput = document.createElement("input");
    newPInput.type="Password";
    newPInput.placeholder="Password";
    newPInput.id="password";
    document.body.appendChild(newPInput);
}

function addLoginBtn(){
    const newLoginBtn = document.createElement("Button");
    newLoginBtn.textContent="Logga in!";
    document.body.appendChild(newLoginBtn);
    newLoginBtn.addEventListener("click", function(){
        const username = document.getElementById("username");
        const password = document.getElementById("password");
            if (username.value == "test" && password.value =="1234"){
                localStorage.setItem("username", username.value);
                localStorage.setItem("password", password.value);
                kollaStorage();
            }
            else {
                errorMessage();
            }

    });
    
}

function errorMessage (){
    const wrongAccount = document.getElementById("errorMessage");
    if(wrongAccount == null){
    const newPara = document.createElement("p");
    newPara.textContent="Fel användarnamn eller lösenord";
    newPara.id="errorMessage";
    document.body.appendChild(newPara);
    }
    else {
        wrongAccount.textContent="forfarande fel användarnamn eller lösenord";
    }
}



function kollaStorage(){
    const lagratUsername = localStorage.getItem("username");
    const lagratPassword = localStorage.getItem("password");
    document.body.innerHTML="";
    if(lagratUsername=="test" && lagratPassword=="1234"){
        welcomePage();
        clearButton();
    }
    else {
        addHeader1();
        addUsernameInput();
        addPasswordInput();
        addLoginBtn();
    }
};

kollaStorage();