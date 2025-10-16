"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Troispoint = void 0;
var Troispoint = /** @class */ (function () {
    function Troispoint(premier, deuxieme, troisieme) {
        this.premier = premier;
        this.deuxieme = deuxieme;
        this.troisieme = troisieme;
    }
    Troispoint.prototype.getPremier = function () {
        return this.premier;
    };
    Troispoint.prototype.getDeuxieme = function () {
        return this.deuxieme;
    };
    Troispoint.prototype.getTroisieme = function () {
        return this.troisieme;
    };
    Troispoint.prototype.setPremier = function (premier) {
        this.premier = premier;
    };
    Troispoint.prototype.setDeuxieme = function (deuxieme) {
        this.deuxieme = deuxieme;
    };
    Troispoint.prototype.setTroisieme = function (troisieme) {
        this.troisieme = troisieme;
    };
    Troispoint.prototype.TesterAlignement = function () {
        //vérifie si les trois points sont alignés
        var distanceAB = this.premier.calculerDistance(this.deuxieme);
        var distanceBC = this.deuxieme.calculerDistance(this.troisieme);
        var distanceAC = this.premier.calculerDistance(this.troisieme);
        return Math.abs((distanceAB + distanceBC) - distanceAC) < 1e-10 ||
            Math.abs((distanceAB + distanceAC) - distanceBC) < 1e-10 ||
            Math.abs((distanceAC + distanceBC) - distanceAB) < 1e-10;
        //retourne true si les trois points sont alignés, false sinon
    };
    Troispoint.prototype.estisoceles = function () {
        //vérifie si le triangle formé par les trois points est isocèle
        var distanceAB = this.premier.calculerDistance(this.deuxieme);
        var distanceBC = this.deuxieme.calculerDistance(this.troisieme);
        var distanceAC = this.premier.calculerDistance(this.troisieme);
        return distanceAB === distanceBC || distanceAB === distanceAC || distanceBC === distanceAC;
        //retourne true si le triangle est isocèle, false sinon
    };
    return Troispoint;
}());
exports.Troispoint = Troispoint;
