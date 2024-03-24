// Display current date and time
function displayDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    const displayedDateTime = `Today is ${formattedDateTime}`; 
    document.getElementById("date-time").innerHTML = displayedDateTime;
}

// Submit user info and display greeting
function submitInfo() {
    const name = document.getElementById('full-name').value;
    const feeling = document.getElementById('feeling').value;
    const number = Math.abs(Math.round(parseFloat(document.getElementById('numberInput').value)));
    alertPolygonName(number);
    const greeting = `The Almighty Dragons Mythical Emporium welcomes you, ${name}!\nWe see that you're feeling ${feeling}!`;
    document.getElementById('demo').innerHTML = greeting;
}

// Alert polygon name based on user's favorite number
function alertPolygonName(number) {
    const polygonNames = ['there is no polygon with 0 sides', 'henagon', 'digon', 'trigon', 'tetragon', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'enneagon', 'decagon'];
    const index = Math.min(Math.max(number, 0), polygonNames.length - 1);
    if (number === 0) {
        alert("There is no polygon with 0 sides!");
    } else {
        alert(`The polygon with ${number} side(s) is called a ${polygonNames[index]}.`);
    }
}

// Display random dragon fact
function dragonFacts() {
    const facts = [
        "In many mythologies, dragons are associated with wisdom, longevity, and supernatural powers.",
        "Dragons are often depicted as guardians of treasure, sacred places, or important artifacts.",
        "The concept of dragons exists in various cultures around the world, each with their unique characteristics and symbolism."
    ];
    displayOutput(getRandomElement(facts));
}

// Display random mythical creature info
function mythicalCreatures() {
    const creatures = [
        "Unicorns are often associated with purity, innocence, and healing powers.",
        "Phoenix, the legendary bird, is known for its ability to rise from its own ashes, symbolizing renewal and rebirth.",
        "Griffins, with the body of a lion and the head and wings of an eagle, represent strength, courage, and nobility."
    ];
    displayOutput(getRandomElement(creatures));
}

// Display random crafting material info
function craftingMaterials() {
    const materials = [
        "Enchanted wood, harvested from the mystical forests, is used to create intricate wands and staffs.",
        "Mithril, a rare and precious metal, is sought after for crafting lightweight yet incredibly durable armor.",
        "Dragon scales, shed by the majestic creatures, are prized for their magical properties and used in various potions and talismans."
    ];
    displayOutput(getRandomElement(materials));
}

// Display random featured artisan info
function featuredArtisan() {
    const artisans = [
        "Elara Moonwhisper, a master elven sculptor, creates breathtaking figurines that capture the essence of mythical beings.",
        "Thorin Ironforge, a skilled dwarven blacksmith, forges legendary weapons imbued with ancient runes and enchantments.",
        "Zephyr Windweaver, a talented human artist, paints mesmerizing portraits that seem to come alive with the spirit of the mythical creatures depicted."
    ];
    displayOutput(getRandomElement(artisans));
}

// Get random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Display output message
function displayOutput(message) {
    document.getElementById('output').textContent = message;
}

// Call displayDateTime function when the page loads
document.addEventListener('DOMContentLoaded', displayDateTime);