import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListRecetteComponent } from './list-recette/list-recette.component';
import { RouterModule, Routes } from '@angular/router';

const routesRecette: Routes = [
  { path: 'recettes', component: ListRecetteComponent },
];

@NgModule({
  declarations: [
    ListRecetteComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forRoot(routesRecette)
  ]
})
export class RecetteModule { }
