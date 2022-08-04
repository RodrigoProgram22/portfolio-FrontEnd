import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/EducacionM';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  login: boolean = true;
  public edu: Array<Educacion> = [];
  constructor(private EduS: EducacionService) {}

  ngOnInit(): void {
    this.cargarEdu();
  }
  cargarEdu() {
    this.EduS.mostrarEdu().subscribe((data) => {
      this.edu = data;
    });
  }
  borrarEducacion(id?: number) {
    if (id != undefined) {
      this.EduS.borrarEdu(id).subscribe(
        (data) => {
          this.cargarEdu();
        },
        (err) => {
          alert('Error');
        }
      );
    }
  }
}
