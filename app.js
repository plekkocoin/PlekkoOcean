let points = Number(localStorage.getItem("plekko_points")) || 0;
let energy = Number(localStorage.getItem("plekko_energy")) || 100;
const maxEnergy = 100;

const pointsText = document.getElementById("points");
const fish = document.getElementById("fish");
const fill = document.querySelector(".fill");

function save(){
 localStorage.setItem("plekko_points", points);
 localStorage.setItem("plekko_energy", energy);
}

function update(){
 pointsText.innerText = points;
 if(fill){
   fill.style.width = energy + "%";
 }
 save();
}

update();
fill.style.width = energy + "%";
function hit(){
energy = Math.max(0, energy - 1);
 if(energy <= 0){
   alert("⚡ Energy is empty");
   return;
 }

 points++;
 energy--;

 update();

 fish.style.transform="scale(1.1)";
 setTimeout(()=>{
  fish.style.transform="scale(1)";
 },150);


 let bubble=document.createElement("div");
 bubble.innerHTML="🫧";
 bubble.style.position="absolute";
 bubble.style.left="50%";
 bubble.style.top="40%";
 bubble.style.fontSize="30px";

 document.body.appendChild(bubble);

 setTimeout(()=>{
  bubble.remove();
 },800);
}


fish.onclick=hit;

document.querySelector(".tap").onclick=hit;


// شارژ انرژی
setInterval(()=>{
 if(energy<100){
  energy++;
  update();
 }
},3000);


// دکمه ها

document.querySelectorAll(".menu button")[0].onclick=()=>{
 alert("🎯 Tasks\nClean the ocean and earn points");
};

document.querySelectorAll(".menu button")[1].onclick=()=>{
 alert("👥 Invite\nInvite friends and earn rewards");
};

document.querySelectorAll(".menu button")[2].onclick=()=>{
 alert("🏆 Rank\nYour points: "+points);
};

document.querySelectorAll(".menu button")[3].onclick=()=>{
 alert("🎁 Gift\nDaily reward coming soon");
};

document.querySelectorAll(".menu button")[4].onclick=()=>{
 alert("🌊 Ocean\nHelp clean the ocean");
};
