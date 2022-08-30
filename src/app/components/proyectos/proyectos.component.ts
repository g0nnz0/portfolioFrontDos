import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  isLogged = false;
  pro: Proyectos[] = [];

  constructor(private proServ: ProyectosService, 
    private auth: AuthServiceService) {this.auth.stateUser().subscribe( res =>{
      if(res){
        this.isLogged = true;
        console.log('Logueado, Botones "Cerrar Sesión", "Nuevo Proyecto", "Editar Proyecto", "Eliminar Proyecto" ACTIVOS');
      }else{
        this.isLogged = false;
        console.log('No Logueado, Botones "Cerrar Sesión", "Nuevo Proyecto", "Editar Proyecto", "Eliminar Proyecto" INACTIVOS');
      }
    }) }

  ngOnInit(): void {
    this.cargarProyecto()
  }

  cargarProyecto(): void{
    this.proServ.lista().subscribe(data =>{this.pro = data});
  }

  borrarProyecto(id?: number): void{
    if(id != undefined){
      this.proServ.delete(id).subscribe(data =>{
        this.cargarProyecto();
        alert('Proyecto Eliminado.')
        console.log('Proyecto Eliminado.')
      }, err =>{
        alert('No se pudo eliminar el Proyecto Seleccionado.')
      })
    }
  }
}
