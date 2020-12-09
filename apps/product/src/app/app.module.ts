import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: "",
      redirectTo: "pm",
      pathMatch: 'full'
    }, {
      path: "pm",
      loadChildren: () => import("@gx/pdt-mgt").then(m => m.ModulesProductMgtModule)
    }, {
      path: "um",
      loadChildren: () => import("@gx/user-mgt").then(m => m.UserMgtModule)
    }
    ], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
