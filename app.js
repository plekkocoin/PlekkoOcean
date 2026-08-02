const fish = document.createElement("img");

fish.id = "fish";
fish.src = "plekko.png";
fish.style.width = "250px";
fish.style.maxWidth = "80%";
fish.style.display = "block";
fish.style.margin = "0 auto";
fish.style.userSelect = "none";
fish.draggable = false;

document.getElementById("fish3d").appendChild(fish);


// امتیاز
let points = 0;
const pointsText = document.getElementById("points");


// دکمه TAP
document.querySelector(".tap").onclick = () => {
  points += 1;
  pointsText.innerText = points;
};


// منوها
const buttons = document.querySelectorAll(".menu button");

buttons[0].onclick = () => {
  alert("🎯 Tasks: Coming soon");
};

buttons[1].onclick = () => {
  alert("👥 Invite: Coming soon");
};

buttons[2].onclick = () => {
  alert("🏆 Rank: Coming soon");
};

buttons[3].onclick = () => {
  alert("🎁 Gift: Coming soon");
};

buttons[4].onclick = () => {
  alert("🌊 Ocean: Coming soon");
};
