function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let attacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
    let defender = firstAttacker === fighter1.name ? fighter2 : fighter1;

    while (fighter1.health > 0 && fighter2.health > 0) {
        defender.health -= attacker.damagePerAttack;
        [attacker, defender] = [defender, attacker];
    }

    return fighter1.health > 0 ? fighter1.name : fighter2.name;
}