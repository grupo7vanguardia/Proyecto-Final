var mongoose = require('mongoose');
 

var Schema = mongoose.Schema;
 
var CalificacionSchema = Schema({
    _id: Number,
    idAlumno:Number,
    idExamen:Number,
    nota:Number,
    fechaExamen: Date
});
 
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Calificacion', CalificacionSchema);