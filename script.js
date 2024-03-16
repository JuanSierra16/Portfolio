//Text animation
var typed = new Typed(".multiple-text", {
    strings: ["Web Developer", "Full Stack Jr.", "Student"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

//Toggle icon navbar
let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//Contact form
const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });
    if(response.ok){
        alert('Thanks for contacting me');
    }
}