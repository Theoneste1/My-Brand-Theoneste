// javascript for humburger icon

const menuIcons = document.querySelector('.menuIcon');
const menubar = document.querySelector('header ul')

menubar.addEventListener('click', () => {

})

menuIcons.addEventListener('click', () => {

    menubar.classList.toggle('myClass')

});

// getting all the projects
const allProjects = document.querySelectorAll('.image')


// getting the react projects
const reactProjects = document.querySelectorAll('.react')
console.log(reactProjects)

// javascript project
const javascriptProjects = document.querySelectorAll('.javascript')

// ruby projects
const rubyprojects = document.querySelectorAll('.ruby')


// project title
const projectsTitle = document.querySelectorAll(".all")
projectsTitle[0].style.backgroundColor = "#E31C6E";
projectsTitle[0].style.color = "white";

// by default
for (i = 1; i < projectsTitle.length; i++) {
    projectsTitle[i].style.color = "#626262";
}


//
function makeSameBackground() {
    projectsTitle.forEach(title => {
        title.style.backgroundColor = "#F5F5F5";
        title.style.color = "#626262";
    });
}




function makeClickColor() {
    projectsTitle.forEach(title => {
        title.addEventListener('click', () => {
            title.style.backgroundColor = "#E31C6E";
            title.style.color = "white"
        })
    })
}

// run all functions

function changeColor() {

    setTimeout(() => {
        makeClickColor()

    }, 1000);

    makeSameBackground()
}


projectsTitle.forEach(title => {
    title.addEventListener('click', () => {
        changeColor();
    }
    )
})

projectsTitle.forEach(title => {
    title.addEventListener('click', () => {
        //selecting javascript project

        if (title.classList[1] === "javascriptprojects") {
            // chenge the background color
            title.style.backgroundColor = "#E31C6E";
            title.style.color = "white"

            // hide the ruby projects
            rubyprojects.forEach(project => {
                project.style.display = "none";
            })
            // hide react projects
            reactProjects.forEach(project => {
                project.style.display = "none";
            })
            javascriptProjects.forEach(project => {
                project.style.display = "block";
            })

        }

        // selecting react projects
        else if (title.classList[1] === "reactsprojects") {
            // chenge the background color
            title.style.backgroundColor = "#E31C6E";
            title.style.color = "white"

            // hide the ruby projects
            rubyprojects.forEach(project => {
                project.style.display = "none";
            })
            // hide react projects
            javascriptProjects.forEach(project => {
                project.style.display = "none";
            })
            reactProjects.forEach(project => {
                project.style.display = "block";
            })

        }

        // ruby projects


        // selecting ruby projects
        else if (title.classList[1] === "rubyprojects") {
            // chenge the background color
            title.style.backgroundColor = "#E31C6E";
            title.style.color = "white"

            // hide the ruby projects
            reactProjects.forEach(project => {
                project.style.display = "none";
            })
            // hide react projects
            javascriptProjects.forEach(project => {
                project.style.display = "none";
            })
            rubyprojects.forEach(project => {
                project.style.display = "block";
            })


        }
        // getting all projects


        // selecting ruby projects
        else if (title.classList[1] === "allprojects") {
            // chenge the background color
            title.style.backgroundColor = "#E31C6E";
            title.style.color = "white"

            // show the ruby projects
            reactProjects.forEach(project => {
                project.style.display = "block";
            })
            // show react projects
            javascriptProjects.forEach(project => {
                project.style.display = "block";
            })
            //show
            rubyprojects.forEach(project => {
                project.style.display = "block";
            })


        }




    })
})
