export class Acerca_de {
  id_acerca_de?: number;
  nombre_apellido: String;
  titulo: String;
  email: String;
  descripcion: String;
  img_perfil: String;

  constructor(
    nombre: String,
    titulo: String,
    email: String,
    descripcion: String,
    img: String
  ) {
    this.nombre_apellido = nombre;
    this.titulo = titulo;
    this.email = email;
    this.descripcion = descripcion;
    this.img_perfil = img;
  }
}
