import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/EducacionM';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css'],
})
export class AddEduComponent implements OnInit {
  addNombre: String = '';
  addTitulo: String = '';
  addFecha: String = '';
  addEnlace: String = '';
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private EduS: EducacionService,
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
          Validators.maxLength(50),
        ],
      ],
    });
  }
  ngOnInit(): void {}
  addEdu(): void {
    const nuevaEdu = new Educacion(
      this.addNombre,
      this.addTitulo,
      this.addFecha,
      this.addEnlace,
      'foto'
    );
    this.EduS.addEdu(nuevaEdu).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al agregar educacion');
        this.router.navigate(['']);
      }
    );
  }
}
