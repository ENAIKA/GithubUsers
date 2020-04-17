import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from '../app/Components/not-found/not-found.component';
import {RepoComponentComponent} from '../app/Components/repo-component/repo-component.component';
import {UserComponentComponent} from '../app/Components/user-component/user-component.component';
const routes: Routes = [
  
  { path:'github_user', component:UserComponentComponent},
  { path:'user_repos', component:RepoComponentComponent},
  { path: '', redirectTo:'/github_user', pathMatch:'full'},
  { path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
