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


// Our database
var dbmessages = firebase.database().ref().child("messages")

//our database we are refereing to is called ''message"

document.querySelector("#all").addEventListener("click", () => {

    dbmessages.on("value", function (messages) {
        messages.forEach(message => {
            let oneMessage = message.val();

            let values = Object.values(oneMessage)
            let keys = Object.keys(oneMessage)


            for (keyIndex = 0; keyIndex < keys.length; keyIndex++) {
                for (valueIndex = keyIndex; valueIndex <= keyIndex; valueIndex++) {
                    var node = document.createElement("div")
                    let node2 = document.createElement("p")
                    if (keys[keyIndex] === "firstName") {
                        var textnode = document.createTextNode(`First Name:  ${values[valueIndex]}`)
                    }
                    if (keys[keyIndex] === "lastName") {
                        var textnode = document.createTextNode(`Last Name:  ${values[valueIndex]}`)
                    }
                    if (keys[keyIndex] === "email") {
                        var textnode = document.createTextNode(`Email address:  ${values[valueIndex]}`)
                    }
                    if (keys[keyIndex] === "phone") {
                        var textnode = document.createTextNode(`Phone Number:  ${values[valueIndex]}`)
                    }
                    if (keys[keyIndex] === "message") {
                        var textnode = document.createTextNode(`Message:  ${values[valueIndex]}`)
                    }

                    node2.appendChild(textnode)
                    node.appendChild(node2)
                    document.getElementById("messages").appendChild(node)
                    node.style.marginBottom = "10px";


                    console.log(keys[keyIndex], values[valueIndex]);
                }
            }



        })

    });

})

// // in accordance to mail address
// const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// document.querySelector("#singleMail").addEventListener("click", () => {
//     let inputMail = document.getElementById("input").value
//     if (inputMail.match(mailFormat)) {
//         let border = document.getElementById("input")
//         border.style.border = "1px solid green"

//         dbmessages.on("value", function (messages) {
//             messages.forEach(message => {
//                 let oneMessage = message.val();

//                 let values = Object.values(oneMessage)
//                 let keys = Object.keys(oneMessage)


//                 for (keyIndex = 0; keyIndex < keys.length; keyIndex++) {
//                     for (valueIndex = keyIndex; valueIndex <= keyIndex; valueIndex++) {

//                         // checking of the input mail address
//                         if (keys[keyIndex] === "email" && values[valueIndex] === inputMail) {
//                             var node = document.createElement("div")
//                             let node2 = document.createElement("p")
//                             if (keys[keyIndex] === "firstName") {
//                                 var textnode = document.createTextNode(`First Name:  ${values[valueIndex]}`)
//                             }
//                             if (keys[keyIndex] === "lastName") {
//                                 var textnode = document.createTextNode(`Last Name:  ${values[valueIndex]}`)
//                             }
//                             if (keys[keyIndex] === "email") {
//                                 var textnode = document.createTextNode(`Email address:  ${values[valueIndex]}`)
//                             }
//                             if (keys[keyIndex] === "phone") {
//                                 var textnode = document.createTextNode(`Phone Number:  ${values[valueIndex]}`)
//                             }
//                             if (keys[keyIndex] === "message") {
//                                 var textnode = document.createTextNode(`Message:  ${values[valueIndex]}`)
//                             }

//                             node2.appendChild(textnode)
//                             node.appendChild(node2)
//                             document.getElementById("messages").appendChild(node)
//                             node.style.marginBottom = "10px";

//                             // console.log(keys[keyIndex], values[valueIndex]);
//                         }
//                         if (keys[keyIndex] === "email" && values[valueIndex] !== inputMail) {
//                             // if the no email meet
//                             // console.log(values[valueIndex])
//                             let nodeline = document.createElement("p")
//                             let text = document.createTextNode("Such mail is not in our Data base")
//                             nodeline.appendChild(text)
//                             document.getElementById("communication").appendChild(nodeline)



//                     }
//                     }


//                 }


//                 })

//         });

//     }

//     // if mail format is not collect
//     if (!inputMail.match(mailFormat)) {
//         let inputBorder = document.getElementById("input")
//         inputBorder.style.border = "1px solid red"
//         return;
//     }

//     setTimeout(function () {
//         let inputBorder = document.getElementById("input")
//         inputBorder.style.border = "0px solid white"
//     }, 3000)



// })
