function output(wert_von_aussen) {
    let ausgabetext;

    ausgabetext = 'Hallo ';
    ausgabetext += wert_von_aussen;

    document.getElementById('js-output').innerHTML = ausgabetext;
}

function output3() {
    let text1;
    let text2;
    let ausgabetext;

    text1 = 'Hallo';
    text2 = 'Welt!';

    // Verketten der Strings
    ausgabetext = text1 + ' ' + text2;

    document.getElementById('js-output').innerHTML = ausgabetext;
}

function output2() {
    let zahl1;
    let zahl2;
    let ergebnis;

    zahl1 = 10;
    zahl2 = 5;

    // Erst wird gerechnet, dann wird zugewiesen
    ergebnis = zahl1 + zahl2; 

    // Erst wird gerechnet, dann wird zugewiesen
    // ergebnis = ergebnis + 3; 
    
    // Kurzere Syntax in JS
    ergebnis += 3;

    document.getElementById('js-output').innerHTML = ergebnis;
}


function output1() {
    // Variable wird definiert
    let ausgabetext;

    // Variable initalisieren
    ausgabetext = 'Hallo Welt!';

    // Variable überschreiben
    ausgabetext = 'Ich bin ein neuer Text!';

    document.getElementById('js-output').innerHTML = ausgabetext;
}