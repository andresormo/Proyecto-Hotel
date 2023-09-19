import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBedI } from '../models/bed.interface';


const API_URL = 'http://localhost:3030'

@Injectable({
  providedIn: 'root'
})
export class ApiBedsService {


  constructor(
   private http: HttpClient
  ) { }

  public getApiBeds(): Observable<ApiBedI[]>{
    return this.http.get<ApiBedI[]>(`${API_URL}/beds`)
  }

  public getApiBedsId(id:string): Observable<ApiBedI>{
    return this.http.get<ApiBedI>(`${API_URL}/beds/${id}`)
  }

  public createBed(body:FormData): Observable<ApiBedI>{
    return this.http.post<ApiBedI>(`${API_URL}/beds`, body)
  }

  public deleteBed(id:string): Observable<ApiBedI>{
    return this.http.delete<ApiBedI>(`${API_URL}/beds/${id}`)
  }
}
