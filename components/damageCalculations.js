const CRIT_RATE = 16;
const CRIT_MULTIPLIER = 1.5;

const rollCrit = () => {
  const crit = Math.floor(Math.random() * CRIT_RATE) + 1;
  return crit === CRIT_RATE;
};

let crit;

export default function type(ATK, SPATK, DEF, SPDEF, BP, isSpecial){
  crit = Math.floor(Math.random() * 16) + 1;

const rollRandom = () => {
  return (Math.floor(Math.random() * 16) + 85) / 100;
};

const type = (ATK, SPATK, DEF, SPDEF, BP, isSpecial) => {
  if (isSpecial) {
    ATK = SPATK;
    DEF = SPDEF;
  }
  if (crit == 16) {
    console.log('It was a critical hit!');
    return ( 
      (Math.floor(Math.floor((Math.floor((2 * 100) / 5 + 2) * ATK * BP) / DEF) / 50) +2) *1.5 
    )
  } else {
    return ( 
      (Math.floor(Math.floor((Math.floor((2 * 100) / 5 + 2) * ATK * BP) / DEF) / 50) +2)
    )
  }
}

  const level = 100;

  let damage =
    (((2 * level) / 5 + 2) * ATK * BP) / DEF / 50 + 2;

  damage *= rollRandom();

  const critical = rollCrit();
  if (critical) {
    damage *= CRIT_MULTIPLIER;
  }

  damage = Math.floor(damage);

  return {
    damage: Math.max(1, damage),
    critical
  };
};

export { type };
// End of damageCalculations.js
