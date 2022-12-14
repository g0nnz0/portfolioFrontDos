import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEduComponent } from './components/educacion/editar-edu.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditarExpComponent } from './components/experiencia/editar-exp.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { LoginComponent } from './components/login/login.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditarProyectoComponent } from './components/proyectos/editar-proyecto.component';
import { NuevoProyectoComponent } from './components/proyectos/nuevo-proyecto.component';
import { EditarSkillsComponent } from './components/skills/editar-skills.component';
import { NuevaSkillsComponent } from './components/skills/nueva-skills.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/portfolio'},
  {path:'portfolio', component: PortfolioComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NuevaExperienciaComponent, canActivate: [AuthGuard]},
  {path:'editarexp/:id', component: EditarExpComponent, canActivate: [AuthGuard]},
  {path:'nuevaedu', component: NuevaEducacionComponent, canActivate: [AuthGuard]},
  {path:'editaredu/:id', component: EditarEduComponent, canActivate: [AuthGuard]},
  {path:'nuevaskills', component: NuevaSkillsComponent, canActivate: [AuthGuard]},
  {path:'editarskills/:id', component: EditarSkillsComponent, canActivate: [AuthGuard]},
  {path:'nuevopro', component: NuevoProyectoComponent, canActivate: [AuthGuard]},
  {path:'editarpro/:id', component: EditarProyectoComponent, canActivate: [AuthGuard]},
  {path:'**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
