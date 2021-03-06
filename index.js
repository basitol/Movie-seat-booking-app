const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const movieSelect = document.querySelector("#movie");

// populateUI();

let ticketPrice = +movie.value;

// save selected movie data
const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedPriceIndex", moviePrice);
};

// Update total and count
const setCount = (e) => {
  const selectedSeat = document.querySelectorAll(".row .seat.selected");

  const seatIndex = [...selectedSeat].map((item) => {
    return [...seats].indexOf(item);
  });

  localStorage.setItem("selectedSeat", JSON.stringify(seatIndex));

  count.innerText = selectedSeat.length;
  total.innerText = ticketPrice * selectedSeat.length;
};

// populate Ui
const populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeat"));
  const movieSelected = JSON.parse(localStorage.getItem("selectedMovieIndex"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        console.log(seat);
        seat.classList.add("selected");
      }
    });
  }
  if (movieSelected !== null) {
    movieSelect.selectedIndex = movieSelected;
  }
  console.log(movieSelected);
};

// Update when movie is changed
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;

  setMovieData(e.target.selectedIndex, e.target.value);

  setCount();
});

// Select seats
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }

  setCount();
});

populateUI();
setCount();
