import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/ExperienciaM';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  login: boolean = true;

  public expers: Array<Experiencia> = [];

  constructor(private ExpeS: ExperienciaService) {}

  ngOnInit(): void {
    this.cargarExpe();
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
