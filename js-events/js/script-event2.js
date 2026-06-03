const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');

const btnTexte = ['Hallo Welt!', 'Das ist Button 2', 'Irgendwas', null];

button1.addEventListener('click', function() { textOutput(btnTexte[0], 'box1') });
button2.addEventListener('click', function() { textOutput(btnTexte[1], 'box2') });
button3.addEventListener('click', function() { textOutput(btnTexte[2], 'box1') });
button4.addEventListener('click', function() { textOutput(btnTexte[3]) });


function textOutput(text, cssClass = null) {
    if (text != null){
        text = '<div class="' + cssClass + '">' + text + '</div>';
    }

    document.getElementById('js-output').innerHTML = text;
}