// javascript for humburger icon

const menuIcons = document.querySelector('.menuIcon');
const menubar = document.querySelector('header ul')

menubar.addEventListener('click', () => {

})

menuIcons.addEventListener('click', () => {

    menubar.classList.toggle('myClass')

});

let loginForm = document.querySelector('.loginform')
let loginButtonId = document.querySelector('#loginButtonId ')
let loginButton = document.querySelector('#loginBtn')
let registerForm = document.querySelector('.Registerform')
let registerButton = document.querySelector('#registerButton')
let registerButtonId = document.querySelector('#registerButtonId')
let loginLink = document.querySelector('#loginLink')
let registerLink = document.querySelector('#RegisterLink')

let formTex=document.querySelector("#form-body")
// let loginForm = document.querySelector('.loginform')
loginLink.addEventListener('click', () => {
    loginbtn();
    console.log("login");
})

registerLink.addEventListener('click', () => {
    registerbtn();
    console.log("reg");
})

function loginbtn() {
    loginButtonId.addEventListener('click', () => {
        clearGround();
        loginForm.style.display = "block";
        loginForm.style.opacity = "0.6";
        formTex.style.display = "none";
        loginButtonId.style.backgroundColor = "#BD2060";
    })
}
loginbtn()


function registerbtn() {
    registerButtonId.addEventListener('click', () => {
        clearGround()
        registerForm.style.display = "block";
        registerForm.style.opacity = "0.6";
        registerButtonId.style.backgroundColor = "#BD2060";
        formTex.style.display = "none";
    })
}
registerbtn()



function clearGround() {
    registerForm.style.display = "none";
    loginForm.style.display = "none";
    formTex.style.display = "block";
    loginButtonId.style.backgroundColor = "#252934";
    registerButtonId.style.backgroundColor = "#252934";
}
