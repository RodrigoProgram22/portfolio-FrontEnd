import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acerca_de } from '../model/Acerca_deM';

@Injectable({
  providedIn: 'root',
})
export class AcercaDeService {
  // URL = 'https://back-portfolioap.herokuapp.com/Acerca_de/';
  private URL = 'http://localhost:8080/Acerca_de/';
  constructor(private http: HttpClient) {}

  public buscarAcercaDe(id: number): Observable<any> {
    return this.http.get<any>(this.URL + 'buscar/' + id);
  }

  public editAcercaDe(
    id: number,
    nombre: String,
    titulo: String,
    email: String,
    img: String,
    descrip: String
  ): Observable<Acerca_de> {
    return this.http.put<Acerca_de>(
      this.URL +
        `editar/${id}?nombre_apellido=${nombre}&titulo=${titulo}&email=${email}&descripcion=${descrip}&img_perfil=${img}`,
      Acerca_de
    );
  }
}
