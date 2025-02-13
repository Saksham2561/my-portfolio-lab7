let inventory = [
    { name: "Tabla", type: "instrument", price: 150, quantity: 4, description: "A traditional Indian percussion instrument with deep, resonant sounds." },
    { name: "Drums", type: "instrument", price: 500, quantity: 2, description: "A full drum set for creating powerful rhythms." },
    { name: "Tumbi", type: "instrument", price: 100, quantity: 5, description: "A high-pitched, single-stringed Punjabi folk instrument." },
    { name: "Rubab", type: "instrument", price: 300, quantity: 3, description: "A lute-like instrument from Central Asia, known for its rich sound." },
    { name: "Electric Guitar", type: "instrument", price: 400, quantity: 2, description: "A modern rock guitar for electrifying performances." },
    { name: "Bass Guitar", type: "instrument", price: 450, quantity: 1, description: "A deep and powerful guitar for setting the groove." },
    { name: "Harmonica", type: "instrument", price: 50, quantity: 6, description: "A compact wind instrument perfect for blues and folk music." },
    { name: "Bansuri", type: "instrument", price: 80, quantity: 7, description: "A traditional bamboo flute used in Indian classical music." }
];

function updateInventoryDisplay() {
    const inventoryList = document.getElementById("inventory-list");
    inventoryList.innerHTML = ""; 

    if (inventory.length === 0) {
        inventoryList.innerHTML = "<li>No items in inventory.</li>";
        return;
    }

    inventory.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.name} (${item.type}) - $${item.price.toFixed(2)} [Qty: ${item.quantity}]\n${item.description}`;
        inventoryList.appendChild(li);
    });
}


function calculateTotalInventoryValue() {
    if (inventory.length === 0) {
        alert("The inventory is empty. No value to calculate.");
        return;
    }

    const totalValue = inventory.reduce((total, item) => {
        const itemTotal = item.price * item.quantity;
        return total + (itemTotal >= 0 ? itemTotal : 0); 
    }, 0).toFixed(2);

    alert(`Total Inventory Value: $${totalValue}`);
}


function addItemToInventory() {
    const itemName = document.getElementById("itemName").value.trim();
    const itemType = document.getElementById("itemType").value.trim();
    const itemPrice = parseFloat(document.getElementById("itemPrice").value);
    const itemQuantity = parseInt(document.getElementById("itemQuantity").value);
    const itemDescription = document.getElementById("itemDescription").value.trim();

    if (!itemName || !itemType || !itemDescription) {
        alert("Please fill out all fields.");
        return;
    }
    if (isNaN(itemPrice) || itemPrice <= 0) {
        alert("Price must be a positive number.");
        return;
    }
    if (isNaN(itemQuantity) || itemQuantity <= 0) {
        alert("Quantity must be a positive integer.");
        return;
    }

    inventory.push({ name: itemName, type: itemType, price: itemPrice, quantity: itemQuantity, description: itemDescription });

    updateInventoryDisplay();
    categorizeInventory();
    findDuplicateItems();

    document.getElementById("itemName").value = "";
    document.getElementById("itemType").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemQuantity").value = "";
    document.getElementById("itemDescription").value = "";
}


function removeItemFromInventory() {
    const itemName = document.getElementById("removeItemName").value.trim();
    
    if (!itemName) {
        alert("Enter a valid item name to remove.");
        return;
    }

    const initialLength = inventory.length;
    inventory = inventory.filter(item => item.name.toLowerCase() !== itemName.toLowerCase());

    if (inventory.length === initialLength) {
        alert(`Item "${itemName}" not found in inventory.`);
        return;
    }

    updateInventoryDisplay();
    categorizeInventory();
    findDuplicateItems();


    document.getElementById("removeItemName").value = "";
}


function searchForItems() {
    const query = document.getElementById("searchQuery").value.trim().toLowerCase();
    if (!query) {
        alert("Enter a valid search term.");
        return;
    }

    const searchResults = inventory.filter(item => 
        item.name.toLowerCase().includes(query) || item.type.toLowerCase().includes(query)
    );

    alert(searchResults.length ? `Found ${searchResults.length} item(s). Check the console.` : "No items found.");
    console.log("Search Results:", searchResults);
}

function categorizeInventory() {
    const groupedItems = inventory.reduce((categories, item) => {
        if (!categories[item.type]) categories[item.type] = [];
        categories[item.type].push(item);
        return categories;
    }, {});

    const groupedList = document.getElementById("grouped-list");
    groupedList.innerHTML = Object.keys(groupedItems).map(type => 
        `<li><strong>${type}</strong>: ${groupedItems[type].map(i => i.name).join(", ")}</li>`
    ).join("");
}

function findDuplicateItems() {
    let seenItems = new Set();
    let duplicateItems = new Set();

    inventory.forEach(item => {
        if (seenItems.has(item.name.toLowerCase())) {
            duplicateItems.add(item.name);
        } else {
            seenItems.add(item.name.toLowerCase());
        }
    });

    document.getElementById("duplicate-list").innerText = duplicateItems.size 
        ? `Duplicates: ${[...duplicateItems].join(", ")}` 
        : "No duplicates found.";
}

function applyDiscountToItems() {
    const discount = parseFloat(document.getElementById("discountInput").value);
    if (isNaN(discount) || discount <= 0) {
        alert("Enter a valid discount percentage.");
        return;
    }

    inventory.forEach(item => item.price = parseFloat((item.price * (1 - discount / 100)).toFixed(2)));
    updateInventoryDisplay();
}

document.addEventListener("DOMContentLoaded", () => {
    updateInventoryDisplay();
    categorizeInventory();
    findDuplicateItems();
});
