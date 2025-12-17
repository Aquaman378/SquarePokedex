// components/battleUI.js

import { pokeStats } from '../data/lycanrocks';
import damageCalculations from './damageCalculations'; 

// --- STAT CALCULATION UTILITY ---
const calculateFinalStat = (baseStat, level, isHP = false) => {
    const IV = 31;
    const EV = 0;
    
    let stat = Math.floor(((baseStat * 2 + IV + EV) * level) / 100) + 5;
    if (isHP) {
        stat = Math.floor(((baseStat * 2 + IV + EV) * level) / 100) + level + 10;
    }
    
    return Math.max(1, stat);
};
// ---------------------------------

export default class BattleUI {
    
    constructor(playerData, enemyData = null) {
        if (!playerData) {
            throw new Error("BattleUI requires player data to be initialized.");
        }
        
        this.player = this._buildCombatant(playerData);
        this.enemy = this._buildCombatant(enemyData || this._defaultEnemy());
        this.log = [];
    }

    _defaultEnemy() {
        const lycanrocData = pokeStats.lycanroc || {}; 
        
        return {
            name: lycanrocData.name || 'Wild Lycanroc',
            level: 50,
            baseStats: { 
                hp: lycanrocData.hp, atk: lycanrocData.atk, def: lycanrocData.def, 
                spatk: lycanrocData.spatk, spdef: lycanrocData.spdef, spd: lycanrocData.spd 
            },
            // MUST be present for damage calc
            types: lycanrocData.types || ['Normal'], 
            moves: [ 
                { name: 'Tackle', power: 40, type: 'Normal', category: 'Physical' },
                { name: 'Bite', power: 60, type: 'Dark', category: 'Physical' }
            ],
            photo: lycanrocData.photo 
        };
    }

    _buildCombatant(raw) {
        const level = raw.level || 50;
        const base = raw.baseStats || raw.stats || raw; 
        
        // Stat Calculation
        const stats = {
            level,
            hp: calculateFinalStat(base.hp, level, true), 
            atk: calculateFinalStat(base.atk || base.attack, level),
            def: calculateFinalStat(base.def || base.defense, level),
            spAtk: calculateFinalStat(base.spatk || base.sp_attack, level),
            spDef: calculateFinalStat(base.spdef || base.sp_defense, level),
            spd: calculateFinalStat(base.spd || base.speed, level),
        };

        const maxHP = stats.hp; 

        return {
            name: raw.name || 'Unknown',
            level,
            stats, 
            currentHP: maxHP,
            maxHP,
            moves: raw.moves || [],
            photo: raw.photo,
            // CRITICAL: Ensure types are passed through
            types: raw.types || [], 
        };
    }

    calculateDamage(move, attacker, defender) {
        const safeCalc = damageCalculations?.calculate;
        
        if (safeCalc) {
            const dmg = safeCalc(attacker, defender, move); 
            // Ensures damage is properly floored and can be 0 if resisted
            return Math.max(0, Math.floor(dmg)); 
        }

        // Fallback calculation (if damageCalculations.js is missing or broken)
        // ... (Your existing fallback logic) ...
        const L = attacker.level;
        const P = move.power || 40;
        const A = move.category === 'Special' ? attacker.stats.spAtk : attacker.stats.atk;
        const D = move.category === 'Special' ? defender.stats.spDef : defender.stats.def;
        const dmg = Math.floor(((2 * L) / 5 + 2) * P * (A / Math.max(1, D)) / 50) + 2;
        return Math.max(1, dmg);
    }

    attack(side, index) {
        const attacker = side === 'player' ? this.player : this.enemy;
        const defender = side === 'player' ? this.enemy : this.player;

        const move = attacker.moves[index];
        if (!move) throw new Error('Invalid move index');

        const damage = this.calculateDamage(move, attacker, defender);
        defender.currentHP = Math.max(0, defender.currentHP - damage);

        const entry = {
            who: attacker.name, move: move.name, damage, 
            target: defender.name, targetRemainingHP: defender.currentHP, 
            fainted: defender.currentHP === 0
        };

        this.log.push({ move: `${attacker.name} used ${move.name}, dealing ${damage} damage!` });
        if (entry.fainted) {
            this.log.push({ move: `${defender.name} fainted!` });
        }
        return entry;
    }

    performEnemyTurn() {
        if (this.enemy.currentHP <= 0 || this.player.currentHP <= 0) return null;
        const moves = this.enemy.moves;
        if (!moves.length) return null;
        const idx = Math.floor(Math.random() * moves.length);
        return this.attack('enemy', idx);
    }

    getState() {
        return {
            player: this._view(this.player),
            enemy: this._view(this.enemy),
            log: [...this.log]
        };
    }

    _view(c) {
        return {
            name: c.name, level: c.level, currentHP: c.currentHP, maxHP: c.maxHP,
            moves: c.moves.map(m => ({
                name: m.name, power: m.power, type: m.type, category: m.category 
            })),
            photo: c.photo 
        };
    }
}