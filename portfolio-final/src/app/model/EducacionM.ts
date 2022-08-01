export class Educacion {
  id_edu?: number;
  nombre_inst: String;
  titulo: String;
  fecha: String;
  enlace: String;
  logo_inst: String;

  constructor(
    nombre: String,
    titulo: String,
    fecha: String,
    enlace: String,
    img: String
  ) {
    this.nombre_inst = nombre;
    this.titulo = titulo;
    this.fecha = fecha;
    this.enlace = enlace;
    this.logo_inst = img;
  }
}
