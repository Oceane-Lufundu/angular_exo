"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stagiaire_js_1 = require("./stagiaire.js");
var Formation_js_1 = require("./Formation.js");
// Créer des instances de Stagiaire
var stagiaire1 = new stagiaire_js_1.Stagiaire("Alice", [12, 15, 14]);
var stagiaire2 = new stagiaire_js_1.Stagiaire("Bob", [10, 8, 9]);
var stagiaire3 = new stagiaire_js_1.Stagiaire("Charlie", [16, 18, 17]);
var stagiaire4 = new stagiaire_js_1.Stagiaire("David", [14, 13, 15]);
var stagiaire5 = new stagiaire_js_1.Stagiaire("Eve", [11, 12, 10]);
// Créer une liste de stagiaires
var listeStagiaires = [stagiaire1, stagiaire2, stagiaire3, stagiaire4, stagiaire5];
var formation = new Formation_js_1.Formation("TypeScript", 5, listeStagiaires);
// Afficher la moyenne de la formation
console.log("La moyenne de la formation est : ".concat(formation.calculerMoyenneFormation()));
// Afficher le nom du stagiaire avec la moyenne la plus élevée
console.log("Le stagiaire avec la moyenne la plus \u00E9lev\u00E9e est : ".concat(formation.afficherNomMax()));
// Afficher le nom du stagiaire avec la note minimale et maximale
console.log(formation.afficherMinMax());
// Trouver la moyenne d'un stagiaire par son nom
console.log("La moyenne de Bob est : ".concat(formation.trouverMoyenneParNom("Bob")));
// Essayer de trouver la moyenne d'un stagiaire qui n'existe pas
console.log(formation.trouverMoyenneParNom("Zoe"));
