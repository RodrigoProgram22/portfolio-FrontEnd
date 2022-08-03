import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/HabilidadM';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-add-hab',
  templateUrl: './add-hab.component.html',
  styleUrls: ['./add-hab.component.css'],
})
export class AddHabComponent implements OnInit {
  addNombre: String = '';
  addNivel: number = 1;
  addEnlace: String = '';
  addLogo_hab: String = '';
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private HabS: HabilidadService,
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
      nivel: [
        0,
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
  ngOnInit(): void {}
  addHab(): void {
    const nuevaHab = new Habilidad(
      this.addNombre,
      this.addNivel,
      this.addEnlace,
      this.addLogo_hab
    );
    this.HabS.addHab(nuevaHab).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al agregar habilidad.');
        this.router.navigate(['']);
      }
    );
  }
}
