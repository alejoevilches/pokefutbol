/*Declaración de variables*/
let characters=[]
let playerButton
let playerSelection
let enemyPick
let enemySelection
let playerLives=5
let enemyLives=5

/* Declaración de constantes */
const cardContainer=document.getElementById("card_container");
const battleSection=document.getElementById("battle");

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
/*messi.attacks.push("Gambeta", "Disparo", "Encarar", "Pase", "Defender");*/
messi.attacks.push(
    {type:"ataque", name:"Gambeta"},
    {type:"ataque", name:"Disparo"},
    {type:"ataque", name:"Encarar"},
    {type:"mediocampo", name:"Pase"},
    {type:"defensa", name:"Defender"},
)

tchouameni.attacks.push(
    {type:"mediocampo", name:"Velocidad"},
    {type:"mediocampo", name:"Pase"},
    {type:"mediocampo", name:"Corrida lateral"},
    {type:"ataque", name:"Disparar"},
    {type:"defensa", name:"Defender"},
)

gvardiol.attacks.push(
    {type:"defensa", name:"Defender"},
    {type:"defensa", name:"Bloquear"},
    {type:"defensa", name:"Hacer falta"},
    {type:"mediocampo", name:"Pase"},
    {type:"ataque", name:"Disparo"},
)

cristiano.attacks.push(
    {type:"ataque", name:"Disparo"},
    {type:"ataque", name:"SIUUUU"},
    {type:"ataque", name:"Tiro libre"},
    {type:"defensa", name:"Defender"},
    {type:"mediocampo", name:"Pase atras"},
)

delacruz.attacks.push(
    {type:"mediocampo", name:"Pase adelante"},
    {type:"mediocampo", name:"Velocidad"},
    {type:"mediocampo", name:"Gambeta"},
    {type:"defensa", name:"Pegar patada"},
    {type:"ataque", name:"Disparo"},
)

danialves.attacks.push(
    {type:"defensa", name:"Trabar"},
    {type:"defensa", name:"Marcar"},
    {type:"defensa", name:"Hacer falta"},
    {type:"ataque", name:"Disparar"},
    {type:"mediocampo", name:"Pase adelante"},
)

/*Crear las cards de cada jugador*/
function createCards(){
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

createCards();

/* La función startGame contendrá todas las demas funciones que hacen que el juego se corra con normalidad. */
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
        playerButton=button.id;
        playerSelection=characters.find(item => item.id == playerButton);
        enemyPick=selectEnemyPlayer().id;
        enemySelection=characters.find(item => item.id == enemyPick);
        cardContainer.style.display="none";
        document.querySelector(".character_stage").style.display="none";
        showBattleSection();
    })
});


/*Elegir jugador del enemigo*/
function selectEnemyPlayer(){
    n=random(0,5);
    return characters[n];
}

/* Función que muestra en pantalla el stage de batalla */
function showBattleSection(){
    battleSection.style.display="flex"
    battleSection.innerHTML=`
    <div class="character_info">
    <img class="character_section_photo" src="${playerSelection.photo}" alt="">
    <h3 class="character_name">${playerSelection.name}</h3>
    <p class="character_lives">${playerLives}</p>
        <div class="character_buttons">
        </div>
    </div>
    <div class="character_info">
        <img class="character_section_photo" src="${enemySelection.photo}" alt="">
        <h3 class="character_name">${enemySelection.name}</h3>
        <p class="character_lives">${playerLives}</p>
    </div>
    `
}

