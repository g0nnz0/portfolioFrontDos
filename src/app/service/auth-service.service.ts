import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public afAuth: AngularFireAuth) { }

  //Este metodo no lo usé, lo hice porque en el tutorial lo hicieron.
  loginServ(email: string, password: string){

    return this.afAuth.signInWithEmailAndPassword(email, password)

  }

  stateUser(){
    return this.afAuth.authState;
  }
}
