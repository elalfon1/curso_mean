import { Component, OnInit } from '@angular/core';

//styleUrls: ['./app.component.css', '../css/bootstrap.min.css','../css/carousel.css','../css/mis-estilos.css']

class Room {
  id: number;
  isDouble: boolean;

  constructor(id: number, isDouble: boolean) {
    this.id = id;
    this.isDouble = isDouble;
  }

  getType(): string {
    return this.isDouble ? "doble" : "simple";
  }
}

class Customer {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  clone(): Customer {
    return new Customer(this.name, this.email);
  }

}

class Booking {
  //checkin: Date;
  checkin: string;
  isDouble: boolean;

  constructor(checkin: string, isDouble: boolean) {

    if (checkin === "") {
      let fecha = new Date();
      this.checkin = fecha.getDate() + "/0" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
    } else {
      this.checkin = checkin;
    }
    this.isDouble = isDouble;
  }

  /*getDateString():string{
    return this.checkin.getDate() +"/"+ (this.checkin.getMonth()+1) +"/"+ this.checkin.getFullYear();
  }*/
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  modelito;
  customer: Customer;
  booking: Booking;
  bookings: Booking[];

  ngOnInit() {
    this.customer = new Customer("Alfonso Cuadrado Rosado", "esesito@gmail.com");
    this.booking = new Booking("", false);
    this.bookings = [];
  }

  /*addBooking(){

  }*/
}
