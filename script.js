let faith = 0;
let spirit = 100;
let honey = 50;
let currentWeapon = 0;
let fighting;
let demonHealth;
let inventory = ['stick']

const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const button4 = document.querySelector('#button4')

const text = document.querySelector('#text')
const faithText = document.querySelector('#faith')
const spiritText = document.querySelector('#spirit')
const honeyText = document.querySelector('#honey')
const demonStats = document.querySelector('#demonStats')

const demonHealthText = document.querySelector('#demonHealth')

const locations = [
    {
        name: "Town Square",
        "button text": ["Go to store", "Go to church", "Go to cave", "Fight Demon Dragon"],
        "button functions": [goStore, goChurch, goCave, fightDemon],
        text: 'You are in the town square. What would you like to do?',
    }
];

// initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDemon;

function goTownSquare() {
    button1.innerText = 'Go to store';
    button2.innerText = 'Go to church';
    button3.innerText = 'Go to cave';
    button4.innerText = 'Fight Demon Dragon';
    button1.onclick = goStore;
    button2.onclick = goChurch;
    button3.onclick = goCave;
    button4.onclick = fightDemon;
    text.innerText = 'You are in the town square. What would you like to do?';

}

function goStore() {
    button1.innerText = "Buy 10 Spirit (10 honey)";
    button2.innerText = 'Buy weapon (30 honey)';
    button3.innerText = 'Go to the back';
    button4.innerText = 'Go to town square';
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goStoreBack;
    button4.onclick = goTownSquare;
    text.innerText = 'You are in the store. What would you like to do?';
}

function update(location) {

}

function goChurch() {
    console.log('Going to church');
}

function goCave() {
    console.log('Going to cave');
}

function fightDemon() {
    console.log('Fighting demon');
}

