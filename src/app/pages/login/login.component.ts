import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { InternalFormsSharedModule } from '@angular/forms/src/directives';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm){
    if (form.invalid) {
      return;
    }
 
    
    this.auth.login(this.usuario)
    .subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/home');

    },(err) =>{
      console.log(err.error.error.message);
      Swal.fire({
        allowOutsideClick: false,
        icon: 'error',
        title: 'error al autenticar',
        text: err.error.error.message,
      });
    });
    
  }

}
