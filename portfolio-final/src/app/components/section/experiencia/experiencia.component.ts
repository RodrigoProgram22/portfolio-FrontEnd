import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/ExperienciaM';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  roles: string[];
  authority: string;
  isAdmin = false;
  public expers: Array<Experiencia> = [];
  constructor(
    private ExpeS: ExperienciaService,
    private tokenS: TokenService
  ) {}

  ngOnInit(): void {
    this.cargarExpe();
    this.roles = this.tokenS.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
  cargarExpe() {
    this.ExpeS.mostrarExpe().subscribe((data) => {
      this.expers = data;
    });
  }
  borrarExperiencia(id?: number) {
    if (id != undefined) {
      this.ExpeS.borrarExpe(id).subscribe(
        (data) => {
          this.cargarExpe();
        },
        (err) => {
          alert('Error');
        }
      );
    }
  }
}
