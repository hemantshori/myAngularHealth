import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage  = 'Some Error has Occured, Please check the logs or contact support';
  constructor() { }

  ngOnInit() {
  }

}
