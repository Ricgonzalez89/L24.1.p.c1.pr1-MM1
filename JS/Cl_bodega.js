export default class Cl_bodega{
    constructor(){
        this.acumGanancia = 0;
    }

    procesarArtículo(a){
        //Acumular ganancia total por cada artículo
        this.acumGanancia += a.calcGanancia();
    }

    devolverGananciaTotal(){
        return this.acumGanancia;
    }
}