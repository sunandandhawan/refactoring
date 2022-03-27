export class MenuItem {
  public name: string;
  public description: string;
  public vegetarian: boolean;
  public price: number;

  constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  public getName() {
    return this.name;
  }

  public getDescription() {
    return this.description;
  }

  public getVegetarian() {
    return this.vegetarian;
  }

  public getPrice() {
    return this.price;
  }
}
