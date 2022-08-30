import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {
  nombreEdu: string = "";
  descripcionEdu: string = "";
  periodoEdu: string = "";

  constructor(private eduServ: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const edu = new Educacion(this.nombreEdu, this.descripcionEdu, this.periodoEdu);
    this.eduServ.save(edu).subscribe(data =>{
      alert('¡Nueva Educación añadida exitosamente!');
      console.log('Educación añadidad exitosamente.');
      console.log('nombreEdu: ' + this.nombreEdu, "descripcionEdu: " + this.descripcionEdu, "periodoEdu: " + this.periodoEdu);
      this.router.navigate([""]);
    }, err =>{
      alert('Ocurrió un error al cargar nueva educación');
      console.log('Ocurrio un error al cargar nueva educación');
      this.router.navigate([""]);
    })
  }

}
