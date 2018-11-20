var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;
 
var CalificacionSchema = Schema({
    
    alum: {
        type: mongoose.Schema.ObjectId,
        ref: 'Alumno',
    },
    nota: Number

});
 
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Calificacion', CalificacionSchema);