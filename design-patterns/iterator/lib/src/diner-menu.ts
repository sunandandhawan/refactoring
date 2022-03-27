import { MenuItem } from "./menu-item";

export class DinerMenu {
  public menuItems: Set<MenuItem>;

  constructor() {
    this.menuItems = new Set();
    this.addItem(
      "Vegetarian BLT",
      "(Fakin') Bacon with lettuce & tomato on whole wheat",
      true,
      2.99
    );
    this.addItem(
      "BLT",
      "Bacon with lettuce & tomato on whole wheat",
      false,
      2.99
    );
    this.addItem(
      "Soup of the day",
      "Soup of the day, with a side of potato salad",
      false,
      3.29
    );
    this.addItem(
      "Hotdog",
      "A hot dog, with saurkraut, relish, onions, topped with cheese",
      false,
      3.05
    );
  }

  public addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    this.menuItems.add(new MenuItem(name, description, vegetarian, price));
  }

  public getMenuItems(): Set<MenuItem> {
    return this.menuItems;
  }
}
