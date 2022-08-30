export class Educacion {
    id? : number;
    nombreEdu : string;
    descripcionEdu : string;
    periodoEdu : string;

    constructor(nombreEdu: string, descripcionEdu: string, periodoEdu: string ){
        this.nombreEdu = nombreEdu;
        this.descripcionEdu = descripcionEdu;
        this.periodoEdu = periodoEdu;

    }

}
