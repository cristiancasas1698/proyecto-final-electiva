import { Component, OnInit } from '@angular/core';
import { MediosService } from 'src/app/services/medios.service';
import { MedioModel } from 'src/app/models/medio.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-medios-comunicaciones',
  templateUrl: './medios-comunicaciones.component.html',
  styleUrls: ['./medios-comunicaciones.component.css']
})
export class MediosComunicacionesComponent implements OnInit {

  medios: MedioModel [] = [];
  cargando = false;

  constructor(private medioService: MediosService) { }

  ngOnInit() {
    this.cargando = true;
    this.medioService.mostrarMedios()
       .subscribe(resp => {this.medios = resp; 
                          this.cargando = false;});
  }

  BorrarMedio(medio: MedioModel, i: number){

    Swal.fire({
      title: 'esta seguro?',
      text: `esta seguro de borrar a ${medio.nombre}`,
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {

      if (resp.value) {
        this.medios.splice(i,1);
        this.medioService.borrarMedio(medio.id).subscribe();
      }

    });
    
  }

}
