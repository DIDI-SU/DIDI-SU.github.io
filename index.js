const section = document.querySelector("#green").classList;
const welcome = document.querySelector(".welcome").classList;
const keyword = document.querySelectorAll(".keyword");
const happy = document.querySelector("#happy").classList;

function handleClick(e) {
  console.log("hi");
  welcome.toggle("hidden");
  if (e.target.href.includes("green")) {
    section.toggle("hidden");
  } else happy.toggle("hidden");
}
keyword.forEach((item) => item.addEventListener("click", handleClick));
