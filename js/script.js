const playBtn = document.getElementById('gioca');

playBtn.addEventListener('click', function () {

    const container = document.getElementById('squareContainer');

    const opzioniGioco = document.getElementById('opzioniGioco');
    console.log(opzioniGioco.value);

    let squaregrid = 100;

    if (opzioniGioco.value == 'Medium') {
        squaregrid = 81;
    }
    else if (opzioniGioco.value == 'Hard') {
        squaregrid = 49;
    };

    // creo le bombe
    const bomba = [];
    console.log('bombe', bomba);

    // aggiungo la costante per dichiarare quante sono le bombe
    const numeroBombe = 16

    /* 
    creo un ciclo INDEFINITO per due motivi:
        1. perché la generazione dei numeri random potrebbe creare doppioni e non li voglio
        2. perché se crea doppioni devo stare nel ciclo finché non genera tutti numeri unici 
    */

    while (bomba.length < numeroBombe) {
        // richiamo la funzione per generare i numeri, gli passo i parametri
        const randomNumber = getRandomNumber(1, squaregrid);

        // se l'array NON contiene il randomNumber... 
        if (bomba.includes(randomNumber) == false) {
            // ... allora ci pusho la bomba nell'array
            bomba.push(randomNumber);
        };
    };

    container.innerHTML = ''

    for (let i = 1; i <= squaregrid; i++) {

        const square = document.createElement('div');
        squareContainer.append(square);
        square.innerHTML = i;

        if (squaregrid == 100) {
            square.classList.add('facile');
        }
        else if (squaregrid == 81) {
            square.classList.add('medio');
        }
        else if (squaregrid == 49) {
            square.classList.add('difficile')
        };

        square.addEventListener('click', function () {
            this.classList.add('squareSelected')

            // aggiungo le variabili per i quadrati con bombe o senza
            const squareWithBomba = document.querySelectorAll('.squareBomb');
            const squareWOBomba = document.querySelectorAll('.squareSelected');

            // se i quadrati con le bombe sono 0, E, i quadrati senza bombe sono < del click - le bombe
            if (squareWithBomba.length == 0
                &&
                squareWOBomba.length < squaregrid - numeroBombe) {
                // allora gioca

                // aggiungo una variabile per rilevare il click specifico
                const squareNumber = parseInt(this.innerText)

                // se l'array, include il numero del quadrato...
                if (bomba.includes(squareNumber)) {
                    console.log('è una bomba');

                    // ...allora aggiungo la classe bomba
                    this.classList.add('squareBomb');

                    //aggiungo il messaggio per concludere il gioco
                    alert('BLOOM! Hai perso, il tuo punteggio è: ' + squareWOBomba.length);
                }
                // altrimenti cliked easy peasy
                else {
                    console.log('non è una bomba')

                    // se tutte le celle senza bomba sono state cliccate
                    if ((squareWOBomba.length + 1) == squaregrid - numeroBombe) {

                        // aggiungo il messaggio per comunicare la vincita
                        alert('Hai vinto, il tuo punteggio è: ' + (squareWOBomba.length + 1));
                    }
                };
            }
            // altrimenti il gioco è concluso
            else {
                alert('il gioco è concluso')
            };

        });

    };

});

// funziona per generare un numero random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};