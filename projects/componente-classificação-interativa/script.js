document.addEventListener("DOMContentLoaded", function () {
var buttons = document.querySelectorAll(".botoes button");

    // Função para trocar o fundo quando o botão é selecionado
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {

        buttons.forEach(function (btn) {
            btn.classList.remove("clicked");
        });

        button.classList.add("clicked");
        });
    });

    // Variáveis e condição para pegar o valor botão selecionado
    var rateElement = document.querySelector(".rate");
    var selectedRating = sessionStorage.getItem("selectedRating");

    if (selectedRating && rateElement) {
        rateElement.textContent = selectedRating;
    }
});

function storeRating(rating) {
    sessionStorage.setItem("selectedRating", rating);
}