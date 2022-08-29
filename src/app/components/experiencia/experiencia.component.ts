import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';
import { Experiencia } from 'src/app/model/experiencia';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  isLogged = false;
  exp: Experiencia[] = [];
  

  constructor(public expServ: ExperienciaServiceService, 
              private auth: AuthServiceService,
              ) {
                this.auth.stateUser().subscribe( res =>{
                  if (res) {
                    this.isLogged = true;
                    console.log('Logueado, Botones "Cerrar Sesión", "Nueva Experiencia", "Editar Experiencia", "Eliminar Experiencia" ACTIVOS');
                    
                  }else{
                    this.isLogged = false;
                    console.log('No logueado, Botones "Cerrar Sesión", "Nueva Experiencia", "Editar Experiencia", "Eliminar Experiencia" INACTIVOS');
                    
                  }
                }) 
                }

 



  ngOnInit():void {
    this.cargarExperiencia();
  }

  cargarExperiencia():void {
    this.expServ.lista().subscribe(data =>{this.exp = data});
  }

  

  borrarExperiencia(id?: number):void{
    if (id != undefined){
      this.expServ.delete(id).subscribe(data =>{
        this.cargarExperiencia();
        console.log("Experiencia Eliminada.")
      }, err =>{
        alert("No se pudo borrar experiencia");
      })
    }
  } 





}
