let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let create = document.getElementById("create");
let searchinput = document.getElementById("searchinput");
let searchbytitle = document.getElementById("searchbytitle");
let searchbycategoty = document.getElementById("searchbycategoty");
let deleteall = document.getElementById("deleteall");
let tableId = 2;
let tableTitle = document.getElementById("tableTitle");
let tablePrice = document.getElementById("tablePrice");
let tableTaxes = document.getElementById("tableTaxes");
let tableAds = document.getElementById("tableAds");
let tableDiscount = document.getElementById("tableDiscount");
let tableTotal = document.getElementById("tableTotal");
let tableCategory = document.getElementById("tableCategory");
let tableUpdate = document.getElementById("tableUpdate");
let tableDelete = document.getElementById("tableDelete");
let table = document.getElementById("table");
let ProductsTitle = [];
let ProductsCategorie = [];

function Total() {
  create.addEventListener("click", () => {
    if (
      price.value === "" ||
      ads.value === "" ||
      taxes.value === "" ||
      discount.value === ""
    ) {
      total.textContent = "Total: ";
    } else {
      let result =
        Number(price.value) +
        Number(ads.value) +
        Number(taxes.value) -
        Number(discount.value);
      total.textContent = "Total: " + result;
      return result;
    }
  });
}

function createproduct() {
  let result;
  create.addEventListener("click", () => {
    result = Total();
    let newrow = table.insertRow();
    let idcell = newrow.insertCell(0);
    let Titlecell = newrow.insertCell(1);
    let Pricecell = newrow.insertCell(2);
    let Taxescell = newrow.insertCell(3);
    let Adscell = newrow.insertCell(4);
    let Discountcell = newrow.insertCell(5);
    let Totalcell = newrow.insertCell(6);
    let Categorycell = newrow.insertCell(7);
    let Updatecell = newrow.insertCell(8);
    let Deletecell = newrow.insertCell(9);

    idcell.textContent = tableId;
    Titlecell.textContent = title.value;
    Pricecell.textContent = price.value;
    Taxescell.textContent = taxes.value;
    Adscell.textContent = ads.value;
    Discountcell.textContent = discount.value;
    Totalcell.textContent = total.textContent.split(": ")[1] || "0";
    Categorycell.textContent = category.value;

    ProductsTitle.push(title.value);
    ProductsCategorie.push(category.value);

    let deleteButton = document.createElement("button");
    deleteButton.style.height = "40px";
    deleteButton.style.borderRadius = "20px";
    deleteButton.style.backgroundColor = "#280666";
    deleteButton.style.width = "80%";
    deleteButton.style.padding = "10px 10px";
    deleteButton.style.margin = "5px";
    deleteButton.textContent = "Delete";

    deleteButton.onclick = () => {
      newrow.remove();
    };

    Deletecell.appendChild(deleteButton);

    deleteButton.addEventListener("mouseenter", () => {
      deleteButton.style.backgroundColor = "violet";
      deleteButton.style.transition = "0.5s ease";
    });

    deleteButton.addEventListener("mouseleave", () => {
      deleteButton.style.backgroundColor = "#280666";
    });

    let updateButton = document.createElement("button");
    updateButton.style.height = "40px";
    updateButton.style.borderRadius = "20px";
    updateButton.style.backgroundColor = "#280666";
    updateButton.style.width = "80%";
    updateButton.style.padding = "10px 10px";
    updateButton.style.margin = "5px";
    updateButton.textContent = "Update";

    updateButton.onclick = () => {
      title.focus();
      idcell.textContent = tableId;
      Titlecell.textContent = title.value;
      Pricecell.textContent = price.value;
      Taxescell.textContent = taxes.value;
      Adscell.textContent = ads.value;
      Discountcell.textContent = discount.value;
      Totalcell.textContent = total.textContent.split(": ")[1] || "0";
      Categorycell.textContent = category.value;
      create.textContent = "Update";
      count.remove();
      newrow.remove();
    };
    create.textContent = "Create";
    Updatecell.appendChild(updateButton);

    updateButton.addEventListener("mouseenter", () => {
      updateButton.style.backgroundColor = "violet";
      updateButton.style.transition = "0.5s ease";
    });

    updateButton.addEventListener("mouseleave", () => {
      updateButton.style.backgroundColor = "#280666";
    });

    tableId++;
  });
}

function countProduct() {
  create.addEventListener("click", () => {
    const numberOfProducts = Number(count.value);
    if (!isNaN(numberOfProducts) && numberOfProducts > 0) {
      for (let i = 1; i < numberOfProducts; i++) {
        createproduct();
      }
    } else {
      alert("Please enter a valid count.");
    }
  });
}

