var mongoose = require('mongoose');
 

var Schema = mongoose.Schema;
 
///REVISAR
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
 
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Examen', ExamenSchema);