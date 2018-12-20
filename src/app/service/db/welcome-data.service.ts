import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor() { }


  //method to retrieve data from backend

  executeGetBackendData()
  {
    console.log("ready to get service from backend")
  }
}
