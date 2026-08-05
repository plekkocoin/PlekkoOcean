const fish = document.getElementById("fish");

let points = Number(localStorage.getItem("plekko_points")) || 0;

const pointsText = document.getElementById("points");

pointsText.innerText = points;


// امتیاز با زدن روی ماهی
fish.onclick = () => {

  points += 1;

  pointsText.innerText = points;

  localStorage.setItem("plekko_points", points);

  fish.style.transform = "scale(1.1)";

  setTimeout(() => {
    fish.style.transform = "scale(1)";
  },150);


  // حباب
  const bubble = document.createElement("div");
  bubble.innerHTML = "🫧";
  bubble.style.position = "absolute";
  bubble.style.fontSize = "35px";
  bubble.style.left = "50%";
  bubble.style.top = "45%";

  document.body.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  },1000);

};


// دکمه TAP هم فعال بماند
document.querySelector(".tap").onclick = () => {

  points += 1;

  pointsText.innerText = points;

  localStorage.setItem("plekko_points", points);

};


// منوها

const buttons = document.querySelectorAll(".menu button");

buttons[0].onclick = () => alert("🎯 Tasks: Coming soon");
buttons[1].onclick = () => alert("👥 Invite: Coming soon");
buttons[2].onclick = () => alert("🏆 Rank: Coming soon");
buttons[3].onclick = () => alert("🎁 Gift: Coming soon");
buttons[4].onclick = () => alert("🌊 Ocean: Coming soon");
