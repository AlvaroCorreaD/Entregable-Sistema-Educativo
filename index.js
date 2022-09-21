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
    function Profesores(paramNombreProfesor, paramProfListYN, paramListAlum) {
        this.nombreProfesor = paramNombreProfesor;
        this.profesorTieneListado = paramProfListYN;
        this.listadoAlumnos = paramListAlum;
    }
    Profesores.prototype.getNombreProfesor = function () {
        return this.nombreProfesor;
    };
    Profesores.prototype.contratarDespedirProfesor = function () {
        if (this.profesorTieneListado === true) {
            return "Contratado";
        }
        else {
            return "Despedido por no tener listado de alumnos";
        }
    };
    return Profesores;
}());
var Alumnos = /** @class */ (function () {
    function Alumnos(paramNombreAlumno, paramNotaExamen, paramInformNota) {
        this.nombreAlumno = paramNombreAlumno;
        this.notaExamen = paramNotaExamen;
        this.informarNota = paramInformNota;
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
            return "Desaprobado, a recuperatorio";
        }
    };
    Alumnos.prototype.matricularAlumno = function () {
        while (this.informarNota === true && this.notaExamen >= 7) {
            return "Matriculado";
        }
        if (this.informarNota === false && this.notaExamen >= 7) {
            return " y explusado por no informar su nota";
        }
        else {
            return "y debe informar su nota en tiempo y forma";
        }
    };
    return Alumnos;
}());
var alumno1 = new Alumnos("Pedro", 9, true);
var alumno2 = new Alumnos("Juan", 7, false);
var alumno3 = new Alumnos("Lucas", 3, true);
var alumnos = [alumno1, alumno2, alumno3];
var profesor1 = new Profesores("Alcides", true, alumnos);
var profesor2 = new Profesores("Evaristo", false, alumnos);
var profesor3 = new Profesores("Ismael", true, alumnos);
var profesores = [profesor1, profesor2, profesor3];
var escuela1 = new Escuela("N° 39 'Mirador de los Andes'", profesores, alumnos);
console.log("Escuela:", escuela1.getNombreEscuela());
console.log("Profesores:");
for (var i = 0; i < 3; i++) {
    console.log(profesores[i].getNombreProfesor(), ":", profesores[i].contratarDespedirProfesor());
}
console.log("Alumnos:");
for (var i = 0; i < 3; i++) {
    console.log(alumnos[i].getNombreAlumno(), ":", "Nota:", alumnos[i].getNotaExamen(), alumnos[i].getAprobadoDesaprobado(), alumnos[i].matricularAlumno());
}
