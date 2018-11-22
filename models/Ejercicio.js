var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;
 
var EjercicioSchema = Schema({
    
    pregunta: {
        type: String
    },
    respuesta: {
        type: [String]
    },
    correcta: {
        type: Number
    }
});
 
module.exports = mongoose.model('Ejercicio', EjercicioSchema);