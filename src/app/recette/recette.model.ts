import { Etape } from "./etape.model";

export class Recette{
    constructor(
        public recette_id: number,
        public recette_titre: string,
        public recette_description: string,
        public recette_categorie: string[],
        public recette_level: number,
        public recette_duration: number,
        public recette_duration_format: string,
        public recette_datecreation: Date,
        public recette_datemodification: Date,
        public recette_etapes?: Etape[]
    ){}
}