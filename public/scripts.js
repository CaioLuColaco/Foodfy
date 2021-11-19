const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function(){
        const recipeIndex = card.getAttribute("index");
        window.location.href = `/recipes/${recipeIndex}`
    });
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