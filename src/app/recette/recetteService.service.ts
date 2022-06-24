import { Injectable } from '@angular/core';
import { Recette } from './recette.model';
import { RECETTES } from './mock-recette-list';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {


  getRecetteList(): Recette[]{
    return RECETTES;
  }

  getRecetteById(recetteId: number): Recette|undefined {
    return RECETTES.find(recette => recette.recette_id == recetteId);
  }
}
