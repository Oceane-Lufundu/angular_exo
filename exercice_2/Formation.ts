import { Stagiaire } from "./Stagiaire.js";
class Formation {
    //attributs
    private _intitule: string;
    private _nbrjour : number;
    private _Stagiaire : Stagiaire[];

    //constructeur
    constructor(intitule: string, nbrjour: number, Stagiaire: Stagiaire[]) {
        this._intitule = intitule;
        this._nbrjour = nbrjour;
        this._Stagiaire = Stagiaire;
    }

    //getters et setters
    get intitule(): string {
        return this._intitule;
    }
    get nbrjour(): number {
        return this._nbrjour;
    }
    set intitule(intitule: string) {
        this._intitule = intitule;
    }
    set nbrjour(nbrjour: number) {
        this._nbrjour = nbrjour;
    }
    get Stagiaire(): Stagiaire[] {
        return this._Stagiaire;
    }
    set Stagiaire(Stagiaire: Stagiaire[]) {
        this._Stagiaire = Stagiaire;
    }
    
    //methode calculer la moyenne de la formation
    public calculeMoyenneFormation(): number {
        if(this._Stagiaire.length === 0) return 0;
        const sommeMoy = this._Stagiaire.reduce((acc, _stagiaire) => acc + _stagiaire.calculerMoyenne(), 0);
        return sommeMoy / this._Stagiaire.length;
    }

    //methode pour trouver l'index du stagiaire ayant la note maximale
    public getIndexMax(): number {
        if(this._Stagiaire.length === 0) return -1;
        let indexMax = 0;
        let maxMoyenne= this._Stagiaire[0].calculerMoyenne();
        for (let i = 1; i < this._Stagiaire.length; i++) {
            const moyenneActuelle=this._Stagiaire[i].calculerMoyenne();
            if (moyenneActuelle>maxMoyenne) {
                maxMoyenne=moyenneActuelle
                indexMax = i;
            }
        }
        return indexMax;
    }

    //methode pour afficher le nom du premier stagiaire ayant la meilleure moyenne d’une formation.
    public afficherNomMax(): void {
        const indexMax = this.getIndexMax();
        if (indexMax !== -1){
            console.log(`Le stagiaire ayant la meilleure moyenne est : ${this._Stagiaire[indexMax].nom}avec la moyenne de ${this._Stagiaire[indexMax].calculerMoyenne()}`);
        }
    else{
        console.log("Aucun stagiaire dans la formation.");
    }
    }

    //methode pour afficher la note minimale du premier stagiaire ayant la meilleure moyenne d’une formation.
    public afficherMinMax(): void {
        const indexMax = this.getIndexMax();
        if (indexMax!== -1){
            const meilleureStagiaire = this._Stagiaire[indexMax];
            const noteMin =meilleureStagiaire.trouverMin();
            console.log(`La note minimale du meilleur stagiaire: ${meilleureStagiaire.nom}est ${noteMin}`);
        }
    else{
        console.log("Aucun stagiaire dans la formation.");
    }
}

//methode qui affiche la moyenne du premier stagiaire dont le nom est passé en paramètre.
public trouverMoyenneParNom(nom:string): void{
    const stagiaireTrouve = this._Stagiaire.find(stagiaire =>stagiaire.nom.toLowerCase());
        if (stagiaireTrouve){
            console.log(`La moyenne de ${nom}est :  ${stagiaireTrouve.calculerMoyenne().toFixed(2)}`);
        }
    else{
        console.log(`Le stagiaire ${nom}est introuvable`);
    }
}
}
