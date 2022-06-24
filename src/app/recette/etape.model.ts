

export class Etape{
 constructor(
   public etape_id: number,
   public etape_recette_id: number,
   public etape_num: number,
   public etape_duration: number,
   public etape_format: string,
   public etape_description: string){}
}