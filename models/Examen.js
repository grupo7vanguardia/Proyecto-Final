var mongoose = require('mongoose');
 

var Schema = mongoose.Schema;
 
var ExamenSchema = Schema({
    preguntas: {
        type: Object
    },
    calificacion: {
        type: Object
    },
    nivel: {
        type: Number
    }
});
 
module.exports = mongoose.model('Examen', ExamenSchema);