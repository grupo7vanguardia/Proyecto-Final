var mongoose = require('mongoose');
 

var Schema = mongoose.Schema;
 
///REVISAR
var CursoSchema = Schema({
    _id: Number,
    nombre: String,
    orden: Number,
    Integrantes: {_idAlumno:Number, nombreAlumno:String},
    Contenido:{Titulo:String, url: String, pieVideo:String, Ejercicio: { pregunta:String, opciones:{índice:Number,respuesta:String},respuestaCorrecta:Number }}
});
 
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Curso', CursoSchema);

