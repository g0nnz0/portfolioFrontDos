import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environment';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { UltraSecretoComponent } from './components/ultra-secreto/ultra-secreto.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditarExpComponent } from './components/experiencia/editar-exp.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditarEduComponent } from './components/educacion/editar-edu.component';
import { EditarSkillsComponent } from './components/skills/editar-skills.component';
import { NuevaSkillsComponent } from './components/skills/nueva-skills.component';
import { NuevoProyectoComponent } from './components/proyectos/nuevo-proyecto.component';
import { EditarProyectoComponent } from './components/proyectos/editar-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    PortfolioComponent,
    LoginComponent,
    Pagina404Component,
    UltraSecretoComponent,
    NuevaExperienciaComponent,
    EditarExpComponent,
    NuevaEducacionComponent,
    EditarEduComponent,
    EditarSkillsComponent,
    NuevaSkillsComponent,
    NuevoProyectoComponent,
    EditarProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
