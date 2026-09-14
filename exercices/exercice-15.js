/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * FUSION TRIÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez deux tableaux DÉJÀ triés : [1, 3, 5] et [2, 4, 6]. Écrivez un algorithme pour les fusionner en un seul tableau trié [1, 2, 3, 4, 5, 6] (sans utiliser .sort()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day04/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

const tab1 = [1, 3, 5]
const tab2 = [2, 4, 6]
const tab3 = []

while (tab1.length > 0 && tab2.length > 0){
    if (tab1[0] > tab2[0]){

        tab3.push(tab2.shift())
    } else {
        tab3.push(tab1.shift())


    }
}
tab3.push(...tab2, ...tab1); 
 
console.log(tab3);

