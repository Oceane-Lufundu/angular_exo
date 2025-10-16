import { Stagiaire } from "./stagiaire.js";
import{ Formation} from"./formation.js";
export class main {

    public static main():void{
        const formation= main.initialiserDonnees();
    }


    
// Créer des instances de Stagiaire
let stagiaire1=new Stagiaire("Alice",[12,15,14]);
let stagiaire2=new Stagiaire("Bob",[10,8,9]);
let stagiaire3=new Stagiaire("Charlie",[16,18,17]);
let stagiaire4=new Stagiaire("David",[14,13,15]);
let stagiaire5=new Stagiaire("Eve",[11,12,10]);
// Créer une liste de stagiaires
let listeStagiaires: Stagiaire[]=[stagiaire1,stagiaire2,stagiaire3,stagiaire4,stagiaire5];
let formation=new Formation("TypeScript",5,listeStagiaires);

// Afficher la moyenne de la formation
console.log(`La moyenne de la formation est : ${formation.calculerMoyenneFormation()}`);
// Afficher le nom du stagiaire avec la moyenne la plus élevée
console.log(`Le stagiaire avec la moyenne la plus élevée est : ${formation.afficherNomMax()}`);
// Afficher le nom du stagiaire avec la note minimale et maximale
console.log(formation.afficherMinMax());
// Trouver la moyenne d'un stagiaire par son nom
console.log(`La moyenne de Bob est : ${formation.trouverMoyenneParNom("Bob")}`);
// Essayer de trouver la moyenne d'un stagiaire qui n'existe pas
console.log(formation.trouverMoyenneParNom("Zoe"));
}