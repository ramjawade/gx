import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "user-mgt",
        pathMatch: "full"
      },
      {
        path: 'user-mgt',
        loadChildren: () => import("@gx/user-mgt").then((m) => m.UserMgtModule)
      }
    ])
  ]
})
export class AppRoutingModule { }
