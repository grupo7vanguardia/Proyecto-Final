const Curso = require('../models/Curso');

exports.getCursos = function (req, res, next) {

    Curso.find(function(err, cursos){
        if(err){console.log(err)}

        res.json({
            cursos: cursos
        });

    });

}

exports.getCurso = function (req, res, next) {

    Curso.findById(req.params._id, function(err, curso){
        if(err){console.log(err)}
        
        res.json({
            curso: curso
        });

    });

}

exports.agregarCurso = function (req, res, next) {

    let newCurso = new Curso({
      titulo: req.body.titulo,
      nivel: req.body.nivel,
      integrantes: [],
      urlImagen: req.body.urlImagen,
      urlVideo: req.body.urlVideo,
      examen: req.body.examen
    });

    newCurso.save(function (err) {
        if (err) {
            return next(err);
        }

        res.json({
            mensaje: 'Curso Creado.'
        });

      });
}
