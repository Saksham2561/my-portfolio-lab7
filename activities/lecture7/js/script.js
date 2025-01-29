const creatureSanctuary = []; 

function addCreature() {
    const creatureName = document.getElementById('creatureName').value;
    const creatureType = document.getElementById('creatureType').value;
    const creatureHabitat = document.getElementById('creatureHabitat').value;
    const creatureNotes = document.getElementById('creatureNotes').value; 

    const newCreature = {
        name: creatureName,
        type: creatureType,
        habitat: creatureHabitat,
        notes: creatureNotes 
    };

    creatureSanctuary.push(newCreature); 

    document.getElementById('addCreatureForm').reset();
    displayCreatures();
}

function displayCreatures() {
    const creaturesDiv = document.getElementById('creatureSanctuary');
    creaturesDiv.innerHTML = ''; 

    const list = document.createElement('ul');
    for (const creature of creatureSanctuary) {
        const listItem = document.createElement('li');
        listItem.textContent = `${creature.name} - ${creature.type} (Habitat: ${creature.habitat})`;
        
        
        const notesItem = document.createElement('p');
        notesItem.textContent = `Notes: ${creature.notes}`;

        listItem.appendChild(notesItem); 
        list.appendChild(listItem);
    }
    creaturesDiv.appendChild(list);
}


function removeLastCreature() {
    if (creatureSanctuary.length > 0) {
        creatureSanctuary.pop(); 
        displayCreatures(); 
    } else {
        alert("No creatures left to remove!");
    }
}
document.getElementById('removeCreatureBtn').addEventListener('click', removeLastCreature);


function searchCreatures() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const creaturesDiv = document.getElementById('creatureSanctuary');

    if (searchTerm === '') {
        displayCreatures(); 
        return;
    }

    const filteredCreatures = creatureSanctuary.filter(creature => 
        creature.name.toLowerCase().includes(searchTerm) || 
        creature.type.toLowerCase().includes(searchTerm)
    );

    creaturesDiv.innerHTML = ''; 

    if (filteredCreatures.length > 0) {
        const list = document.createElement('ul');
        for (const creature of filteredCreatures) {
            const listItem = document.createElement('li');
            listItem.textContent = `${creature.name} - ${creature.type} (Habitat: ${creature.habitat})`;
            list.appendChild(listItem);
        }
        creaturesDiv.appendChild(list);
    } else {
        creaturesDiv.innerHTML = "<p>No creatures found.</p>";
    }
}
document.getElementById('searchBtn').addEventListener('click', searchCreatures);


document.getElementById('addCreatureForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addCreature();
});

displayCreatures();
