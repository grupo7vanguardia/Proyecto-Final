var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;
 
var CalificacionSchema = Schema({
    
    alumno: {
        type: mongoose.Schema.ObjectId,
        ref: 'Alumno',
    },
    nota: {
        type: Number
    },
    fecha_realizado: {
        type: Date,
        default: Date.now()
    }

});
 
module.exports = mongoose.model('Calificacion', CalificacionSchema);