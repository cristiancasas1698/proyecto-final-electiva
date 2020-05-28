import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { EducativoComponent } from './pages/educativo/educativo.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { CapitalRelacionalComponent } from './pages/capital-relacional/capital-relacional.component';
import { CapitalHumanoComponent } from './pages/capital-humano/capital-humano.component';
import { UniversidadesPrivadasComponent } from './pages/universidades-privadas/universidades-privadas.component';
import { UniversidadPrivadaComponent } from './pages/universidad-privada/universidad-privada.component';
import { SectorGremiosComponent } from './pages/sector-gremios/sector-gremios.component';
import { MedioComunicacionComponent } from './pages/medio-comunicacion/medio-comunicacion.component';
import { MediosComunicacionesComponent } from './pages/medios-comunicaciones/medios-comunicaciones.component';
import { SectorMediosComunicacionComponent } from './pages/sector-medios-comunicacion/sector-medios-comunicacion.component';
import { GremioComponent} from './pages/gremio/gremio.component';
import { GremiosComponent} from './pages/gremios/gremios.component';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'sectores/educativo', component: EducativoComponent},
  { path: 'sectores/sgremios', component: SectorGremiosComponent},
  { path: 'sectores/sgremios/gestionar-gremios', component: GremiosComponent},
  { path: 'sectores/sgremios/gestionar-gremio/:id', component: GremioComponent},
  { path: 'sectores/smedios-comunicacion', component: SectorMediosComunicacionComponent},
  { path: 'sectores/smedios-comunicacion/Mcomunicacion/:id', component: MedioComunicacionComponent},
  { path: 'sectores/smedios-comunicacion/Mcomunicaciones', component: MediosComunicacionesComponent},
  { path: 'home/quienes-somos', component: QuienesSomosComponent},
  { path: 'home/capital-relacional', component: CapitalRelacionalComponent},
  { path: 'home/capital-humano', component: CapitalHumanoComponent},
  { path: 'sectores/educativo/universidades-privadas', component: UniversidadesPrivadasComponent},
  { path: 'sectores/educativo/universidad-privada/:id', component: UniversidadPrivadaComponent},
  { path: '**', redirectTo: 'registro' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
