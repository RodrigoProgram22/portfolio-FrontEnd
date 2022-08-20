import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/login/registro/registro/registro.component';
import { AddEduComponent } from './components/section/educacion/add/add-edu/add-edu.component';
import { EditEduComponent } from './components/section/educacion/edit/edit-edu/edit-edu.component';
import { AddExpComponent } from './components/section/experiencia/add/add-exp/add-exp.component';
import { EditExpComponent } from './components/section/experiencia/edit/edit-exp/edit-exp.component';
import { AddHabComponent } from './components/section/habilidades/add/add-hab/add-hab.component';
import { EditHabComponent } from './components/section/habilidades/edit/edit-hab/edit-hab.component';
import { EditAcercaDeComponent } from './components/section/header/edit/edit-acerca-de/edit-acerca-de.component';
import { HomeComponent } from './components/section/home/home.component';
import { AddProyecComponent } from './components/section/proyectos/add/add-proyec/add-proyec.component';
import { EditProyecComponent } from './components/section/proyectos/edit/edit-proyec/edit-proyec.component';
import { GuardService as guard } from './guards/guard.service';
const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    component: HomeComponent,
  },
  { path: 'login', component: LoginComponent },
  // { path: 'crearUser', component: RegistroComponent },
  {
    path: 'editAcerca_de/:id',
    component: EditAcercaDeComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'addExpe',
    component: AddExpComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'editExpe/:id',
    component: EditExpComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'addEdu',
    component: AddEduComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'editEdu/:id',
    component: EditEduComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'addHab',
    component: AddHabComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'editHab/:id',
    component: EditHabComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'addProy',
    component: AddProyecComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'editProy/:id',
    component: EditProyecComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin'] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
