document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("pontuationEasy").innerHTML = localStorage.getItem("pontuationEasy");
    document.getElementById("pontuationMedium").innerHTML = localStorage.getItem("pontuationMedium");
    document.getElementById("pontuationHard").innerHTML = localStorage.getItem("pontuationHard");
    document.getElementById("pontuationImpossible").innerHTML = localStorage.getItem("pontuationImpossible");
})