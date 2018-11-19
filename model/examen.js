var mongoose = require('mongoose');
 

var Schema = mongoose.Schema;
 
///REVISAR
var ExamenSchema = Schema({
    _id: Number,
    idCurso:Number,
    Preguntas: {pregunta:String, opciones:{indice:Number,respuesta:String},respuestaCorrecta:Number}
});
 
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Examen', ExamenSchema);