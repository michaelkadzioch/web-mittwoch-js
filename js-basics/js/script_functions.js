function output() {
    let zahl1;
    let zahl2;
    let ergebnis;

    zahl1 = 20;
    zahl2 = 4;

    // ergebnis = plusRechnen(zahl1, zahl2);

    ergebnis = dividierenMitFehlererkennung(zahl1, zahl2);

    document.getElementById('js-output').innerHTML = ergebnis;
}


function dividierenMitFehlererkennung(a, b) {
    // Wenn B = 0 dann FEhlermedlung ausgeben "Man kann nicht durch 0 teilen!"
    // ansonsten Rechnen
    let rechnung;

    // Wenn b ungleich 0 dann rechnen
    if (b != 0) {
        rechnung = a / b;
    } else {
        rechnung = "Man kann nicht durch 0 teilen!";
    }

    return rechnung;
}


function plusRechnen(a, b) {
    let summe;

    summe = a + b;

    return summe;
}