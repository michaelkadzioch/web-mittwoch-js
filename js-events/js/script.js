const button1 = document.getElementById('btn1');

button1.addEventListener('click', function() {
    document.getElementById('js-output').innerHTML = 'Hallo Welt!';
});

button1.addEventListener('dblclick', function() {
    document.getElementById('js-output').innerHTML = 'Guten Tag, Welt!';
});

// function output() {
//     document.getElementById('js-output').innerHTML = 'Hallo Welt!';
// }