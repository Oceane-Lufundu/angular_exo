import { Point } from "./point";
export class Troispoint {
    //intialisation des trois points
    private premier: Point;
    private deuxieme: Point;
    private troisieme: Point;   
    //constructeur
    constructor(premier: Point, deuxieme: Point, troisieme: Point){
        this.premier = premier;
        this.deuxieme = deuxieme;
        this.troisieme = troisieme;
    }
    getPremier(): Point{ //getter premier
        return this.premier;
    }
    getDeuxieme(): Point{ //getter deuxieme
        return this.deuxieme;
    }   
    getTroisieme(): Point{//getter troisieme
        return this.troisieme;
    }
    setPremier(premier: Point): void{ //setter premier
        this.premier = premier;
    }
    setDeuxieme(deuxieme: Point): void{//setter deuxieme
        this.deuxieme = deuxieme;
    }   
    setTroisieme(troisieme: Point): void{//setter troisieme
        this.troisieme = troisieme;
    }
    TesterAlignement(): boolean{
        //vérifie si les trois points sont alignés
        let distanceAB = this.premier.calculerDistance(this.deuxieme);
        let distanceBC = this.deuxieme.calculerDistance(this.troisieme);
        let distanceAC = this.premier.calculerDistance(this.troisieme);
        return  Math.abs((distanceAB + distanceBC) - distanceAC) < 1e-10 ||
                Math.abs((distanceAB + distanceAC) - distanceBC) < 1e-10 ||
                Math.abs((distanceAC + distanceBC) - distanceAB) < 1e-10;
        //retourne true si les trois points sont alignés, false sinon
    }
    estisoceles(): boolean{
        //vérifie si le triangle formé par les trois points est isocèle
        let distanceAB = this.premier.calculerDistance(this.deuxieme);
        let distanceBC = this.deuxieme.calculerDistance(this.troisieme);
        let distanceAC = this.premier.calculerDistance(this.troisieme);
        return distanceAB === distanceBC || distanceAB === distanceAC || distanceBC === distanceAC;
        //retourne true si le triangle est isocèle, false sinon
    }
    
}