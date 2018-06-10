import {Component, OnInit} from '@angular/core';
import {ServicioService} from "../servicio/servicio.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  formDetalle: FormGroup

  arregloDetalle = []

  arregloTabla = []

  checked: boolean = false

  constructor(private data: ServicioService) {

  }

  ngOnInit() {

    this.data.mensajeActual2.subscribe(mensaje => this.arregloDetalle = mensaje)



    this.createForm()

  }

  private createForm() {
    this.formDetalle = new FormGroup({
      pesoGB: new FormControl('', Validators.required),
      version: new FormControl('', Validators.required),
      nombreApl: new FormControl('', Validators.required),
      fechaLanzamiento: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      costo: new FormControl('', Validators.required),
      SOid: new FormControl('', Validators.required)
    });
  }

  agregarDatos(formData) {

    this.arregloDetalle.push(
      {
        'nombre': this.arregloDetalle[0].nombre,
        'versionApi': this.arregloDetalle[0].versionApi,
        'fechaLanza': this.arregloDetalle[0].fechaLanza,
        'pesoGB': this.arregloDetalle[0].pesoGB,
        'instalado': this.arregloDetalle[0].instalado,
        'detalle': this.arregloDetalle[0].detalle
      })



    this.arregloDetalle[0].detalle.push(
      {
        'pesoGB': formData.value.pesoGB,
        'version': formData.value.version,
        'nombreApl': formData.value.nombreApl,
        'url': formData.value.url,
        'fechaLanzamiento': formData.value.fechaLanzamiento,
        'costo': formData.value.costo,
        'SOid': formData.value.SOid
      }
    )

    this.arregloDetalle.splice(0, 1)

    this.arregloTabla.push(this.arregloDetalle)



    this.mandarDatos()

    this.resetForm()
  }

  mandarDatos() {

    console.log(this.arregloTabla)

    this.data.cambiarMensaje3(this.arregloTabla)

    this.arregloTabla = []

    this.mostrarTablaDetalle()

  }

  mostrarTablaDetalle() {

    var mostrarTabla = <HTMLFormElement>document.getElementById('tablaDetalle');
    mostrarTabla.style.display = "block";

  }

  resetForm() {

    var resetForm = <HTMLFormElement>document.getElementById('formDetalle');
    resetForm.reset();
  }


}
