const section = document.querySelector("#green");
const welcome = document.querySelector(".maincCon");
const happyK = document.querySelector(".happyK");
const happy = document.querySelector("#happy");
const gK = document.querySelector(".greenK");
const modal = document.querySelector(".modal");

function handelClick(e) {
  welcome.classList.add("hidden");
  modal.style.zIndex = "1000";
  modal.classList.remove("hidden");
  if (section.id === "green") {
    section.classList.toggle("hidden");
  }
}

function handelClick2(e) {
  welcome.classList.add("hidden");
  modal.style.zIndex = "1000";
  modal.classList.remove("hidden");
  if (happy.id === "happy") {
    happy.classList.toggle("hidden");
  }
}

gK.addEventListener("click", handelClick);
happyK.addEventListener("click", handelClick2);
