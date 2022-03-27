const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const movieSelect = document.querySelector("#movie");

let ticketPrice = +movie.value;

const setCount = (e) => {
  const selectedSeat = document.querySelectorAll(".row .seat.selected");
  count.innerText = selectedSeat.length;
  total.innerText = ticketPrice * selectedSeat.length;
};

movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;

  setCount();
});

//
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }

  setCount();
});
