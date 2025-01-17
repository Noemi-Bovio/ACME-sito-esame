//freccina top
function scrollToTop() {
           window.scrollTo(0, 0);
        }
function showCookie() {
      let cookie = document.querySelector('#cookie');
      cookie.style = "display:block;";
    }

//cookie
function hideCookie() {
      let cookie = document.querySelector('#cookie');
      cookie.style = "display:none;";
    }

//feedback
const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    } else if(
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.innerHTML
    }

})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-parachute-box" style="font-size:50px"></i>
        <strong>Risposta in volo!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>Grazie per il feedback, ci sarà utile<br>per migliorare la pagina.</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}
