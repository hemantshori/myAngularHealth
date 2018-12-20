
import { WelcomeDataService } from './../service/db/welcome-data.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  constructor(private service: WelcomeDataService,
              
    ) { }


  ngOnInit() {
  }


  getWelcomeMessage(){
    
     console.log(this.service.executeGetBackendData());
     this.service.executeGetBackendData().subscribe();
  }
}
