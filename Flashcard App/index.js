let Add = document.getElementById("Add");
let Container = document.getElementById("container");
let inpu1 = document.getElementById("inpu1");
let inpu2 = document.getElementById("inpu2");
let Save = document.getElementById("Save");

Add.addEventListener("click", () => {
  Container.style.visibility = "visible";
});

Save.addEventListener("click", () => {
  Container.style.visibility = "hidden";
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  let h5 = document.createElement("h5");
  let button = document.createElement("button");
  let divicon = document.createElement("div");
  let divicon1 = document.createElement("div");

  h2.innerHTML = inpu1.value;
  h5.innerHTML = inpu2.value;
  button.innerHTML = "Show/Hide";
  divicon.innerHTML = "<i class='bx bx-trash'></i>";
  divicon1.innerHTML = "<i class='bx bxs-edit'></i>";

  document.body.append(div);
  div.append(h2);
  div.append(h5);
  div.append(button);
  div.append(divicon);
  div.append(divicon1);

  div.style.backgroundColor = "white";
  div.style.width = "250px";
  div.style.height = "250px";
  div.style.borderColor = "rgb(184, 183, 182)";
  div.style.borderRadius = "10px";
  div.style.marginLeft = "40px";
  div.style.marginTop = "10px";
  div.style.position = "relative";
  div.style.boxShadow = "1px 1px 10px";

  button.style.backgroundColor = "rgb(4, 147, 4)";
  button.style.color = "white";
  button.style.padding = "15px 15px";
  button.style.border = "1px solid";
  button.style.borderRadius = "10px";
  button.style.cursor = "pointer";
  button.style.width = "150px";
  button.style.marginTop = "10px";
  button.style.marginLeft = "50px";
  button.style.textAlign = "center";

  divicon.style.position = "absolute";
  divicon.style.top = "200px";
  divicon.style.left = "200px";
  divicon.style.cursor = "pointer";
  divicon.style.fontSize = "30px";
  divicon.style.color = "red";

  divicon1.style.position = "absolute";
  divicon1.style.top = "200px";
  divicon1.style.left = "160px";
  divicon1.style.fontSize = "30px";
  divicon1.style.cursor = "pointer";
  divicon1.style.color = "green";

  h2.style.padding = "10px";
  h5.style.padding = "10px";

  let clickCount = 0;
  button.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 1) {
      h5.style.visibility = "hidden";
    } else if (clickCount === 2) {
      h5.style.visibility = "visible";
      clickCount = 0;
    }
  });

  divicon.addEventListener("click", () => {
    Container.style.visibility = "visible";
    inpu2.focus();
    inpu2.textContent += inpu2.value;
    Save.addEventListener("click", () => {
      h5 = inpu2.value;
    });
  });

  divicon1.addEventListener("click", () => {
    Container.style.visibility = "visible";
    inpu1.focus();
    inpu1.textContent += inpu1.value;
    Save.addEventListener("click", () => {
      h2 = inpu1.value;
    });
  });

  divicon.addEventListener("click", () => {
    div.remove();
  });
});
