import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/ExperienciaM';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css'],
})
export class AddExpComponent implements OnInit {
  addEmpresa: String = '';
  addCargo: String = '';
  addPeriodo: String = '';
  addEnlace: String = '';
  addDescrip: String = '';
  addLogo_empresa: String = '';
  public form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private ExpeS: ExperienciaService,
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
          Validators.maxLength(250),
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
  ngOnInit(): void {}
  addExp(): void {
    const nuevaExpe = new Experiencia(
      this.addEmpresa,
      this.addCargo,
      this.addPeriodo,
      this.addEnlace,
      this.addDescrip,
      this.addLogo_empresa
    );
    this.ExpeS.addExpe(nuevaExpe).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al agregar experiencia');
        this.router.navigate(['']);
      }
    );
  }
}
