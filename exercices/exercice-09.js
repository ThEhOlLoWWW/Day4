/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE MANUEL (LES PAIRS)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de nombres, par exemple [1, 2, 3, 4, 5, 6], et retourne un NOUVEAU tableau ne contenant que les nombres pairs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day04/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function myFunc(tableau){
    let nouveauTab = [];
    for (let num of tableau){
        if ( num % 2 === 0){
            nouveauTab.push(num);
        }
    }
    return nouveauTab;
}
const monTableau = [1, 2, 3, 4, 5, 6];
console.log(myFunc(monTableau));

