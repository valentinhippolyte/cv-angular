import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetencesComponent } from './competences/competences.component';
import { ContactComponent } from './contact/contact.component';
import { ProfilComponent } from './profil/profil.component';
import { ProjetsComponent } from './projets/projets.component';

const routes: Routes = [
  {
  path:'',
  redirectTo:'profil',
  pathMatch:'full'
},
{
  path:'profil',
  component:ProfilComponent
},
{
  path:'competences',
  component: CompetencesComponent
},
{
  path:'projets',
  component: ProjetsComponent
},
{
  path:'contact',
  component: ContactComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
