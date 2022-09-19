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
    function Alumnos(paramNombreAlumno, paramNotaExamen) {
        this.nombreAlumno = paramNombreAlumno;
        this.notaExamen = paramNotaExamen;
        // this.aprobadoDesaprobado = paramAprobadoDesaprobado;
    }
    Alumnos.prototype.getNombreAlumno = function () {
        return this.nombreAlumno;
    };
    Alumnos.prototype.getNotaExamen = function () {
        return this.notaExamen;
    };
    Alumnos.prototype.getAprobadoDesaprobado = function () {
        if (this.notaExamen >= 7) {
            return "Aprobado";
        }
        else {
            return "Desaprobado";
        }
    };
    return Alumnos;
}());
var alumno1 = new Alumnos("Pedro", 9);
var alumno2 = new Alumnos("Juan", 7);
var alumno3 = new Alumnos("Lucas", 3);
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
console.log("Informe: ", alumnos[2].getNombreAlumno(), "Nota: ", alumnos[2].getNotaExamen(), alumnos[2].getAprobadoDesaprobado());
