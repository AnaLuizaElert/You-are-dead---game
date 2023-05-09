const friend = document.querySelectorAll(".friend");
const enemy = document.querySelectorAll(".enemy");
let timer = parseInt(document.getElementById("timer").innerHTML);
let aux = timer;

document.addEventListener("DOMContentLoaded", function() {

    localStorage.setItem("level", "hard");

    let interval = setInterval(() => {
        aux --;
        document.getElementById("timer").innerHTML = aux;
        if(aux == 0){
            clearInterval(interval);
            window.location.href="/perdeu.html";
        }
    }, 1000)

    
    let character = Array.from(document.querySelectorAll(".clickable"));
  
    // character.sort(() => Math.random() - 0.5);

    if(localStorage.getItem("enemyQty") == null || 
    localStorage.getItem("enemyQty") == undefined){
        localStorage.setItem("enemyQty", 0);
    }
    
    if(localStorage.getItem("friendQty") == null || 
    localStorage.getItem("friendQty") == undefined){
        localStorage.setItem("friendQty", 0);
    }

    let x = 0;
    let y = 0;
    let z = 15;

    for (let i = 0; i < character.length; i++) {
        // parede da frente e de trás
        if(i == 0 || i == 10){
            x = 12;
            y = 0;
        }else if(i == 1 || i == 11){
            x = 2;
            y = 23;
        } else if(i == 2 || i == 12){
            x = 22;
            y = 35;
        } else if(i == 3 || i == 13){
            x = 32;
            y = 3;
        } else if(i == 4 || i == 14){
            x = 15;
            y = 25;
        } else if(i == 5 || i == 15){
            x = 24;
            y = 3;
        }else if(i == 6 || i == 16){
            x = 25;
            y = 20;
        } else if(i == 7 || i == 17){
            x = 6;
            y = 30;
        } else if(i == 8 || i == 18){
            x = 2;
            y = 40;
        } else if(i == 9 || i == 19){
            x = 30;
            y = 15;
        }

        if(i > 9 && i < 20){
            z = -15;
        }

        if(i >= 0 && i < 10){
            z = 15;
        }

        // paredes dos lados
        if(i == 20 || i == 30){
            z = 0;
            y = 0;
        } else if(i == 21 || i == 31){
            z = 3;
            y = 10;
        } else if(i == 22 || i == 32){
            z = 1;
            y = 28;
        } else if(i == 23 || i == 33){
            z = 20;
            y = 10;
        } else if(i == 24 || i == 34){
            z = 10;
            y = 34;
        } else if(i == 25 || i == 35){
            z = 5;
            y = 14;
        } else if(i == 26 || i == 36){
            z = 32;
            y = 13;
        } else if(i == 27 || i == 37){
            z = 26;
            y = 25;
        } else if(i == 28 || i == 38){
            z = 16;
            y = 21;
        } else if(i == 29 || i == 39){
            z = 10;
            y = 23;
        }

        if(i > 19 && i < 30){
            x = 20;
        }

        if(i > 29 && i < 40){
            x = -20;
        }

        if(i > 19 && i < 30){
            character[i].setAttribute('rotation', {x:90, y:270, z:0})
        }
        if(i > 29 && i < 40){
            character[i].setAttribute('rotation', {x:90, y:90, z:0})
        }

        character[i].setAttribute('position', {x:x, y:y, z:z})

    }
});

enemy.forEach((enemyElement) => {
    enemyElement.addEventListener('click', () => {
        let addValue = (parseInt(localStorage.getItem("enemyQty")) + 1);
        localStorage.setItem("enemyQty", addValue);
        if(parseInt(localStorage.getItem("enemyQty")) == 10){
            let points = 300;
            points = points - localStorage.getItem("qtyFriends") * 10;
            points = points - (30 - aux);
            localStorage.setItem("pontuationHard", points);
            window.location.replace("/venceu.html");
        } 
        document.getElementById("qtyEnemies").innerHTML = localStorage.getItem("enemyQty") + "/10 inimigos";
        enemyElement.remove();
    });
  });

  let processingClick = false;
  
  friend.forEach((friendElement) => {
    friendElement.addEventListener('click', () => {
        if (!processingClick) {
            processingClick = true;
            let addValue = (parseInt(localStorage.getItem("friendQty")) + 1);
            localStorage.setItem("friendQty", addValue);

            if(document.getElementById("heart3").style.visibility == ""){
                document.getElementById("heart3").style.visibility = "hidden";

            } else if(document.getElementById("heart2").style.visibility == ""){
                document.getElementById("heart2").style.visibility = "hidden";

            } else {
                document.getElementById("heart1").style.visibility = "hidden";
            }

            if(parseInt(localStorage.getItem("friendQty")) >= 3){
                window.location.replace("/perdeu.html");
            } 
            processingClick = false;
        }
    });
});