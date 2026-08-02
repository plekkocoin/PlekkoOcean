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

const buttons = document.querySelectorAll(".menu button");

buttons[0].onclick = () => alert("Tasks");
buttons[1].onclick = () => alert("Invite");
buttons[2].onclick = () => alert("Rank");
buttons[3].onclick = () => alert("Gift");
buttons[4].onclick = () => alert("Ocean");

document.querySelector(".tap").onclick = () => {
  alert("Tap feature coming soon!");
};
