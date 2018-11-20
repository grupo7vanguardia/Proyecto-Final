var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;
 
var AlumnoSchema = Schema({
    usuario: String,
    password: String,
    nombre: String, 
    apellido: String,
    genero: String,
    correo: String
});
 
module.exports = mongoose.model('Alumno', AlumnoSchema);
