import {Stagiaire} from "./stagiaire";
import {Formation} from "./formation";
export class Main{

public static main():void{
        console.log("Démarrage du programme");
        //creation des stagiaires
        const stagiaire1=new Stagiaire("Alice",[12,15,14]);
        const stagiaire2=new Stagiaire("Bob",[10,8,9]);
        const stagiaire3=new Stagiaire("Charlie",[16,18,17]);
        const stagiaire4=new Stagiaire("David",[14,13,15]);
        const stagiaire5=new Stagiaire("Eve",[11,12,10]);

        //creation de la formation
        const listeStagiaires: Stagiaire[]=[stagiaire1,stagiaire2,stagiaire3,stagiaire4,stagiaire5];
        const formation=new Formation("TypeScript",90,listeStagiaires);

        //affichager resultat
        console.log("\n: INFORMATION GENERALES :");
        console.log(`Formation: ${formation.intitule}`);
        console.log(`Durée ${formation.nbrjour}jours`);
        console.log(`Nombre de stagiaire : ${formation.Stagiaire.length}`);

        console.log("\n: STATISTIQUE :");
        console.log(`La moyenne de la formation est : ${formation.calculerMoyenneFormation().toFi}`);

        formation.Stagiaire.forEach((_stagiaire, index) => {
            console.log(`${index + 1}. ${_stagiaire.nom} - Notes: ${_stagiaire.notes.join(", ")} - Moyenne: ${_stagiaire.calculerMoyenne().toFixed(2)}`);
}
}












/*// Afficher la moyenne de la formation
console.log(`La moyenne de la formation est : ${formation.calculerMoyenneFormation()}`);
// Afficher le nom du stagiaire avec la moyenne la plus élevée
console.log(`Le stagiaire avec la moyenne la plus élevée est : ${formation.afficherNomMax()}`);
// Afficher le nom du stagiaire avec la note minimale et maximale
console.log(formation.afficherMinMax());
// Trouver la moyenne d'un stagiaire par son nom
console.log(`La moyenne de Bob est : ${formation.trouverMoyenneParNom("Bob")}`);
// Essayer de trouver la moyenne d'un stagiaire qui n'existe pas
console.log(formation.trouverMoyenneParNom("Zoe"));*/
}