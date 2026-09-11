# 🔎 Jour 04 — Recherche

[← Tableau de bord](./README.md) · [Exercices guidés →](./02-guides.md)

> [!NOTE]
> Le but n'est pas de copier une définition. Prépare une explication simple et un exemple personnel.

## Mode d'emploi

1. Recherche la notion.
2. Reformule la réponse avec tes propres mots.
3. Ajoute un petit exemple lorsque c'est possible.
4. Coche la question une fois que tu peux l'expliquer sans lire.

## Questions


### Question 01

> En JavaScript, le premier élément d'un tableau se trouve à quel index ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

0

---

### Question 02

> Quelle est la différence entre les méthodes `.push()` et `.unshift()` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

push ajoute un element au dernier de tableaux, unshift ajouter un element au premier de tableau

---

### Question 03

> Quelle est la différence entre `.pop()` et `.shift()` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

pop effacer un element au dernier de tableau et shift effacer un element au premier de tableau

---

### Question 04

> Que retourne la propriété `.length` d'un tableau vide `[]` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

calculer combien d'element ilya dans le tableuax
---

### Question 05

> Quelle est la différence entre une boucle `for...in` et une boucle `for...of` ? Laquelle est recommandée pour parcourir les *valeurs* d'un tableau ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

for in recuperer les indices, for of recuperer les valeur directement. la bonne pratique est d'utiliser for...of

---

### Question 06

> Comment vérifier si une variable est bien un tableau (puisque `typeof []` renvoie `"object"`) ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

le methode pour verifier si une variabke est bien un tableux c'est utiliser Array.isArray().

---

### Question 07

> Quelle méthode utiliseriez-vous pour fusionner deux tableaux en un seul ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

le methode modern pur fusionner deux tableaux en un seul est utiliser ...
ex:

 const a = [1,2,3]
 const b = [4,5,6]

 const c = [...a, ...b] // [1,2,3,4,5,6]

---

### Question 08

> Quelle est la différence entre `.slice()` et `.splice()` lors de la manipulation d'un tableau ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

slice ne modifier pas le tableu original, splice modifier le tableu original

---

### Question 09

> Les tableaux en JavaScript sont-ils passés par *valeur* ou par *référence* lorsqu'ils sont assignés à une nouvelle variable ?

- [] J'ai recherché et compris la notion.

**Ma réponse :**

les tableux sont passes par reference.

---

### Question 10

> Peut-on stocker des types différents dans un même tableau en JS (ex: nombres, strings, booléens en même temps) ? Est-ce une bonne pratique ?

- []] J'ai recherché et compris la notion.

**Ma réponse :**

c'est possible mais n'est pas pratique.


## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
