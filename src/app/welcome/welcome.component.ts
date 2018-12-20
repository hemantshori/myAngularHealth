
import { WelcomeDataService } from './../service/db/welcome-data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  constructor(private service: WelcomeDataService,
              private http:HttpClient
    ) { }

name = 'hemant';
  ngOnInit() {
  }


  getWelcomeMessage(){
    // console.log("hkjljkh");
  
    // this.service.executeGetBackendData();
   console.log( this.http.get("http://localhost:8080/login"));
  }
}
