import { MenuItem } from "./menu-item";

export class PancakeHouseMenu {
  public menuItems: MenuItem[];

  constructor() {
    this.menuItems = [];
    this.addItem(
      "K&B's Pancake Breakfast",
      "Pancake with scrambled eggs, and toast",
      true,
      2.99
    );
    this.addItem(
      "Regular Pancake Breakfast",
      "Pancake with fried eggs, sausage",
      true,
      2.99
    );
    this.addItem(
      "Blueberry Pancakes",
      "Pancake made with fresh blueberries",
      true,
      3.49
    );
    this.addItem(
      "Waffles",
      "Waffles with your choice of blueberries or strawberries",
      true,
      3.59
    );
  }

  public addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    this.menuItems.push(new MenuItem(name, description, vegetarian, price));
  }

  public getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}
