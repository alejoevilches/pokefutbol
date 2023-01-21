/*Declaración de variables*/
let characters=[]
let playerSelection
let enemySelection
let cardContainer=document.getElementById("card_container");

/*Clase creadora de personajes*/
class Characters{
    constructor(name, id, team, goodAt, photo, lives){
        this.name=name;
        this.id=id
        this.team=team;
        this.goodAt=goodAt;
        this.photo=photo;
        this.lives=lives;
        this.attacks=[];
    }
}

/*Funcióna para crear numeros aleatorios*/
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/*Acá se crea a cada personaje*/
let messi=new Characters("Lionel Messi", "messi", "Paris Saint-Germain", "Ataque", "/src/assets/img/messi.png", 5);
let tchouameni=new Characters("Aurelien Tchouameni", "tchouameni", "Real Madrid", "Velocidad", "/src/assets/img/tchouameni.png", 5);
let gvardiol=new Characters("Josko Gvardiol", "gvardiol", "Red Bull Leipzig", "Marcaje", "/src/assets/img/gvardiol.png", 5);
let cristiano=new Characters("Cristiano Ronaldo", "cristiano", "Al Nassr", "Disparos", "/src/assets/img/cristiano.png", 5);
let delacruz=new Characters("Nicolas De la Cruz", "delacruz", "River Plate", "Pases", "/src/assets/img/delacruz.png", 5);
let danialves=new Characters("Dani Alves", "danialves", "Pumas UNAM", "Defensa", "/src/assets/img/danialves.png", 5);
characters.push(messi, cristiano, delacruz, gvardiol, danialves, tchouameni);

/*Agregar ataques de cada jugador*/
messi.attacks.push("Gambeta", "Disparo", "Encarar", "Pase", "Defender");
tchouameni.attacks.push("Velocidad", "Pase", "Corrida lateral", "Disparar", "Defender");
gvardiol.attacks.push("Defender", "Atajar", "Bloquear", "Pase", "Disparo");
cristiano.attacks.push("Disparo", "Festejo", "Tiro libre", "Defender", "Pase atras");
delacruz.attacks.push("Pase adelante", "Velocidad", "Gambeta", "Atajar", "Disparo");
danialves.attacks.push("Trabar", "Marcar", "Hacer falta", "Disparar", "Pase adelante");

/*Crear las cards de cada jugador*/
function createCards(characters){
        characters.forEach(character => {
            cardContainer.innerHTML+=`
            <a href="#" class="card" id="${character.id}" style="text-decoration:none"><article>
            <div class="image_container" id="${character.id}" style="background-image: url(${character.photo})"></div>
            <div class="card_description">
                <h3 class="card_text">${character.name}</h3>
                <h3 class="card_subtext">${character.team}</h3>
                <h3 class="card_subtext">Bueno en: ${character.goodAt}</h3>
            </div>
        </article></a>
        `
        });
}
createCards(characters);

/*Ya creados los botones, los guardo en variables*/
let messiButton=document.getElementById("messi");
let cristianoButton=document.getElementById("cristiano");
let delacruzButton=document.getElementById("delacruz");
let gvardiolButton=document.getElementById("gvardiol");
let danialvesButton=document.getElementById("danialves");
let tchouameniButton=document.getElementById("tchouameni");
let buttons=[messiButton, cristianoButton, delacruzButton, gvardiolButton, danialvesButton, tchouameniButton]

/*Determinar a que jugador hice click*/
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        playerSelection=button.id;
        enemySelection=selectEnemyPlayer();
        console.log(playerSelection);
        console.log(enemySelection.name);
        cardContainer.style.display="none";
        document.querySelector(".character_stage").style.display="none";
    })
});

/*Elegir jugador del enemigo*/
function selectEnemyPlayer(){
    n=random(0,5);
    return characters[n];
}