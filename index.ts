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
    public profesorTieneListado: boolean;
    public listadoAlumnos: Alumnos[];

    public constructor(paramNombreProfesor: string,paramProfListYN: boolean, paramListAlum: Alumnos[]){
        this.nombreProfesor = paramNombreProfesor;
        this.profesorTieneListado = paramProfListYN
        this.listadoAlumnos = paramListAlum;
    }

    public getNombreProfesor(): string{
        return this.nombreProfesor;
    }

    public contratarDespedirProfesor(): string{
        if(this.profesorTieneListado === true){
            return "Contratado.";
        }else{
            return "Despedido por no tener listado de alumnos.";
        }
    }
}

class Alumnos{
    public nombreAlumno: string;
    public notaExamen: number;
    public aprobadoDesaprobado: boolean;
    public informarNota: boolean;

    public constructor(paramNombreAlumno: string, paramNotaExamen: number,paramInformNota: boolean){
        this.nombreAlumno = paramNombreAlumno;
        this.notaExamen = paramNotaExamen;
        this.informarNota = paramInformNota;
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
            return "Desaprobado, a recuperatorio";
        }
    }

    public matricularAlumno(): string{
        while(this.informarNota === true && this.notaExamen >= 7){
            return "Matriculado.";
        }if(this.informarNota === false && this.notaExamen >= 7){
            return "y explusado por no informar su nota.";
        }else{
            return "y debe informar su nota en tiempo y forma.";
        }
    }
}

let alumno1: Alumnos = new Alumnos("Pedro", 9, true);
let alumno2: Alumnos = new Alumnos("Juan", 7, false);
let alumno3: Alumnos = new Alumnos("Lucas", 3, true);
let alumnos: Alumnos[] = [alumno1, alumno2, alumno3];

let profesor1: Profesores = new Profesores("Alcides",true, alumnos);
let profesor2: Profesores = new Profesores("Evaristo",false, alumnos);
let profesor3: Profesores = new Profesores("Ismael",true ,alumnos);
let profesores: Profesores[] = [profesor1, profesor2, profesor3];

let escuela1: Escuela = new Escuela("N° 39 'Mirador de los Andes'", profesores, alumnos);

console.log("Escuela:", escuela1.getNombreEscuela());
console.log("Profesores:");

for(let i = 0; i < 3; i++){
    console.log(profesores[i].getNombreProfesor(), ":", profesores[i].contratarDespedirProfesor());
}

console.log("Alumnos:")

for(let i = 0; i < 3; i++){
    console.log(alumnos[i].getNombreAlumno(), ":", "Nota:", alumnos[i].getNotaExamen(), alumnos[i].getAprobadoDesaprobado(), alumnos[i].matricularAlumno());
}