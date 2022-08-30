import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEduComponent } from './components/educacion/editar-edu.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditarExpComponent } from './components/experiencia/editar-exp.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { LoginComponent } from './components/login/login.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { UltraSecretoComponent } from './components/ultra-secreto/ultra-secreto.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/portfolio'},
  {path:'portfolio', component: PortfolioComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NuevaExperienciaComponent},
  {path:'editarexp/:id', component: EditarExpComponent},
  {path:'nuevaedu', component: NuevaEducacionComponent},
  {path:'editaredu/:id', component: EditarEduComponent},
  {path:'ultraSecreto', component: UltraSecretoComponent, canActivate: [AuthGuard]},
  {path:'**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
