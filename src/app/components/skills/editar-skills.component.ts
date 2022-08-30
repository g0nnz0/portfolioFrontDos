import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-editar-skills',
  templateUrl: './editar-skills.component.html',
  styleUrls: ['./editar-skills.component.css']
})
export class EditarSkillsComponent implements OnInit {
  upSkill: Skills = null;

  constructor(private skillsServ: SkillsService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.skillsServ.detail(id).subscribe(data =>{
        this.upSkill = data;
      }, err =>{
        alert('Error al modificar skill.');
        console.log('Error al modificar skill.');
        this.router.navigate(['']);
      })
    }

    actualizarSkill(): void{
      const id = this.activatedRoute.snapshot.params['id'];
      this.skillsServ.update(id, this.upSkill).subscribe(data =>{
        console.log("NombreSkill editado, ahora es: " + this.upSkill.nombreSkill);
        console.log("PorcentajeSkill editada, ahora es: " + this.upSkill.porcentajeSkill);
          this.router.navigate(['']);
      })
    }

}
