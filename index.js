var Escuela = /** @class */ (function () {
    function Escuela(paramNombreEscuela, paramListProf, paramListAlum) {
        this.nombreEscuela = paramNombreEscuela;
        this.listadoProfesores = paramListProf;
        this.listadoAlumnos = paramListAlum;
    }
    Escuela.prototype.getNombreEscuela = function () {
        return this.nombreEscuela;
    };
    Escuela.prototype.contratarProfesor = function (profesor) {
        this.listadoProfesores.push(profesor);
    };
    Escuela.prototype.despedirProfesor = function (profesor) {
        for (var index = 0; index < this.listadoProfesores.length; index++) {
            if (this.listadoProfesores[index].getNombreProfesor() === profesor.getNombreProfesor()) {
                this.listadoProfesores.splice(index, 1);
            }
        }
    };
    Escuela.prototype.matricularAlumno = function (alumno) {
        this.listadoAlumnos.push(alumno);
    };
    Escuela.prototype.expulsarAlumno = function (alumno) {
        for (var index = 0; index < this.listadoAlumnos.length; index++) {
            if (this.listadoAlumnos[index].getNombreAlumno() === alumno.getNombreProfesor()) {
                this.listadoAlumnos.splice(index, 1);
            }
        }
    };
    return Escuela;
}());
var Profesor = /** @class */ (function () {
    function Profesor(paramNombreProfesor, paramProfListYN, paramListAlum) {
        this.nombreProfesor = paramNombreProfesor;
        this.profesorTieneListado = paramProfListYN;
        this.listadoAlumnos = paramListAlum;
    }
    Profesor.prototype.getNombreProfesor = function () {
        return this.nombreProfesor;
    };
    return Profesor;
}());
var Alumno = /** @class */ (function () {
    function Alumno(paramNombreAlumno, paramNotaExamen, paramInformNota) {
        this.nombreAlumno = paramNombreAlumno;
        this.notaExamen = paramNotaExamen;
    }
    Alumno.prototype.getNombreAlumno = function () {
        return this.nombreAlumno;
    };
    Alumno.prototype.getNotaExamen = function () {
        return this.notaExamen;
    };
    Alumno.prototype.getAprobadoDesaprobado = function () {
        if (this.notaExamen >= 7) {
            return "Aprobado";
        }
        else {
            return "Desaprobado, a recuperatorio";
        }
    };
    return Alumno;
}());
var alumno1 = new Alumno("Pedro", 9, true);
var alumno2 = new Alumno("Juan", 7, false);
var alumno3 = new Alumno("Lucas", 3, true);
var alumnos = [alumno1, alumno2, alumno3];
var profesor1 = new Profesor("Alcides", true, alumnos);
var profesor2 = new Profesor("Evaristo", false, alumnos);
var profesor3 = new Profesor("Ismael", true, alumnos);
var profesores = [profesor1, profesor2, profesor3];
var escuela1 = new Escuela("N° 39 'Mirador de los Andes'", profesores, alumnos);
console.log("Escuela:", escuela1.getNombreEscuela());
console.log("Profesores:");
for (var i = 0; i < 3; i++) {
    console.log(profesores[i].getNombreProfesor(), ":", escuela1.contratarProfesor(profesores[i]));
}
console.log("Alumnos:");
for (var i = 0; i < 3; i++) {
    console.log(alumnos[i].getNombreAlumno(), ":", "Nota:", alumnos[i].getNotaExamen(), alumnos[i].getAprobadoDesaprobado(), escuela1.matricularAlumno(alumnos[i]));
}
