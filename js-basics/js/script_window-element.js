function output() {
    // Daten aus dem Browser sammeln
    let ausgabetext = '';

    ausgabetext += 'Die URL ist: ';
    ausgabetext += window.location.href;

    ausgabetext += '<br>Der Hostname ist: ';
    ausgabetext += window.location.hostname;

    ausgabetext += '<br>das Protokoll ist: ';
    ausgabetext += window.location.protocol;

    ausgabetext += '<br><br>';
    ausgabetext += window.location.pathname;

    document.getElementById('js-output').innerHTML = ausgabetext;
}


function output4() {
    // in der Browser-Historie zurückgeben
    window.history.back()
}


function output3() {
    let ausgabetext = '';

    ausgabetext = window.prompt('Gib einen Text ein:');

    document.getElementById('js-output').innerHTML = ausgabetext;
}


function output2() {
    let auswahl = true;
    let ausgabetext = '';

    while (auswahl == true) {
        ausgabetext += 'Hallo Welt!<br>';
        document.getElementById('js-output').innerHTML = ausgabetext;

        auswahl = window.confirm('Weitermachen?');
    }      
      
}

function output1() {
    // eine kleiner Scherz
    let auswahl = window.confirm('Deine Festplatte wird gelöscht!');

    if (auswahl == true) {
        document.getElementById('js-output').innerHTML = 'OK, Festplatte wird gelöscht!';
    } else {
        document.getElementById('js-output').innerHTML = 'HAHA! ICh lösche trotzdem!';
    }        
}