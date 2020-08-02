
var firebaseConfig = {
    apiKey: "AIzaSyCqNbHfw8JXi0NylVuKlC2LB27tYVrHWVk",
    authDomain: "theoneste09.firebaseapp.com",
    databaseURL: "https://theoneste09.firebaseio.com",
    projectId: "theoneste09",
    storageBucket: "theoneste09.appspot.com",
    messagingSenderId: "913620914694",
    appId: "1:913620914694:web:fc1ba45339765f43276987",
    measurementId: "G-YLS8Z59Q7G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//reference a message collection
let messagesRef=firebase.database().ref("messages")


// listen the form submit

document.getElementById('contactForm')
    .addEventListener('submit', submitInput);
// get the values!
function getInputsValueForm(id) {
    return document.getElementById(id).value
}


// function validate the values
function valuesValidate() {

    // get all the inputs
    let allInputs = document.querySelectorAll("input")
    let textarea = document.querySelectorAll("textarea")
    allInputs = [...allInputs, ...textarea]
    allInputs.forEach((input) => {
        input.addEventListener("blur", () => {
                // console.log(input.id)


            let firstName = getInputsValueForm("firstName")

            let lastName = getInputsValueForm("lastName")

            let email = getInputsValueForm("email")
            const mailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

            let phoneNumber = getInputsValueForm("phoneNumber")

            let message = getInputsValueForm("message")

            if (input.id === "firstName") {
                firstName.length < 3 ?
                        document.getElementById("firstNameError").style.display = 'block':
                    document.getElementById("firstNameError").style.display = 'none'
            }

            if (input.id === "lastName") {
                lastName.length < 3 ?
                    document.getElementById("lastNameError").style.display = 'block' :
                    document.getElementById("lastNameError").style.display = 'none'
            }

            if (input.id === "email") {
                email.match(mailFormat) ?
                    document.getElementById("emailError").style.display = 'none':
                    document.getElementById("emailError").style.display = 'block' ;

            }

            if (input.id === "phoneNumber") {
                phoneNumber.length < 3 ?
                    document.getElementById("phoneNumberError").style.display = 'block' :
                    document.getElementById("phoneNumberError").style.display = 'none'
            }

            if (input.id === "message") {
                message.length < 3 ?
                    document.getElementById("messageError").style.display = 'block' :
                    document.getElementById("messageError").style.display = 'none';
            }

        })
    })


}

valuesValidate();


// function to submit the form
function submitInput(e) {
    e.preventDefault();

    // get the values

        let firstName = getInputsValueForm("firstName")

        let lastName = getInputsValueForm("lastName")

        let email = getInputsValueForm("email")

        let phoneNumber = getInputsValueForm("phoneNumber")

    let message = getInputsValueForm("message")

    let allLabels = document.getElementsByClassName("label")
    allLabels = [...allLabels]
    let labelDisplayStyle = [];

    allLabels.forEach(label => {
        labelDisplayStyle.push(label.style.display)
    })
    if (labelDisplayStyle.includes("block") || labelDisplayStyle.includes("")) {
        return;
    }
    else {

        savemessage(firstName, lastName, email, phoneNumber, message)

        // display alert message
        document.querySelector(".notification").style.display = 'block'

        // hide alert message
        setTimeout(function () {
            document.querySelector(".notification").style.display = 'none'
        }, 3000)

        // cleaning the form
        document.getElementById('contactForm').reset()

    }
    }



// function to save the message to fire base
function savemessage(firstName, lastName, email, phone, message) {
    // message reference
    let newmessageRef = messagesRef.push();
    newmessageRef.set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message
    });
}


