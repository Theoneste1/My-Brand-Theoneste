
// getting all bloged
const blogedBlog = document.querySelectorAll('.bloged')
blogedBlog.forEach(blog => {

    // change the color of text area
    blog.addEventListener("mouseover", () => {
        //console.log(blog.children[blog.children.length - 4].innerText)
        blog.children[blog.children.length - 4].style.backgroundColor = "#626262"
        // blog.children[blog.children.length - 4].style.color = "white";
        blog.style.cursor = "pointer";

    })
    // return the text to normal
    blog.addEventListener("mouseout", () => {
        //console.log(blog.children[blog.children.length - 4].innerText)
        // blog.children[blog.children.length - 4].style.color = "#626262";
        blog.children[blog.children.length - 4].style.backgroundColor = "#adbbc7"
    })

    // whatif a blog is clicked

    blog.addEventListener("click", () => {
        blogedBlog.forEach(otherBlog => {
            if (blog === otherBlog) {
                blog.style.display = "block";
                document.querySelector(".secondParagraph").style.display = "block";
                document.querySelector(".goback").style.display = 'block';
                blog.style.width = "100%";
            }
            if (blog !== otherBlog) {
                otherBlog.style.display = "none";
            }

        })
    })

})




// getting the likes and unlikes
const actions = document.querySelectorAll(".action .fa");
    actions.forEach(action => {
        action.addEventListener('click', () => {
            action.style.color = "#E31C6E";

        })
    })


    // Closing the blog
document.querySelector(".goback").addEventListener("click", () => {
    blogedBlog.forEach(anyblog=> {
        anyblog.style.display = 'block';
        anyblog.style.width = "20%";
        document.querySelector(".goback").style.display = "none";
        document.querySelector(".secondParagraph").style.display = "none";


    })
})
