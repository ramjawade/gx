import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiToolsModule } from "@gx/ui-tools";
@NgModule({
  imports: [
    CommonModule,

    UiToolsModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class ModulesProductMgtModule { }
