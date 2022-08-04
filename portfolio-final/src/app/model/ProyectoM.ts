export class ProyectoM {
  id_proyec?: number;
  titulo: String;
  enlace: String;
  fecha: String;
  descripcion: String;
  img_proyec: String;

  constructor(
    nombre: String,
    enlace: String,
    fecha: String,
    descrip: String,
    img: String
  ) {
    this.titulo = nombre;
    this.enlace = enlace;
    this.fecha = fecha;
    this.descripcion = descrip;
    this.img_proyec = img;
  }
}
