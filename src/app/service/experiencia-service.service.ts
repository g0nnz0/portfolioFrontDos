import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaServiceService {

  expURL = 'https://gonzoportfoliobknd.herokuapp.com/explab'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL + '/lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this. expURL + `/detail/${id}`);
  }

  public save(exp: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL + '/crear', exp);
  }

  public update(id: number, exp: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `/actualizar/${id}`, exp );
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `/borrar/${id}`);
  }

}
