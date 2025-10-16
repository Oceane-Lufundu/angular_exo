"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stagiaire = void 0;
var Stagiaire = /** @class */ (function () {
    function Stagiaire(nom, note) {
        this.nom = nom;
        this.note = note;
    }
    Stagiaire.prototype.getnom = function () {
        return this.nom;
    };
    Stagiaire.prototype.getnote = function () {
        return this.note;
    };
    Stagiaire.prototype.setnom = function (nom) {
        this.nom = nom;
    };
    Stagiaire.prototype.setnote = function (note) {
        this.note = note;
    };
    Stagiaire.prototype.calculerMoyenne = function () {
        var somme = 0;
        for (var i = 0; i < this.note.length; i++) {
            somme = somme + this.note[i];
        }
        return somme / this.note.length;
    };
    Stagiaire.prototype.trouvermax = function () {
        var max = this.note[0];
        for (var i = 1; i < this.note.length; i++) {
            if (this.note[i] > max) {
                max = this.note[i];
            }
        }
        return max;
    };
    Stagiaire.prototype.trouvermin = function () {
        var min = this.note[0];
        for (var i = 1; i < this.note.length; i++) {
            if (this.note[i] < min) {
                min = this.note[i];
            }
        }
        return min;
    };
    return Stagiaire;
}());
exports.Stagiaire = Stagiaire;
