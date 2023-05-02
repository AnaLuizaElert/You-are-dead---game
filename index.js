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