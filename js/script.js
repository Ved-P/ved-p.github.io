cards = ["title", "description", "links"];
current = "title";

function go_up() {
  ind = cards.indexOf(current);
  if (ind > 0) {
    current = cards[ind - 1];
    window.location.hash = current;
  }
}

function go_down() {
  ind = cards.indexOf(current);
  if (ind < cards.length - 1) {
    current = cards[ind + 1];
    window.location.hash = current;
  }
}

prevButtons = document.getElementsByClassName("prev");
nextButtons = document.getElementsByClassName("next");

for (i = 0; i < prevButtons.length; i++) {
  prevButtons[i].addEventListener("click", go_up);
}

for (i = 0; i < nextButtons.length; i++) {
  nextButtons[i].addEventListener("click", go_down);
}
