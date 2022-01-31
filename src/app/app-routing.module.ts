import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaApplicantComponent } from './applicant/lista-applicant.component';
import { NuevoApplicantComponent } from './applicant/nuevo-applicant.component';


const routes: Routes = [
  {path: 'list', component: ListaApplicantComponent},
  {path: 'nuevo', component: NuevoApplicantComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
