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
        const listeStagiaires: Stagiaire[]=[stagiaire1,stagiaire2,stagiaire3];
        const formation=new Formation("TypeScript",90,listeStagiaires);

        //affichager resultats
        console.log("\n: INFORMATION GENERALES :");
        console.log(`Formation: ${formation.intitule}`);
        console.log(`Durée ${formation.nbrjour} jours`);
        console.log(`Nombre de stagiaire : ${formation.Stagiaire.length}`);

        console.log("\n: STATISTIQUE :");
        console.log(`Moyenne de la formation: ${formation.calculeMoyenneFormation().toFixed(2)}`);

        formation.Stagiaire.forEach((_stagiaire, index) => {
            console.log(`${index + 1}. ${_stagiaire.nom} - Notes: ${_stagiaire.notes.join(", ")} - Moyenne: ${_stagiaire.calculerMoyenne().toFixed(2)}`);});
    }
}











