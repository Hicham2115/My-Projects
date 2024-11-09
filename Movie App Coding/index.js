let card = document.getElementById("card");
let img = document.getElementById("img");
let MovieName = document.getElementById("Movie-Name");
let date = document.getElementById("date");
let buttonSee = document.getElementById("button-See");
let input = document.getElementById("input");
let buttonsearch = document.getElementById("buttonsearch");
const apiKey = "e0c2c2b05b237b06164181434a282895";
const imageUrlBase = "https://image.tmdb.org/t/p/w500";
let MoviesId = [];

async function fetchMovieData() {
  try {
    // Fetch the data from the TMDb API
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1e/popular?api_key=${apiKey}&language=en-US&page=1e`
    );

    // Parse the JSON response
    let data = await response.json();

    // Log the whole data
    console.log(data);
  } catch (error) {
    console.error("Error fetching data from TMDb API:", error);
  }
}

async function Append() {
  window.onload = async () => {
    const movies = await fetchMovieData();

    for (let i = 0; i < 10; i++) {
      let randomMovie;
      let randomIndex;

      // Keep generating random movies until we find one that hasn't been selected yet
      do {
        randomIndex = Math.floor(Math.random() * movies.length);
        randomMovie = movies[randomIndex];
      } while (selectedMovieIds.includes(randomMovie.id));

      // Mark the movie as selected by adding its ID to the list
      selectedMovieIds.push(randomMovie.id);

      const { title, poster_path, release_date } = randomMovie;
      let posterUrl = `${imageUrlBase}${poster_path}`;
      let releaseDate = release_date || "Unknown";

      if (title && posterUrl) {
        // Create a div to hold the movie details
        const div = document.createElement("div");
        div.className = "card"; // Use class for styling

        // Create and set up the image element
        const img = document.createElement("img");
        img.className = "img";
        img.src = posterUrl;

        // Create and set up the title element
        const h4Title = document.createElement("h4");
        h4Title.className = "movie-name";
        h4Title.textContent = title;

        // Create and set up the release date element
        const moviename1 = document.createElement("h4");
        moviename1.className = "date";
        moviename1.textContent = `Release Date: ${releaseDate}`;

        // Create and set up the button element
        const buttonSee = document.createElement("button");
        buttonSee.className = "button-see";
        buttonSee.textContent = "See More";

        // Append elements to the div
        div.appendChild(img);
        div.appendChild(h4Title);
        div.appendChild(moviename1);
        div.appendChild(buttonSee);

        // Append the movie container to the body
        document.body.appendChild(div);
      }
    }
  };
}

// function Discover() {
//   fetch(
//     `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=2`
//   ).then((response) => {
//     return response.json().then((data) => {
//       console.log(data);
//     });
//   });
// }
// Discover();

Append();
