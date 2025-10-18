export class adresse{
    
    //attribut
    private rue:string;
    private codePostal:string;
    private ville:string;
    
    //constructeur
    constructor(rue:string, codePostal:string, ville:string){
        this.rue=rue;
        this.codePostal=codePostal;
        this.ville=ville;
    }
    getRue():string{
        return this.rue;
    }
    getCodePostal():string{
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
}