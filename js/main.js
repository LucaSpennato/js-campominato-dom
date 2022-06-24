// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco
// (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

const playButton = document.getElementById('start_btn');

playButton.addEventListener('click', function () { 

    // Richiamo il wrapper per poter inserir le cose dentro successivamente in modo più comodo
    const gameWrapper = document.querySelector('.grid_wrapper');
    gameWrapper.innerHTML = '';

    let difficultySelector = document.getElementById('difficulty_selector');

    difficultySelector = parseInt(difficultySelector.value);
    if (isNaN(difficultySelector)) {
        gameWrapper.innerHTML = '<div class="first_screen fs-1 text-light">Scegli prima una difficoltà!</div>';
    }

    let diffForIteration = difficultyIteration(difficultySelector);
    let diffClassChange = difficultyClassChange(difficultySelector);

    let numbArray = [];
    console.log(numbArray);
    let bomb = [];
    console.log(bomb);

    // numero delle bombe, richiamiamo il numero per il numero di iterazioni che vogliamo
        // ? lo pushamo nell'array bombe
    for (let index = 0; index < 16; index++) {

        let randomNumberForArray =  uniqueRandNum(bomb, 1, diffForIteration);
        bomb.push(randomNumberForArray);
        
    }

    let sum = 1;
    for (let i = 0; i < diffForIteration; i++) {

        let gameGenerator = boxesGenerator(diffClassChange, 'borders');
        gameWrapper.append(gameGenerator);
        
        let boxesValue = parseInt(i+1);

        numbArray.push(boxesValue);
   
        // activateBoxes(gameGenerator, bomb, boxesValue);

        gameGenerator.addEventListener('click', function () {

            let gameStopper = document.createElement('div');
            document.querySelector('body').append(gameStopper);

            if (!(bomb.includes(boxesValue))){
                gameGenerator.classList.add('active'); 
                sum = sum + 1;
                console.log(sum);
                if(sum === (diffForIteration - 16)){
                    gameStopper.classList.add('game_stopper');
                    gameStopper.innerHTML = 'Hai vinto!';
                }
                    
            } else{
                gameGenerator.classList.add('bomb');
                
                
                gameStopper.classList.add('game_stopper');
                gameStopper.innerHTML = 'Hai perso!';
                playButton.addEventListener('click', function(){
                    gameStopper.remove('div');
                })
                
            }
        })  

        

        // commenta questa singola linea se vuoi far sparire i numeri
        gameGenerator.innerHTML = boxesValue;

    }


})

function boxesGenerator(classToAdd, classToAddTwo) {
    let box = document.createElement('div');
    box.classList.add(classToAdd, classToAddTwo);
    return box;
}

// * Devo far attivare le caselle al click e cambia colore al click
// ?  creo una classe 'attivo' su css (già creata)
// ? creo una funzione che mi permetta al click, di cambiare la classe su js 
// function activateBoxes(elementPressed, listArray, elementToCompare) {

    

    
//     elementPressed.addEventListener('click', function () {
//         if (!(listArray.includes(elementToCompare))){
//             elementPressed.classList.add('active');
//             let sum = 1;
//                 sum = sum + sum;
//                 console.log(sum);
//         } else{
//             elementPressed.classList.add('bomb');
//             let gameStopper = document.createElement('div');
//             document.querySelector('body').append(gameStopper);
//             gameStopper.classList.add('game_stopper');
//             gameStopper.innerHTML = 'Hai perso!';
            
//         }
//     })  

// }

// ! Bonus
function difficultyIteration(valueSelected) {
    parseInt(valueSelected);
    if (valueSelected === 1) {
        return 100;
    } else if (valueSelected === 2) {
        return 81;
    } else if (valueSelected === 3) {
        return 49;
    } else {
        return 0;
    }
}
function difficultyClassChange(valueSelected) {
    parseInt(valueSelected);
    if (valueSelected === 1) {
        return 'box_easy';
    } else if (valueSelected === 2) {
        return 'box_medium';
    } else if (valueSelected === 3) {
        return 'box_difficult';
    } else {
        return 0;
    }
}

// *Giorno 2, creazione di numero randomico unico 
function uniqueRandNum(arrayList, min, max){

    let randomNum;
    let isNumValid = false;

    while (isNumValid === false){
        randomNum = (Math.floor(Math.random() * max ) + min);

        if (!arrayList.includes(randomNum)) {
            isNumValid = true;
        }
    }
    return randomNum;
}