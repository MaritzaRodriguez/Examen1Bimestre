import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  // @Input() nombre: string;
  // @Input() versionApi: number;
  // @Input() fechaLanzamiento: date;
  // @Input() pesoGB: float;
  // @Input() instalado: boolean;

  nombre = '';
  versionApi = '';
  fechalanzamiento = '';
  pesoGB = '';
  instalado = '';

  constructor() {
  }


  ngOnInit() {

  }

  funcionlimpiar() {
    this.nombre = '  ';
    this.fechalanzamiento = '  ';
    this.versionApi = '  ';
    this.pesoGB = '  ';
    this.instalado = '  ';

  }
}
