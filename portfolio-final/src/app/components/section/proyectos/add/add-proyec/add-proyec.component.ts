import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectoM } from 'src/app/model/ProyectoM';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-add-proyec',
  templateUrl: './add-proyec.component.html',
  styleUrls: ['./add-proyec.component.css'],
})
export class AddProyecComponent implements OnInit {
  addTitulo: String = '';
  addEnlace: String = '';
  addFecha: String = '';
  addDescrip: String = '';
  addImg: String = '';
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ProyecS: ProyectoService,
    private router: Router
  ) {
    //Creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      titulo: [
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
      fecha: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      descrip: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
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
  addProyec(): void {
    const nuevoProyec = new ProyectoM(
      this.addTitulo,
      this.addEnlace,
      this.addFecha,
      this.addDescrip,
      this.addImg
    );
    this.ProyecS.addProyec(nuevoProyec).subscribe(
      (data) => {
        this.router.navigate(['inicio']);
      },
      (err) => {
        alert('Error al agregar proyecto');
        this.router.navigate(['inicio']);
      }
    );
  }
  volver() {
    this.router.navigate(['inicio']);
  }
}
