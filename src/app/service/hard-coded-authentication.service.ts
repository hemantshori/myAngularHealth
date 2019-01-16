import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }


  authenticate(userName, password)
  {
    if(userName==='hemant' && password==='hemant')
    {
      sessionStorage.setItem('authenticatedUser',userName )
      return true
    }
    return false;
  }


  isUserLoggedIn()
  {
    let user = sessionStorage.getItem('auauthenticatedUser')
    return !(user===null)
  }
  


}
