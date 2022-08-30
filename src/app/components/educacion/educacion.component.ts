import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  isLogged = false;
  edu: Educacion[] = []; 

  constructor(private eduServ: EducacionService, 
                      private auth: AuthServiceService) {
                          this.auth.stateUser().subscribe( res =>{
                            if(res){
                              this.isLogged = true;
                              console.log('Logueado, Botones "Cerrar Sesión", "Nueva Educacion", "Editar Educacion", "Eliminar Educacion" ACTIVOS');
                            }else{
                              this.isLogged = false;
                              console.log('No Logueado, Botones "Cerrar Sesión", "Nueva Educacion", "Editar Educacion", "Eliminar Educacion" INACTIVOS');
                            }
                          })
   }

  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion(): void{
    this.eduServ.lista().subscribe(data =>{this.edu = data});
  }

  borrarEducacion(id?: number): void{
    if(id != undefined){
      this.eduServ.delete(id).subscribe(data =>{
        this.cargarEducacion();
        alert('Educacion Eliminada.')
        console.log('Educacion Eliminada.')
      }, err =>{
        alert('No se pudo eliminar la Educacion Seleccionada.')
      })
    }
  }

}
