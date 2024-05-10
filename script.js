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

const text = document.querySelector('#text')
const faithText = document.querySelector('#faith')
const spiritText = document.querySelector('#spirit')
const honeyText = document.querySelector('#honey')
const demonStats = document.querySelector('#demonStats')

const demonHealthText = document.querySelector('#demonHealth')

function goStore() {
    console.log('Going to store');
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

// initialize buttons

button1.onClick = goStore();