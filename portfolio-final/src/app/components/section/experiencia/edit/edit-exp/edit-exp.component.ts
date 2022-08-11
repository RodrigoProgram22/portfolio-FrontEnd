import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/ExperienciaM';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css'],
})
export class EditExpComponent implements OnInit {
  expe: Experiencia = null;
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ExpeS: ExperienciaService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    //Creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      empresa: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      cargo: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      periodo: [
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
          Validators.maxLength(500),
        ],
      ],
      descrip: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(70),
        ],
      ],
    });
  }
  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.ExpeS.buscarExp(id).subscribe(
      (data) => {
        this.expe = data;
      },
      (err) => {
        alert('Error al modificar experiencia');
        this.router.navigate(['inicio']);
      }
    );
  }

  editExp(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.ExpeS.editExpe(
      id,
      this.expe.empresa,
      this.expe.cargo,
      this.expe.periodo,
      this.expe.enlace,
      this.expe.logo_empresa,
      this.expe.descripcion
    ).subscribe(
      (data) => {
        this.router.navigate(['inicio']);
      },
      (err) => {
        alert('Error al modificar experiencia');
        this.router.navigate(['inicio']);
      }
    );
  }
  volver() {
    this.router.navigate(['inicio']);
  }
}
