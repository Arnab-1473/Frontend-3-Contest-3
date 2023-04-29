const signupPage = document.querySelector("#signup-page");
const profilePage = document.querySelector("#profile-page");

profilePage.addEventListener("click", () => {
    window.location.href = "./profile.html"
})
signupPage.addEventListener("click", () => {
    window.location.href = "./index.html"
})

const fullName = document.querySelector(".fullname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const userData = JSON.parse(window.localStorage.getItem('users'));
console.log(userData);

const user = JSON.parse(localStorage.getItem("user"));
fullName.innerHTML = `${user.name}`;
email.innerHTML = user.email;
password.innerHTML = user.pass;


const logout = document.querySelector("#logout-btn");

logout.addEventListener('click', ()=>{
    window.localStorage.removeItem("user");
    window.location.href = './index.html';
})