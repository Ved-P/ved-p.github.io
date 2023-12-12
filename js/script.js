window.addEventListener("keydown", (e) => {
  if (e.keyCode == 37 || e.keyCode == 38) {
    goUp();
  }
  else if (e.keyCode == 39 || e.keyCode == 40) {
    goDown();
  }
});

prevButtons = document.getElementsByClassName("prev");
nextButtons = document.getElementsByClassName("next");

for (i = 0; i < prevButtons.length; i++) {
  prevButtons[i].addEventListener("click", goUp);
}

for (i = 0; i < nextButtons.length; i++) {
  nextButtons[i].addEventListener("click", goDown);
}

cards = ["title", "description", "links"];
current = "title";

function goUp() {
  ind = cards.indexOf(current);
  if (ind > 0) {
    current = cards[ind - 1];
    window.location.hash = current;
  }
}

function goDown() {
  ind = cards.indexOf(current);
  if (ind < cards.length - 1) {
    current = cards[ind + 1];
    window.location.hash = current;
  }
}
