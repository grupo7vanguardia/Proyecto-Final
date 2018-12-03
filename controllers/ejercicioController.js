const Ejercicio = require('../models/Ejercicio');

exports.getEjercicios = function (req, res, next) {

    Ejercicio.find(function(err, ejercicios){
        if(err){console.log(err)}

        res.json({
            ejercicios: ejercicios
        });

    });

}

exports.getEjercicio = function (req, res, next) {

    Ejercicio.findById(req.params._id, function(err, ejercicio){
        if(err){console.log(err)}
        
        res.json({
            ejercicio: ejercicio
        });

    });

}

exports.agregarEjercicio = function (req, res, next) {

    let newEjercicio = new Ejercicio({
      pregunta: req.body.pregunta,
      respuesta: req.body.respuesta,
      correcta: req.body.correcta
    });

    newEjercicio.save(function (err) {
        if (err) {
            return next(err);
        }

        res.json({
            mensaje: 'Ejercicio Creado.'
        });

      });
}

exports.comprobarRespuesta = function(req,res,next){

    Ejercicio.findById(req.params._id, function(err, ejercicio){
        if (err) {
            return next(err);
        }

        if (ejercicio.correcta == req.params.correcta){
            res.send(true);
        }else{
            res.send(false);
        }
    });

}