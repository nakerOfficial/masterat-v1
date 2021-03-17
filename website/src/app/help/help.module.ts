import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const routes: Routes = [
  { path: '', component: HelpComponent },
];

@NgModule({
  declarations: [HelpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HelpModule { }
