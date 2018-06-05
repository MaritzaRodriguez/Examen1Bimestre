import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselBootComponent } from './Carousel/carousel-boot/carousel-boot.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CabeceraComponent } from './Cabecera/cabecera/cabecera.component';
import {MatInputModule} from '@angular/material/input';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { BotonComponent } from './Boton/boton/boton.component';
import { DetalleComponent } from './Detalle/detalle/detalle.component';
import {InputTextModule} from 'primeng/inputtext';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CardModule} from 'primeng/card';
import { CardComponent } from './Card/card/card.component';
import {TableModule} from 'primeng/table';
import { TablaComponent } from './Tabla/tabla/tabla.component';



@NgModule({

  declarations: [
    AppComponent,
    CarouselBootComponent,
    CabeceraComponent,
    BotonComponent,
    DetalleComponent,
    CardComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MatInputModule,
    NoopAnimationsModule,
    InputTextModule,
    AccordionModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    CardModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
