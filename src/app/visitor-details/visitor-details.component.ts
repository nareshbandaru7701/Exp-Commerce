import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-details',
  templateUrl: './visitor-details.component.html',
  styleUrls: ['./visitor-details.component.css']
})
export class VisitorDetailsComponent implements OnInit {
  visitorInfo: any;

  constructor() {
    this.visitorInfo = JSON.parse(localStorage.getItem('userDetails'));
  }

  ngOnInit(): void {
  }

}
