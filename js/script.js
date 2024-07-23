/*

per creare elemento html
    1. document.createELement --> questo consente di poterci cliccare sopra in modo più facile
    2. stringa con innerHTML
*/

// dichiaro il bottone per far partire il gioco
const playBtn = document.getElementById('gioca');

// ascolto il click sul bottone
playBtn.addEventListener('click', function () {
    console.log('Ho cliccato');

    // dichiaro il container
    const container = document.getElementById('squareContainer')

    //aggiungere le opzioni del gioco
    const opzioniGioco = document.getElementById('opzioniGioco')
    // controllo che il valore di opzioni gioco sia corretto
    console.log(opzioniGioco.value)

    // aggiungo variabile per cambiare il numero di celle in base alla difficoltà
    // quella di base è 100
    let squaregrid = 100;

    if (opzioniGioco.value == 'Medium') {
        squaregrid = 81;
    }
    else if (opzioniGioco.value == 'Hard') {
        squaregrid = 49;
    };

    // per far sì che ogni volta che clicco, non mi si duplichino i quadrati, devo svuotare il container
    container.innerHTML = ''

    // genero un ciclo che mi scriva 100 elementi al clicl
    for (let i = 1; i <= squaregrid; i++) {
        console.log(i);

        // creo l'elemento in html
        const square = document.createElement('div');
        // metto il testo dentro il quadrato
        square.innerHTML = i;
        // metto il quadrato dentro il suo container
        squareContainer.append(square);

        if (squaregrid == 100) {
            square.classList.add('facile');
        }
        else if (squaregrid == 81) {
            square.classList.add('medio');
        }
        else if (squaregrid == 49) {
            square.classList.add('difficile')
        };

        //ascolto il click
        square.addEventListener('click', function () {

            // aggiungo la classe del quadrato selezionato
            this.classList.add('squareSelected')
            console.log(this.innerHTML);
        });

    };

});