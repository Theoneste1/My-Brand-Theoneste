const authorization = localStorage.getItem("authorization");

let createNewBlogBtn = document.querySelector("#createNewBlog");
console.log(createNewBlogBtn);
createNewBlogBtn.addEventListener("click", () => { console.log("New blog created!!")
})




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
viewblogs();

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
                                        <p> JULY 23, 2020</p>
                                    </div>
                                    <div class="line1"></div>
                                    <div class="blog-text">
                                        <p>${blog.content.slice(0, 100)} </p>
                                    </div>
                                    `;

    let action = document.createElement("div");
    action.className = "action";

    let buttonDelete = document.createElement("button");
    buttonDelete.className = "deleteBlog";
    buttonDelete.innerHTML = `Delete <i class='fas fa-times'></i>`

    let buttonUpdate = document.createElement("button");
    buttonUpdate.className = "updateBlog";
    buttonUpdate.innerHTML = `Update <i class='fas fa-pen'></i>`;

    action.appendChild(buttonDelete);
    action.appendChild(buttonUpdate);
    div.appendChild(action);
    blogsContainer.appendChild(div);

    // delete blog
    buttonDelete.addEventListener('click', () => {
        axios
            .delete(`https://my-brand-theoneste.herokuapp.com/api/user/blogs/${blog._id}`,
                {
                    headers: { authorization }
                }).then(res => {
                    console.log("deleted");
                })
    })

    buttonUpdate.addEventListener("click", () => {
        document.querySelector("#image").value=blog.imageLink;
        document.querySelector("#topic").value=blog.topic ;
        document.querySelector("#content").value=blog.content ;

    })

}


    // creating blog
function createBlog() {
             axios
                .post("https://my-brand-theoneste.herokuapp.com/api/user/blogs", {
                     "imageLink": document.querySelector("#image").value,
                     "topic": document.querySelector("#topic").value,
                     "content": document.querySelector("#content").value
                 },
                     {
                         headers: { authorization }
                     })
                .then(res => console.log("blog created"))
        .catch(err => console.error(err));

    clearGround()
}

function clearGround() {
     document.querySelector("#image").value=""
        document.querySelector("#topic").value=""
        document.querySelector("#content").value=""
}
