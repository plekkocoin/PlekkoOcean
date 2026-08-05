let points = Number(localStorage.getItem("plekko_points")) || 0;
let energy = Number(localStorage.getItem("plekko_energy")) || 100;

const pointsText = document.getElementById("points");
const fish = document.getElementById("fish");
const fill = document.querySelector(".fill");

function save(){
 localStorage.setItem("plekko_points", points);
 localStorage.setItem("plekko_energy", energy);
}

function update(){
 pointsText.innerText = points;
 fill.style.width = energy + "%";
 save();
}

update();

function hit(){

 if(energy <= 0){
  alert("⚡ Energy empty");
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
 bubble.style.fontSize="35px";
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
},5000);


// دکمه ها

let buttons=document.querySelectorAll(".menu button");

buttons[0].onclick=()=>{
 alert("🎯 Tasks\nDaily ocean missions coming soon!");
};

buttons[1].onclick=()=>{
 let link="https://t.me/PlekkoCommunityBot?start=invite";
 window.open("https://t.me/share/url?url="+encodeURIComponent(link));
};

buttons[2].onclick=()=>{
 alert("🏆 Rank\nYour points: "+points);
};

buttons[3].onclick=()=>{
 alert("🎁 Gift\nDaily reward system coming soon!");
};

buttons[4].onclick=()=>{
 alert("🌊 Ocean\nThank you for helping clean the ocean!");
};
