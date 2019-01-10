import { WelcomeDataService } from './../service/db/welcome-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-patient',
  templateUrl: './create-new-patient.component.html',
  styleUrls: ['./create-new-patient.component.css'],
  
})

export class CreateNewPatientComponent implements OnInit {

  responsefromServer: string;
  
  constructor(private service:WelcomeDataService) { }

  ngOnInit() {
  }


  whenIHitSubmit()
  {

    // this is where  we want to invoke the restful services
    // so create a service that will call the backend service(API) 
    console.log('clicked submit successfully');
    console.log(this.service.executeGetBackendData());
   this.service.executeGetBackendData().subscribe(
     response => this.handleResponsefromAPI(response)
     
   );
  
  }

 


  selectByName()
  {
    this.service.getDataByFirstName().subscribe(response => this.handleResponsefromAPI(response));
  }


  handleResponsefromAPI(response)
  {
    this.responsefromServer = response;
    
    console.log(response);
  }

}
