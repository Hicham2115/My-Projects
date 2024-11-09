let input1 = document.getElementById("input1");
let buttonsearch = document.getElementById("buttonsearch");

function Fetch() {
  let apikey;
  return fetch(`http://www.omdbapi.com/?apikey=f11d15a9&s=movie&page=1`).then(
    (response) => {
      if (!response.ok) {
        console.log("Error Fetching Data");
      } else {
        console.log("Connection Established Successfully");
      }
      return response.json();
    }
  );
}

function DisplayMovies() {
  Fetch().then((data) => {
    console.log(data);
    for (let i = 0; i < data.results.length; i++) {
      console.log(data.Search[i].Poster);

      let div = document.createElement("div");
      let img = document.createElement("img");
      let h4 = document.createElement("h4");
      let secondeh4 = document.createElement("h4");
      let button = document.createElement("button");

      div.append(img);
      div.append(h4);
      div.append(secondeh4);
      div.append(button);
      document.body.append(div);

      div.setAttribute("id", "card");
      img.setAttribute("id", "img");
      h4.setAttribute("id", "Movie-Name");
      secondeh4.setAttribute("id", "date");
      button.setAttribute("id", "button");

      img.src = data.Search[i].Poster;
      h4.textContent = data.Search[i].Title;
      secondeh4.textContent = data.Search[i].Year;
      button.textContent = data.Search[i].imdbID;
    }
  });
}



Fetch();
DisplayMovies();



// http://www.omdbapi.com/?apikey=f11d15a9&t=${userInput}
