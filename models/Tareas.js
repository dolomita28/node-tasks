const Tarea = require("./Tarea");

/**
 * _listado almacenará las Tareas
 * inicialmente podría considerarse como un array pero lo vamos a montar como objetos
 * 'c085af92-f10c-4dee-98a1-840f977fe187': Tarea {
    id: 'c085af92-f10c-4dee-98a1-840f977fe187',
    desc: 'Comprar comida',
    completadoEn: null
  }
 */
class Tareas {

    _listado = {}

    constructor() {
        this._listado = {};
    }

    crearTarea(desc){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}
module.exports = Tareas;