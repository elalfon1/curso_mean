import { Customer } from "../models/customer.model";
import { Injectable } from "@angular/core";
//import { Http } from "@angular/http";

@Injectable() //Para poder usarla como servicio, es decir un objeto de solo una instancia
export class CustomerService {
    //constructor(private __http: Http){}

    public enviar(customer: Customer) {
        alert(customer.name);
    }

    /*public recibir(){
        return this.__http.get("http://date.jsontest.com").map(res=>res.json())
    }*/
}