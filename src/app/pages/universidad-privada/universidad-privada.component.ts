import { Component, OnInit } from '@angular/core';
import { UniversidadPrivadaModel } from 'src/app/models/universidad-privada.model';
import { NgForm } from '@angular/forms';
import { UniversidadesService } from 'src/app/services/universidades.service';
import swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-universidad-privada',
  templateUrl: './universidad-privada.component.html',
  styleUrls: ['./universidad-privada.component.css']
})
export class UniversidadPrivadaComponent implements OnInit {

  universidad = new UniversidadPrivadaModel();

  constructor( private universidades: UniversidadesService,
               private route: ActivatedRoute) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo') {
      this.universidades.idUniversidad(id)
      .subscribe( (resp: UniversidadPrivadaModel) => {
        this.universidad = resp;
        this.universidad.id = id;
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


    let peticion: Observable<any>;


    if (this.universidad.id) {
      peticion = this.universidades.actualizarUniversidad( this.universidad);
    }else{
      peticion = this.universidades.crearUniversidad( this.universidad);
    }
    
    peticion.subscribe( resp =>{
      swal.fire({
        title: this.universidad.nombre,
        text: 'se actualizo correactamente'

      });

    });
  

  }

}
