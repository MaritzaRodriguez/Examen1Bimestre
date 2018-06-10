import { Component, OnInit, Input } from '@angular/core';
import {ServicioService} from "../servicio/servicio.service";

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  arregloCarrusel = [];


  constructor(private data: ServicioService) { }


  ngOnInit() {
    this.data.mensajeActual.subscribe(mensaje => this.arregloCarrusel = mensaje)

  }

}
