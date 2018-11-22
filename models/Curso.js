var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;
 
var CursoSchema = Schema({

    titulo: {  
        type: String
    },
    orden: {
        type: Number
    },
    integrantes: {
        type: [mongoose.Schema.ObjectId],
        ref: 'Alumno',
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
    },
});
 
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Curso', CursoSchema);

