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

    document.querySelector("#all").disabled =true;
    let adminsAllmessage = document.createElement("div");
    adminsAllmessage.className = "adminsAllmessage"
    adminsAllmessage.style.backgroundColor = "white"
    adminsAllmessage.style.height = "100%";
    adminsAllmessage.style.width = "100%";
    document.getElementById("messages").appendChild(adminsAllmessage)
    let allMessages = []

    dbmessages.on("value", function (messages) {

        // disable the button so that it would not be clicked again

        messages.forEach(message => {
            let oneMessage = message.val();

            let values = Object.values(oneMessage)
            let keys = Object.keys(oneMessage)
            allMessages.push(values)
            var node = document.createElement("div")
            node.className = "adminMessage"
            adminsAllmessage.appendChild(node)


            for (keyIndex = 0; keyIndex < keys.length; keyIndex++) {
                for (valueIndex = keyIndex; valueIndex <= keyIndex; valueIndex++) {
                    let node2 = document.createElement("p")
                    if (keys[keyIndex] === "firstName") {
                        var textnode = document.createTextNode(`First Name:  ${values[valueIndex]}`)
                    }
                    if (keys[keyIndex] === "lastName") {
                        var textnode = document.createTextNode(`Last Name:  ${values[valueIndex]}`)
                    }
                    if (keys[keyIndex] === "email") {
                        // creating space  for mail
                        let emailDiv = document.createElement("div")
                        emailDiv.className = " mailDivision"
                        emailDiv.style.width = "100%"
                        emailDiv.style.height = "100%"
                        emailDiv.style.color="red"
                        emailDiv.style.backgroundColor = "red"
                        var textnode1 = document.createTextNode(`Email address:  ${values[valueIndex]}`)
                        var textnode = emailDiv.appendChild(textnode1)
                    }
                    if (keys[keyIndex] === "phone") {
                        var textnode = document.createTextNode(`Phone Number:  ${values[valueIndex]}`)
                    }
                    if (keys[keyIndex] === "message") {
                        var textnode = document.createTextNode(`Message:  ${values[valueIndex]}`)
                    }

                    node2.appendChild(textnode)
                    node.appendChild(node2)
                    node.style.marginBottom = "10px";
                }
            }



        })

    });
    console.log(allMessages)

})
