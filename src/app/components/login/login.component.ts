import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUsuario: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router) {
      this.loginUsuario = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      })
     }

  ngOnInit(): void {
  }

  login(){
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;

    this.afAuth.signInWithEmailAndPassword(email, password).then((user) =>{
      console.log (user);
      this.router.navigate(['/']);
    }).catch((error) =>{
      console.log (error);
    });
    
  }

}
