import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
   usuario: UsuarioModel;


  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();

   
  }

  onSubmit(form: NgForm){
    if (form.invalid) {
      return;
    }
    console.log(this.usuario);
    this.auth.registro( this.usuario)
    .subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/home');
    }, (err) =>{
      console.log(err.error.error.message);
    })

   



  }
    

}
