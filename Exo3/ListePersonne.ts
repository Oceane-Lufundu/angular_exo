import { personne } from "./Personne";
export class ListePersonne{

    //attribut
    private _personnes:personne[];

    //constructeur
    constructor(personnes:personne[]=[]){
        this._personnes=personnes;
    }

    //getters et setters
    get personnes():personne[]{
        return this._personnes;
    }
    set personnes(personnes:personne[]){
        this._personnes=personnes;
    }

    //methodes
    public ajouterPersonne(unePersonne:personne):void{
        this._personnes.push (unePersonne);
    }

    //afficher la liste des personnes
    public afficherPersonnes():void{
        this._personnes.forEach(personne => {
            console.log(personne.getInfoComplete());
        });
    }

    //rechercher une personne par son nom
    public findByNom(nom:string):personne | undefined{
        if (!nom||this._personnes.length===0){
            return undefined;
        }
    const resultat=this._personnes.find(personne => personne.nom.toLowerCase()===nom.toLowerCase());
    return resultat;
    }

    //rechercher une personne par son code postal
    public findByCodePostal(codePostal:string){
        if (!codePostal||this._personnes.length===0){
            return undefined;
        }
    const resultat=this._personnes.filter(personne => personne.adresse.some(adresse => adresse.getCodePostal()===codePostal));
    return resultat;
    }

    //compter le nombre de personnes habitant dans une ville donnée
    public countPersonneVille(ville: string): number {
    if (!ville || this._personnes.length === 0) {
        return 0;
    }

    let count = 0;
    for (const personne of this._personnes) {
        const aUneAdresseDansVille = personne.adresse.some(
            adresse => adresse.getVille().toLowerCase() === ville.toLowerCase()
        );
        if (aUneAdresseDansVille) {
            count++;
        }
    }
    return count;
    }

    //modifier le nom d'une personne
    public editPersonneNom(oldNom: string, newNom: string): void {
        if (!oldNom || !newNom || this._personnes.length === 0) {
            return;
        }

        this._personnes.forEach(personne => {
            if (personne.nom.toLowerCase() === oldNom.toLowerCase()) {
                personne.nom = newNom;
            }
        });
    }

    //modifier la ville d'une personne
    public editPersonneVille(nom: string, newVille: string): void {
    if (!nom || !newVille || this._personnes.length === 0) {
        return;
    }

    this._personnes.forEach(personne => {
        if (personne.nom.toLowerCase() === nom.toLowerCase()) {
            personne.adresse.forEach(adresse => {
                adresse.setVille(newVille);
            });
        }
    });
    }
}