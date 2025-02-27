import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import axios from 'axios';

@Injectable({providedIn: 'root'})
export class PetService {
  private baseUrl: string = 'http://localhost:8080/pet';

  constructor() {}

  public listPets(): Observable<any[]> {
    return from(axios.get(this.baseUrl).then(response => response.data));
  }
  public getPetById(id: number): Observable<any> {
    return from(axios.get(`${this.baseUrl}/${id}`).then(response => response.data));
  }


  public deletePet(id: number): Observable<string> {
    return from(axios.delete(`${this.baseUrl}/${id}`).then(response => response.data));
  }

}
