// import functions

// reference needed DOM elements
const catImage = document.getElementById('cat-image') ;
console.log(catImage);
// set event listeners
const catAudio = document.getElementById('cat-audio') ;
console.log(catAudio);
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
catImage.addEventListener('click', () => {
    catAudio.play();
});