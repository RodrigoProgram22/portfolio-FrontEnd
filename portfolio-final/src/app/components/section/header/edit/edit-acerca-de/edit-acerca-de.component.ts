import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Acerca_de } from 'src/app/model/Acerca_deM';
import { AcercaDeService } from 'src/app/service/acerca-de.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css'],
})
export class EditAcercaDeComponent implements OnInit {
  acerca_de: Acerca_de = null;
  public form: FormGroup;
  //Inyectar el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder,
    private acerServ: AcercaDeService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    //Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      titulo: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      img: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(250),
        ],
      ],
      descrip: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(250),
        ],
      ],
    });
  }
  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.acerServ.buscarAcercaDe(id).subscribe(
      (data) => {
        this.acerca_de = data;
      },
      (err) => {
        alert('Error al modificar Acerca_de');
        this.router.navigate(['inicio']);
      }
    );
  }

  editarAcercaDe(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.acerServ
      .editAcercaDe(
        id,
        this.acerca_de.nombre_apellido,
        this.acerca_de.titulo,
        this.acerca_de.email,
        this.acerca_de.img_perfil,
        this.acerca_de.descripcion
      )
      .subscribe(
        (data) => {
          this.router.navigate(['inicio']);
        },
        (err) => {
          alert('Error al modificar Acerca_de');
          this.router.navigate(['']);
        }
      );
  }
  volver() {
    this.router.navigate(['inicio']);
  }
}
