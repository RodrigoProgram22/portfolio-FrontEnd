import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/HabilidadM';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-edit-hab',
  templateUrl: './edit-hab.component.html',
  styleUrls: ['./edit-hab.component.css'],
})
export class EditHabComponent implements OnInit {
  hab: Habilidad = null;
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private HabS: HabilidadService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    //Creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      nivel: [0, [Validators.required]],
      enlace: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
        ],
      ],
      img: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
        ],
      ],
    });
  }
  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.HabS.buscarHab(id).subscribe(
      (data) => {
        this.hab = data;
      },
      (err) => {
        alert('Error al modificar habilidad.');
        this.router.navigate(['inicio']);
      }
    );
  }
  editHab(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.HabS.editHab(
      id,
      this.hab.nombre_hab,
      this.hab.nivel_hab,
      this.hab.enlace,
      this.hab.logo_hab
    ).subscribe(
      (data) => {
        this.router.navigate(['inicio']);
      },
      (err) => {
        alert('Error al modificar habilidad');
        this.router.navigate(['inicio']);
      }
    );
  }
  volver() {
    this.router.navigate(['inicio']);
  }
}
