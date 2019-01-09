import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class someBean
{
  constructor(public message:string)
  {}
}


@Injectable({
  providedIn: 'root'
})



export class WelcomeDataService {

  constructor(private http:HttpClient) { }


  //method to retrieve data from backend

  executeGetBackendData()
  {
     
     return this.http.get<someBean>('http://localhost:8080/test/all');


  }
  getDataByFirstName()
  {
    return this.http.get<someBean>('http://localhost:8080/test/ghoosa')
  }
}
