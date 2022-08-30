import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {
  nombrePro: string = "";
  descripcionPro: string = "";
  imgPro: string = "";

  constructor(private proServ: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const Pro = new Proyectos(this.nombrePro, this.descripcionPro, this.imgPro);
    this.proServ.save(Pro).subscribe(data =>{
      alert('¡Nueva proyecto añadida exitosamente!');
      console.log('proyecto añadidad exitosamente.');
      console.log('nombrePro: ' + this.nombrePro, "descripcionPro: " + this.descripcionPro, "periodoPro: " + this.imgPro);
      this.router.navigate([""]);
    }, err =>{
      alert('Ocurrió un error al cargar nuevo proyecto');
      console.log('Ocurrio un error al cargar nuevo proyecto');
      this.router.navigate([""]);
    })
  }
}
