var Escuela = /** @class */ (function () {
    function Escuela(paramNombreEscuela, paramListProf, paramListAlum) {
        this.nombreEscuela = paramNombreEscuela;
        this.listadoProfesores = paramListProf;
        this.listadoAlumnos = paramListAlum;
    }
    Escuela.prototype.getNombreEscuela = function () {
        return this.nombreEscuela;
    };
    return Escuela;
}());
var Profesores = /** @class */ (function () {
    function Profesores(paramNombreProfesor, paramListAlum) {
        this.nombreProfesor = paramNombreProfesor;
        this.listadoAlumnos = paramListAlum;
    }
    Profesores.prototype.getNombreProfesor = function () {
        return this.nombreProfesor;
    };
    return Profesores;
}());
var Alumnos = /** @class */ (function () {
    function Alumnos(paramNombreAlumno, paramNotaExamen, paramInformarNota, paramAprobadoDesaprobado) {
        this.nombreAlumno = paramNombreAlumno;
        this.notaExamen = paramNotaExamen;
        this.informarNota = paramInformarNota;
        this.aprobadoDesaprobado = paramAprobadoDesaprobado;
    }
    Alumnos.prototype.getNombreAlumno = function () {
        return this.nombreAlumno;
    };
    Alumnos.prototype.getNotaExamen = function () {
        return this.notaExamen;
    };
    Alumnos.prototype.informnarNota = function () {
        if (this.informarNota === true) {
            this.informarNota = false;
        }
        else {
            this.informarNota = true;
        }
    };
    Alumnos.prototype.getAprobadoDesaprobado = function () {
        if (this.aprobadoDesaprobado === true) {
            this.aprobadoDesaprobado = false;
        }
        else {
            this.aprobadoDesaprobado = true;
        }
    };
    return Alumnos;
}());
var alumno1 = new Alumnos("Pedro", 9, true, true);
var alumno2 = new Alumnos("Juan", 7, false, true);
var alumno3 = new Alumnos("Lucas", 3, false, false);
var alumnos = [alumno1, alumno2, alumno3];
var profesor1 = new Profesores("Alcides", alumnos);
var profesor2 = new Profesores("Evaristo", alumnos);
var profesor3 = new Profesores("Ismael", alumnos);
var profesores = [profesor1, profesor2, profesor3];
var escuela1 = new Escuela("N° 39 'Mirador de los Andes'", profesores, alumnos);
console.log("Escuela: ", escuela1.getNombreEscuela());
console.log("Profesores: ");
for (var i = 0; i < 3; i++) {
    console.log(profesores[i].getNombreProfesor());
}
console.log("Alumnos: ");
for (var i = 0; i < 3; i++) {
    console.log(alumnos[i].getNombreAlumno());
}
console.log("Informe: ", alumnos[1].getNombreAlumno(), "Nota: ", alumnos[1].getNotaExamen(), alumnos[1].getAprobadoDesaprobado());
