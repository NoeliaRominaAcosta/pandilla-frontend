import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({providedIn: 'root'})
export class PetService {
  private baseUrl: string = 'http://localhost:4200';

  constructor(private httpClient: HttpClient) {}

  listPets(){
    return axios.get(this.baseUrl).then(response =>{return response.data})
    .catch(
      error => console.log(error)
      )
  }

}
