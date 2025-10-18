import { personne } from "./Personne";
export class ListePersonne{

    private _personnes:personne[];

    constructor(personnes:personne[]=[]){
        this._personnes=personnes;
    }
    get personnes():personne[]{
        return this._personnes;
    }
    set personnes(personnes:personne[]){
        this._personnes=personnes;
    }

    public ajouterPersonne(unePersonne:personne):void{
        this._personnes.push (unePersonne);
    }

    public afficherPersonnes():void{
        this._personnes.forEach(personne => {
            console.log(personne.getInfoComplete());
        });
    }

    public findByNom(nom:string):personne | undefined{
        if (!nom||this._personnes.length===0){
            return undefined;
        }
    const resultat=this._personnes.find(personne => personne.nom.toLowerCase()===nom.toLowerCase());
    return resultat;
    }
}