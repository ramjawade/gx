import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Template1Module } from "@gx/template1";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Template1Module,
    RouterModule.forRoot([{
      path: "",
      redirectTo: "user-mgt",
      pathMatch: 'full'
    }, {
      path: "pm",
      loadChildren: () => import("@gx/pdt-mgt").then(m => m.ModulesProductMgtModule)
    }, {
      path: "user-mgt",
      loadChildren: () => import("@gx/user-mgt").then(m => m.UserMgtModule)
    }
    ], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
