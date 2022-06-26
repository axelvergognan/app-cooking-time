import { Recette } from "./recette.model";


export const RECETTES: Recette[] = [
    {
        recette_id: 0,
        recette_titre: "Pâtes au chorizo",
        recette_description: "plat facile à préparer",
        recette_categorie: ["plat", "salé"],
        recette_level: 1,
        recette_duration: 30,
        recette_duration_format: "min",
        recette_datecreation: new Date(),
        recette_datemodification: new Date(),
        recette_etapes: [
            {
                etape_id: 0,
                etape_recette_id: 0,
                etape_num: 1,
                etape_duration: 7,
                etape_format: "min",
                etape_description: "Faire cuire les pâtes"
            },
            {
                etape_id: 1,
                etape_recette_id: 0,
                etape_num: 2,
                etape_duration: 1,
                etape_format: "min",
                etape_description: "Mélanger les pâtes avec des bouts de chorizo"
            }
        ]
    },
    {
        recette_id: 1,
        recette_titre: "Gateau au chocolat",
        recette_description: "dessert facile à préparer",
        recette_categorie: ["dessert", "sucré"],
        recette_level: 1,
        recette_duration: 90,
        recette_duration_format: "min",
        recette_datecreation: new Date(),
        recette_datemodification: new Date(),
        recette_etapes: [
            {
                etape_id: 0,
                etape_recette_id: 1,
                etape_num: 1,
                etape_duration: 10,
                etape_format: "min",
                etape_description: "Faire fondre le beurre"
            },
            {
                etape_id: 1,
                etape_recette_id: 1,
                etape_num: 2,
                etape_duration: 10,
                etape_format: "min",
                etape_description: "Mélanger le chocolat et le beurre fondu"
            }
        ]
    },
    {
        recette_id: 2,
        recette_titre: "Fraisier",
        recette_description: "plat facile à préparer",
        recette_categorie: ["dessert", "sucré"],
        recette_level: 3,
        recette_duration: 3,
        recette_duration_format: "h",
        recette_datecreation: new Date(),
        recette_datemodification: new Date()
    }
]