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
  alert("you lose");
}
},10); 
const startBtn = document.querySelector(".startBtn");
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
startBtn.onclick = () => {
  startBtn.style.display = "none";
  const interval = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch (level) {
      case 1:
        bgImg1.draw();
        checkScore(200, () => (level = 2));
        break;
      case 2:
        bgImg2.draw();
        checkScore(400, () => {
          clearInterval(interval);
          startBtn.style.display = "block";
          score = 0;
          level = 1;
        });
        break;
    }
  }, 20);
};
