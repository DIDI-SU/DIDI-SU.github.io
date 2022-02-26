const section = document.querySelector("#green");
const welcome = document.querySelector(".maincCon");
const happy = document.querySelector("#happy");
const modal = document.querySelector(".modal");
const keyword = document.querySelectorAll(".keyword");

function handelClick(e) {
  if (e.target.href.includes("#green")) {
    welcome.classList.add("hidden");
    modal.style.zIndex = "1000";
    modal.classList.remove("hidden");
    section.classList.toggle("hidden");
  } else if (e.target.href.includes("#happy")) {
    welcome.classList.add("hidden");
    modal.style.zIndex = "1000";
    modal.classList.remove("hidden");
    happy.classList.toggle("hidden");
  }
}

keyword.forEach((item) => item.addEventListener("click", handelClick));
