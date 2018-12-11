var express = require('express');
var router = express.Router();

var alumnoController = require('../controllers/alumnoController');
var ejercicioController = require('../controllers/ejercicioController');
var examenController = require('../controllers/examenController');
var cursoController = require('../controllers/cursoController');

router.get('/alumnos', alumnoController.getAlumnos);
router.get('/alumnos/:_id', alumnoController.getAlumno);
router.post('/alumnos' , alumnoController.agregarAlumno);
router.post('/login' , alumnoController.login);
router.put('/alumnos/subirnivel', alumnoController.subirNivel);

router.get('/ejercicios', ejercicioController.getEjercicios);
router.get('/ejercicios/:id', ejercicioController.getEjercicio);
router.get('/ejercicios/:_id/:correcta', ejercicioController.comprobarRespuesta);
router.post('/ejercicios', ejercicioController.agregarEjercicio)

router.get('/examenes', examenController.getExamenes);
router.get('/examenes/:_id', examenController.getExamen);
router.post('/examenes', examenController.agregarExamen);
router.put('/examenes/:_id/:_id2', examenController.agregarEjercicioExamen)
router.put('/examenes/:_id/:alumno/:nota', examenController.agregarCalificacion);

router.get('/cursos', cursoController.getCursos);
router.get('/cursos/:_id', cursoController.getCurso);
router.post('/cursos', cursoController.agregarCurso);

module.exports = router;
