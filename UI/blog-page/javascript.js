

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
                // blog.style.width = "100%";
                console.log(blog)
            }
            if (blog !== otherBlog) {
                otherBlog.style.display = "none";
            }
        })

    })
})



// view blogs internally,

// view all blogs

function viewblogs() {
    axios
        .get("https://my-brand-theoneste.herokuapp.com/api/user/blogs")
        .then(res => {
            // console.log(res);
            const allBlogs = res.data.data;
            allBlogs.map(blog => displayBlogs(blog))

        })
        .catch(err => console.error(err));
}

// calling view blogs function
window.addEventListener("load", viewblogs);



const blogsContainer = document.querySelector(".blogs");

function displayBlogs(blog) {
    let blogsDisplay = document.createElement("div");
    let div = document.createElement("div");

    blogsDisplay.className = "bloged";
    div.innerHTML = `
                                    <div class="blog-image">
                                        <img src="${blog.imageLink}">
                                    </div>
                                    <div class="blog-title">
                                        <h1> ${blog.topic}</h1>
                                    </div>
                                    <div class="blog-date">
                                        <p> ${new Date().toDateString()}</p>
                                    </div>
                                    <div class="line1"></div>
                                    <div class="blog-text">
                                         <p>${blog.content.slice(0, 100)} </p>
                                    </div>
                                    `;

    let readMoreButton = document.createElement("div");
    let buttons = document.createElement("div");
    readMoreButton.className = "btn-bigbtn";
    readMoreButton.innerHTML = `<button>Read More</button>`;
    buttons.appendChild(readMoreButton);

    div.appendChild(buttons);
    div.style.margin = "10px";
    blogsContainer.appendChild(div);


    const readmores = div.querySelectorAll(".btn-bigbtn");
    readmores.forEach((readMore) => {
        readMore.addEventListener('click', () => {

            console.log(blog._id)
            localStorage.setItem('blogId', blog._id);
            window.location.assign('./blogPage.html');
        })
    })

}
