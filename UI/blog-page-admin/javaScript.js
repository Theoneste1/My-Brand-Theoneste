// javascript for humburger icon

const menuIcons = document.querySelector('.menuIcon');
const menubar = document.querySelector('header ul')

menubar.addEventListener('click', () => {

})

menuIcons.addEventListener('click', () => {

    menubar.classList.toggle('myClass')

});


// getting all bloged
const blogedBlog = document.querySelectorAll('.bloged')
blogedBlog.forEach(blog => {

    // change the color of text area
    blog.addEventListener("mouseover", () => {
        console.log(blog.children[blog.children.length - 3].innerText)
        blog.children[blog.children.length - 3].style.color = "#09C2C9";
        blog.style.cursor = "pointer";

    })
    // return the text to normal
    blog.addEventListener("mouseout", () => {
        console.log(blog.children[blog.children.length - 3].innerText)
        blog.children[blog.children.length - 3].style.color = "#626262";
    })
})

// getting the likes and unlikes
const actions = document.querySelectorAll(".action .fa");
actions.forEach(action => {
    action.addEventListener('click', () => {
        action.style.color = "#E31C6E";

    })
})
