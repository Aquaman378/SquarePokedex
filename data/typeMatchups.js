// components/typeMatchups.js
import { pokeStats } from '../data/lycanrocks';

export const TYPE_MATCHUPS = {
  'Normal': {
    superEffective: {},
    notEffective: { 'Rock': 0.5, 'Steel': 0.5 },
    noEffect: { 'Ghost': 0 }
  },
  'Fire': {
    superEffective: { 'Grass': 2, 'Ice': 2, 'Bug': 2, 'Steel': 2 },
    notEffective: { 'Fire': 0.5, 'Water': 0.5, 'Rock': 0.5, 'Dragon': 0.5 },
    noEffect: {}
  },
  'Water': {
    superEffective: { 'Fire': 2, 'Ground': 2, 'Rock': 2 },
    notEffective: { 'Water': 0.5, 'Grass': 0.5, 'Dragon': 0.5 },
    noEffect: {}
  },
  'Electric': {
    superEffective: { 'Water': 2, 'Flying': 2 },
    notEffective: { 'Electric': 0.5, 'Grass': 0.5, 'Dragon': 0.5 },
    noEffect: { 'Ground': 0 }
  },
  'Grass': {
    superEffective: { 'Water': 2, 'Ground': 2, 'Rock': 2 },
    notEffective: { 'Fire': 0.5, 'Grass': 0.5, 'Poison': 0.5, 'Flying': 0.5, 'Bug': 0.5, 'Dragon': 0.5, 'Steel': 0.5 },
    noEffect: {}
  },
  'Ice': {
    superEffective: { 'Grass': 2, 'Ground': 2, 'Flying': 2, 'Dragon': 2 },
    notEffective: { 'Fire': 0.5, 'Water': 0.5, 'Ice': 0.5, 'Steel': 0.5 },
    noEffect: {}
  },
  'Fighting': {
    superEffective: { 'Normal': 2, 'Ice': 2, 'Rock': 2, 'Dark': 2, 'Steel': 2 },
    notEffective: { 'Poison': 0.5, 'Flying': 0.5, 'Psychic': 0.5, 'Bug': 0.5, 'Fairy': 0.5 },
    noEffect: { 'Ghost': 0 }
  },
  'Poison': {
    superEffective: { 'Grass': 2, 'Fairy': 2 },
    notEffective: { 'Poison': 0.5, 'Ground': 0.5, 'Rock': 0.5, 'Ghost': 0.5 },
    noEffect: { 'Steel': 0 }
  },
  'Ground': {
    superEffective: { 'Fire': 2, 'Electric': 2, 'Poison': 2, 'Rock': 2, 'Steel': 2 },
    notEffective: { 'Grass': 0.5, 'Bug': 0.5 },
    noEffect: { 'Flying': 0 }
  },
  'Flying': {
    superEffective: { 'Grass': 2, 'Fighting': 2, 'Bug': 2 },
    notEffective: { 'Electric': 0.5, 'Rock': 0.5, 'Steel': 0.5 },
    noEffect: {}
  },
  'Psychic': {
    superEffective: { 'Fighting': 2, 'Poison': 2 },
    notEffective: { 'Psychic': 0.5, 'Steel': 0.5 },
    noEffect: { 'Dark': 0 }
  },
  'Bug': {
    superEffective: { 'Grass': 2, 'Psychic': 2, 'Dark': 2 },
    notEffective: { 'Fighting': 0.5, 'Flying': 0.5, 'Poison': 0.5, 'Ghost': 0.5, 'Steel': 0.5, 'Fire': 0.5, 'Fairy': 0.5 },
    noEffect: {}
  },
  'Rock': {
    superEffective: { 'Fire': 2, 'Ice': 2, 'Flying': 2, 'Bug': 2 },
    notEffective: { 'Fighting': 0.5, 'Ground': 0.5, 'Steel': 0.5 },
    noEffect: {}
  },
  'Ghost': {
    superEffective: { 'Psychic': 2, 'Ghost': 2 },
    notEffective: { 'Dark': 0.5 },
    noEffect: { 'Normal': 0 }
  },
  'Dragon': {
    superEffective: { 'Dragon': 2 },
    notEffective: { 'Steel': 0.5 },
    noEffect: { 'Fairy': 0 }
  },
  'Steel': {
    superEffective: { 'Ice': 2, 'Rock': 2, 'Fairy': 2 },
    notEffective: { 'Fire': 0.5, 'Water': 0.5, 'Electric': 0.5, 'Steel': 0.5 },
    noEffect: {}
  },
  'Dark': {
    superEffective: { 'Psychic': 2, 'Ghost': 2 },
    notEffective: { 'Fighting': 0.5, 'Dark': 0.5, 'Fairy': 0.5 },
    noEffect: {}
  },
  'Fairy': {
    superEffective: { 'Fighting': 2, 'Dragon': 2, 'Dark': 2 },
    notEffective: { 'Fire': 0.5, 'Poison': 0.5, 'Steel': 0.5 },
   noEffect: {}
  }
};