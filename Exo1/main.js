"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_js_1 = require("./point.js");
var troispoint_js_1 = require("./troispoint.js");
var p1 = new point_js_1.Point(2, 3);
var p2 = new point_js_1.Point(8, 7);
console.log("Coordonnées du point 1 : (" + p1.getAbs() + ", " + p1.getOrd() + ")");
console.log("Coordonnées du point 2 : (" + p2.getAbs() + ", " + p2.getOrd() + ")");
//test des méthodes de la classe Point
console.log("Distance entre p1 et p2 : " + p1.calculerDistance(p2));
var milieu = p1.calculerMilieu(p2);
console.log("Milieu entre p1 et p2 : (" + milieu.getAbs() + ", " + milieu.getOrd() + ")");
console.log("distance statique entre (1,1) et (4,5) : " + point_js_1.Point.distance(1, 1, 4, 5));
//test des méthodes de la classe Troispoint
var p3 = new point_js_1.Point(5, 11);
console.log("Coordonnées du point 3 : (" + p3.getAbs() + ", " + p3.getOrd() + ")");
var triangle = new troispoint_js_1.Troispoint(p1, p2, p3);
console.log("Les trois points sont alignés : " + triangle.TesterAlignement());
console.log("Le triangle formé par les trois points est isocèle : " + triangle.estisoceles());
//exemple avec des points alignés
var p4 = new point_js_1.Point(4, 5);
var p5 = new point_js_1.Point(6, 7);
var p6 = new point_js_1.Point(8, 9);
var triangle2 = new troispoint_js_1.Troispoint(p4, p5, p6);
console.log("Les trois points sont alignés : " + triangle2.TesterAlignement());
console.log("Le triangle formé par les trois points est isocèle : " + triangle2.estisoceles());
