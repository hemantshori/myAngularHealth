import { HardCodedAuthenticationService } from './../service/hard-coded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
import { DefaultUrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private hcas: HardCodedAuthenticationService ) { }

  ngOnInit() {
  }
  UserName = '';
  Password = '';
  ErrorMessage = 'Invalid credentials, Please provide correct credentials or call service desk @ 0422184033';
  invalidLogin = false;


 
  validateLogin(){

    if(this.hcas.authenticate(this.UserName, this.Password)){
      
      this.invalidLogin = false;
      // redirect to welcome
       this.router.navigate(['welcome'])

  
    }else{
      this.invalidLogin = true;
      console.log('Please enter correct user name and password');
    }
  }

  
  


}
