import { Point } from "./point.js";
import { Troispoint } from "./troispoint.js";

//création de deux points
const p1 = new Point(2, 3);
const p2 = new Point(8, 7);

//affichage des coordonnées des points
console.log("Coordonnées du point 1 : (" + p1.getAbs() + ", " + p1.getOrd() + ")");
console.log("Coordonnées du point 2 : (" + p2.getAbs() + ", " + p2.getOrd() + ")");

//test des méthodes de la classe Point
console.log("Distance entre p1 et p2 : " + p1.calculerDistance(p2));
const milieu = p1.calculerMilieu(p2);
console.log("Milieu entre p1 et p2 : (" + milieu.getAbs() + ", " + milieu.getOrd() + ")");
console.log("distance statique entre (1,1) et (4,5) : " + Point.distance(1, 1, 4, 5));

//test des méthodes de la classe Troispoint
const p3 = new Point(5, 11);
console.log("Coordonnées du point 3 : (" + p3.getAbs() + ", " + p3.getOrd() + ")");
const triangle = new Troispoint(p1, p2, p3);
console.log("Les trois points sont alignés : " + triangle.TesterAlignement());
console.log("Le triangle formé par les trois points est isocèle : " + triangle.estisoceles());
//exemple avec des points alignés
const p4 = new Point(4, 5);
const p5 = new Point(6, 7);
const p6 = new Point(8, 9); 
const triangle2 = new Troispoint(p4, p5, p6);
console.log("Les trois points sont alignés : " + triangle2.TesterAlignement());
console.log("Le triangle formé par les trois points est isocèle : " + triangle2.estisoceles());
