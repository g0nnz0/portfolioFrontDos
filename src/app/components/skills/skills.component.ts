import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  isLogged = false;
  skill: Skills[] = [];

  constructor(private skillsServ: SkillsService, 
    private auth: AuthServiceService) {
      this.auth.stateUser().subscribe( res =>{
        if(res){
          this.isLogged = true;
          console.log('Logueado, Botones "Cerrar Sesión", "Nueva Skill", "Editar Skill", "Eliminar Skill" ACTIVOS');
        }else{
          this.isLogged = false;
          console.log('No Logueado, Botones "Cerrar Sesión", "Nueva Skill", "Editar Skill", "Eliminar Skill" INACTIVOS');
     }
    })
  }

  ngOnInit(): void {
    this.cargarSkills();
  }

  cargarSkills(): void{
    this.skillsServ.lista().subscribe(data =>{this.skill = data});
  }


  borrarSkills(id?: number): void{
    if(id != undefined){
      this.skillsServ.delete(id).subscribe(data =>{
        this.cargarSkills();
        alert('Skill Eliminada.')
        console.log('Skill Eliminada.')
      }, err =>{
        alert('No se pudo eliminar la Skill Seleccionada.')
      })
    }
  }

}
