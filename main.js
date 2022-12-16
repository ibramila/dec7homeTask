// !name
const userName = document.querySelector("#userName");
const nameError = document.querySelector(".error");

// !userSurname
const userSurname = document.querySelector("#userSurname");

//!age side
const userAge = document.querySelector("#userAge");
const ageError = document.querySelector("#ageError");

//!email side
const userEmail = document.querySelector("#userEmail");
const enterEmail = userEmail.value;
const getEmail = localStorage.getItem("Email");

//!password side
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const lock = document.querySelector(".fa-lock");
const unlock = document.querySelector(".fa-lock-open");
const getPassword = localStorage.getItem("Password");

//!submit button
const submit = document.querySelector("#submit");
const register = localStorage.getItem("register") === null ? [] : JSON.parse(localStorage.getItem("register"))


userName.addEventListener("keyup", userFuncName);
userAge.addEventListener("keyup", userFuncAge);
lock.addEventListener("click", lockFunc)
unlock.addEventListener("click", unlockFunc);
password.addEventListener("keyup", passFunc);
password2.addEventListener("keyup", pass2Func);
submit.addEventListener("click", submitFunc);


form.addEventListener('submit', (e) => {
    e.preventDefault();

    register.push({
        Name: userName.value,
        Surname: userSurname.value,
        Age: userAge.value,
        Email: userEmail.value,
        Password: password.value,
        Password2: password2.value,
        Id: String(Math.random() * 10)
    })

    localStorage.setItem("register", JSON.stringify(register));
    window.location.reload()
    ClearInput(e)
})

const ClearInput = (e) => {
    e.target.reset();
}

function userFuncName() {
    if (userName.value.trim().length < 3) {
        error.style.display = "block";
    }
    else if (userName.value.trim().length == 0) {
        error.style.display = "none";
    }
    else {
        error.style.display = "none";
    }
}



function userFuncAge() {
    if ((userAge.value < 18)) {
        ageError.style.display = "block";
    }
    else {
        ageError.style.display = "none";
    }
}


function passFunc() {
    if (password.value.match(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/)) {
        password.style.color = "green"
    }
    else {
        password.style.color = "red"
    }
}
function pass2Func(e) {
    if (password.value == password2.value) {
        password2.style.color = "green"
    }
    else {
        password2.style.color = "red"
    }
}

function lockFunc() {
    password.type = "text";
    lock.style.display = "none"
    unlock.style.display = "block";
}
function unlockFunc() {
    password.type = "password"
    unlock.style.display = "none"
    lock.style.display = "block";
}
function submitFunc() {
    if (enterEmail == getEmail) {
        alert("true");
    }
}