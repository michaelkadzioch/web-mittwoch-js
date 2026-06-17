const button1 = document.getElementById('btn1');

let koffer = [];

koffer.push('himbeere');
koffer.push('himbeere');
koffer.push('himbeere');


button1.addEventListener('click', function() {
    kofferPacken();
    anzahlImKoffer();
    inhaltImKoffer();
});


function kofferPacken() {
    // hier eingabefeld in kofferarrray puschen
}


function anzahlImKoffer() {
    document.getElementById('js-output-anzahl').innerHTML = 'Im Koffer sind ' + koffer.length + ' Gegenstände.';
}


function inhaltImKoffer() {
    document.getElementById('js-output-inhalt').innerHTML = koffer;
}