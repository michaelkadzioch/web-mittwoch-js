setTimeout(output1, 7000);
setTimeout(output2, 3000);


function output1() {
    let outputText = 'Hallo Welt!';
    document.getElementById('js-output1').innerHTML = outputText;
}


function output2() {
    let outputText = 'Das ist JavaScript!';
    document.getElementById('js-output2').innerHTML = outputText;
}