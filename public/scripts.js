const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function(){
        const imgId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `/${imgId}.png`

        modalOverlay.querySelector("h1").innerHTML = card.querySelector("h2").textContent
        modalOverlay.querySelector("h2").innerHTML = card.querySelector("h3").textContent
    })
}



$(function() {
    $('.main-btn').click(function(e) {
        if($(e.target).text() == "Mostrar"){
            $(e.target).parents().siblings('.box_topics').slideDown();
            $(e.target).text("Esconder");
        }else{
            $(e.target).parents().siblings('.box_topics').slideUp();
            $(e.target).text("Mostrar");
        }
    });
});