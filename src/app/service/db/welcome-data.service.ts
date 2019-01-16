import { CreateNewPatientComponent } from './../../create-new-patient/create-new-patient.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class someBean
{
  constructor(public message:string, private http:HttpClient)
  {}
}


export class CreateNewPatient
{
  constructor(
    public id: number,
    public firstName: string,
    public lastName:string,
    public phone:string

  )
  
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
     
   //  return this.http.get<someBean>('http://localhost:8080/test/all');
      return this.http.get<CreateNewPatient>('http://localhost:8080/test/all');

  }
  getDataByFirstName(name)
  {
    //return this.http.get<someBean>(`http://localhost:8080/test/${name}`)
    return this.http.get<CreateNewPatient>(`http://localhost:8080/test/${name}`)
  }
}
