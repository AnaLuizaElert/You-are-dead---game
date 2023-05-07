document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("pontuacaoEasy").value = localStorage.getItem("pontuacaoEasy");
    document.getElementById("pontuacaoMedium").value = localStorage.getItem("pontuacaoMedium");
    document.getElementById("pontuacaoHard").value = localStorage.getItem("pontuacaoHard");
    document.getElementById("pontuacaoImpossible").value = localStorage.getItem("pontuacaoImp");
})