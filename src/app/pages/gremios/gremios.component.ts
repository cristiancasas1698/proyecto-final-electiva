import { Component, OnInit } from '@angular/core';
import { GremiosService } from 'src/app/services/gremios.service';
import { GremioModel } from 'src/app/models/gremio.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gremios',
  templateUrl: './gremios.component.html',
  styleUrls: ['./gremios.component.css']
})
export class GremiosComponent implements OnInit {

  gremios: GremioModel[] = [];
  cargando = false;

  constructor( private gremioService: GremiosService) { }

  ngOnInit() {

    this.cargando = true;
    this.gremioService.mostrarGremios()
    .subscribe( resp => {this.gremios = resp;
                        this.cargando = false;});
  }


  BorrarGremio(gremio: GremioModel, i: number){

    Swal.fire({
      title: 'esta seguro?',
      text: `esta seguro de borrar a ${gremio.nombre}`,
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {

      if (resp.value) {
        this.gremios.splice(i,1);
        this.gremioService.borrarGremio(gremio.id).subscribe();
      }

    });
    
  }

}
