import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  UserName = '';
  Password = '';
  ErrorMessage = 'Invalid credentials';
  invalidLogin = false;

  // handleLogin(){
  //   console.log(this.UserName + " and password is " +this.Password);
  // }
  validateLogin(){

    if(this.UserName==='hemantshori' && this.Password==='password'){
      // redirect to welcome
       this.router.navigate(['welcome'])
      this.invalidLogin = false;
      console.log('theek chal rea hai beedu');
    }else{
      this.invalidLogin = true;
      console.log('Please enter correct user name and password');
    }
  }

}
