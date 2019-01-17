import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../service/db/welcome-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  responsefromServer: any = [];
  constructor(private service:WelcomeDataService) { }

  ngOnInit() {
  }
  PatientNameToSearch = '';
  selectByName()
  {
    //var name = this.PatientNameToSearch;
    this.service.getDataByFirstName(this.PatientNameToSearch).subscribe(response => this.handleResponsefromAPI(response));
  }


  handleResponsefromAPI(response)
  {
    this.responsefromServer = response;
    
    
    console.log(response);
  }


  whenIHitSubmit(): void
  {

    // this is where  we want to invoke the restful services
    // so create a service that will call the backend service(API) 

    console.log(this.service.executeGetBackendData());
   this.service.executeGetBackendData().subscribe(
    // response => this.handleResponsefromAPI(response), error => this.handleErrorResponse(error)
    result => this.responsefromServer = result);
    console.log(this.responsefromServer);
  
  }

}
