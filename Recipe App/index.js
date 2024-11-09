let input = document.getElementById("input");
let button = document.getElementById("button");
let secondcontainer = document.getElementById("secondcontainer");
let h1 = document.getElementById("h1");
let img = document.getElementById("img");
let h2 = document.getElementById("h2");
let ingr1 = document.getElementById("ingr1");
let ingr2 = document.getElementById("ingr2");
let ingr3 = document.getElementById("ingr3");
let ingr4 = document.getElementById("ingr4");
let ingr5 = document.getElementById("ingr5");
let ingr6 = document.getElementById("ingr6");
let ingr7 = document.getElementById("ingr7");
let ingr8 = document.getElementById("ingr8");
let ingr9 = document.getElementById("ingr9");
let ingr10 = document.getElementById("ingr10");
let btn = document.getElementById("btn");
let thirdcontainer = document.getElementById("thirdcontainer");
let p = document.getElementById("p");

let meal;
function Fetch() {
  return fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
  ).then((response) => {
    return response.json();
  });
}
button.addEventListener("click", () => {
  meal = input.value;
  Fetch().then((data) => {
    console.log(data);
    secondcontainer.style.visibility = "visible";
    h1.textContent = data.meals[0].strMeal;
    h2.textContent = data.meals[0].strArea;
    img.src = data.meals[0].strMealThumb;
    ingr1.textContent = data.meals[0].strIngredient1;
    ingr2.textContent = data.meals[0].strIngredient2;
    ingr3.textContent = data.meals[0].strIngredient3;
    ingr4.textContent = data.meals[0].strIngredient4;
    ingr5.textContent = data.meals[0].strIngredient5;
    ingr6.textContent = data.meals[0].strIngredient6;
    ingr7.textContent = data.meals[0].strIngredient7;
    ingr8.textContent = data.meals[0].strIngredient8;
    ingr9.textContent = data.meals[0].strIngredient9;
    ingr10.textContent = data.meals[0].strIngredient10;

    btn.addEventListener("click", () => {
      thirdcontainer.style.visibility = "visible";
      p.textContent = data.meals[0].strInstructions;
    });
  });
});

$(document).ready(function () {
  $("#button").click(function () {
    $("#secondcontainer").show(1500);
  });
  $("#btn").click(function () {
    $("#thirdcontainer").show(1000);
  });
});

