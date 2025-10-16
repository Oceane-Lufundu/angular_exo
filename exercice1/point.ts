
export class Point{
    private abs:number;
    private ord:number;

    constructor(abs:number, ord:number){ //constructeur objet Point
        this.abs = abs;
        this.ord = ord;
    }
    getAbs():number{ //getter abs
        return this.abs;
    }
    getOrd():number{ //getter ord   
        return this.ord;
    }
    setAbs(abs:number):void{ //setter abs
        this.abs = abs;
    }
    setOrd(ord:number):void{ //setter ord
        this.ord = ord;
    }

    calculerDistance(p: Point):number{
        //calcule la distance entre le point courant et le point p
        let distance = Math.sqrt(Math.pow((p.getAbs() - this.abs),2) + Math.pow((p.getOrd() - this.ord),2));
        return distance; //retourne la distance entre le point courant et le point p
    }
    static distance(x1:number, y1:number, x2:number, y2:number):number{
        //calcule la distance entre les points (x1, y1) et (x2, y2)
        return Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2)); 
        //retourne la distance entre les points (x1, y1) et (x2, y2)
    }
    calculerMilieu(p: Point): Point{
        //calcule le milieu entre le point courant et le point p
        let milieuAbs = (this.abs + p.getAbs()) / 2;
        let milieuOrd = (this.ord + p.getOrd()) / 2;
        //retourne le point milieu entre le point courant et le point p
        return new Point(milieuAbs, milieuOrd);
    }  
}

