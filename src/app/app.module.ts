import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import {RecaptchaModule} from 'ng-recaptcha';

import { HeaderComponent } from './pages/header/header.component';
import { BodyComponent } from './pages/body/body.component';
import { EducativoComponent } from './pages/educativo/educativo.component';
import { FooterComponent } from './pages/footer/footer.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { UniversidadesPrivadasComponent } from './pages/universidades-privadas/universidades-privadas.component';
import { UniversidadPrivadaComponent } from './pages/universidad-privada/universidad-privada.component';
import { SectorGremiosComponent } from './pages/sector-gremios/sector-gremios.component';
import { GremioComponent } from './pages/gremio/gremio.component';
import { GremiosComponent } from './pages/gremios/gremios.component';
import { SectorMediosComunicacionComponent } from './pages/sector-medios-comunicacion/sector-medios-comunicacion.component';
import { MedioComunicacionComponent } from './pages/medio-comunicacion/medio-comunicacion.component';
import { MediosComunicacionesComponent } from './pages/medios-comunicaciones/medios-comunicaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    BodyComponent,
    EducativoComponent,
    FooterComponent,
    QuienesSomosComponent,
    UniversidadesPrivadasComponent,
    UniversidadPrivadaComponent,
    SectorGremiosComponent,
    GremioComponent,
    GremiosComponent,
    SectorMediosComunicacionComponent,
    MedioComunicacionComponent,
    MediosComunicacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
