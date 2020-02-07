console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');

var categories = document.getElementById('categories');
categories.onclick = function(event) {
    window.location.href = "categories.html";
};

let albums = ['all-photos', 'recent-photos', 'favorites', 'trip-to-austria', 'selfies'];

albums.forEach(element => {
    var album = document.getElementById(element); 
    album.onclick = function(event) {
        window.location.href = "album.html"; 
    };
});

let photos = ['photo-1', 'photo-2', 'photo-3', 'photo-4', 'photo-5'];

photos.forEach(element => {
    var img = document.getElementById(element);
    img.onclick = function(event) {
        window.location.href = "image.html";
    }
});