const button1 = document.getElementById('btn1');

let obst = [];

// array sortieren aufsteigend
// obst.sort();

// array sortieren absteigend (umdrehen)
// obst.reverse();

obst.push('himbeere');
obst.push('zitrone');
obst.push('apfel');

obst.sort();

button1.addEventListener('click', function() {
    document.getElementById('js-output').innerHTML = obst;
});