import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  eduURL = 'http://localhost:8080/educacion'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.eduURL + '/lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.eduURL + `/detail/${id}`);
  }
  
  public save(edu: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.eduURL + '/crear', edu);
  }

  public update(id: number, edu: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.eduURL + `/actualizar/${id}`, edu);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + `/borrar/${id}`);
  }
}
