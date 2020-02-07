console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');

var categories = document.getElementById("categories"); 
categories.addEventListener('click', function(event) {
    window.location.href = "categories.html";
}, false); 