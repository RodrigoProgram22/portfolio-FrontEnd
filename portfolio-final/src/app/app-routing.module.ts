import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AddEduComponent } from './components/section/educacion/add/add-edu/add-edu.component';
import { EditEduComponent } from './components/section/educacion/edit/edit-edu/edit-edu.component';
import { AddExpComponent } from './components/section/experiencia/add/add-exp/add-exp.component';
import { EditExpComponent } from './components/section/experiencia/edit/edit-exp/edit-exp.component';
import { EditAcercaDeComponent } from './components/section/header/edit/edit-acerca-de/edit-acerca-de.component';
import { HomeComponent } from './components/section/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editAcerca_de/:id', component: EditAcercaDeComponent },
  { path: 'addExpe', component: AddExpComponent },
  { path: 'editExpe/:id', component: EditExpComponent },
  { path: 'addEdu', component: AddEduComponent },
  { path: 'editEdu/:id', component: EditEduComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
