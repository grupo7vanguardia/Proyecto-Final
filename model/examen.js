var mongoose = require('mongoose');
 

var Schema = mongoose.Schema;
 
///REVISAR
var ExamenSchema = Schema({
    _id: number,
    idCurso:number,
    Preguntas: {pregunta:String, opciones:{indice:number,respuesta:String},respuestaCorrecta:number}
});
 
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Examen', ExamenSchema);