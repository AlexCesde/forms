const products =
    [
        { name: "Pineapple", price: "$1.00" },
        { name: "Grape", price: "$2.00" },
        { name: "Banana", price: "$1.02" },
        { name: "Cherry", price: "$3.00" },
        { name: "Coconut", price: "$3.20" },
        { name: "Papaya", price: "$3.40" },
        { name: "Peach", price: "$1.20" },
        { name: "Pear", price: "$1.90" }
    ];

function DrawTable() {
    let tableDocument = document.getElementById("root");

    products.forEach((item) => {
        // New table row
        let tableRow = document.createElement("tr");

        // New Table data (fruit)
        let tableDataFruit = document.createElement("td");
        let tableDataFruitText = document.createTextNode(item.name);
        tableDataFruit.appendChild(tableDataFruitText);
        tableRow.appendChild(tableDataFruit);

        // New Table data (price)
        let tableDataPrice = document.createElement("td");
        let tableDataPriceText = document.createTextNode(item.price);
        tableDataPrice.appendChild(tableDataPriceText);
        tableRow.appendChild(tableDataPrice);

        tableDocument.appendChild(tableRow); // Tbody
    });

    return tableRow;
}

window.addEventListener("load", DrawTable, false);