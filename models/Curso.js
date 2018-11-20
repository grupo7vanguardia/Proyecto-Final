var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;
 
///REVISAR
var CursoSchema = Schema({

    titulo: String,
    orden: Number,
    integrantes: {
        type: [mongoose.Schema.ObjectId],
        ref: 'Alumno',
    },
    urlImagen: String, 
    urlVideo:String, 
    ejercicio: {
        type: mongoose.Schema.ObjectId,
        ref: 'Ejercicio',
    },
});
 
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Curso', CursoSchema);

