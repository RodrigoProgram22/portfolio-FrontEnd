import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Experiencia } from '../model/ExperienciaM';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  //URL = 'https://back-portfolioap.herokuapp.com/experiencia/';
  private URL = 'http://localhost:8080/experiencia/';
  constructor(private http: HttpClient) {}
  public mostrarExpe(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.URL + 'mostrar');
  }
  public buscarExp(id: number): Observable<Experiencia> {
    return this.http.get<Experiencia>(this.URL + `buscar/${id}`);
  }
  public addExpe(expe: Experiencia): Observable<any> {
    return this.http.post(this.URL + 'crear', expe, { responseType: 'text' });
  }
  public editExpe(
    id: number,
    empresa: String,
    cargo: String,
    periodo: String,
    enlace: String,
    img: String,
    descrip: String
  ): Observable<Experiencia> {
    return this.http.put<Experiencia>(
      this.URL +
        `editar/${id}?empresa=${empresa}&cargo=${cargo}&periodo=${periodo}&enlace=${enlace}&descripcion=${descrip}&logo_empresa=${img}`,
      Experiencia
    );
  }
  public borrarExpe(id: number): Observable<any> {
    return this.http.delete(this.URL + `borrar/${id}`, {
      responseType: 'text',
    });
  }
}
