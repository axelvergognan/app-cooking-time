import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Recette } from '../recette.model';
import { RecetteService } from '../recetteService.service';

@Component({
  selector: 'app-list-recette',
  templateUrl: './list-recette.component.html',
  styleUrls: ['./list-recette.component.scss'],
  providers: [NgbRatingConfig]
})
export class ListRecetteComponent implements OnInit {

  recetteList: Recette[] = [];
  rate: any;

  constructor(config: NgbRatingConfig, private router: Router, private recetteService: RecetteService) { 
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.recetteList = this.recetteService.getRecetteList();
  }

  goToRecette(recette: Recette){
    this.router.navigate(['/recette', recette.recette_id]);
  }

}
