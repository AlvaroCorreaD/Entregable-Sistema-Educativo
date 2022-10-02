class Escuela {
    public nombreEscuela: string;
    public listadoProfesores: Profesor[];
    public listadoAlumnos: Alumno[];

    public constructor(paramNombreEscuela: string, paramListProf: Profesor[], paramListAlum: Alumno[]) {
        this.nombreEscuela = paramNombreEscuela;
        this.listadoProfesores = paramListProf;
        this.listadoAlumnos = paramListAlum;
    }

    public getNombreEscuela(): string {
        return this.nombreEscuela;
    }

    public contratarProfesor(profesor: Profesor): void {
        this.listadoProfesores.push(profesor);
    }

    public despedirProfesor(profesor: Profesor): void {
        for (let index = 0; index < this.listadoProfesores.length; index++) {
            if (this.listadoProfesores[index].getNombreProfesor() === profesor.getNombreProfesor()) {
                this.listadoProfesores.splice(index, 1);
            }
        }
    }

    public matricularAlumno(alumno: Alumno): void {
        this.listadoAlumnos.push(alumno);
    }

    public expulsarAlumno(alumno: Profesor): void {
        for (let index = 0; index < this.listadoAlumnos.length; index++) {
            if (this.listadoAlumnos[index].getNombreAlumno() === alumno.getNombreProfesor()) {
                this.listadoAlumnos.splice(index, 1);
            }
        }
    }
}

class Profesor {
    public nombreProfesor: string;
    public profesorTieneListado: boolean;
    public listadoAlumnos: Alumno[];

    public constructor(paramNombreProfesor: string, paramProfListYN: boolean, paramListAlum: Alumno[]) {
        this.nombreProfesor = paramNombreProfesor;
        this.profesorTieneListado = paramProfListYN
        this.listadoAlumnos = paramListAlum;
    }

    public getNombreProfesor(): string {
        return this.nombreProfesor;
    }
}

class Alumno {
    public nombreAlumno: string;
    public notaExamen: number;
    public aprobadoDesaprobado: boolean;

    public constructor(paramNombreAlumno: string, paramNotaExamen: number, paramInformNota: boolean) {
        this.nombreAlumno = paramNombreAlumno;
        this.notaExamen = paramNotaExamen;
    }

    public getNombreAlumno(): string {
        return this.nombreAlumno;
    }

    public getNotaExamen(): number {
        return this.notaExamen;
    }

    public getAprobadoDesaprobado(): string {
        if (this.notaExamen >= 7) {
            return "Aprobado";
        } else {
            return "Desaprobado, a recuperatorio";
        }
    }
}

let alumno1: Alumno = new Alumno("Pedro", 9, true);
let alumno2: Alumno = new Alumno("Juan", 7, false);
let alumno3: Alumno = new Alumno("Lucas", 3, true);
let alumnos: Alumno[] = [alumno1, alumno2, alumno3];

let profesor1: Profesor = new Profesor("Alcides", true, alumnos);
let profesor2: Profesor = new Profesor("Evaristo", false, alumnos);
let profesor3: Profesor = new Profesor("Ismael", true, alumnos);
let profesores: Profesor[] = [profesor1, profesor2, profesor3];

let escuela1: Escuela = new Escuela("N° 39 'Mirador de los Andes'", profesores, alumnos);

console.log("Escuela:", escuela1.getNombreEscuela());
console.log("Profesores:");
for (let i = 0; i < 3; i++) {
    console.log(profesores[i].getNombreProfesor(), ":", escuela1.contratarProfesor(profesores[i]));
}

console.log("Alumnos:")
for (let i = 0; i < 3; i++) {
    console.log(alumnos[i].getNombreAlumno(), ":", "Nota:", alumnos[i].getNotaExamen(), alumnos[i].getAprobadoDesaprobado(), escuela1.matricularAlumno(alumnos[i]));
}