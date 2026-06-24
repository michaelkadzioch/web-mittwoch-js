const button1 = document.getElementById('btn1');
const eingabe = document.getElementById('input-item');

let koffer = [];

button1.addEventListener('click', function() {
    kofferPacken();
    anzahlImKoffer();
    inhaltImKoffer();
});


function kofferPacken() {
    // nur einpacken, wenn Feld nicht leer ist
    if (eingabe.value != '') {
        koffer.push(eingabe.value);
        koffer.sort();
    }

    // Eingabefeld leeren
    eingabe.value = '';
}


function anzahlImKoffer() {
    if (koffer.length == 0) {
        document.getElementById('js-output-anzahl').innerHTML = 'Der Koffer ist leer.';
    } 
    else if (koffer.length == 1) {
        document.getElementById('js-output-anzahl').innerHTML = 'Im Koffer ist nur ein Gegenstand.';
    }
    else {
        document.getElementById('js-output-anzahl').innerHTML = 'Im Koffer sind ' + koffer.length + ' Gegenstände.';
    }
}


function inhaltImKoffer() {
    let outtext = '';

    if (koffer.length >= 1) {
        outtext += '<ul>';

        koffer.forEach((gegenstand) => {
            outtext += '<li>' + gegenstand + '</li>';
        });

        outtext += '</ul>';
    }

    document.getElementById('js-output-inhalt').innerHTML = outtext;
}