import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  upPro: Proyectos = null;

  constructor(private proServ: ProyectosService, 
    private activatedRoute: ActivatedRoute,
    private router: Router ) { }

    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.proServ.detail(id).subscribe(data =>{
        this.upPro = data;
      }, err =>{
        alert('Error al modificar proyecto.');
        console.log('Error al modificar proyecto.');
        this.router.navigate(['']);
      })
    }

    actualizarProyecto(): void{
      const id = this.activatedRoute.snapshot.params['id'];
      this.proServ.update(id, this.upPro).subscribe(data =>{
        alert("Proyecto editado exitosamente.");
        console.log("Nombre proyecto editado, ahora es: " + this.upPro.nombrePro);
        console.log("Descripción proyecto editado, ahora es: " + this.upPro.descripcionPro);
        console.log("URL imagen del proyecto editada, ahora es: " + this.upPro.imgPro);
          this.router.navigate(['']);
      })
    }

}
