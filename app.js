let points = Number(localStorage.getItem("plekko_points")) || 0;
let energy = Number(localStorage.getItem("plekko_energy")) || 100;

const pointsText = document.getElementById("points");
const fish = document.getElementById("fish");
const fill = document.querySelector(".fill");

function updateGame(){
    pointsText.innerText = points;
    fill.style.width = energy + "%";

    localStorage.setItem("plekko_points", points);
    localStorage.setItem("plekko_energy", energy);
}

updateGame();

function play(){

    if(energy <= 0){
        alert("⚡ Energy is empty");
        return;
    }

    points += 1;
    energy -= 1;

    updateGame();

    fish.style.transform = "scale(1.1)";

    setTimeout(()=>{
        fish.style.transform = "scale(1)";
    },150);


    let bubble = document.createElement("div");
    bubble.innerHTML = "🫧";
    bubble.style.position = "absolute";
    bubble.style.left = "50%";
    bubble.style.top = "40%";
    bubble.style.fontSize = "35px";

    document.body.appendChild(bubble);

    setTimeout(()=>{
        bubble.remove();
    },1000);
}


// ماهی
fish.onclick = play;


// TAP
document.querySelector(".tap").onclick = play;


// شارژ انرژی هر 5 ثانیه
setInterval(()=>{

    if(energy < 100){
        energy += 1;
        updateGame();
    }

},5000);


// دکمه ها

let buttons = document.querySelectorAll(".menu button");

buttons[0].onclick = ()=>{
alert("🎯 Tasks\nOcean cleaning missions coming soon");
};

buttons[1].onclick = ()=>{
alert("👥 Invite\nInvite friends and earn points");
};

buttons[2].onclick = ()=>{
alert("🏆 Rank\nYour points: " + points);
};

buttons[3].onclick = ()=>{
alert("🎁 Gift\nDaily reward coming soon");
};

buttons[4].onclick = ()=>{
alert("🌊 Ocean\nOcean cleaning status");
};
