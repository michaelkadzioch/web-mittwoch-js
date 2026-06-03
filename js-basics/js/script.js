function output() {
    
    let buttons = ['Home', 'About', 'Hilfe', 'Contact', 'Services', 'Blog'];
    let ausgabe = '';

    for (let i = 0; i < buttons.length; i++) {
        ausgabe += '<div class="btn">';
        ausgabe += buttons[i];
        ausgabe += '</div>';
    }

    document.getElementById('js-output').innerHTML =  ausgabe;
}


function output1() {
    // Arbeiten mit Arrays
    // let ausgabe;
    // ausgabe = dummyRechung();
    // document.getElementById('js-output').innerHTML = 'Ergebnis: ' + ausgabe[0] + '<br>Rest: ' + ausgabe[1];

    let cars = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Toyota', 'Honda', 'Nissan', 'Volkswagen'];

    let ausgabe = '';

    ausgabe += 'In meiner Garage stehen diese Fahrzeuge:<br>';

    // für jedes Element in der Liste eine Ausgabe machen
    for (let i = 0; i < cars.length; i++) {
        ausgabe += cars[i] + '<br>';
    }

    ausgabe += 'Anzahl Fahrzeuge: ';
    ausgabe += cars.length + '<br>';

    document.getElementById('js-output').innerHTML =  ausgabe;
}


function dummyRechung() {
    // hier wird irgendwas gerechnet

    let ergebnis = 7;
    let rest = 3;

    let liste = [ergebnis, rest];

    return liste;
}