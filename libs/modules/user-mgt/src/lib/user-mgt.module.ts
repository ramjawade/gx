import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';

export const umRoutes: Routes = [{
  path: '',
  redirectTo: "list",
  pathMatch: "full"
}, {
  path: "list",
  component: ListUserComponent
}, {
  path: 'create',
  component: CreateUserComponent
}
]

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(umRoutes),
  ],
  declarations: [CreateUserComponent, ListUserComponent],
})
export class UserMgtModule { }
