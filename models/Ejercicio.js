var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;
 
var EjercicioSchema = Schema({
    
    pregunta: {
        type: String
    }, 
    índice: {
        type: Number
    },
    respuesta: {
        type: String
    },
    respuestaCorrecta: {
        type: Number
    }

});
 
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Ejercicio', EjercicioSchema);