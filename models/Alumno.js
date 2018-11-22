var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;
 
var AlumnoSchema = Schema({
    usuario: {
        type: String
    },
    password: {
        type: String
    },
    nombre: {
        type: String
    }, 
    nivel:{
        type: Number,
        default: 0
    },
    apellido: {
        type: String
    },
    genero: {
        type: String
    },
    correo: {
        type: String
    },
    fecha_nacimiento: {
        type: Date
    }
});
 
module.exports = mongoose.model('Alumno', AlumnoSchema);
