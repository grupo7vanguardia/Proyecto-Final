var mongoose = require('mongoose');
 

var Schema = mongoose.Schema;
 
var ExamenSchema = Schema({
    preguntas: {
        type: [mongoose.Schema.ObjectId],
        ref: 'Ejercicio',
    },
    calificacion: {
        type: [mongoose.Schema.ObjectId],
        ref: 'Calificacion',
    },
});
 
module.exports = mongoose.model('Examen', ExamenSchema);