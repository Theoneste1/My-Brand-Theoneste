// javascript for humburger icon

const menuIcons = document.querySelector('.menuIcon');
const menubar = document.querySelector('header ul')

menubar.addEventListener('click', () => {

})

menuIcons.addEventListener('click', () => {

    menubar.classList.toggle('myClass')

});

let socialMedia = document.getElementsByClassName("fa");
socialMedia=Array.from(socialMedia)
socialMedia.forEach(media => {
    media.addEventListener('click', () => {
        if (media.className === "fa fa-facebook") {
            window.location.href = "https://web.facebook.com/theoneste.nsanzabarinda.3";
        }
        if (media.className === "fa fa-twitter") {
            window.location.href = "https://twitter.com/theoneste99";
        }
        if (media.className === "fa fa-google") {
            window.location.href = "https://www.google.com/search?q=Theoneste+Nsanzabarinda&rlz=1C1CHBF_enRW867RW867&oq=Theoneste+Nsanzabarinda&aqs=chrome..69i57j69i60l3.8658j0j7&sourceid=chrome&ie=UTF-8";
        }
        if (media.className === "fa fa-linkedin") {
            window.location.href = "https://www.linkedin.com/in/theoneste-nsanzabarinda-458540157/";
        }
        if (media.className === "fa fa-youtube") {
            window.location.href = "https://www.youtube.com/results?search_query=Theoneste+Nsanzabarinda";
        }
        if (media.className === "fa fa-instagram") {
            window.location.href = "https://www.instagram.com/theonestensanzabarinda/";
        }
        if (media.className === "fa fa-skype") {
            window.location.href = "https://web.facebook.com/theoneste.nsanzabarinda.3";
        }
    })
});
