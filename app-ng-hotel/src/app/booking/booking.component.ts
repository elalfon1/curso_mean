import { Component, OnInit, Input } from '@angular/core';

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
  isDoubleString: string;

  constructor(checkin: string, isDouble: boolean) {

    if (checkin === "") {
      let fecha = new Date();
      this.checkin = fecha.getDate() + "/0" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
    } else {
      this.checkin = checkin;
    }
    this.isDouble = isDouble;
    if(isDouble)
      this.isDoubleString = "true";
    else
      this.isDoubleString = "false";

  }

  /*getDateString():string{
    return this.checkin.getDate() +"/"+ (this.checkin.getMonth()+1) +"/"+ this.checkin.getFullYear();
  }*/
}
@Component({
  selector: 'form-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  fecha: Date;
  @Input() rangeDate: Date;
  customer: Customer;
  booking: Booking;
  bookings: Booking[];

  ngOnInit() {
    this.customer = new Customer("Alfonso Cuadrado Rosado", "esesito@gmail.com");
    this.booking = new Booking("", false);
    this.bookings = [];
    this.fecha = new Date();
    this.rangeDate = new Date(this.fecha.getFullYear(),this.fecha.getMonth());
  }


  getDateString(): string {
    return this.fecha.getDate() + "/" + ("0" + (this.fecha.getMonth() + 1)).slice(-2) + "/" + this.fecha.getFullYear();
  }

  

  clickReserva(): void {
    console.log("Click en reserva" + this.getDateString() + JSON.stringify(this.booking));
  }

}
