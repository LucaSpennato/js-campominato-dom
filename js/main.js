// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco
// (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// * Salvo il bottone in variabile
// ? lavorando sul click, allora tutto si svilupperà nel bottone, tranne le funzioni da richiamare
const playButton = document.getElementById('start_btn');

playButton.addEventListener('click', function () {  // TODO Lo useremo alla fine per avere tutto all'avvio del documento per ora!

    // Richiamo il wrapper per poter inserir le cose dentro successivamente in modo più comodo
    const gameWrapper = document.querySelector('.grid_wrapper');
    gameWrapper.innerHTML = '';


    let difficultySelector = document.getElementById('difficulty_selector');

    // ! Bonus SOTTO LE FUNZIONI!
    // * Creo un value selector su html con le varie difficoltà
    // * recupero il value attributo al selettore su js, come lo modifico?
    // ? assegno a difficulty selector il value assegnato
    // ? in base al value, cambio con un if i valori al for
    // ? creo delle nuove classi box da assegnare con le varie differenze

    difficultySelector = parseInt(difficultySelector.value);
    if (isNaN(difficultySelector)) {
        gameWrapper.innerHTML = '<div class="first_screen fs-1 text-light">Scegli prima una difficoltà!</div>';
    }

    let diffForIteration = difficultyIteration(difficultySelector);
    let diffClassChange = difficultyClassChange(difficultySelector);

    // * creo le 100 caselle dinamicamente su js:
    //  ? creo un for per stampare le 100 caselle

    let numbArray = [];
    console.log(numbArray);
    let bomb = [1, 27, 18, 20];
    console.log(bomb);

    for (let i = 0; i < diffForIteration; i++) {

        let gameGenerator = boxesGenerator(diffClassChange, 'borders');
        gameWrapper.append(gameGenerator);

        // innerHtmlOnClick(gameGenerator);
        
        let boxesValue = parseInt(i+1);
        gameGenerator.innerHTML = boxesValue;
        numbArray.push(boxesValue);
        
        activateBoxes(gameGenerator, bomb, boxesValue);
      
    }
})




// ? la modulazione delle 100 caselle la assegnerò ad una funzione richiamandola poi nel for
function boxesGenerator(classToAdd, classToAddTwo) {
    let box = document.createElement('div');
    box.classList.add(classToAdd, classToAddTwo);
    return box;
}

// * Devo far attivare le caselle al click e cambia colore al click
// ?  creo una classe 'attivo' su css (già creata)
// ? creo una funzione che mi permetta al click, di cambiare la classe su js 
function activateBoxes(elementPressed, listArray, elementToCompare) {

    elementPressed.addEventListener('click', function () {
        if (!(listArray.includes(elementToCompare))){
            elementPressed.classList.add('active');
            console.log('1')
        } else{
            elementPressed.classList.add('bomb');
        }
    })  

}

// function innerHtmlOnClick(element) {
//     // ? al click, mi darà anche il log con il numero della casella cliccata
//     let inner = element.innerHTML;
//     element.addEventListener('click', function () {
//         if(inner === numbArray)
//         console.log(inner);
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


  // gameGenerator.addEventListener('click', function () {
        //     if (!(bomb.includes(boxesValue))){
        //         gameGenerator.classList.add('active');
        //         console.log('1')
        //     } else{
        //         gameGenerator.classList.add('bomb');
        //     }
        // })    
