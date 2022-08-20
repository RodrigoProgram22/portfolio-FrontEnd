import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/EducacionM';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  // URL = 'https://back-portfolioap.herokuapp.com/educacion/';
  private URL = 'http://localhost:8080/educacion/';
  constructor(private http: HttpClient) {}
  public mostrarEdu(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.URL + 'mostrar');
  }
  public buscarEdu(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(this.URL + `buscar/${id}`);
  }
  public addEdu(edu: Educacion): Observable<any> {
    return this.http.post(this.URL + 'crear', edu, { responseType: 'text' });
  }
  public editEdu(
    id: number,
    nombre_inst: String,
    titulo: String,
    fecha: String,
    enlace: String,
    img: String
  ): Observable<Educacion> {
    return this.http.put<Educacion>(
      this.URL +
        `editar/${id}?nombre=${nombre_inst}&titulo=${titulo}&fecha=${fecha}&enlace=${enlace}&logo_inst=${img}`,
      Educacion
    );
  }
  public borrarEdu(id: number): Observable<any> {
    return this.http.delete(this.URL + `borrar/${id}`, {
      responseType: 'text',
    });
  }
}
