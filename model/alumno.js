var mongoose = require('mongoose');
 

var Schema = mongoose.Schema;
 
var AlumnoSchema = Schema({
    _id: Number,
    usuario:String,
    nombres: {nombre: String, apellido:String},
    genero: String,
    fechaNacimiento:Date,
    correo: String
});
 
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Alumno', AlumnoSchema);
