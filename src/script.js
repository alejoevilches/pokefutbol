/*Declaración de variables*/
let characters=[]
let playerButton
let playerSelection
let playerAttackSelection
let enemyPick
let enemySelection
let enemyAttackSelection
let playerWins=0
let enemyWins=0
let playsCount=0
let buttonsSection;
let messagesSection;
let attackButtons;
let battleResult;
let finalResult;

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

/*Ya creados los botones, los guardo en variables*/
let messiButton=document.getElementById("messi");
let cristianoButton=document.getElementById("cristiano");
let delacruzButton=document.getElementById("delacruz");
let gvardiolButton=document.getElementById("gvardiol");
let danialvesButton=document.getElementById("danialves");
let tchouameniButton=document.getElementById("tchouameni");
let buttons=[messiButton, cristianoButton, delacruzButton, gvardiolButton, danialvesButton, tchouameniButton]

/*Determinar a que jugador hice click, despues de eso haga desaparecer la stage de elegir jugador y que muestre la stage de batallas*/
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        playerButton=button.id;
        playerSelection=characters.find(item => item.id == playerButton);
        enemyPick=selectEnemyPlayer().id;
        enemySelection=characters.find(item => item.id == enemyPick);
        cardContainer.style.display="none";
        document.querySelector(".character_stage").style.display="none";
        showBattleSection();
        selectPlayerAttack();
    })
});


/*Elegir jugador del enemigo*/
function selectEnemyPlayer(){
    n=random(0,5);
    return characters[n];
}

/* Función que crea y muestra en pantalla en pantalla el stage de batalla */
function showBattleSection(){
    battleSection.style.display="flex"
    battleSection.innerHTML=`
    <div class="character_info">
    <img class="character_section_photo" src="${playerSelection.photo}" alt="">
    <h3 class="character_name">${playerSelection.name}</h3>
    <p class="character_lives"><span id="player_wins">${playerWins}</span></p>
        <div id="buttons" class="character_buttons">
        </div>
    </div>
    <div class="messages_section">
        <div id="messages">
        </div>
        <div id="final_message">
        </div>
        <button id="restart" class="attack_button" onclick="location.reload()">Reiniciar juego</button>
    </div>
    <div class="character_info">
        <img class="character_section_photo" src="${enemySelection.photo}" alt="">
        <h3 class="character_name">${enemySelection.name}</h3>
        <p class="character_lives"><span id="enemy_wins">${playerWins}</span></p>
    </div>
    <div class="messages_section_responsive">
        <div id="messages_responsive">
        </div>
        <div id="final_message_responsive">
        </div>
        <button id="restart" class="attack_button" onclick="location.reload()">Reiniciar juego</button>
    </div>
    `;
    for(i=0;i<playerSelection.attacks.length;i++){
        buttonsSection=document.getElementById("buttons");
        let button=`<button id="${playerSelection.attacks[i].type}" class="attack_button">${playerSelection.attacks[i].name}</button>`
        buttonsSection.innerHTML+=button;
    }
    };

/* Función para detectar que ataque se seleccionó */
function selectPlayerAttack(){
    attackButtons=document.querySelectorAll(".attack_button");
    attackButtons.forEach(button => {
        button.addEventListener("click", (e)=>{
            playerAttackSelection=e.target.innerText;
            playerAttackSelectionId=e.target.id;
            button.disabled="true"
            button.style.background="#6e6e6e"
            selectEnemyAttack();
            showMessages();
        })
    });
}
/* Función para que el oponente elija un ataque */
function selectEnemyAttack(){
    enemyAttackSelection=enemySelection.attacks[random(0,enemySelection.attacks.length-1)];
    enemyAttackSelectionId=enemyAttackSelection.type
    enemySelection.attacks.splice(enemySelection.attacks.indexOf(enemyAttackSelection),1);
}

function showMessages(){
    messagesSection=document.getElementById("messages");
    messagesSection.innerHTML=`
    <p>Elegiste atacar con <span id="playerAttackSelection">${playerAttackSelection}</span> y tu oponente atacó con <span id="enemyAttackSelection">${enemyAttackSelection.name}</span>. El resultado es ${battles()}
    `;
    whoWins();
}

function whoWins(){
    let finalMessageSection=document.getElementById("final_message")
    if (playsCount==5){
        document.getElementById("restart").style.display="block";
        finalMessageSection.style.display="flex";
        if (playerWins==enemyWins){
            finalResult="EMPATE"
        } else if (playerWins > enemyWins){
            finalResult="GANASTE :)"
        } else {
            finalResult="PERDISTE :("
        }
    }
    finalMessageSection.innerText=finalResult;
}

function battles(){
    playerWinsSpan=document.getElementById("player_wins");
    enemyWinsSpan=document.getElementById("enemy_wins");
        if (playerAttackSelectionId===enemyAttackSelectionId){
            playsCount++
            return "Empate";
        } else if (playerAttackSelectionId=="ataque" && enemyAttackSelectionId=="defensa") {
            playsCount++
            playerWins++
            playerWinsSpan.innerText=playerWins
            return "Ganaste!"
        } else if (playerAttackSelectionId=="mediocampo" && enemyAttackSelectionId=="ataque"){
            playsCount++
            playerWins++
            playerWinsSpan.innerText=playerWins
            return "Ganaste!"
        } else if (playerAttackSelectionId=="defensa" && enemyAttackSelectionId=="mediocampo"){
            playsCount++
            playerWins++
            playerWinsSpan.innerText=playerWins
            return "Ganaste!"
        } else {
            playsCount++
            enemyWins++;
            enemyWinsSpan.innerText=enemyWins;
            return "Perdiste"
        } 
}