"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formation = void 0;
var Formation = /** @class */ (function () {
    function Formation(intitule, nbrJours, stagiaires) {
        this.intitule = intitule;
        this.nbrJours = nbrJours;
        this.stagiaires = stagiaires;
    }
    Formation.prototype.getintitule = function () {
        return this.intitule;
    };
    Formation.prototype.getnbrJours = function () {
        return this.nbrJours;
    };
    Formation.prototype.setintitule = function (intitule) {
        this.intitule = intitule;
    };
    Formation.prototype.setnbrJours = function (nbrJours) {
        this.nbrJours = nbrJours;
    };
    Formation.prototype.calculerMoyenneFormation = function () {
        var somme = 0;
        for (var i = 0; i < this.stagiaires.length; i++) {
            somme = somme + this.stagiaires[i].calculerMoyenne();
        }
        return somme / this.stagiaires.length;
    };
    Formation.prototype.getIndexMax = function () {
        var max = this.stagiaires[0].calculerMoyenne();
        var indexmax = 0;
        for (var i = 1; i < this.stagiaires.length; i++) {
            if (this.stagiaires[i].calculerMoyenne() > max) {
                max = this.stagiaires[i].calculerMoyenne();
                indexmax = i;
            }
        }
        return indexmax;
    };
    Formation.prototype.afficherNomMax = function () {
        return this.stagiaires[this.getIndexMax()].getnom();
    };
    Formation.prototype.afficherMinMax = function () {
        var stagiaireMin = this.stagiaires[0];
        var stagiaireMax = this.stagiaires[0];
        for (var i = 1; i < this.stagiaires.length; i++) {
            if (this.stagiaires[i].trouvermin() < stagiaireMin.trouvermin()) {
                stagiaireMin = this.stagiaires[i];
            }
            if (this.stagiaires[i].trouvermax() > stagiaireMax.trouvermax()) {
                stagiaireMax = this.stagiaires[i];
            }
        }
        return "Le stagiaire qui a la note minimale est ".concat(stagiaireMin.getnom(), " avec une note de ").concat(stagiaireMin.trouvermin(), " et le stagiaire qui a la note maximale est ").concat(stagiaireMax.getnom(), " avec une note de ").concat(stagiaireMax.trouvermax());
    };
    Formation.prototype.trouverMoyenneParNom = function (nom) {
        for (var i = 0; i < this.stagiaires.length; i++) {
            if (this.stagiaires[i].getnom() === nom) {
                return this.stagiaires[i].calculerMoyenne();
            }
        }
        return "Stagiaire non trouvé";
    };
    return Formation;
}());
exports.Formation = Formation;
