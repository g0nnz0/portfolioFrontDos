export class Skills {
    id?: number;
    nombreSkill: string;
    porcentajeSkill: number;

    constructor(nombreSkill: string, porcentajeSkill: number){
        this.nombreSkill = nombreSkill;
        this.porcentajeSkill = porcentajeSkill;

    }
}
