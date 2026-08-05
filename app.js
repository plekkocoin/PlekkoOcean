let points = Number(localStorage.getItem("plekko_points")) || 0;
let energy = Number(localStorage.getItem("plekko_energy")) || 100;

const pointsText = document.getElementById("points");
const fish = document.getElementById("fish");
const fill = document.querySelector(".fill");

pointsText.innerText = points;

function updateEnergy(){
  fill.style.width = energy + "%";
  localStorage.setItem("plekko_energy", energy);
}

updateEnergy();

function addPoint(){

  if(energy <= 0){
    alert("⚡ Energy empty!");
    return;
  }

  points += 1;
  energy -= 1;

  pointsText.innerText = points;

  localStorage.setItem("plekko_points", points);

  updateEnergy();


  fish.style.transform = "scale(1.1)";

  setTimeout(()=>{
    fish.style.transform = "scale(1)";
  },150);


  const bubble = document.createElement("div");
  bubble.innerHTML="🫧";
  bubble.style.position="absolute";
  bubble.style.left="50%";
  bubble.style.top="45%";
  bubble.style.fontSize="35px";

  document.body.appendChild(bubble);

  setTimeout(()=>{
    bubble.remove();
  },800);
}


// ضربه روی ماهی
fish.onclick = addPoint;


// دکمه TAP
document.querySelector(".tap").onclick = addPoint;


// شارژ انرژی
setInterval(()=>{

 if(energy < 100){
   energy += 1;
   updateEnergy();
 }

},1000);


// منوها

const buttons=document.querySelectorAll(".menu button");


buttons[0].onclick=()=>{
 alert("🎯 Tasks\nClean ocean missions coming soon!");
};


buttons[1].onclick=()=>{
 alert("👥 Invite\nShare Plekko with friends!");
};


buttons[2].onclick=()=>{
 alert("🏆 Rank\nYour points: "+points);
};


buttons[3].onclick=()=>{
 alert("🎁 Daily Gift coming soon!");
};


buttons[4].onclick=()=>{
 alert("🌊 Ocean status\nKeep cleaning the ocean!");
};
