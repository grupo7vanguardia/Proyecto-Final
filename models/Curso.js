var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;
 
var CursoSchema = Schema({

    titulo: {  
        type: String
    },
    nivel: {
        type: Number
    },
    integrantes: {
        type: Object
    },
    urlImagen: { 
        type: String
    }, 
    urlVideo: {
        type: String
    },
    examen: {
        type: mongoose.Schema.ObjectId,
        ref: 'Examen',
    }
});
 
module.exports = mongoose.model('Curso', CursoSchema);

