export class Ingredient {
    public Name: string;
    public Quantity: number;
    public Measure: string;

    constructor(Name: string, Quantity: number, Measure: string) {
        this.Name = Name;
        this.Quantity = Quantity;
        this.Measure = Measure;
    }
}
