const Examen = require('../models/Examen');
const Ejercicio = require('../models/Ejercicio');

exports.getExamenes = function (req, res, next) {

    Examen.find(function (err, examenes) {
        if (err) { console.log(err) }

        res.json({
            examenes: examenes
        });

    });

}

exports.getExamen = function (req, res, next) {

    Examen.findById(req.params._id, function (err, examen) {
        if (err) { console.log(err) }

        res.json({
            examen: examen
        });

    });

}

exports.agregarExamen = function (req, res, next) {

    let newExamen = new Examen({
        preguntas: [],
        calificacion: []
    });

    newExamen.save(function (err) {
        if (err) {
            return next(err);
        }

        res.json({
            mensaje: 'Examen Creado.'
        });

    });
}

exports.agregarEjercicioExamen = function (req, res, next) {

    Ejercicio.findById(req.params._id2, function (err, ejercicio) {

        if (err) { console.log(err) }

        if (ejercicio) {

            Examen.findByIdAndUpdate(req.params._id, { $push: { "preguntas": ejercicio } },
                {
                    new: true,                       // return updated doc
                    runValidators: true              // validate before update
                })
                .then(doc => {
                    console.log(doc)
                })
                .catch(err => {
                    console.error(err)
                })

            res.send('Ejercicio agregado al examen');

        } else {
            res.json({ mensaje: "El ejercicio no existe." })
        }

    });

}

exports.agregarCalificacion = function (req, res, next) {

    var newCalificacion = {

        alumno: req.params.alumno,
        nota: req.params.nota

    };

    Examen.findByIdAndUpdate(req.params._id, { $push: { "calificacion": newCalificacion } },
        {
            new: true,                       // return updated doc
            runValidators: true              // validate before update
        })
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        })

    res.send('Calificacion agregada al examen');

}