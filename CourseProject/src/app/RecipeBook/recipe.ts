import { Ingredient } from './ingredient';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Array<Ingredient>;

    constructor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = new Array<Ingredient>();
    }

    public AddIngredient(theIngredient: Ingredient) {
        const length = this.ingredients.push(theIngredient);
    }
}
