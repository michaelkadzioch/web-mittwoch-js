const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const image = document.getElementById('slideshow-image');

const imageDir = 'images/';
const imageList = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg', 'foto5.jpg', 'foto6.jpg'];

let position = 0;


button1.addEventListener('click', function() { 
    changeImageForward();
    slideshowInfo(); 
});

button2.addEventListener('click', function() { 
    changeImageBackward();
    slideshowInfo(); 
});


function slideshowInfo() {
    let imageNumber = position + 1;
    document.getElementById('slideshow-info').innerHTML = 'Bild ' + imageNumber + ' von ' + imageList.length;
}


function changeImageForward() {
    image.src = imageDir + imageList[position];
    position += 1;

    // wenn position ausserhalb der liste, dann position auf 0 setzen
    if (position >= imageList.length)
    {
        position = 0;
    }
};


function changeImageBackward() {
    image.src = imageDir + imageList[position];
    position -= 1;

    // wenn position ausserhalb der liste, dann position auf Ende der liste setzen
    if (position < 0)
    {
        position = imageList.length - 1;
    }
};