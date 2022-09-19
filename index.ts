class Escuela{
    public nombreEscuela: string;
    public listadoProfesores: Profesores[];
    public listadoAlumnos: Alumnos[];

    public constructor(paramNombreEscuela: string, paramListProf: Profesores[], paramListAlum: Alumnos[]){
        this.nombreEscuela = paramNombreEscuela;
        this.listadoProfesores = paramListProf;
        this.listadoAlumnos = paramListAlum;
    }

    public getNombreEscuela(): string{
        return this.nombreEscuela;
    }
}

class Profesores{
    public nombreProfesor: string;
    public listadoAlumnos: Alumnos[];

    public constructor(paramNombreProfesor: string,paramListAlum: Alumnos[]){
        this.nombreProfesor = paramNombreProfesor;
        this.listadoAlumnos = paramListAlum;
    }

    public getNombreProfesor(): string{
        return this.nombreProfesor;
    }
}

class Alumnos{
    public nombreAlumno: string;
    public notaExamen: number;
    public aprobadoDesaprobado: boolean;

    public constructor(paramNombreAlumno: string, paramNotaExamen: number){
        this.nombreAlumno = paramNombreAlumno;
        this.notaExamen = paramNotaExamen;
    }

    public getNombreAlumno(): string{
        return this.nombreAlumno;
    }

    public getNotaExamen(): number{
        return this.notaExamen;
    }

    public getAprobadoDesaprobado(): string{
        if(this.notaExamen >= 7){
            return "Aprobado";
        }else{
            return "Desaprobado";
        }
    }
}

let alumno1: Alumnos = new Alumnos("Pedro", 9);
let alumno2: Alumnos = new Alumnos("Juan", 7);
let alumno3: Alumnos = new Alumnos("Lucas", 3);
let alumnos: Alumnos[] = [alumno1, alumno2, alumno3];

let profesor1: Profesores = new Profesores("Alcides", alumnos);
let profesor2: Profesores = new Profesores("Evaristo", alumnos);
let profesor3: Profesores = new Profesores("Ismael", alumnos);
let profesores: Profesores[] = [profesor1, profesor2, profesor3];

let escuela1: Escuela = new Escuela("N° 39 'Mirador de los Andes'", profesores, alumnos);

console.log("Escuela: ", escuela1.getNombreEscuela());
console.log("Profesores: ");

for(let i = 0; i < 3; i++){
    console.log(profesores[i].getNombreProfesor());
}

console.log("Alumnos: ")

for(let i = 0; i < 3; i++){
    console.log(alumnos[i].getNombreAlumno());
}

console.log("Informe: ", alumnos[1].getNombreAlumno(), "Nota: ", alumnos[1].getNotaExamen(), alumnos[1].getAprobadoDesaprobado());
console.log("Informe: ", alumnos[2].getNombreAlumno(), "Nota: ", alumnos[2].getNotaExamen(), alumnos[2].getAprobadoDesaprobado());
