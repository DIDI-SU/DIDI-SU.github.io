const section = document.querySelector("#green");
const welcome = document.querySelector(".welcome");
const happyK = document.querySelector(".happyK");
const happy = document.querySelector("#happy");
const gK = document.querySelector(".greenK");

function handelClick(e) {
  section.classList.remove("hidden");
  welcome.classList.add("hidden");
  section.classList.add("overlay");
}

function handelClick2(e) {
  happy.classList.remove("hidden");
  welcome.classList.add("hidden");
  happy.classList.add("overlay");
}
console.log(section.classList.contains("overlay"));

gK.addEventListener("click", handelClick);
happyK.addEventListener("click", handelClick2);
