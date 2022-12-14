import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proURL = 'https://gonzoportfoliobknd.herokuapp.com/proyectos'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.proURL + '/lista');
  }

  public detail(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.proURL + `/detail/${id}`);
  }
  
  public save(pro: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.proURL + '/crear', pro);
  }

  public update(id: number, pro: Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.proURL + `/actualizar/${id}`, pro);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.proURL + `/borrar/${id}`);
  }
}
