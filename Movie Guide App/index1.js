let result = document.getElementById("result");
let input = document.getElementById("input");
let search = document.getElementById("Search");
let rating = document.getElementById("rating");
let rated = document.getElementById("rated");
let year = document.getElementById("year");
let runtime = document.getElementById("runtime");
let genre = document.getElementById("Genre");
let poster = document.getElementById("poster");
let plot = document.getElementById("plot");
let cast = document.getElementById("cast");
let container2 = document.getElementById("container2");
let Search1 = document.getElementById("Search1");

function Style() {
  search.addEventListener("click", () => {
    container2.style.visibility = "visible";
    search.style.position = "absolute";
    search.style.left = "420px";
    search.style.top = "-167px";
    search.style.backgrounColor = "#e3a524";
    search.style.padding = "10px 10px";
    search.style.width = "110px";
    search.style.zIndex = "1";
    search.style.border = "solid 1px black";
    search.style.cursor = "pointer";
    search.style.borderRadius = "5px";

    input.style.position = "absolute";
    input.style.left = "30px";
    input.style.top = "-170px";
    input.style.backgrounColor = "#1e293b";
    input.style.padding = "10px 10px";
    input.style.width = "350px";
    input.style.height = "30px";
    input.style.zIndex = "1";
    input.style.border = "1px solid white";
    input.style.color = "white";
    input.style.borderRadius = "5px";
  });
}
function GetApi(movieName) {
  fetch(`http://www.omdbapi.com/?apikey=f11d15a9&t=${movieName}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.Response === "False") {
        // Movie not found
        result.textContent = "Error: Movie not found";
        container2.style.visibility = "hidden";
      } else {
        // If the movie is found, update the UI with movie details
        UpdateUI(data);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      result.textContent = "Error: Unable to fetch data"; // Update UI with error message
    });
}

function Append() {
  search.addEventListener("click", () => {
    let movieName = input.value.trim(); // Trim whitespace

    if (!movieName) {
      container2.style.visibility = "hidden";

      result.textContent = "Error: Movie name is empty";
      // Handle empty input
      return; // Stop further execution if movie name is empty
    }

    GetApi(movieName);
    Style();
  });
}

function UpdateUI(data) {
  // Here, implement logic to update your UI with movie details
  // For example:
  result.textContent = ""; // Clear previous results
  rating.textContent = ` ${data.imdbRating}`;
  rated.textContent = ` ${data.Rated}`;
  year.textContent = ` ${data.Year}`;
  runtime.textContent = ` ${data.Runtime}`;
  genre.textContent = ` ${data.Genre}`;
  poster.src = data.Poster; // Update poster image
  plot.textContent = `${data.Plot}`;
  cast.textContent = ` ${data.Actors}`;
}

// Initialize
Append();
