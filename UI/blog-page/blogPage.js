


let blogId = localStorage.getItem("blogId")
console.log(blogId)
// view blogs internally,

// view all blogs



function viewblogOneBlog() {
    axios
        .get(`https://my-brand-theoneste.herokuapp.com/api/user/blogs/${blogId}`)
        .then(res => {
            // console.log(res);
            let blog = res.data.data;

                if (blog._id === blogId) {
                    console.log(blog._id)
                    displayOneBlog(blog)

                }
                else {
                    console.log("Not found")
                }


        })
        .catch(err => console.error(err));
}

// calling view blogs function
window.addEventListener("load", viewblogOneBlog);



const blogsContainer = document.querySelector(".blogs");

function displayOneBlog(blog) {
    let blogsDisplay = document.createElement("div");
    let div = document.createElement("div");
    div.className = "div";

    blogsDisplay.className = "bloged";
    div.innerHTML = `<article>

                                     <div class="blog-image">
                                        <img src="${blog.imageLink}">
                                    </div>
                             </article>
                             <aside>
                               <div class="blog-title">
                                        <h1> ${blog.topic}</h1>
                                    </div>
                                    <div class="blog-date">
                                        <h2> ${new Date().toDateString()}</h2>
                                    </div>
                                    <div class="line1"></div>
                                    <div class="blog-text">
                                         <p>${blog.content} </p>
                                    </div>
                                      <div class="blogComments">
                                         <p>

                                         </p>
                                    </div>
                             </aside>
                                    `;

    let commentBton = document.getElementById("commentBtn");
    commentBton.addEventListener('click', () => {
        let name = document.getElementById("commentor").value;
        let comment = document.getElementById("comment").value
        axios
            .post(`https://my-brand-theoneste.herokuapp.com/api/user/blogs/comment/${blogId}`, {
                "name": name,
                "comment": comment
            }

        ).then((res)=>{
            console.log("successfully");
            document.getElementById("commentor").value = "";
            document.getElementById("comment").value = "";
            window.location.reload();
        })
        .catch(err=>console.log(err))
    })

    let action = document.createElement("div");
    action.className = "action";

    let buttons = document.createElement("div");
    buttons.className = "buttons";

    let comments = document.createElement("div");
    comments.className = "comments";

    // like and unlike buttons
    let likeButton = document.createElement("div");
    likeButton.className = "likeButton";
    let likeCounter = document.createElement("p");
    likeCounter.innerHTML = "0";
    likeButton.innerHTML = `<i class="fa fa-thumbs-up"></i>`;
    likeButton.appendChild(likeCounter);

    let unlikeButton = document.createElement("div");
    unlikeButton.className = " unlikeButton";
    let unlikeCounter = document.createElement("p");
    unlikeCounter.className="unlikeCounter"
    unlikeCounter.innerHTML = "0";
    unlikeButton.innerHTML = `<i class="fa fa-thumbs-down"> </i>`;
    unlikeButton.appendChild(unlikeCounter);

    action.appendChild(likeButton);
    action.appendChild(unlikeButton);
    div.appendChild(action);
    div.appendChild(buttons);

    let blogComments = blog.comments
    console.log(blogComments);

    // blog comments
    blogComments.forEach((comment) => {
        let commentDivision = document.createElement("div");
        commentDivision.className = "commentDivisionDiv";
        let commentorTag = document.createElement("h1");
        let commentpartTag = document.createElement("p");
        let commentorName = document.createTextNode(`Name: ${comment.name}`);
        let commentParagraph = document.createTextNode(` comment: ${comment.comment}`);
        let useronpage = commentorTag.appendChild(commentorName);
        let commentPart = commentpartTag.appendChild(commentParagraph);

        commentDivision.appendChild(useronpage);
        commentDivision.appendChild(commentPart);

        commentDivision.style.margin = "5px 0";
        div.appendChild(commentDivision);

        div.style.margin = "10px";
        blogsContainer.appendChild(div);

    })
    let unlikeIcon = document.querySelector(".fa-thumbs-down");
    console.log(unlikeIcon)

    let likeIcon = document.querySelector('.fa-thumbs-up');
    console.log(likeIcon );

    // like and dislike
    likeCounter.innerHTML = `${blog.likes}`;
    likeIcon.addEventListener("click", () => {
        axios
            .post(`https://my-brand-theoneste.herokuapp.com/api/user/blogs/like/${blogId}`, {


            })
            .then(res => {
                console.log(res.data)
                console.log(blog.likes)
                window.location.reload();
            }
            )
    })

    unlikeCounter.innerHTML = `${blog.dislikes}`;
    unlikeIcon.addEventListener("click", () => {
        axios
            .post(`https://my-brand-theoneste.herokuapp.com/api/user/blogs/dislike/${blogId}`, {

            })
            .then(res => {
                console.log(res.data);
                console.log(blog.dislikes);
                window.location.reload();
            }
            )
    })


}
