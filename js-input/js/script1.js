const eingabe1 = document.getElementById('eingabefeld1');
const eingabe2 = document.getElementById('eingabefeld2');


eingabe1.addEventListener('change', function() {
    document.getElementById('js-output').innerHTML = Number(eingabe1.value) + Number(eingabe2.value);
});

eingabe2.addEventListener('change', function() {
    document.getElementById('js-output').innerHTML = Number(eingabe1.value) + Number(eingabe2.value);
});