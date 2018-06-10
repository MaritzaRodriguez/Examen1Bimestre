import { Component, OnInit } from '@angular/core';
import {ServicioService} from "../servicio/servicio.service";

@Component({
  selector: 'app-tabla-detalle',
  templateUrl: './tabla-detalle.component.html',
  styleUrls: ['./tabla-detalle.component.css']
})
export class TablaDetalleComponent implements OnInit {

  datosTabla = [];

  constructor(private data: ServicioService) { }

  ngOnInit() {

    this.data.mensajeActual3.subscribe(mensaje => this.datosTabla = mensaje)

  }

  imprimir(){

    console.log(this.datosTabla)
  }


}
