import { adresse } from "./Adresse";
export class personne{

    //attribut
    private _nom:string;
    private _sexe:string;
    private _adresse:adresse;

    //constructeur
    constructor(nom:string, sexe:string, adresse: adresse){
        this._nom=nom;
        this._sexe=sexe;
        this._adresse=adresse;
    }
    
    //getters et setters
    get nom():string{
        return this.nom;
    }
    get sexe():string{
        return this._sexe;
    }
    get adresse():adresse[] {
        return this.adresse;
    }
    
    set nom(nom:string){
        this.nom= nom ;
    }
    set sexe(sexe:string){
        if (sexe !== 'M' && sexe !== 'F'){
            throw new Error("Le sexe doit être 'M' ou 'F'");
        }
        this._sexe=sexe;
    }
    set adresse(adresse: adresse[]){
        this.adresse= adresse;
    }

    //methodes
    public ajouterAdresse(uneAdresse: adresse):void{
        this.adresse.push(uneAdresse);
    }

    public getInfoComplete():string{
        const adresseStr = this.adresse.map(adresse => this.adresse.getAdresseComplete()).join(' | ');
        return `Nom: ${this._nom}, Sexe: ${this._sexe}, Adresses: [${adresseStr}]`;
    }
}