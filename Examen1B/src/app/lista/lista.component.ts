import {Component, OnInit, Input} from '@angular/core';
import {ServicioService} from "../servicio/servicio.service";


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  mensaje = [];

  card = [];

  constructor(private data: ServicioService
  ) {
  }

  ngOnInit() {

    this.data.mensajeActual.subscribe(mensaje => this.mensaje = mensaje)

  }

  mandarDatos(indice) {

    this.card = [];
    this.card.push(this.mensaje[indice])
    this.data.cambiarMensaje2(this.card)
    this.mostrarElementos()

  }

  mostrarElementos() {

    var mostrarFormDetalle = <HTMLFormElement>document.getElementById('formDetalle');
    mostrarFormDetalle.style.display = "block";

    var mostrarBotonLimpiarDetalle = <HTMLFormElement>document.getElementById('botonLimpiarDetalle');
    mostrarBotonLimpiarDetalle.style.display = "block";

    var mostrarTarjeta = <HTMLFormElement>document.getElementById('tarjeta');
    mostrarTarjeta.style.display = "block";

  }


}
