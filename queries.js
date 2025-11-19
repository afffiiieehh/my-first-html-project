const header = document.querySelector(".show");
const deviceWidth = window.matchMedia("(max-width: 670px)");

function checkWidth() {
  if (deviceWidth.matches) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
}

checkWidth(); // run once
deviceWidth.addEventListener("change", checkWidth); // run on resize
