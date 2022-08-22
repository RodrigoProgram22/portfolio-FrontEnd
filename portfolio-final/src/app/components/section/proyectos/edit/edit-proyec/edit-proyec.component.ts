import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoM } from 'src/app/model/ProyectoM';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyec',
  templateUrl: './edit-proyec.component.html',
  styleUrls: ['./edit-proyec.component.css'],
})
export class EditProyecComponent implements OnInit {
  proyec: ProyectoM = null;
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ProyecS: ProyectoService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    //Creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      titulo: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      enlace: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
        ],
      ],
      fecha: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      descrip: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
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
    this.ProyecS.buscarProyec(id).subscribe(
      (data) => {
        this.proyec = data;
      },
      (err) => {
        alert('Error al modificar proyecto.');
        this.router.navigate(['inicio']);
      }
    );
  }
  editProyec(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.ProyecS.editProyec(
      id,
      this.proyec.titulo,
      this.proyec.enlace,
      this.proyec.fecha,
      this.proyec.descripcion,
      this.proyec.img_proyec
    ).subscribe(
      (data) => {
        this.router.navigate(['inicio']);
      },
      (err) => {
        alert('Error al modificar proyecto');
        this.router.navigate(['inicio']);
      }
    );
  }
  volver() {
    this.router.navigate(['inicio']);
  }
}
