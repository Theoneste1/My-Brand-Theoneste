
let submitBtn = document.getElementById("submitBtn")
submitBtn.addEventListener("click", creatingQueries);

function creatingQueries(e) {

    e.preventDefault();

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
    axios
        .post("https:////my-brand-theoneste.herokuapp.com/api/user/queries", {
            "firstName": `${getInputsValueForm("firstName")}`,
            "lastName": `${getInputsValueForm("lastName")}`,
            "email": `${getInputsValueForm("email")}` ,
            "message": `${getInputsValueForm("message")}`

    })
        .then(res => console.log(res))
         .catch(err => console.error(err));




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

            let message = getInputsValueForm("message")

            if (input.id === "firstName") {
                firstName.length < 5 ?
                        document.getElementById("firstNameError").style.display = 'block':
                    document.getElementById("firstNameError").style.display = 'none'
            }

            if (input.id === "lastName") {
                lastName.length < 5 ?
                    document.getElementById("lastNameError").style.display = 'block' :
                    document.getElementById("lastNameError").style.display = 'none'
            }

            if (input.id === "email") {
                email.match(mailFormat) ?
                    document.getElementById("emailError").style.display = 'none':
                    document.getElementById("emailError").style.display = 'block' ;

            }

            if (input.id === "message") {
                message.length < 5 ?
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
