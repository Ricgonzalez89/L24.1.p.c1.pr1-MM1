/*1. En una bodega se tiene el costo de varios artículos y se le piensa sacar a cada uno el 50%...
|*   Hacer un programa que calcule el total de ganancia que tendrá la bodega al venderlos todos.
|*   Ej.: Costo de varios artículos: 10, 20, 14, 6 y 4.
|*   Salida: La ganancia será de Bs.27
*/
import Cl_articulo from "./Cl_articulo.js";
import Cl_bodega from "./Cl_bodega.js";

let art1 = new Cl_articulo(10);
let art2 = new Cl_articulo(20);
let art3 = new Cl_articulo(14);
let art4 = new Cl_articulo(6);
let art5 = new Cl_articulo(4);
let bodega = new Cl_bodega();

bodega.procesarArtículo(art1);
bodega.procesarArtículo(art2);
bodega.procesarArtículo(art3);
bodega.procesarArtículo(art4);
bodega.procesarArtículo(art5);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>La ganancia será de Bs.${bodega.devolverGananciaTotal()}
`;