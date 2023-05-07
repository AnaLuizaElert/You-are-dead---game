document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("pontuationEasy").value = localStorage.getItem("pontuacaoEasy");
    document.getElementById("pontuationMedium").value = localStorage.getItem("pontuacaoMedium");
    document.getElementById("pontuationHard").value = localStorage.getItem("pontuacaoHard");
    document.getElementById("pontuationImpossible").value = localStorage.getItem("pontuacaoImp");
})