import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {
  upExp: Experiencia = null;

  
  constructor(private expServ: ExperienciaServiceService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.expServ.detail(id).subscribe(data =>{
      this.upExp = data;      
    }, err =>{
      alert ("Error al modificar experiencia");
      this.router.navigate(['']);
    })
  }


  actualizarExperiencia():void{
    const id = this.activateRoute.snapshot.params['id'];
    this.expServ.update(id, this.upExp).subscribe(
      data =>{
        console.log("Nombre Experiencia editado, ahora es: " + this.upExp.nombreExp);
        console.log("Descripción Experiencia editada, ahora es: " + this.upExp.descripcionExp)
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )

  }

}
