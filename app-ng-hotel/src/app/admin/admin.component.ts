import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  email: string;
  pass: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    alert("Email: "+this.email+ " pass: "+this.pass);
  }

}
