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
    },
    {
        name: "shadow sword",
        power: () => Math.floor(Math.random() * 100) + 100,
    }
];

const locations = [
    { // Index 0
        name: "Town Square",
        "button text": ["Go to store", "Go to church", "Go to cave", "Fight Demon Dragon"],
        "button functions": [goStore, goChurch, goCave, fightDemon],
        text: 'You are in the town square. What would you like to do?',
    },
    { // Index 1
        name: "Store",
        "button text": ["Buy 10 Spirit (10 honey)", "Buy weapon (30 honey)", "Go to the back", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goStoreBack, goTownSquare],
        text: 'You are in the store. What would you like to do?',
    },
    { // Index 2
        name: "cave",
        "button text": ["Go deeper", "Inspect the walls", "Call for help", "Go to town square"],
        "button functions": [goDeeper, inspectWalls, callForHelp, goTownSquare],
        text: 'You are in the cave. What would you like to do?',
    },
    { // Index 3
        name: "battle",
        "button text": ["Attack", "Dodge", "Pray", "Flee"],
        "button functions": [attack, dodge, pray, goTownSquare],
        text: 'You are in a battle. What would you like to do?',
    },
    { // Index 4
        name: "defeat",
        "button text": ["Go to town square", "Go to store", "Go to church", "Go further"],
        "button functions": [goTownSquare, goStore, goChurch, goCave],
        text: 'You defeated the demon dragon. What would you like to do?',
    },
    { // Index 5
        name: "lose",
        "button text": ["restart", "restart", "restart", "restart"], // Update these buttons to be more creative
        "button functions": [restart, restart, restart, restart], // Update these functions to be more creative too
        text: "You lost the game. Restart?"
    },
    { // Index 6
        name: "win",
        "button text": ["restart", "restart", "restart", "restart"], // Update these buttons to be more creative
        "button functions": [restart, restart, restart, restart], // Update these functions to be more creative too
        text: "You won the game. Restart?"
    
    },
    { // Index 7
        name: "backStore",
        "button text": ["Turn around", "Turn on light", "Keep going", "Respond to the voice"],
        "button functions": [goStore, turnLight, goDeepBack, respondVoice],
        text: 'You are in the back of the store. You hear a waning voice. What would you like to do?',
    },
    { // Index 8
        name: "church",
        "button text": ["Pray", "Repent", "Confess", "Flee"],
        "button functions": [goPray, goRepent, goConfess, goTownSquare],
        text: 'You are in the church. What would you like to do?',    
    },
    { // Index 9 
        name: "notChurch",
        "button text": ["Go to back", "Fight", "Confess", "Flee"],
        "button functions": [explorDeeper, goFight, goConfess, goTownSquare],
        text: 'You are not in the church. What would you like to do?',
    }

];

const monsters = [
    {
        name: "oni",
        level: 2,
        health: 15,
    },
    {
        name: "fanged beast",
        level: 8,
        health: 60,
    },
    {
        name: "giant",
        level: 12,
        health: 100,
    },
    {
        name: "demon dragon",
        level: 20,
        health: 300,
    },
    {
        name: "angel",
        level: 15,
        health: 80,
    }
];

// initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = goChurch;
button4.onclick = fightDemon;

function update(location) {
    demonStats.style.display = "none";
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button4.innerText = location["button text"][3];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    button4.onclick = location["button functions"][3];
    text.innerHTML = location.text;
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
    if (favor < 0) {
        update(locations[9]);
    } else {
        update(locations[8]);
    }
}

function fightOni() {
    fighting = 0;
    goFight();
}

function fightBeast() {
    fighting = 1;
}

function fightDemon() {
    fighting = 2;
    goFight();
}

function goFight() {
    update(locations[3]);
    demonHealth = monsters[fighting].health;
    demonStats = demonStats.style.display = "block";
    demonName = monsters[fighting].name;
    demonName.innerText = monsters[fighting].name;
    demonHealthText.innerText = demonHealth;

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
    if (currentWeapon < 3) {
        if (honey >= 30) {
            honey -= 30;
            currentWeapon++;
            let newWeapon = weapons[currentWeapon].name;
            honeyText.innerText = honey;
            text.innerText = `You bought a ${newWeapon}`;
            inventory.push(newWeapon);
            text.innerText += `You have ${inventory}` + inventory;
        } else {
            text.innerText = 'You need more honey to buy a weapon. Go to the cave to get more honey.';
        }
    } else {
        text.innerText = 'You have the best weapon already.';
        button2.innerText = 'Sell Weapon for 15 honey';
        button2.onclick = sellWeapon;
    }
}

function sellWeapon () {
    if (inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.pop();
        text.innerText = `You sold your ${currentWeapon} for 15 honey`;
        text.innerText += ` In your inventory you now have: ${inventory}`;
    } else {
        text.innerText = "Don't sell your only weapon!";
    }

}

function goStoreBack() {
    update(locations[7]);
}

function explorDeeper() {
    console.log('Exploring deeper');
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

function turnLight() {
    console.log('Turning on light');
}

function goDeepBack() { 
    console.log('Going deep back');
}

function respondVoice() {  
    console.log('Responding to voice');
}

function goPray() {
    console.log('Praying');
}

function goRepent() {
    console.log('Repenting');
}

function goConfess() {
    console.log('Confessing');
}

function attack() {
    text.innerText = `You attacked the ${monsters[fighting].name} with your ${weapons[currentWeapon].name}`;
    spirit -= monsters[fighting].level; 
    if (isDemonHit()) {
        demonHealth -= weapons[currentWeapon].power
    } else {
        text.innerText += " You missed.";
    }
    demonHealthText.innerText = demonHealth;
    spiritText.innerText = spirit;
    if (health <= 0) {
        lose();
    } 
    else if (demonHealth <= 0) { // Update this to open a hidden path to the game 
        if (fighting === 2) {
            winGame();
        } else {
            defeatDemon();
        }
    }
    if (Math.random() <= 0.1 && inventory.length > 1) {
        text.innerText += "Your ${inventory.pop()} broke.";
        currentWeapon--;
    }
}

function isDemonHit() {
    return Math.random() < 0.2 || health < 20;
}

function dodge() {
    text.innerText = "You dodged the attack from the ${monsters[fighting].name}";
}

function pray() {
    console.log("empty");
}

function flee() {
    update(locations[0]);
}

function lose() {
    update(locations[5]);
}

function winGame() {
    update(locations[6]);
}

function defeatDemon() {
    honey += Math.floor(monsters[fighting].level * 3);
    faith += Math.floor((5 * monsters[fighting].level)/4); 
    goldText.innerText = honey;
    faithText.innerText = faith; 
    update(locations[4]);
}

function restart () {
    faith = 0;
    honey = 50;
    spirit = 100;
    currentWeapon = 0;
    inventory = ['stick'];
    honeyText.innerText = honey;
    faithText.innerText = faith;
    spiritText.innerText = spirit;
    goTownSquare();
}