export class Habilidad {
  id_hab?: number;
  nombre_hab: String;
  nivel_hab: number;
  enlace: String;
  logo_hab: String;

  constructor(nombre: String, nivel: number, enlace: String, img: String) {
    this.nombre_hab = nombre;
    this.enlace = enlace;
    this.nivel_hab = nivel;
    this.logo_hab = img;
  }
}
