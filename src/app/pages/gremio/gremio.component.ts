import { Component, OnInit } from '@angular/core';
import { GremioModel } from 'src/app/models/gremio.model';
import { GremiosService } from 'src/app/services/gremios.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gremio',
  templateUrl: './gremio.component.html',
  styleUrls: ['./gremio.component.css']
})
export class GremioComponent implements OnInit {

  gremio = new GremioModel();

  constructor(private gremiosService: GremiosService,
              private route: ActivatedRoute) { }

  ngOnInit() {

     const id = this.route.snapshot.paramMap.get('id');

     if ( id !== 'nuevo') {
        this.gremiosService.idGremio(id)
        .subscribe( (resp: GremioModel) => {
        this.gremio = resp;
        this.gremio.id = id;
       });
     }

  }

  guardar( form: NgForm ){
    if (form.invalid) {
      console.log("formulario invalido");
      return;
    }
   //creando una alerta de cargando 
    swal.fire({
      title: 'espere',
      text: 'guardando informacion',
      allowOutsideClick: false
    });
    swal.showLoading();

    /* this.gremiosService.crearGremio(this.gremio).subscribe(resp =>{
                                                           console.log(resp);
                                                            }); */
    
    let peticion: Observable<any>;


     if (this.gremio.id) {
      peticion = this.gremiosService.actualizarGremio( this.gremio);
    }else{
      peticion = this.gremiosService.crearGremio( this.gremio);
    }
    
    peticion.subscribe( resp =>{
      swal.fire({
        title: this.gremio.nombre,
        text: 'se actualizo correactamente'

      });

    });  
  

  }

}
