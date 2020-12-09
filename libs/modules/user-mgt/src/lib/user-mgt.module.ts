import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { InputModule } from "@gx/ui-tools";
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
    InputModule,
    RouterModule.forChild(umRoutes),
  ],
  declarations: [CreateUserComponent, ListUserComponent],
})
export class UserMgtModule { }
