let input = document.getElementById("input");
let p = document.getElementById("p");
function Transaltion() {
  let Transalte = document.getElementById("Transalte");
  let select1 = document.getElementById("select1");
  let select2 = document.getElementById("select2");
  Transalte.addEventListener("click", () => {
    const selectedIndex1 = select1.selectedIndex;
    const selectedOption1 = select1.options[selectedIndex1];

    const selectedIndex2 = select2.selectedIndex;
    const selectedOption2 = select2.options[selectedIndex2];

    let language1 = selectedOption1.value;
    let language2 = selectedOption2.value;

    fetch(
      `https://api.mymemory.translated.net/get?q=${input.value}&langpair=${language1}|${language2}`
    )
      .then((response) => {
        if (response.status !== 200) {
          console.log("Error Response Occuired");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        // console.log(data.matches[0].segment);
        input.value = data.matches[0].segment;
        p.textContent = data.matches[0].translation;
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  });
}

function controlls() {
  let i1 = document.getElementById("i1");
  let i4 = document.getElementById("i4");

  i1.addEventListener("click", () => {
    let voice1 = new SpeechSynthesisUtterance(input.textContent);
    window.speechSynthesis.speak(voice1);
  });

  i4.addEventListener("click", () => {
    let voice2 = new SpeechSynthesisUtterance(p.textContent);
    window.speechSynthesis.speak(voice2);
  });
}

function copieText() {
  let i2 = document.getElementById("i2");
  let i5 = document.getElementById("i5");

  i2.addEventListener("click", () => {
    navigator.clipboard.writeText(input.value);
  });

  i5.addEventListener("click", () => {
    navigator.clipboard.writeText(p.value);
  });
}

function flip() {
  let i3 = document.getElementById("i3");
  let select1 = document.getElementById("select1");
  let select2 = document.getElementById("select2");
  i3.addEventListener("click", () => {
    const selectedIndex1 = select1.selectedIndex;
    const selectedIndex2 = select2.selectedIndex;

    select1.selectedIndex = selectedIndex2;
    select2.selectedIndex = selectedIndex1;
    
    const tempInputValue = input.value;
    input.value = p.textContent;
    p.textContent = tempInputValue;
  });
}

Transaltion();
controlls();
copieText();
flip();
