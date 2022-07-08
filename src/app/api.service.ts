import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  gallery1=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos")
  }
}
