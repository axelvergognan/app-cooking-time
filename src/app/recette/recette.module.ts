import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListRecetteComponent } from './list-recette/list-recette.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailRecetteComponent } from './detail-recette/detail-recette.component';
import { RecetteService } from './recetteService.service';

const routesRecette: Routes = [
  { path: 'recette/:id', component: DetailRecetteComponent },
  { path: 'recettes', component: ListRecetteComponent },
];

@NgModule({
  declarations: [
    ListRecetteComponent,
    DetailRecetteComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forRoot(routesRecette)
  ],
  providers: [RecetteService]
})
export class RecetteModule { }
