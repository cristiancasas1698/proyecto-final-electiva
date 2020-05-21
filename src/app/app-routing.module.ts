import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { EducativoComponent } from './pages/educativo/educativo.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { UniversidadesPrivadasComponent } from './pages/universidades-privadas/universidades-privadas.component';


const routes: Routes = [
  { path: 'home'    , component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'sectores/educativo', component: EducativoComponent},
  { path: 'home/quienes-somos', component: QuienesSomosComponent},
  { path: 'sectores/educativo/universidades-privadas', component: UniversidadesPrivadasComponent},
  { path: '**', redirectTo: 'registro' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
