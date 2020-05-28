import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GremioModel } from '../models/gremio.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GremiosService {
  //url de firebase donde esta la base de datos
  private url = 'https://login-app-b7936.firebaseio.com';

  constructor(private http: HttpClient) { }

  crearGremio(gremio: GremioModel){
    return this.http.post(`${ this.url }/gremios.json`,gremio)
    .pipe(
      map( (resp: any) => {
        gremio.id = resp.name;
        return gremio;
      })
    ); 
  }

  actualizarGremio(gremio: GremioModel){

    const gremiot = {
      ...gremio
    };
    delete gremiot.id;
    return this.http.put(`${ this.url }/gremios/${ gremio.id }.json`,gremiot);
  }


 //obtener un solo gremio por id
  idGremio (id: string){
    return this.http.get(`${ this.url }/gremios/${ id }.json`);

  }


  mostrarGremios(){
    return this.http.get(`${ this.url }/gremios.json`)
    .pipe(
      map(this.crearArreglo),
      delay(1000)
    );
  }

    //crear un arreglo para obtener la lista de los gremios y mostrarla en la tabla
  private crearArreglo (gremioObj: object){
    const gremios: GremioModel[] =[];
    if (gremioObj == null ) {return[];}

      Object.keys( gremioObj ).forEach( key => {
      const gremio: GremioModel = gremioObj[key];

      gremio.id = key;

      gremios.push( gremio);
    }); 
    return gremios; 
  }

  borrarGremio(id: string){
    return this.http.delete(`${ this.url }/gremios/${ id }.json`);

  }




}
