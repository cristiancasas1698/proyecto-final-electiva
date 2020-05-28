import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MedioModel } from 'src/app/models/medio.model';
import { MediosService } from 'src/app/services/medios.service';


@Component({
  selector: 'app-medio-comunicacion',
  templateUrl: './medio-comunicacion.component.html',
  styleUrls: ['./medio-comunicacion.component.css']
})
export class MedioComunicacionComponent implements OnInit {

  medio = new MedioModel();

  constructor( private mediosService: MediosService,
                  private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo') {
      this.mediosService.idMedio(id)
      .subscribe( (resp: MedioModel) => {
        this.medio = resp;
        this.medio.id = id;
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


    if (this.medio.id) {
      peticion = this.mediosService.actualizarMedio( this.medio);
    }else{
      peticion = this.mediosService.crearMedio( this.medio);
    }
    
    peticion.subscribe( resp =>{
       swal.fire({
       title: this.medio.nombre,
        text: 'se actualizo correactamente'

      });

    });
  

  }



  

}
