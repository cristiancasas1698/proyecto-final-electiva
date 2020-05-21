import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apikey = 'AIzaSyBU1CTj8K28j1s4V8JHcFap94Fft_txIZg';
  userToken: String;
  //crear usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //login de usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { 
    this.leerToken();
  }
  logout() {
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }/accounts:signInWithPassword?key=${ this.apikey }`,
      authData
    ).pipe(  
      map(resp => {
        console.log('entro en el mapa rxjs')
        this.GuardarToken(resp['idToken']);
        return resp; 

      })
    );

  }

  registro(usuario: UsuarioModel){
    const authData = {
      // email: usuario.email,
      // password: usuario.password,
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }/accounts:signUp?key=${ this.apikey }`,
      authData
    ).pipe(
     
      map(resp => {
        console.log('entro en el mapa rxjs')
        this.GuardarToken(resp['idToken']);
        return resp; 

      })
    );
  }

  private GuardarToken(idToken: string){
     this.userToken = idToken;
     localStorage.setItem('token', idToken);
  }

  leerToken(){
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }
    return this.userToken;
  }
}

