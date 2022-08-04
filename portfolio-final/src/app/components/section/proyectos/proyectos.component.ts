import { Component, OnInit } from '@angular/core';
import { ProyectoM } from 'src/app/model/ProyectoM';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  login: boolean = true;
  public proyec: Array<ProyectoM> = [];
  constructor(private proyecS: ProyectoService) {}

  ngOnInit(): void {
    this.cargarProyec();
  }
  cargarProyec() {
    this.proyecS.mostrarProyec().subscribe((data) => {
      this.proyec = data;
    });
  }
  borrarProyec(id?: number) {
    if (id != undefined) {
      this.proyecS.borrarProyec(id).subscribe(
        (data) => {
          this.cargarProyec();
        },
        (err) => {
          alert('Error');
        }
      );
    }
  }
}
