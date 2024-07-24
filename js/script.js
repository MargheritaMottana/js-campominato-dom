const playBtn = document.getElementById('gioca');

playBtn.addEventListener('click', function () {

    const container = document.getElementById('squareContainer')

    const opzioniGioco = document.getElementById('opzioniGioco')
    console.log(opzioniGioco.value)

    let squaregrid = 100;

    if (opzioniGioco.value == 'Medium') {
        squaregrid = 81;
    }
    else if (opzioniGioco.value == 'Hard') {
        squaregrid = 49;
    };

    // creo le bombe
    const bomba = []
    // creo un ciclo per generare le 16 bombe
    for (let i = 0; i <= 16; i++) {

        // richiamo la funzione per generare i numeri, gli passo i parametri
        const randomNumber = getRandomNumber(1, squaregrid);
        console.log('randomNumber', randomNumber, typeof randomNumber);

        // metto la bomba dentro l'array
        bomba.push(randomNumber);

    };

    container.innerHTML = ''

    for (let i = 1; i <= squaregrid; i++) {

        const square = document.createElement('div');
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

        square.addEventListener('click', function () {
            this.classList.add('squareSelected')
        });

    };

});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}