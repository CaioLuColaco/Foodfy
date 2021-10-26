const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function(){
        const imgId = card.getAttribute("id")
        const title = card.getElementsByTagName('h1')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `/bootcamp-launchbase-desafios-02-master/layouts/assets/${imgId}.png`
        modalOverlay.querySelector('h1') = title
    })
}
/* precisando ajeitar o preenchimento dos titulos do modal */
document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})