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
        default: 1
    },
    apellido: {
        type: String
    },
    genero: {
        type: String
    },
    correo: {
        type: String
    }
});
 
module.exports = mongoose.model('Alumno', AlumnoSchema);
