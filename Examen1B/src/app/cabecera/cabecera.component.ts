import {Component, OnInit, Output} from '@angular/core';
import {ServicioService} from "../servicio/servicio.service";
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  formCabecera: FormGroup;

  mensaje = [];

  constructor(private data: ServicioService) {
  }

  arregloDatos = [];



  ngOnInit() {

    this.data.mensajeActual.subscribe(mensaje => this.mensaje = mensaje)

    this.createForm();
  }

  private createForm() {
    this.formCabecera = new FormGroup({
      nombre: new FormControl('', Validators.required),
      versionApi: new FormControl('', Validators.required),
      fechaLanzamiento: new FormControl('', Validators.required),
      pesoGB: new FormControl('', Validators.required),
      instalado: new FormControl('', Validators.required)
    });
  }




  agregarDatos(formData) {
    this.arregloDatos.push(
      {
        'nombre': formData.value.nombre,
        'versionApi': formData.value.versionApi,
        'fechaLanzamiento': formData.value.fechaLanzamiento,
        'pesoGB': formData.value.pesoGB,
        'instalado': formData.value.instalado,
        'detalle': []
      })

    // console.log(this.arregloDatos)

    this.mandarDatos()

    this.resetForm()

    this.mostrarElementos()

    this.ocultarElementos()

  }

  mandarDatos() {

    this.data.cambiarMensaje(this.arregloDatos)
  }

  resetForm() {

    var resetForm = <HTMLFormElement>document.getElementById('formCabecera');
    resetForm.reset();
  }

  ocultarElementos() {

    var ocultarTablaDetalle = <HTMLFormElement>document.getElementById('tablaDetalle');
    ocultarTablaDetalle.style.display = "none";

  }

  mostrarElementos() {

    var mostrarLabelLista = <HTMLFormElement>document.getElementById('labelListaSistemasOperativos');
    mostrarLabelLista.style.display = "block";

  }

}
