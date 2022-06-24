import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recette } from '../recette.model';
import { RecetteService } from '../recetteService.service';

@Component({
  selector: 'app-detail-recette',
  templateUrl: './detail-recette.component.html',
  styleUrls: ['./detail-recette.component.scss']
})
export class DetailRecetteComponent implements OnInit {

  recette!: Recette | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private recetteService: RecetteService) { }

  ngOnInit(): void {
    const recetteId: string|null = this.route.snapshot.paramMap.get('id');
    if(recetteId){
      this.recette = this.recetteService.getRecetteById(+recetteId);
    }
  }

}
