let result = document.getElementById("result");
let input = document.getElementById("input");
let searchButton = document.getElementById("Search");
let movieData;
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

function fetchMovieData(userInput) {
  // Fetch the movie data based on the user input
  return fetch(`http://www.omdbapi.com/?apikey=f11d15a9&t=${userInput}`)
    .then((response) => response.json())
    .then((data) => {
      movieData = data;
      console.log(movieData);
      return movieData;
    })
    .catch((error) => {
      console.error("Error fetching movie data:", error);
    });
}

function Result() {
  // Add the event listener for the first search button
  searchButton.addEventListener("click", () => {
    let userInput = input.value.trim(); // Get the value from the input field
    if (userInput) {
      // Only fetch movie data if the user has entered a value
      fetchMovieData(userInput).then(() => {
        if (
          movieData &&
          movieData.Title &&
          userInput.toLowerCase() === movieData.Title.toLowerCase()
        ) {
          result.textContent = movieData.Title;
          genre.textContent = movieData.Genre;
          rating.textContent = movieData.imdbRating;
          year.textContent = movieData.Year;
          runtime.textContent = movieData.Runtime;
          poster.src = movieData.Poster; // Use .src to show the movie poster
          plot.textContent = movieData.Plot;
          cast.textContent = movieData.Actors;
          rated.textContent = movieData.Rated;

          container2.style.visibility = "visible"; // Make the container visible after data is loaded
        } else {
          result.textContent = "Movie not found.";
        }
      });
    } else {
      result.textContent = "Please enter a movie title.";
    }
  });
}





function fetchMovieData1(userInput1) {
  // Fetch the movie data based on the user input
  return fetch(`http://www.omdbapi.com/?apikey=f11d15a9&t=${userInput1}`)
    .then((response) => response.json())
    .then((data) => {
      movieData = data;
      console.log(movieData);
      return movieData;
    })
    .catch((error) => {
      console.error("Error fetching movie data:", error);
    });
}





function Result1() {
  // Add the event listener for the second search button
  Search1.addEventListener("click", () => {
    let userInput1 = input.value.trim(); // Get the value from the input field
    if (userInput1) {
      // Only fetch movie data if the user has entered a value
      fetchMovieData(userInput1).then(() => {
        if (
          movieData &&
          movieData.Title &&
          userInput1.toLowerCase() === movieData.Title.toLowerCase()
        ) {
          result.textContent = movieData.Title;
          genre.textContent = movieData.Genre;
          rating.textContent = movieData.imdbRating;
          year.textContent = movieData.Year;
          runtime.textContent = movieData.Runtime;
          poster.src = movieData.Poster; // Use .src to show the movie poster
          plot.textContent = movieData.Plot;
          cast.textContent = movieData.Actors;
          rated.textContent = movieData.Rated;

          container2.style.visibility = "visible"; // Make the container visible after data is loaded
        } else {
          result.textContent = "Movie not found.";
        }
      });
    } else {
      result.textContent = "Please enter a movie title.";
    }
  });
}

Result(); // Call the first search handler
Result1(); // Call the second search handler
