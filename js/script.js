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

    /* 
    creo un ciclo INDEFINITO per due motivi:
        1. perché la generazione dei numeri random potrebbe creare doppioni e non li voglio
        2. perché se crea doppioni devo stare nel ciclo finché non genera tutti numeri unici 
    */

    while (bomba.length < 16) {
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

            // aggiungo una variabile per rilevare il click specifico
            const squareNumber = parseInt(this.innerText)
            // se l'array, include il numero del quadrato...
            if (bomba.includes(squareNumber)) {
                console.log('è una bomba')
                // ...allora aggiungo la classe bomba
                this.classList.add('squareBomb')
            }
            // altrimenti cliked easy peasy
            else {
                console.log('non è una bomba')
            };
        });

    };

});

// funziona per generare un numero random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}