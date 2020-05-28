import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MedioModel } from 'src/app/models/medio.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediosService {
  private url = 'https://login-app-b7936.firebaseio.com';

  constructor(private http: HttpClient) { }



  crearMedio(medio: MedioModel){
    return this.http.post(`${ this.url }/medios.json`,medio)
    .pipe(
      map( (resp: any) => {
        medio.id = resp.name;
        return medio;
      })
    );
  }


  actualizarMedio(medio: MedioModel){

    const mediotemp = {
      ...medio
    };
    delete mediotemp.id;
    return this.http.put(`${ this.url }/medios/${ medio.id }.json`,mediotemp);
  }


  
 //obtener un solo medio de comunicacion por id
 idMedio (id: string){
  return this.http.get(`${ this.url }/medios/${ id }.json`);

}

  mostrarMedios(){
    return this.http.get(`${ this.url }/medios.json`)
    .pipe(
      map(this.crearArreglo),
      delay(1000)
    );
  }

  //crear un arreglo para obtener la lista de medios de comunicacion y mostrarla en la tabla
  private crearArreglo( medioObj: object){
    const medios: MedioModel[] =[];

    if (medioObj == null ) {return[];}

    Object.keys( medioObj ).forEach( key => {
      const medio: MedioModel = medioObj[key];

      medio.id = key;

      medios.push( medio);
    });
    return medios;
    
  }

  //borrar un medio de comunicacion por el id
  borrarMedio(id: string){
    return this.http.delete(`${ this.url }/medios/${ id }.json`);

  }

}

