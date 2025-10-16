import { adresse } from "./Exo3/Adresse";

export class personne{
    private _nom:string;
    private _sexe:string;
    private _adresse:adresse;
    
    constructor(nom:string, sexe:string, adresse:string){
        this._nom=nom;
        this._sexe=sexe;
        this._adresse=adresse;
    }
    get nom():string{
        return this.nom;
    }
    get CodePostal():string{
        return this.codePostal;
    }
    getVille():string{
        return this.ville;
    }
    setRue(rue:string):void{
        this.rue=rue;
    }
    setCodePostal(codePostal:string):void{
        this.codePostal=codePostal;
    }
    setVille(ville:string):void{
        this.ville=ville;
    }

    public ajouterAdresse(rue:string, codePostal:string, ville:string):void{
        this._adresse.push (uneAdresse);
    }

    public getInfoComplete():string{
        const adresseStr = this._adresse.map(adresse => `${adresse.getRue()}, ${adresse.getCodePostal()}, ${adresse.getVille()}`).join(' | ');
}