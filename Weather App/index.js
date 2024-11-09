let search = document.getElementById("search");
let container = document.getElementById("container");
let img = document.getElementById("img");
let degree = document.getElementById("degree");
let weather1 = document.getElementById("weather1");
let Humidity = document.getElementById("Humidity");
let Visibility = document.getElementById("Visibility");
let input = document.getElementById("input");

// Fetch weather data from the API
function GetApi() {
  let city = input.value.trim(); // Get the value from the input field each time and trim whitespace
  if (!city) {
    // Check if the input is empty
    alert("Please enter a city name."); // User feedback for empty input
    return;
  }

  let key = "135a84cd3ec4c6d6fd8c3f4efab4f364";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
  )
    .then((response) => {
      if (!response.ok) {
        console.error("Failed to fetch data:", response.statusText);
        alert("City not found. Please enter a valid city name."); // User feedback for invalid city
        ResetUI(); // Reset UI on error
        return;
      }
      response
        .json()
        .then((data) => {
          console.log(data);
          Append(data); // Pass data to Append
        })
        .catch((error) => {
          console.error("Error parsing JSON:", error);
        });
    })
    .catch((error) => {
      console.error("Network error:", error);
    });
}

// Style and setup event listeners
function Style() {
  search.addEventListener("click", () => {
    container.style.position = "absolute";
    container.style.top = "50px";
    container.style.height = "500px";
    container.style.transition = "2s";
    img.style.transition = "2s";

    GetApi(); // Call the API when the search button is clicked
  });
}

// Reset UI elements
function ResetUI() {
  img.style.visibility = "hidden";
  degree.style.visibility = "hidden";
  weather1.style.visibility = "hidden";
  Humidity.style.visibility = "hidden";
  Visibility.style.visibility = "hidden";
  img.src = "404.png"; // Set to a default image
}

// Append data to the HTML elements
function Append(data) {
  const { wind, main, weather } = data; // Destructure wind, main, and weather

  img.style.visibility = "visible";
  degree.style.visibility = "visible";
  weather1.style.visibility = "visible";
  Humidity.style.visibility = "visible";
  Visibility.style.visibility = "visible";

  // Set image based on wind degree
  if (wind.deg < 0) {
    img.src = "snow.png"; // Snowy condition
  } else if (wind.deg < 10) {
    img.src = "rain.png"; // Rainy condition
  } else if (wind.deg < 15) {
    img.src = "mist.png"; // Misty condition
  } else if (wind.deg < 25) {
    img.src = "cloud.png"; // Cloudy condition
  } else {
    img.src = "clear.png"; // Clear condition
  }

  // Update text content
  degree.textContent = `${Math.round(main.temp)}°C`; // Use main.temp for temperature
  weather1.textContent = weather[0].description; // Access description from weather array
  Humidity.textContent = `Humidity: ${main.humidity}%`; // Access humidity from main
  Visibility.textContent = `Wind Speed: ${wind.speed} m/s`; // Access wind speed
}

// Initialize styles and event listeners
Style();
