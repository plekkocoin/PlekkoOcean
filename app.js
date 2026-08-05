const fish = document.createElement("img");

fish.id = "fish";
fish.src = "plekko.png";
fish.style.width = "250px";
fish.style.maxWidth = "80%";
fish.style.display = "block";
fish.style.margin = "0 auto";
fish.style.userSelect = "none";
fish.draggable = false;

// امتیاز
let points = localStorage.getItem("plekko_points") || 0;
const pointsText = document.getElementById("points");


// امتیاز
let points = localStorage.getItem("plekko_points") || 0;
const pointsText = document.getElementById("points");

pointsText.innerText = points;


// دکمه TAP
document.querySelector(".tap").onclick = () => {
// کلیک روی ماهی
document.getElementById("fish").onclick = () => {
  points += 1;
  pointsText.innerText = points;

  localStorage.setItem("plekko_points", points);

  fish.style.transform = "scale(1.1)";

  setTimeout(() => {
    fish.style.transform = "scale(1)";
  }, 150);
};
  points += 1;
pointsText.innerText = points;

localStorage.setItem("plekko_points", points);


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
