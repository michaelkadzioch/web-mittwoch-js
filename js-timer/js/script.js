let zahl = 0;

setInterval(output, 3000);

function output() {
    document.getElementById('js-output').innerHTML = zahl;
    zahl += 1;
}