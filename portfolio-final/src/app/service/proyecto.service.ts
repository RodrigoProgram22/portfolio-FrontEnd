import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectoM } from '../model/ProyectoM';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  URL = 'http://localhost:8080/proyectos/';
  constructor(private http: HttpClient) {}
  public mostrarProyec(): Observable<ProyectoM[]> {
    return this.http.get<ProyectoM[]>(this.URL + 'mostrar');
  }
  public buscarProyec(id: number): Observable<ProyectoM> {
    return this.http.get<ProyectoM>(this.URL + `buscar/${id}`);
  }
  public addProyec(proyec: ProyectoM): Observable<any> {
    return this.http.post(this.URL + 'crear', proyec, { responseType: 'text' });
  }
  public editProyec(
    id: number,
    titulo: String,
    enlace: String,
    fecha: String,
    descrip: String,
    img: String
  ): Observable<ProyectoM> {
    return this.http.put<ProyectoM>(
      this.URL +
        `editar/${id}?titulo=${titulo}&enlace=${enlace}&fecha=${fecha}&descripcion=${descrip}&img_proyec=${img}`,
      ProyectoM
    );
  }
  public borrarProyec(id: number): Observable<any> {
    return this.http.delete(this.URL + `borrar/${id}`, {
      responseType: 'text',
    });
  }
}
