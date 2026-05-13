function output() {
    // Fibonacci-Folge
    let ausgabetext = '';
    zahl1 = 1;
    zahl2 = 1;
    ende = 1000;
    ergebnis = 0;

    while (ergebnis <= ende) {
        ergebnis = zahl1 + zahl2;
        zahl1 = zahl2;
        zahl2 = ergebnis;
        ausgabetext += 'Ergebnis ist: ' + ergebnis + '<br>';
    } 

    document.getElementById('js-output').innerHTML = ausgabetext;
}



function output5() {
    let ausgabetext = '';
    anfang = 5;
    ende = 117;

    ergebnis = anfang;
    while (ergebnis <= ende) {
        ausgabetext += 'Ergebnis ist: ' + ergebnis + '<br>';
        ergebnis = ergebnis * 3;

        if (ergebnis < anfang) {
            break; // Notbremse
        }
    } 

    document.getElementById('js-output').innerHTML = ausgabetext;
}


function output4() {
    let ausgabetext = '';

    // for-Schleife wiederholt eine Code innerhalb der { }
    for (let counter = 0; counter < 10; counter++) {
        ausgabetext += 'Hallo Welt! ' + counter + '<br>';

        if(counter < 0){
            break; // Notbremse
        }
    }

    document.getElementById('js-output').innerHTML = ausgabetext;
}



function output3() {
    const zahl1 = 50;
    const zahl2 = 50;

    // Checken, ob zahl1 und zahl2 gleich sind
    // Anwort ist IMMER 1 oder 0, ja oder nein, wahr oder falsch   
    // wenn ja dann if
    // 1. Frage / Bedingung
    if (zahl1 > zahl2) {
        document.getElementById('js-output').innerHTML = 'zahl 1 ist größer';
    }

    // 2. Frage / Bedingung (wichtig == als Vergleich)
    else if (zahl1 == zahl2) {
        document.getElementById('js-output').innerHTML = 'zahl 1 und zahl 2 sind gleich';
    }

    // sonst else
    else {    
        document.getElementById('js-output').innerHTML = 'zahl 2 ist größer';
    }
}



function output2() {
    const zahl1 = 30;
    const zahl2 = 45;

    // Checken, ob zahl1 und zahl2 gleich sind
    // Anwort ist IMMER 1 oder 0, ja oder nein, wahr oder falsch
    // wenn ja dann if
    if(zahl1 > zahl2) {
        document.getElementById('js-output').innerHTML = zahl1;
    }

    // sonst else
    else {
        document.getElementById('js-output').innerHTML = zahl2;
    }
}


function output1() {
    // das ist eine Konstante
    const ausgabetext = 'Hallo Welt!';

    document.getElementById('js-output').innerHTML = ausgabetext;
}
