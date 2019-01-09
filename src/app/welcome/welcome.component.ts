
import { WelcomeDataService } from './../service/db/welcome-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  constructor(private router: Router
              
    ) { }


  ngOnInit() {
  }

  getWelcomeMessageByFirstName(){
    
 console.log('add a new patient')
 this.router.navigate(['create-new-patient'])
 
 }


}
