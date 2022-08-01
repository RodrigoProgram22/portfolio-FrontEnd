export class Experiencia {
  id_exp?: number;
  empresa: String;
  cargo: String;
  periodo: String;
  enlace: String;
  descripcion: String;
  logo_empresa: String;

  constructor(
    empresa: String,
    cargo: String,
    periodo: String,
    enlace: String,
    descripcion: String,
    img: String
  ) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.periodo = periodo;
    this.enlace = enlace;
    this.descripcion = descripcion;
    this.logo_empresa = img;
  }
}
