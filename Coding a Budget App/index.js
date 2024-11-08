function budget() {
  let inputBudget = document.getElementById("input-budget");
  let btnBudget = document.getElementById("btn-budget");
  let numberBudget = document.getElementById("number-budget");

  btnBudget.addEventListener("click", () => {
    let budgetValue = Number(inputBudget.value);
    numberBudget.textContent = budgetValue;

    // Update balance when budget is set
    updateBalance();
  });
}

function expenses() {
  let btnExpenses = document.getElementById("btn-expenses");
  let inputExpenses = document.getElementById("input-expenses");
  let inputExpenses1 = document.getElementById("input-expenses1");

  btnExpenses.addEventListener("click", () => {
    // Create the product and expense elements
    let h2 = document.createElement("h2");
    h2.textContent = inputExpenses.value;
    h2.setAttribute("id", "product-title");
    h2.style.color = "black";
    h2.style.fontSize = "large";
    h2.style.fontWeight = "500";
    h2.style.marginLeft = "30px";

    let h2second = document.createElement("h2");
    h2second.textContent = inputExpenses1.value;
    h2second.style.color = "black";
    h2second.style.fontSize = "large";
    h2second.style.fontWeight = "500";
    h2second.style.marginLeft = "500px";
    h2second.style.marginTop = "-40px";

    // Create edit and delete icons
    let i = document.createElement("i");
    i.className = "bx bxs-edit";
    i.style.color = "#5283f8";
    i.style.fontSize = "x-large";
    i.style.cursor = "pointer";
    i.style.marginLeft = "800px";
    i.style.marginTop = "-40px";

    // Edit expense handler
    i.addEventListener("click", () => {
      inputExpenses.value = h2.textContent;
      inputExpenses1.value = h2second.textContent;
      h2.remove();
      h2second.remove();
      i.remove();
      ione.remove();
      updateBalance();
    });

    let ione = document.createElement("i");
    ione.className = "bx bx-trash";
    ione.style.color = "#5283f8";
    ione.style.fontSize = "x-large";
    ione.style.cursor = "pointer";
    ione.style.marginLeft = "1000px";
    ione.style.marginTop = "-25px";

    // Delete expense handler
    ione.addEventListener("click", () => {
      h2.remove();
      h2second.remove();
      i.remove();
      ione.remove();
      updateBalance();
    });

    // Append all elements to the expense list
    let ExpensesList = document.getElementById("Expenses-list");
    increaseHeight();
    ExpensesList.append(h2);
    ExpensesList.append(h2second);
    ExpensesList.append(i);
    ExpensesList.append(ione);

    // Update total expenses and balance
    updateExpenses();
    updateBalance();
  });
}

let level = 140;
function increaseHeight() {
  let ExpensesList = document.getElementById("Expenses-list");
  ExpensesList.style.height = `${level}px`;
  level += 20;
}

// Function to update the total expenses
function updateExpenses() {
  let numberExpenses = document.getElementById("number-expenses");
  let inputExpenses1 = document.getElementById("input-expenses1");
  let num = Number(inputExpenses1.value);

  // Add the new expense value to the total expenses
  numberExpenses.textContent = Number(numberExpenses.textContent) + num;
}

// Function to update the balance
function updateBalance() {
  let numberBalance = document.getElementById("number-balance");
  let inputBudget = Number(document.getElementById("input-budget").value);
  let numberExpenses = Number(
    document.getElementById("number-expenses").textContent
  );

  // Calculate and update the balance
  numberBalance.textContent = inputBudget - numberExpenses;
}

// Initialize functions
budget();
expenses();
