var submit = document.getElementsByTagName("form")[0];
const gif = document.getElementById("gif");
var audio = new Audio("./assets/audio.mp3");

const start = () => {
  gif.style.display = "block";
  audio.play();
  setTimeout(() => {
    gif.innerHTML = '<img src="./assets/gif2.gif" alt="gif" />';
  }, 18400);
};
