import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/EducacionM';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css'],
})
export class EditEduComponent implements OnInit {
  edu: Educacion = null;
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private EduS: EducacionService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    //Creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      titulo: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      fecha: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      enlace: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
      img: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
    });
  }
  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.EduS.buscarEdu(id).subscribe(
      (data) => {
        this.edu = data;
      },
      (err) => {
        alert('Error al modificar educacion');
        this.router.navigate(['inicio']);
      }
    );
  }
  editEdu(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.EduS.editEdu(
      id,
      this.edu.nombre_inst,
      this.edu.titulo,
      this.edu.fecha,
      this.edu.enlace,
      this.edu.logo_inst
    ).subscribe(
      (data) => {
        this.router.navigate(['inicio']);
      },
      (err) => {
        alert('Error al modificar educacion');
        this.router.navigate(['inicio']);
      }
    );
  }
  volver() {
    this.router.navigate(['inicio']);
  }
}
