document.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem("pontuationEasy") == null || 
        localStorage.getItem("pontuationEasy") == undefined){
        localStorage.setItem("pontuationEasy", 0);
    }
    if(localStorage.getItem("pontuationMedium") == null || 
        localStorage.getItem("pontuationMedium") == undefined){
        localStorage.setItem("pontuationMedium", 0);
    }
    if(localStorage.getItem("pontuationHard") == null || 
        localStorage.getItem("pontuationHard") == undefined){
        localStorage.setItem("pontuationHard", 0);
    }
    if(localStorage.getItem("pontuationImp") == null || 
        localStorage.getItem("pontuationImp") == undefined){
        localStorage.setItem("pontuationImp", 0);
    }

    if(localStorage.getItem("level") == null || 
    localStorage.getItem("level") == undefined){
    localStorage.setItem("level", "");
    }

});


function chooseMode() {
    const target1 = document.getElementById('easy');
    const target2 = document.getElementById('medium');
    const target3 = document.getElementById('hard');
    const target4 = document.getElementById('impossible');

    target1.addEventListener("targetFound", event => {
        window.location.href="/levelsInformation/escolherEasy.html"
    });
    target2.addEventListener("targetFound", event => {
        window.location.href="/levelsInformation/escolherMedium.html"
    });
    target3.addEventListener("targetFound", event => {
        window.location.href="/levelsInformation/escolherHard.html"
    });
    target4.addEventListener("targetFound", event => {
        window.location.href="/levelsInformation/escolherImpossible.html"
    });
}