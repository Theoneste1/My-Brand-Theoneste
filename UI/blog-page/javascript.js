
// getting all bloged
const blogedBlog = document.querySelectorAll('.bloged')
blogedBlog.forEach(blog => {

    let blogTextSummary = blog.children[4];

    // change the color of text area
   blogTextSummary.addEventListener("mouseover", () => {
       blogTextSummary.style.backgroundColor = "#626262"
        blog.style.cursor = "pointer";

    })
    // return the text to normal
   blogTextSummary.addEventListener("mouseout", () => {
       blogTextSummary.style.backgroundColor = "#adbbc7"
    })

    // whatif a blog is clicked

   blogTextSummary.addEventListener("click", () => {
        blogedBlog.forEach(otherBlog => {
            if (blog === otherBlog) {
                blog.style.display = "block";
                document.querySelector(".secondParagraph").style.display = "block";
                document.querySelector(".goback").style.display = 'block';
                blog.classList.add("blogDisplay")
                // document.querySelector(".blogDisplay").style.width = "100%";
            }
            if (blog !== otherBlog) {
                otherBlog.style.display = "none";
            }

        })
    })

})


// clear action
function clearAction() {
    document.querySelectorAll(".action .fa")
        .forEach(element=>element.style.color="black")
}


// getting the likes and unlikes
const actions = document.querySelectorAll(".action .fa");
actions.forEach(action => {
    action.addEventListener('click', () => {
        clearAction();
            action.style.color = "#E31C6E";

        })
    })


    // Closing the blog
document.querySelector(".goback").addEventListener("click", () => {
    blogedBlog.forEach(anyblog=> {
        anyblog.style.display = 'block';
        anyblog.classList.remove("blogDisplay")
        document.querySelector(".goback").style.display = "none";
        document.querySelector(".secondParagraph").style.display = "none";


    })
})
