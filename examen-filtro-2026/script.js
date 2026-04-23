

const name = "Zara Darkbane";
let characterClass = "Hechicera";
let level = 45;
let health = 100;
let mana = 200;
let attack = 45;
let defense = 53;
const spellCost = 50;
let isStunned = false;

function calculateDamage(attack, defense){
    let damage = attack - defense;
    if(damage < 0){
        return 0;
    }
    return damage;
}

let isAlive = (health) => {
    return health > 0;
}

let canCastSpell = (currentMana, spellCost, isStunned) => {
    return currentMana >= spellCost && !isStunned;
}

function getPresentation(name, characterClass, level){
    return `${name} — ${characterClass} (Nivel ${level})`;
}


console.log("Daño:", calculateDamage(attack, defense));
console.log("El Personaje sigue vivo?:", isAlive(health));
console.log("Puedo lanzar hechizo?:", canCastSpell(mana, spellCost, isStunned));
console.log("Presentación:", getPresentation(name, characterClass, level));
