import { WelcomeDataService } from './../service/db/welcome-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-patient',
  templateUrl: './create-new-patient.component.html',
  styleUrls: ['./create-new-patient.component.css'],
  
})

export class CreateNewPatientComponent implements OnInit {

  responsefromServer: {};
  errorMessage: string;
  firstName = '';
  lastName = '';
  Id = '';
  phone = '';

  
  constructor(private service:WelcomeDataService) { }

  ngOnInit() {
  }


  

  handleResponsefromAPI(response)
  {
    this.responsefromServer = response;
    
    
    console.log(response);
  }


  handleErrorResponse(error)
  {
   this.handleResponsefromAPI = error
   console.log(error)

  }


  // in to dos
  createNewPatient()
  {
    console.log(this.service.executeGetBackendData());
    this.service.createANewPatient(this.Id,this.firstName,this.lastName,this.phone).subscribe(
     // response => this.handleResponsefromAPI(response), error => this.handleErrorResponse(error)
     result => this.responsefromServer = result);
     console.log(this.responsefromServer);
  }
}
