const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');

button1.addEventListener('click', function() {
    document.getElementById('js-output').innerHTML = 'Hallo Welt!';
});

button1.addEventListener('dblclick', function() {
    document.getElementById('js-output').innerHTML = 'Guten Tag, Welt!';
});

button2.addEventListener('click', function() {
    document.getElementById('js-output').innerHTML = 'Ich bin ein Button!';
});


// function output() {
//     document.getElementById('js-output').innerHTML = 'Hallo Welt!';
// }