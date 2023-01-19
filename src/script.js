/*Declaración de variables*/
let characters=[]

/*Clase creadora de personajes*/
class Characters{
    constructor(name, team, goodAt, photo, lives){
        this.name=name;
        this.team=team;
        this.goodAt=goodAt;
        this.photo=photo;
        this.lives=lives;
        this.attacks=[];
    }
}

/*Acá se crea a cada personaje*/
let messi=new Characters("Lionel Messi", "Paris Saint-Germain", "Ataque", "/src/assets/img/messi.png", 5);
let tchouameni=new Characters("Aurelien Tchouameni", "Real Madrid", "Velocidad", "/src/assets/img/tchouameni.png", 5);
let gvardiol=new Characters("Josko Gvardiol", "Red Bull Leipzig", "Defensa", "/src/assets/img/gvardiol.png", 5);
let cristiano=new Characters("Cristiano Ronaldo", "Al Nassr", "Ataque", "/src/assets/img/cristiano.png", 5);
let delacruz=new Characters("Nicolas De la Cruz", "River Plate", "Pases", "/src/assets/img/delacruz.png", 5);
let danialves=new Characters("Dani Alves", "Pumas UNAM", "Defensa", "/src/assets/img/danialves.png", 5);
characters.push(messi, cristiano, delacruz, gvardiol, danialves, tchouameni);

/*Agregar ataques de cada jugador*/
messi.attacks.push("Gambeta", "Disparo", "Encarar", "Pase", "Defender");
tchouameni.attacks.push("Velocidad", "Pase", "Corrida lateral", "Disparar", "Defender");
gvardiol.attacks.push("Defender", "Atajar", "Bloquear", "Pase", "Disparo");
cristiano.attacks.push("Disparo", "Festejo", "Tiro libre", "Defender", "Pase atras");
delacruz.attacks.push("Pase adelante", "Velocidad", "Gambeta", "Atajar", "Disparo");
danialves.attacks.push("Trabar", "Marcar", "Hacer falta", "Disparar", "Pase adelante");

/*Crear las cards de cada jugador*/
let cardContainer=document.getElementById("card_container");

function createCards(characters){
        characters.forEach(character => {
            cardContainer.innerHTML=`
            <article class="card">
            <div class="image_container" style="background-image: url(${character.photo})"></div>
            <div class="card_description">
                <h3 class="card_text">${character.name}</h3>
                <h3 class="card_subtext">${character.team}</h3>
                <h3 class="card_subtext">Bueno en: ${character.goodAt}</h3>
            </div>
        </article>
        `
        });
}

createCards(characters);
