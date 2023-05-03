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
        if(i == 0 || i == 8){
            x = 12;
            y = 0;
        }else if(i == 1 || i == 9){
            x = 2;
            y = 23;
        } else if(i == 2 || i == 10){
            x = 22;
            y = 35;
        } else if(i == 3 || i == 11){
            x = 32;
            y = 7;
        } else if(i == 4 || i == 12){
            x = 15;
            y = 25;
        } else if(i == 5 || i == 13){
            x = 24;
            y = 3;
        }else if(i == 6 || i == 14){
            x = 25;
            y = 20;
        } else if(i == 7 || i == 15){
            x = 6;
            y = 30;
        }

        if(i > 7 && i < 16){
            z = -15;
        }

        if(i >= 0 && i < 8){
            z = 15;
        }

        // paredes dos lados
        if(i == 16 || i == 23){
            z = 2;
            y = 40;
        } else if(i == 17 || i == 24){
            z = 6;
            y = 20;
        } else if(i == 18 || i == 25){
            z = 20;
            y = 12;
        } else if(i == 19 || i == 26){
            z = 15;
            y = 0;
        } else if(i == 20 || i == 27){
            z = 0;
            y = 0;
        } else if(i == 21 || i == 28){
            z = 3;
            y = 10;
        } else if(i == 22 || i == 29){
            z = 1;
            y = 30;
        } else if(i == 30 || i == 31){
            z = 15;
            y = 0;
        }

        //direito
        if(i > 15 && i < 23 || i == 30){
            x = 20;
        }

        //esquerdo
        if(i > 22 && i < 30 || i == 31){
            x = -20;
        }

        if(i > 15 && i < 23 || i == 30){
            character[i].setAttribute('rotation', {x:90, y:270, z:0})
        }
        if(i > 22 && i < 30 || i == 31){
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
            window.location.href="/venceu.html";
        } 
        document.getElementById("qtyEnemies").innerHTML = localStorage.getItem("enemyQty") + "/10 inimigos";
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