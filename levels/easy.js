const friend = document.querySelectorAll(".friend");
const enemy = document.querySelectorAll(".enemy");
let timer = parseInt(document.getElementById("timer").innerHTML);
let aux = timer;

document.addEventListener("DOMContentLoaded", function() {

    let interval = setInterval(() => {
        aux --;
        document.getElementById("timer").innerHTML = aux;
        if(aux == 0){
            clearInterval(interval);
            window.location.href="/perdeu.html";
        }
    }, 1000)

    
    let character = Array.from(document.querySelectorAll(".clickable"));
    console.log(character.length)
    console.log(friend.length)
    console.log(enemy.length)
  
    // character.sort(() => Math.random() - 0.5);
    /*Tirarrrr*/
    localStorage.clear();

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
        if(i == 0 || i == 5){
            x = 0;
            y = 0;
        }else if(i == 1 || i == 6){
            x = 2;
            y = 20;
        } else if(i == 2 || i == 7){
            x = 20;
            y = 30;
        } else if(i == 3 || i == 8){
            x = 5;
            y = 7;
        } else if(i == 4 || i == 9){
            x = 15;
            y = 25;
        }

        if(i > 4 && i < 10){
            z = -15;
        }

        if(i >= 0 && i < 5){
            z = 15;
        }

        // paredes dos lados
        if(i == 10 || i == 15){
            z = 14;
            y = 0;
        }else if(i == 11 || i == 16){
            z = 10;
            y = 20;
        } else if(i == 12 || i == 17){
            z = 6;
            y = 30;
        } else if(i == 13 || i == 18){
            z = 2;
            y = 40;
        } else if(i == 14 || i == 19){
            z = 3;
            y = 10;
        }

        if(i > 9 && i < 15){
            x = 20;
        }

        if(i > 14 && i < 20){
            x = -20;
        }

        if(i > 9 && i < 15){
            character[i].setAttribute('rotation', {x:90, y:270, z:0})
        }
        if(i > 14 && i < 20){
            character[i].setAttribute('rotation', {x:90, y:90, z:0})
        }

        character[i].setAttribute('position', {x:x, y:y, z:z})

    }    
});

enemy.forEach((enemyElement) => {
    enemyElement.addEventListener('click', () => {
        let addValue = (parseInt(localStorage.getItem("enemyQty")) + 1);
        localStorage.setItem("enemyQty", addValue);
        if(parseInt(localStorage.getItem("enemyQty")) == 7){
            window.location.href="/venceu.html";
        } 
        document.getElementById("qtyEnemies").innerHTML = localStorage.getItem("enemyQty") + "/7 inimigos";
        enemyElement.setAttribute('visible', false);
    });
  });
  
  friend.forEach((friendElement) => {
    friendElement.addEventListener('click', () => {
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
        window.location.href="/perdeu.html";
      } 
    });
});