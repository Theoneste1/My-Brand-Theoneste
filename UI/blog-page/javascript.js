

// getting all bloged
const blogedBlog = document.querySelectorAll('.bloged')
blogedBlog.forEach(blog => {

    // change the color of text area
    blog.addEventListener("mouseover", () => {
        // blog.children[blog.children.length - 4].style.backgroundColor = "#626262"
        blog.style.cursor = "pointer";
    })
    // return the text to normal
    blog.addEventListener("mouseout", () => {
        blog.children[blog.children.length - 4].style.backgroundColor = "#adbbc7"
    })

    blog.addEventListener("click", () => {
        blogedBlog.forEach(otherBlog => {
            if (blog===otherBlog) {
                blog.style.width = "100%";
            }
            if (blog !== otherBlog) {
                otherBlog.style.display = "none";
            }
        })

    })
})
