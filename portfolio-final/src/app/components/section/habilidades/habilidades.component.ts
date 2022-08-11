import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/HabilidadM';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  roles: string[];
  authority: string;
  isAdmin = false;
  public hab: Array<Habilidad> = [];
  constructor(private HabS: HabilidadService, private tokenS: TokenService) {}

  ngOnInit(): void {
    this.cargarHab();
    this.roles = this.tokenS.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
  cargarHab() {
    this.HabS.mostrarHab().subscribe((data) => {
      this.hab = data;
    });
  }
  borrarHabilidad(id?: number) {
    if (id != undefined) {
      this.HabS.borrarHab(id).subscribe(
        (data) => {
          this.cargarHab();
        },
        (err) => {
          alert('Error');
        }
      );
    }
  }
}
