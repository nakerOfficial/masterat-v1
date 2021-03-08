import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryComponent } from './galery.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: GaleryComponent },
];

@NgModule({
  declarations: [GaleryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GaleryModule { }
