import { Component, OnInit } from '@angular/core';
import { ProyectoM } from 'src/app/model/ProyectoM';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  roles: string[];
  authority: string;
  isAdmin = false;
  public proyec: Array<ProyectoM> = [];
  constructor(private proyecS: ProyectoService, private tokenS: TokenService) {}

  ngOnInit(): void {
    this.cargarProyec();
  }
  cargarProyec() {
    this.proyecS.mostrarProyec().subscribe((data) => {
      this.proyec = data;
    });
    this.roles = this.tokenS.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
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
