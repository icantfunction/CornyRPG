let faith = 0;
let spirit = 100;
let honey = 50;
let currentWeapon = 0;
let fighting;
let demonHealth;
let inventory = ['stick'];
let debt = 0;
let unlock = false;
let favor = 0;

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');

const text = document.querySelector('#text');
const faithText = document.querySelector('#faithText');
const spiritText = document.querySelector('#spiritText');
const honeyText = document.querySelector('#honeyText');
const demonStats = document.querySelector('#demonStats');
const demonHealthText = document.querySelector('#demonHealth');

const weapons = [
    {
        name: "staff",
        power: () => Math.round(Math.random() * 1) + 0,
    },
    {
        name: "stone",
        power: () => Math.floor(Math.random() * 20) + 10,
    },
    {
        name: "rod",
        power: () => Math.floor(Math.random() * 30) + 30,
    },
    {
        name: "sword",
        power: () => Math.floor(Math.random() * 50) + 50,
    }
];

const locations = [
    {
        name: "Town Square",
        "button text": ["Go to store", "Go to church", "Go to cave", "Fight Demon Dragon"],
        "button functions": [goStore, goChurch, goCave, fightDemon],
        text: 'You are in the town square. What would you like to do?',
    },
    {
        name: "Store",
        "button text": ["Buy 10 Spirit (10 honey)", "Buy weapon (30 honey)", "Go to the back", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goStoreBack, goTownSquare],
        text: 'You are in the store. What would you like to do?',
    },
    {
        name: "cave",
        "button text": ["Go deeper", "Inspect the walls", "Call for help", "Go to town square"],
        "button functions": [goDeeper, inspectWalls, callForHelp, goTownSquare],
        text: 'You are in the cave. What would you like to do?',
    }
];

// initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDemon;

function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button4.innerText = location["button text"][3];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    button4.onclick = location["button functions"][3];
    text.innerText = location.text;
}

function goTownSquare() {
    update(locations[0]);
}

function goStore() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);
}

function goChurch() {
    console.log('Going to church');
}

function fightDemon() {
    console.log('Fighting demon');
}

function buyHealth() {
    if (honey >= 10) {
        honey -= 10;
        spirit += 10;
        honeyText.innerText = honey;
        spiritText.innerText = spirit;
    }
    else {
        if (honey < 10) {
            if (unlock == true) {
                console.log('You need to unlock the debt first');
            }
            else {
                text.innerText = 'You need more honey to buy health. Go to the cave to get more honey.';
            }
        }
    } 
}

function buyWeapon() {
    if (honey >= 30) {
        honey -= 30;
        currentWeapon++;
        let newWeapon = weapons[currentWeapon].name;
        honeyText.innerText = honey;
        text.innerText = `You bought a ${newWeapon}`;
        inventory.push(newWeapon);
        text.innerText += `You have ${inventory}` + inventory;
    }
}

function goStoreBack() {
    console.log('Going to store back');
}

function goDeeper() {
    console.log('Going deeper');
}

function inspectWalls() {
    console.log('Inspecting walls');
}

function callForHelp() {
    console.log('Calling for help');
}
