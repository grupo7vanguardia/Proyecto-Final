const bcrypt = require('bcrypt');

const Alumno = require('../models/Alumno');

exports.agregarAlumno = function (req, res, next) {

    let hashPw = bcrypt.hashSync(req.body.password, 10);

    let newAlumno = new Alumno({
        usuario: req.body.usuario,
        password: hashPw,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        genero: req.body.genero,
        correo: req.body.correo
    });

    Alumno.findOne({usuario: newAlumno.usuario}, function(err, alumno){
        if (err){
            res.send(err);
        }
        if (alumno) {

            res.json({
                mensaje: 'El alumno ya existe.'
            });

        }else{
            newAlumno.save(function (err) {
                if (err) {
                    return next(err);
                }

                res.json({
                    mensaje: 'Alumno creado.'
                });

            });
        }
    });
}

exports.getAlumnos = function(req,res,next){
    
    Alumno.find(function(err, alumnos){
        if(err){console.log(err)}

        res.json({
            alumnos: alumnos
        });

    });
    
}

exports.getAlumno = function(req,res,next){

    Alumno.findById(req.params._id, function(err, alumno){
        if (err){
            console.log(err);
        }

        res.json({
            alumno: alumno
        });
        
    });

}

exports.login = function(req,res,next){

    Alumno.findOne({usuario : req.body.usuario}, function(err, alumno){
        
        if(err){console.log(err)}

        if (alumno){
            if(bcrypt.compareSync(req.body.password, alumno.password)) {

                res.json({
                    mensaje: 'Bienvenido ' + alumno.nombre + ' ' + alumno.apellido + '!',
                    alumno: alumno
                });

            } else {

                res.json({
                    mensaje: 'Contraseña incorrecta.'
                });

            }
        }else{

            res.json({
                mensaje: 'Alumno no registrado.'
            });

        }

    });

}