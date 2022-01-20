while (true) {
  var audio = new Audio("music/yt1s.com - Alan Silvestri  Help Arrives From Avengers Infinity WarAudio Only.mp3");
audio.play();
var character =
document.getElementById("character");
var block = document.getElementById("block");
function jump(){
  if(character.classList != "animate"){

  character.classList.add("animate");
}
  setTimeout(function(){
    character.classList.remove("animate");
  },500);
}
var checkDead = setInterval(function(){
 var characterTop =parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var blockLeft =parseInt(window.getComputedStyle(block).getPropertyValue("left"));
if(blockLeft<40 && blockLeft>0 && characterTop>=300){
  block.style.animation = "none";
  block.style.display = "none";
  alert('you lose');
window.location = 'http://127.0.0.1:5500';
}
},10); 

$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [0];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 40);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});
}