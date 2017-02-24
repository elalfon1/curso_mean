import { Customer } from "../models/customer.model";
import { Injectable } from "@angular/core";

@Injectable() //Para poder usarla como servicio, es decir un objeto de solo una instancia
export class CustomerService {
    public enviar(customer: Customer) {
        alert(customer.name);
    }
}