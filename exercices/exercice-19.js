/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * RECHERCHE BINAIRE (CONCEPT DE BASE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Contrairement à la recherche linéaire (parcourir tout le tableau un par un), la recherche binaire cherche un élément dans un tableau TRIÉ en coupant l'espace de recherche en deux à chaque fois. Essayez de comprendre et d'implémenter ce concept pour trouver l'index de 45 dans [10, 20, 30, 40, 45, 50, 60].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day04/exercices/exercice-19.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

const arr = [10, 20, 30, 40, 45, 50, 60];
const target = 45;

let start = 0;
let end = arr.length;

while (start <= end) {
    let mid = Math.floor((start + end)/2);

    if ( target === arr[mid]) {
        console.log(`Found ${target} at index ${mid}`);
        break;
    } else if (arr[mid] < target){
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}