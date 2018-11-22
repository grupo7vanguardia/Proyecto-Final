var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;
 
var CalificacionSchema = Schema({
    
    alumno: {
        type: mongoose.Schema.ObjectId,
        ref: 'Alumno',
    },
    nota: {
        type: Number
    }

});
 
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Calificacion', CalificacionSchema);