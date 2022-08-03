import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/HabilidadM';

@Injectable({
  providedIn: 'root',
})
export class HabilidadService {
  URL = 'http://localhost:8080/habilidades/';

  constructor(private http: HttpClient) {}
  public mostrarHab(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.URL + 'mostrar');
  }
  public buscarHab(id: number): Observable<Habilidad> {
    return this.http.get<Habilidad>(this.URL + `buscar/${id}`);
  }
  public addHab(hab: Habilidad): Observable<any> {
    return this.http.post(this.URL + 'crear', hab, { responseType: 'text' });
  }
  public editHab(
    id: number,
    nombre_hab: String,
    nivel: number,
    enlace: String,
    img: String
  ): Observable<Habilidad> {
    return this.http.put<Habilidad>(
      this.URL +
        `editar/${id}?nombre=${nombre_hab}&nivel=${nivel}&enlace=${enlace}&logo_hab=${img}`,
      Habilidad
    );
  }
  public borrarHab(id: number): Observable<any> {
    return this.http.delete(this.URL + `borrar/${id}`, {
      responseType: 'text',
    });
  }
}
