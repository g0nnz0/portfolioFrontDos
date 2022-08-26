import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent implements OnInit {
  isLogged = false;

  constructor(private afAuth: AngularFireAuth, 
              private router: Router,
              private auth: AuthServiceService) { 
                  this.auth.stateUser().subscribe( res =>{
                    if (res) {
                      console.log('Está logueado');
                      this.isLogged = true;
                    }else{
                      console.log('No está logueado');
                      this.isLogged = false;
                    }
                  })
  }

  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      console.log(user);
    })
  }

  logout(){
    this.afAuth.signOut().then(() => this.router.navigate(['/portfolio']));

  }

  login(){
    this.router.navigate(['/login']);
  }



}
