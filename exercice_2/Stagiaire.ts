export class Stagiaire {

    //attribut
    private _nom: string;
    private _notes: number[];

    // constructeur
    constructor(nom: string, notes: number[]) {
        this._nom = nom;
        this._notes = notes;
    }

    // getter et setter
    public get nom(): string {
        return this.nom;
    }
    public get notes(): number[] {
        return this.notes;
    }
    public set nom(nom: string) {
        this.nom = nom;
    }
    public set notes(notes: number[]){
        this.notes = notes;
    }

    // methodes
    public calculerMoyenne(): number {
        if(this.notes.length==0) return 0;
        const somme =this.notes.reduce((acc,notes)=>acc+notes,0) //acc= acumulateur
            return somme/this.notes.length;
        }

    public trouverMax(): number {
        if(this.nom.length==0) return 0;
            return Math.max(...this.notes);
        }

    public trouverMin(): number {
        if(this.nom.length==0) return 0;
            return Math.min(...this.notes);
        }
}


