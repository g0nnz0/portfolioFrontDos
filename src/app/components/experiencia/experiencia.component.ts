import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  isLogged = false;
  exp: Experiencia[] = [];

  constructor(public expServ: ExperienciaServiceService, public auth: AuthServiceService) { }

 



  ngOnInit(): void {
    this.cargarExperiencia();
  }

  cargarExperiencia():void{
    this.expServ.lista().subscribe(data =>{this.exp = data});
  }



}
