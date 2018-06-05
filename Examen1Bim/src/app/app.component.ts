import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arregloSistemasOperativosAplicacion=[
    {
      nombreSistemaOperativo: '',
      versionApi: '',
      fechaLanzamiento: '',
      pesoGB: '',
      instalado: ''
    },
    { arregloAplicacion:[
        {
          pesoGB:'',
          version:'',
          nombreAplicacion:'',
          urlDescarga:'',
          fechaLanzamiento:'',
          costo:'',
          idSistemaOperativo:''

        }
        ]
    }
    ];
}
