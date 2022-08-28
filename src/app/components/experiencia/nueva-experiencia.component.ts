import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  nombreExp: string = "";
  descripcionExp: string = "";

  constructor(private expServ: ExperienciaServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const exp = new Experiencia(this.nombreExp, this.descripcionExp);
    this.expServ.save(exp).subscribe(data =>{
      alert("Experiencia añadida");
      this.router.navigate([""]);
    }, err =>{
      alert("Hubo un error");
      this.router.navigate([""]);
    })
  }

}
