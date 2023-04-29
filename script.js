const signupForm = document.querySelector(".signup-form");
const signupBtn = document.querySelector("#signup-btn");
const signupPage = document.querySelector("#signup-page");
const profilePage = document.querySelector("#profile-page");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPassInput = document.querySelector("#confirm-password");

// const nameWarning = document.querySelector("#name-warn");
// const emailWarning = document.querySelector("#email-warn");
// const passwordWarning = document.querySelector("#password-warn");
// const confirmPassWarning = document.querySelector("#confirmPass-warn");
let user = {


}

const successMsg = document.querySelector(".success-message");
const errorMsg = document.querySelector(".error-message");

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (nameInput.value !== "" && emailInput.value !== "" && passwordInput.value !== "") {
        let userName = nameInput.value;
        let userEmail = emailInput.value;
        let userPass = passwordInput.value;

        user.name = userName;
        user.email = userEmail;
        user.password = userPass;

        localStorage.setItem("user", JSON.stringify(user));
    }
    // let confirmPass = confirmPassInput.value;
    // console.




    // storeData();

    // name validation
    // const nameArray = nameInput.value.split(' ');
    // if(nameArray.length < 2) {
    //     nameWarning.innerHTML = "Please enter your full name";
    //     nameWarning.style.color = "red";
    //     return false;
    // }else{
    //     nameWarning.innerHTML = '';
    // }

    // // email validation
    // if(!emailInput.value.includes('@')){
    //     emailWarning.innerHTML = 'Please enter a valid email address';
    //     emailWarning.style.color = 'red';
    //     return false;
    // }
    // if(emailInput.value.lastIndexOf('.') !== emailInput.value.length-4) {
    //     emailWarning.innerHTML = 'Please enter a valid email address';
    //     emailWarning.style.color = 'red';
    //     return false;
    // }else{
    //     emailWarning.innerHTML ='';
    // }

    // // password validation
    //     // length
    // if(passwordInput.value.length < 8) {
    //     passwordWarning.innerHTML = 'Please enter a password of at least 8 characters';
    //     passwordWarning.style.color = 'red';
    //     return false;
    // }
    //     // uppercase
    //     if(!passwordInput.value.match(/[A-Z]/)) {
    //         passwordWarning.innerHTML = 'Password should contain one upper case';
    //         passwordWarning.style.color = 'red';
    //         return false;
    //     }
    //     // lowercase
    //     if(!passwordInput.value.match(/[a-z]/)) {
    //         passwordWarning.innerHTML = 'Password should contain one lower case';
    //         passwordWarning.style.color = 'red';
    //         return false;
    //     }
    //     // numbers
    //     if(!passwordInput.value.match(/[0-9]/)) {
    //         passwordWarning.innerHTML = 'Password should contain one number';
    //         passwordWarning.style.color = 'red';
    //         return false;
    //     }
    //     if(!passwordInput.value.match(/[!/@/#/*/$/%/&/-/_/</>]/)) {
    //         passwordWarning.innerHTML = 'Password should contain one symbol';
    //         passwordWarning.style.color = 'red';
    //         return false;
    //     }
    //     else{
    //         passwordWarning.innerHTML = '';
    //     }

    //     // confirm password validation
    //     if(passwordInput.value !== confirmPassInput.value) {
    //         confirmPassWarning.innerHTML = 'Passwords do not match';    
    //         confirmPassWarning.style.color = 'red';
    //         return false;
    //     }
    //     else{
    //         confirmPassWarning.innerHTML = '';
    //     }

    if (nameInput.value !== "" && emailInput.value !== "" && passwordInput.value !== "" && confirmPassInput.value !== "") {

        successMsg.classList.remove("hide");
        errorMsg.classList.add("hide");
        window.location.href = "./profile.html"
    }
    else {
        successMsg.classList.add("hide");
        errorMsg.classList.remove("hide");
        return;
    }
});
