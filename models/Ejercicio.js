var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;
 
var EjercicioSchema = Schema({
    
    pregunta: String, 
    índice: Number,
    respuesta: String,
    respuestaCorrecta: Number

});
 
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Ejercicio', EjercicioSchema);