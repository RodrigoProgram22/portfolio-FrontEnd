import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/HabilidadM';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  login: boolean = true;
  public hab: Array<Habilidad> = [];
  constructor(private HabS: HabilidadService) {}

  ngOnInit(): void {
    this.cargarHab();
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
