var i = 0; // Start point
var images = [];
var time = 3000;
// Image List
images[0] = './images/1.jpg';
images[2] = './images/2.jpg';
images[3] = './images/3.jpg';
images[4] = './images/4.jpg';
images[5] = './images/5.jpg';
images[6] = './images/6.jpg';
images[7] = './images/7.jpg';

// Change Image
function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;