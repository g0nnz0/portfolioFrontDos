import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editar-edu',
  templateUrl: './editar-edu.component.html',
  styleUrls: ['./editar-edu.component.css']
})
export class EditarEduComponent implements OnInit {
  upEdu: Educacion = null;

  constructor(private eduServ: EducacionService, 
              private activatedRoute: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.eduServ.detail(id).subscribe(data =>{
      this.upEdu = data;
    }, err =>{
      alert('Error al modificar educación.');
      console.log('Error al modificar educación.');
      this.router.navigate(['']);
    })
  }

  actualizarEducacion(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.eduServ.update(id, this.upEdu).subscribe(data =>{
      alert("Educación Eliminada.")
      console.log("Nombre Educación editado, ahora es: " + this.upEdu.nombreEdu);
      console.log("Descripción Educación editada, ahora es: " + this.upEdu.descripcionEdu);
      console.log("Período Educación editada, ahora es: " + this.upEdu.periodoEdu);
        this.router.navigate(['']);
    })
  }

}
