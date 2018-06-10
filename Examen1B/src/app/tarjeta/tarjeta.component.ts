import { Component, OnInit } from '@angular/core';
import {ServicioService} from "../servicio/servicio.service";

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  tarjeta = [];

  constructor(private data: ServicioService) { }

  ngOnInit() {

    this.data.mensajeActual2.subscribe(mensaje => this.tarjeta = mensaje)

  }

  cambiarBolean(estado) {

    if(estado==true){
      return "Si"
    }else{
      return "No"
    }

  }

}
