import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      console.log(user);
    })
  }

  logout(){
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }

  login(){
    this.router.navigate(['/login']);
  }

}
