import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/section/header/header.component';
import { ExperienciaComponent } from './components/section/experiencia/experiencia.component';
import { EducacionComponent } from './components/section/educacion/educacion.component';
import { HabilidadesComponent } from './components/section/habilidades/habilidades.component';
import { ProyectosComponent } from './components/section/proyectos/proyectos.component';
import { HomeComponent } from './components/section/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddExpComponent } from './components/section/experiencia/add/add-exp/add-exp.component';
import { EditExpComponent } from './components/section/experiencia/edit/edit-exp/edit-exp.component';
import { EditAcercaDeComponent } from './components/section/header/edit/edit-acerca-de/edit-acerca-de.component';
import { EditEduComponent } from './components/section/educacion/edit/edit-edu/edit-edu.component';
import { AddEduComponent } from './components/section/educacion/add/add-edu/add-edu.component';
import { AddHabComponent } from './components/section/habilidades/add/add-hab/add-hab.component';
import { EditHabComponent } from './components/section/habilidades/edit/edit-hab/edit-hab.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    AddExpComponent,
    EditExpComponent,
    EditAcercaDeComponent,
    EditEduComponent,
    AddEduComponent,
    AddHabComponent,
    EditHabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
