var mongoose = require('mongoose');
 

var Schema = mongoose.Schema;
 
var AlumnoSchema = Schema({
    _id: number,
    usuario:string,
    nombres: {nombre: String, apellido:String},
    genero: String,
    fechaNacimiento:Date,
    correo: String
});
 
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Alumno', AlumnoSchema);
