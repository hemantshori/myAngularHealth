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
  ErrorMessage = 'Invalid credentials, Please provide correct credentials or call service desk @ 0422184033';
  invalidLogin = false;

  // handleLogin(){
  //   console.log(this.UserName + " and password is " +this.Password);
  // }
  
  validateLogin(){

    if(this.UserName==='hemant' && this.Password==='hemant'){
      this.invalidLogin = false;
      // redirect to welcome
       this.router.navigate(['welcome'])
  
      console.log('theek chal rea hai beedu');
    }else{
      this.invalidLogin = true;
      console.log('Please enter correct user name and password');
    }
  }

}
