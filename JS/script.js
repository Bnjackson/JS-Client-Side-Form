const submitButton = document.querySelector(".submit-btn");
const form = document.getElementById("form")

const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordCheck = document.getElementById("password-check")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();
    console.log(usernameValue);
    console.log(emailValue);
    console.log(passwordValue);
    console.log(passwordCheckValue);
}

