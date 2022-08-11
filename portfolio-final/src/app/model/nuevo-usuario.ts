export class NuevoUsuario {
  nombre!: string;
  nombreUsuario!: string;
  email!: string;
  password!: string;
  constructor(
    nombre: string,
    nombreUs: string,
    email: string,
    password: string
  ) {
    this.nombre = nombre;
    this.nombreUsuario = nombreUs;
    this.email = email;
    this.password = password;
  }
}
