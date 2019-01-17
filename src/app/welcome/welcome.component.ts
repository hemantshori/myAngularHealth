import { LoginComponent } from './../login/login.component';

import { WelcomeDataService } from './../service/db/welcome-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { summaryForJitFileName } from '@angular/compiler/src/aot/util';
import { HardCodedAuthenticationService } from './../service/hard-coded-authentication.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {


 
  currentPatientsAssigned = [
    {name : 'someName', age : 20},
    {name : 'someName', age : 21},
    {name : 'someName', age : 22},
    {name : 'someName', age : 23},
    {name : 'someName', age : 24},
    {name : 'someName', age : 25},
  

]

userLoggedIn = false;

  constructor(private router: Router,private hcas: HardCodedAuthenticationService
              
    ) { }


   

  ngOnInit() {
  }


  navigateToSearchPatientPage(){
    
    console.log('search for a patient')
    this.router.navigate(['SearchComponent'])
    
    }



  navigateToCreatePatientPage(){
    
 console.log('add a new patient')
 this.router.navigate(['create-new-patient'])
 
 }

 checkIfUserIsALreadyLoggedin()
 {
   if(this.hcas.isUserLoggedIn())
   this.userLoggedIn = false;
   this.router.navigate(['login']);

 }





}
