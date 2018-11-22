var express = require('express');
var router = express.Router();

var alumnoController = require('../controllers/alumnoController');
var ejercicioController = require('../controllers/ejercicioController');

router.get('/alumnos', alumnoController.getAlumnos);
router.get('/alumnos/:_id', alumnoController.getAlumno);
router.post('/alumnos' , alumnoController.agregarAlumno);
router.post('/login' , alumnoController.login);

router.get('/ejercicios', ejercicioController.getEjercicios);
router.get('/ejercicios/:id', ejercicioController.getEjercicio);
router.get('/ejercicios/:_id/:correcta', ejercicioController.comprobarRespuesta);
router.post('/ejercicios', ejercicioController.agregarEjercicio)



module.exports = router;