function Search() {
  searchbytitle.addEventListener("click", () => {
    let UserSearch = searchinput.value.trim().toLowerCase(); // Convert to lowercase for case-insensitive search

    // Clear all rows except the first one
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }

    // Iterate through all products to find matches
    let hasMatches = false; // To track if any results were found
    ProductsTitle.forEach((productTitle, index) => {
      if (productTitle.toLowerCase().includes(UserSearch)) {
        hasMatches = true;

        result = Total();

        let newrow = table.insertRow(); // Insert a new row at the end of the table
        let idcell = newrow.insertCell(0);
        let Titlecell = newrow.insertCell(1);
        let Pricecell = newrow.insertCell(2);
        let Taxescell = newrow.insertCell(3);
        let Adscell = newrow.insertCell(4);
        let Discountcell = newrow.insertCell(5);
        let Totalcell = newrow.insertCell(6);
        let Categorycell = newrow.insertCell(7);
        let Updatecell = newrow.insertCell(8);
        let Deletecell = newrow.insertCell(9);

        idcell.textContent = index + 1; // Use the index + 1 as ID
        Titlecell.textContent = productTitle;
        Pricecell.textContent = price.value;
        Taxescell.textContent = taxes.value;
        Adscell.textContent = ads.value;
        Discountcell.textContent = discount.value;
        Totalcell.textContent = total.textContent.split(": ")[1] || "0";
        Categorycell.textContent = category.value;

        // Create and style the Delete button
        let deleteButton = document.createElement("button");
        deleteButton.style.height = "40px";
        deleteButton.style.borderRadius = "20px";
        deleteButton.style.backgroundColor = "#280666";
        deleteButton.style.width = "80%";
        deleteButton.style.padding = "10px 10px";
        deleteButton.style.margin = "5px";
        deleteButton.textContent = "Delete";

        deleteButton.onclick = () => {
          newrow.remove(); // Remove the current row when clicked
        };

        Deletecell.appendChild(deleteButton);

        // Change color of delete button on hover
        deleteButton.addEventListener("mouseenter", () => {
          deleteButton.style.backgroundColor = "violet";
          deleteButton.style.transition = "0.5s ease";
        });

        deleteButton.addEventListener("mouseleave", () => {
          deleteButton.style.backgroundColor = "#280666";
        });

        // Create and style the Update button
        let updateButton = document.createElement("button");
        updateButton.style.height = "40px";
        updateButton.style.borderRadius = "20px";
        updateButton.style.backgroundColor = "#280666";
        updateButton.style.width = "80%";
        updateButton.style.padding = "10px 10px";
        updateButton.style.margin = "5px";
        updateButton.textContent = "Update";

        updateButton.onclick = () => {
          title.focus(); // Focus on the title input for editing
        };

        Updatecell.appendChild(updateButton);

        // Change color of update button on hover
        updateButton.addEventListener("mouseenter", () => {
          updateButton.style.backgroundColor = "violet";
          updateButton.style.transition = "0.5s ease";
        });

        updateButton.addEventListener("mouseleave", () => {
          updateButton.style.backgroundColor = "#280666";
        });

        tableId++; // Increment table ID
      }
    });

    if (!hasMatches) {
      alert("Not found");
    }
  });
}

function Search2() {
  searchbycategoty.addEventListener("click", () => {
    let UserSearchCategorie = searchinput.value.trim().toLowerCase(); // Convert to lowercase for case-insensitive search

    // Clear all rows except the first one
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }

    // Iterate through all products to find matches
    let hasMatches = false; // To track if any results were found
    ProductsCategorie.forEach((ProductsCategorie, index) => {
      if (ProductsCategorie.toLowerCase().includes(UserSearchCategorie)) {
        hasMatches = true;

        result = Total();

        let newrow = table.insertRow(); // Insert a new row at the end of the table
        let idcell = newrow.insertCell(0);
        let Titlecell = newrow.insertCell(1);
        let Pricecell = newrow.insertCell(2);
        let Taxescell = newrow.insertCell(3);
        let Adscell = newrow.insertCell(4);
        let Discountcell = newrow.insertCell(5);
        let Totalcell = newrow.insertCell(6);
        let Categorycell = newrow.insertCell(7);
        let Updatecell = newrow.insertCell(8);
        let Deletecell = newrow.insertCell(9);

        idcell.textContent = index + 1; // Use the index + 1 as ID
        Titlecell.textContent = title.value;
        Pricecell.textContent = price.value;
        Taxescell.textContent = taxes.value;
        Adscell.textContent = ads.value;
        Discountcell.textContent = discount.value;
        Totalcell.textContent = total.textContent.split(": ")[1] || "0";
        Categorycell.textContent = UserSearchCategorie;

        // Create and style the Delete button
        let deleteButton = document.createElement("button");
        deleteButton.style.height = "40px";
        deleteButton.style.borderRadius = "20px";
        deleteButton.style.backgroundColor = "#280666";
        deleteButton.style.width = "80%";
        deleteButton.style.padding = "10px 10px";
        deleteButton.style.margin = "5px";
        deleteButton.textContent = "Delete";

        deleteButton.onclick = () => {
          newrow.remove(); // Remove the current row when clicked
        };

        Deletecell.appendChild(deleteButton);

        // Change color of delete button on hover
        deleteButton.addEventListener("mouseenter", () => {
          deleteButton.style.backgroundColor = "violet";
          deleteButton.style.transition = "0.5s ease";
        });

        deleteButton.addEventListener("mouseleave", () => {
          deleteButton.style.backgroundColor = "#280666";
        });

        // Create and style the Update button
        let updateButton = document.createElement("button");
        updateButton.style.height = "40px";
        updateButton.style.borderRadius = "20px";
        updateButton.style.backgroundColor = "#280666";
        updateButton.style.width = "80%";
        updateButton.style.padding = "10px 10px";
        updateButton.style.margin = "5px";
        updateButton.textContent = "Update";

        updateButton.onclick = () => {
          title.focus(); // Focus on the title input for editing
        };

        Updatecell.appendChild(updateButton);

        // Change color of update button on hover
        updateButton.addEventListener("mouseenter", () => {
          updateButton.style.backgroundColor = "violet";
          updateButton.style.transition = "0.5s ease";
        });

        updateButton.addEventListener("mouseleave", () => {
          updateButton.style.backgroundColor = "#280666";
        });

        tableId++; // Increment table ID
      }
    });

    if (!hasMatches) {
      alert("Not found");
    }
  });
}
function DeleteAll() {
  deleteall.addEventListener("click", () => {
    while (table.rows.length > 1) {
      table.deleteRow(1); // Delete rows, but keep the first row (index 0)
    }
  });
}

Total();
createproduct();
countProduct();
Search();
Search2();
DeleteAll();
