document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("pontuationEasy").innerHTML = localStorage.getItem("pontuacaoEasy");
    document.getElementById("pontuationMedium").innerHTML = localStorage.getItem("pontuacaoMedium");
    document.getElementById("pontuationHard").innerHTML = localStorage.getItem("pontuacaoHard");
    document.getElementById("pontuationImpossible").innerHTML = localStorage.getItem("pontuacaoImp");
})