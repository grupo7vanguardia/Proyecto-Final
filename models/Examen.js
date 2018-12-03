var mongoose = require('mongoose');
 

var Schema = mongoose.Schema;
 
var ExamenSchema = Schema({
    preguntas: {
        type: Object
    },
    calificacion: {
        type: Object
    },
});
 
module.exports = mongoose.model('Examen', ExamenSchema);