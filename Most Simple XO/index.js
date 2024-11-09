let turn = "X";
function Play(choice) {
  if (choice.textContent === "") {
    choice.textContent = turn;
    console.log(choice);

    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  }
  CheckWins();
}
function CheckWins() {
  let div1 = document.getElementById("div1").textContent;
  let div2 = document.getElementById("div2").textContent;
  let div3 = document.getElementById("div3").textContent;
  let div4 = document.getElementById("div4").textContent;
  let div5 = document.getElementById("div5").textContent;
  let div6 = document.getElementById("div6").textContent;
  let div7 = document.getElementById("div7").textContent;
  let div8 = document.getElementById("div8").textContent;
  let div9 = document.getElementById("div9").textContent;

  if (div1 === "X" && div2 === "X" && div3 === "X") {
    alert("X Win");
    Reset();
  } else if (div1 === "X" && div4 === "X" && div7 === "X") {
    alert("X Win");
    Reset();
  } else if (div7 === "X" && div8 === "X" && div9 === "X") {
    alert("X Win");
    Reset();
  } else if (div3 === "X" && div6 === "X" && div9 === "X") {
    alert("X Win");
    Reset();
  } else if (div1 === "X" && div5 === "X" && div9 === "X") {
    alert("X Win");
    Reset();
  } else if (div3 === "X" && div5 === "X" && div7 === "X") {
    alert("X Win");
    Reset();
  } else if (div2 === "X" && div5 === "X" && div8 === "X") {
    alert("X Win");
    Reset();
  }

  if (div1 === "O" && div2 === "O" && div3 === "O") {
    alert("O Win");
    Reset();
  } else if (div1 === "O" && div4 === "O" && div7 === "O") {
    alert("O Win");
    Reset();
  } else if (div7 === "O" && div8 === "O" && div9 === "O") {
    alert("O Win");
    Reset();
  } else if (div3 === "O" && div6 === "O" && div9 === "O") {
    alert("O Win");
    Reset();
  } else if (div1 === "O" && div5 === "O" && div9 === "O") {
    alert("O Win");
    Reset();
  } else if (div3 === "O" && div5 === "O" && div7 === "O") {
    alert("O Win");
    Reset();
  } else if (div2 === "O" && div5 === "O" && div8 === "O") {
    alert("O Win");
    Reset();
  }
  if (
    div1 !== "" &&
    div2 !== "" &&
    div3 !== "" &&
    div4 !== "" &&
    div5 !== "" &&
    div6 !== "" &&
    div7 !== "" &&
    div8 !== "" &&
    div9 !== ""
  ) {
    alert("It's a Tie!");
    Reset();
  }
}
function Reset() {
  let div1 = (document.getElementById("div1").textContent = "");
  let div2 = (document.getElementById("div2").textContent = "");
  let div3 = (document.getElementById("div3").textContent = "");
  let div4 = (document.getElementById("div4").textContent = "");
  let div5 = (document.getElementById("div5").textContent = "");
  let div6 = (document.getElementById("div6").textContent = "");
  let div7 = (document.getElementById("div7").textContent = "");
  let div8 = (document.getElementById("div8").textContent = "");
  let div9 = (document.getElementById("div9").textContent = "");
  turn = "X";
}
