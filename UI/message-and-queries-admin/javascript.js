
//our database we are refereing to is called ''message"
// document.querySelector("#all").addEventListener("click", () => {
//     dbmessages.on("value", function (messages) {
//         messages.forEach(message => {
//             let oneMessage = message.val();

//             let values = Object.values(oneMessage)
//             let keys = Object.keys(oneMessage)


//             for (keyIndex = 0; keyIndex < keys.length; keyIndex++) {
//                 for (valueIndex = keyIndex; valueIndex <= keyIndex; valueIndex++) {
//                     var node = document.createElement("div")
//                     let node2 = document.createElement("p")
//                     if (keys[keyIndex] === "firstName") {
//                         var textnode = document.createTextNode(`First Name:  ${values[valueIndex]}`)
//                     }
//                     if (keys[keyIndex] === "lastName") {
//                         var textnode = document.createTextNode(`Last Name:  ${values[valueIndex]}`)
//                     }
//                     if (keys[keyIndex] === "email") {
//                         var textnode = document.createTextNode(`Email address:  ${values[valueIndex]}`)
//                     }
//                     if (keys[keyIndex] === "message") {
//                         var textnode = document.createTextNode(`Message:  ${values[valueIndex]}`)
//                     }

//                     node2.appendChild(textnode)
//                     node.appendChild(node2)
//                     document.getElementById("messages").appendChild(node)
//                     node.style.marginBottom = "10px";


//                     console.log(keys[keyIndex], values[valueIndex]);
//                 }
//             }
//         })

//     });

// })


document.querySelector("#all").addEventListener("click", () => {
    viewMessage()
 })

let allQueries;
function viewMessage() {
    const authorization=localStorage.getItem('authorization')
    axios
        .get("https:////my-brand-theoneste.herokuapp.com/api/user/queries", {
            headers: {authorization

            }

        })
        .then(res => {
            console.log(res.data.queries);
            allQueries = res.data.queries;
            let number = 0;

            allQueries.forEach((query) => {
                number = number + 1;
                let allMessages = document.createElement("div");
                allMessages.setAttribute("class","allMessageNode")
                let OneMessage = document.createElement("div");
                OneMessage.setAttribute("class","oneMessage")
                let ybutton = document.createElement("button");
                ybutton.setAttribute("class","buttonMessage")
                ybutton.innerHTML="Read Message"
                let namesNode = document.createElement("h2");
                let idNode = document.createElement("h4");
                let messageNode = document.createElement("p");
                let textnodeNumber = document.createTextNode(`No: ${number}`);
                let textnodeId = document.createTextNode(`Id: ${query["_id"]}`);
                let textnodeNames = document.createTextNode(`firstName :${query["firstName"] } ${query["lastName"]}`);
                let textnodeMessage = document.createTextNode(`message: ${query["message"]}`);
                namesNode.appendChild(textnodeNames);
                messageNode.appendChild(textnodeMessage);
                OneMessage.appendChild(textnodeNumber)
                OneMessage.appendChild(namesNode);
                OneMessage.appendChild(textnodeMessage)
                // OneMessage.appendChild(ybutton);
                allMessages.appendChild(OneMessage);
                document.getElementById("messages").appendChild(allMessages)
                OneMessage.style.marginBottom = "10px";
            })

                // console.log(query["_id"]))
         } )
        .catch(err=>console.error(err))
}
