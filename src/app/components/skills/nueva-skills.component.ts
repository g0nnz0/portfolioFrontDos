import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-nueva-skills',
  templateUrl: './nueva-skills.component.html',
  styleUrls: ['./nueva-skills.component.css']
})
export class NuevaSkillsComponent implements OnInit {
  nombreSkill: string = "";
  porcentajeSkill: number = 0;

  constructor(private skillsServ: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skills(this.nombreSkill, this.porcentajeSkill);
    this.skillsServ.save(skill).subscribe(data =>{
      alert('¡Nueva Skill añadida exitosamente!');
      console.log('Skill añadida exitosamente.');
      console.log('nombreSkill: ' + this.nombreSkill, "porcentajeSkill: " + this.porcentajeSkill);
      this.router.navigate([""]);
    }, err =>{
      alert('Ocurrió un error al cargar nueva skill');
      console.log('Ocurrio un error al cargar nueva skill');
      this.router.navigate([""]);
    })
  }

}
