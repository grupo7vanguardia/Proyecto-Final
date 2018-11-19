var mongoose = require('mongoose');
 

var Schema = mongoose.Schema;
 
var CalificacionSchema = Schema({
    _id: number,
    idAlumno:number,
    idExamen:number,
    nota:number,
    fechaExamen: Date
});
 
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Calificacion', CalificacionSchema);