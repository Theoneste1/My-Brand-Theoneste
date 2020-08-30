
// let loginButtonId = document.querySelector('#loginButtonId ')
let loginButtonConfirm = document.querySelector('#loginBtn')



loginButtonConfirm.addEventListener("click", () => {
    loginfunction();
    clearGround();
})


function loginfunction() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(email);
    console.log(password);
    axios
        .post("https://my-brand-theoneste.herokuapp.com/api/user/login", {
            "email": email,
            "password":password
        })
        .then(res => {
            localStorage.setItem('authorization', res.data.token);
            window.location.href = "../blog-page-admin/index.html";


        })
        .catch(err => console.error(err))
}




function clearGround() {
    document.getElementById("email").value="";
    document.getElementById("password").value="";
}
