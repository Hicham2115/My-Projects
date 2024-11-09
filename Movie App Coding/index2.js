let input1 = document.getElementById("input1");
let buttonsearch = document.getElementById("buttonsearch");
let page = 1;
let apiKey = "e0c2c2b05b237b06164181434a282895";

function Fetch() {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      console.log("Error Fetching Data");
    } else {
      console.log("Connection Established Successfully");
    }
    return response.json();
  });
}

function DisplayMovies() {
  Fetch().then((data) => {
    console.log(data);
    for (let i = 0; i < data.results.length; i++) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      let h4 = document.createElement("h4");
      let secondeh4 = document.createElement("h4");
      let button = document.createElement("button");
      let text = document.createElement("p");
      let div2 = document.createElement("div");

      div.append(img);
      div.append(h4);
      div.append(secondeh4);
      div.append(button);
      div.append(text);
      div.append(div2);
      div2.append(text);
      document.body.append(div);

      div.setAttribute("id", "card");
      img.setAttribute("id", "img");
      h4.setAttribute("id", "Movie-Name");
      secondeh4.setAttribute("id", "date");
      button.setAttribute("id", "button");
      text.setAttribute("id", "text");
      div2.setAttribute("id", "div2");

      const imageUrlBase = "https://image.tmdb.org/t/p/w500";
      let poster = imageUrlBase + data.results[i].poster_path;
      img.src = poster;
      h4.textContent = data.results[i].title;
      secondeh4.textContent = data.results[i].release_date;
      button.textContent = "See Cover";

      div.addEventListener("mouseenter", () => {
        text.style.visibility = "visible";
        text.textContent = data.results[i].overview;
        div2.style.visibility = "visible";
        h4.style.marginTop = "-200px";
        div2.style.marginTop = "10px";
        div2.style.opacity = "1";
        div2.style.transform = "translateY(0)";
      });

      div.addEventListener("mouseleave", () => {
        text.style.visibility = "hidden";
        div2.style.opacity = "0";
        div2.style.transform = "translateY(20)";
        h4.style.marginTop = "-60px";
        div2.style.visibility = "hidden";
      });

      button.onclick = () => {
        window.open(poster, "_blank");
      };

      window.addEventListener("scroll", () => {
        if (window.scrollY >= 500 && page <= 50) {
          let url = fetch(
            `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${page}`
          );
          page++;
          url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${page}`;
          console.log(`Updated URL: ${url}`);
          DisplayMovies();
        }
      });

      buttonsearch.addEventListener("click", () => {
        const query = input1.value;

        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
            query
          )}`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            let header = document.getElementById("header");
            document.body.innerHTML = "";

            if (data.results && data.results.length > 0) {
              for (let i = 0; i < data.results.length; i++) {
                let div = document.createElement("div");
                let img = document.createElement("img");
                let h4 = document.createElement("h4");
                let secondeh4 = document.createElement("h4");
                let button = document.createElement("button");
                let text = document.createElement("p");
                let div2 = document.createElement("div");

                div.append(img);
                div.append(h4);
                div.append(secondeh4);
                div.append(button);
                div.append(text);
                div.append(div2);
                div2.append(text);
                document.body.append(div);

                div.setAttribute("id", "card");
                img.setAttribute("id", "img");
                h4.setAttribute("id", "Movie-Name");
                secondeh4.setAttribute("id", "date");
                button.setAttribute("id", "button");
                text.setAttribute("id", "text");
                div2.setAttribute("id", "div2");

                const imageUrlBase = "https://image.tmdb.org/t/p/w500";
                let poster = imageUrlBase + data.results[i].poster_path;
                img.src = poster;
                h4.textContent = data.results[i].title;
                secondeh4.textContent = data.results[i].release_date;
                button.textContent = "See Cover";

                div.addEventListener("mouseenter", () => {
                  text.style.visibility = "visible";
                  text.textContent = data.results[i].overview;
                  div2.style.visibility = "visible";
                  h4.style.marginTop = "-200px";
                  div2.style.marginTop = "10px";
                  div2.style.opacity = "1";
                  div2.style.transform = "translateY(0)";
                });

                div.addEventListener("mouseleave", () => {
                  text.style.visibility = "hidden";
                  div2.style.opacity = "0";
                  div2.style.transform = "translateY(20)";
                  h4.style.marginTop = "-60px";
                  div2.style.visibility = "hidden";
                });

                button.onclick = () => {
                  window.open(poster, "_blank");
                };
              }
            } else {
              const noResultsMessage = document.createElement("p");
              noResultsMessage.textContent = "No results found.";
              document.body.append(noResultsMessage);
            }
          })
          .catch((error) => console.error("Error fetching data:", error));
      });
    }
  });
}

Fetch();
DisplayMovies();
