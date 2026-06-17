const eingabe1 = document.getElementById('eingabefeld1');
const eingabe2 = document.getElementById('eingabefeld2');

const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');
const button5 = document.getElementById('btn5');


button1.addEventListener('click', function() {
    document.getElementById('js-output').innerHTML = Number(eingabe1.value) + Number(eingabe2.value);
});

button2.addEventListener('click', function() {
    document.getElementById('js-output').innerHTML = Number(eingabe1.value) - Number(eingabe2.value);
});

button3.addEventListener('click', function() {
    document.getElementById('js-output').innerHTML = Number(eingabe1.value) * Number(eingabe2.value);
});

button4.addEventListener('click', function() {
    document.getElementById('js-output').innerHTML = Number(eingabe1.value) / Number(eingabe2.value);
});

