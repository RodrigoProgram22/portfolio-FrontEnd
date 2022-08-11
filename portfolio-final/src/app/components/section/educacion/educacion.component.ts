import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/EducacionM';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  roles: string[];
  authority: string;
  isAdmin = false;
  public edu: Array<Educacion> = [];
  constructor(private EduS: EducacionService, private tokenS: TokenService) {}

  ngOnInit(): void {
    this.cargarEdu();
    this.roles = this.tokenS.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
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
