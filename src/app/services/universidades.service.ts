import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UniversidadPrivadaModel } from '../models/universidad-privada.model';
import { map, delay } from 'rxjs/operators';
  
@Injectable({
  providedIn: 'root'
})
export class UniversidadesService {

  private url = 'https://login-app-b7936.firebaseio.com';

  constructor(private http: HttpClient) { }


  crearUniversidad(universidad: UniversidadPrivadaModel){
    return this.http.post(`${ this.url }/universidades.json`,universidad)
    .pipe(
      map( (resp: any) => {
        universidad.id = resp.name;
        return universidad;
      })
    );
  }

  actualizarUniversidad(universidad: UniversidadPrivadaModel){

    const universidadt = {
      ...universidad
    };
    delete universidadt.id;
    return this.http.put(`${ this.url }/universidades/${ universidad.id }.json`,universidadt);
  }


  idUniversidad (id: string){

    return this.http.get(`${ this.url }/universidades/${ id }.json`);

  }


  mostrarUniversidades(){
    return this.http.get(`${ this.url }/universidades.json`)
    .pipe(
      map(this.crearArreglo),
      delay(1500)
    );


  }
  //crear un arreglo para obtener la lista de universidades y mostrarla en la tabla
  private crearArreglo( universidadObj: object){
    const universidades: UniversidadPrivadaModel[] =[];

    if (universidadObj == null ) {return[];}

    Object.keys( universidadObj ).forEach( key => {
      const universidad: UniversidadPrivadaModel = universidadObj[key];

      universidad.id = key;

      universidades.push( universidad);
    });
    return universidades;
    
  }

  borrarUniversidades(id: string){
    return this.http.delete(`${ this.url }/universidades/${ id }.json`);

  }

}
 