import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'user', component: UserComponent},
  {path: 'repositories', component: RepositoriesComponent},

  { path: '', redirectTo:"user", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
