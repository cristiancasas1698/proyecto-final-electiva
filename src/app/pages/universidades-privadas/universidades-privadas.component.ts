import { Component, OnInit } from '@angular/core';
import { UniversidadesService } from 'src/app/services/universidades.service';
import { UniversidadPrivadaModel } from 'src/app/models/universidad-privada.model';
import Swal from 'sweetalert2';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-universidades-privadas',
  templateUrl: './universidades-privadas.component.html',
  styleUrls: ['./universidades-privadas.component.css']
})
export class UniversidadesPrivadasComponent implements OnInit {

  universidades: UniversidadPrivadaModel [] = [];
  cargando = false;


  constructor( private universidadService: UniversidadesService) { }

  ngOnInit() {
    this.cargando = true;
    this.universidadService.mostrarUniversidades()
    .subscribe( resp => {this.universidades = resp;
                         this.cargando = false;});
  }

  BorrarUniversidad(universidad: UniversidadPrivadaModel, i: number){

    Swal.fire({
      title: 'esta seguro?',
      text: `esta seguro de borrar a ${universidad.nombre}`,
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {

      if (resp.value) {
        this.universidades.splice(i,1);
        this.universidadService.borrarUniversidades(universidad.id).subscribe();
      }

    });
    
  }

}
