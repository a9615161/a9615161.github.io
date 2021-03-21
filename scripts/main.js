//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
//const fs = require('fs');
//var files = fs.readdirSync('../pics/');

/*console.log("\nCurrent directory filenames:"); 
filenames.forEach(file => { 
  console.log(file); 
});*/ 
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var num_of_meme = 290
meme_showed_id = getRandomInt(num_of_meme) + 1
var meme_showed_name = "memes_"+ meme_showed_id + ".jpg";
var meme_img = document.getElementById("RNGmeme");   // Get the element with id="demo"
meme_img.src = ("pics/"+meme_showed_name) ;
var btn =document.getElementsByClassName("change_pic")
btn[0].addEventListener("click", function(e) {
    console.log('clicked!')
    meme_showed_id = getRandomInt(num_of_meme) + 1
    var meme_showed_name = "memes_"+ meme_showed_id + ".jpg";
    var meme_img = document.getElementById("RNGmeme");   // Get the element with id="demo"
    meme_img.src = ("pics/"+meme_showed_name) ;
});
btn[1].addEventListener("click", function(e) {
    console.log('clicked!')
    meme_showed_id = getRandomInt(num_of_meme) + 1
    var meme_showed_name = "memes_"+ meme_showed_id + ".jpg";
    var meme_img = document.getElementById("RNGmeme");   // Get the element with id="demo"
    meme_img.src = ("pics/"+meme_showed_name) ;
});





