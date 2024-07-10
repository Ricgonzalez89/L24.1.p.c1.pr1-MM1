export default class Cl_articulo{
    constructor(c){
        this.costo = +c;
    }

    set costo(c){
        this._costo = +c;
    }

    get costo(){
        return this._costo;
    }

    calcGanancia(){
        return this.costo * 0.50;
    }
}