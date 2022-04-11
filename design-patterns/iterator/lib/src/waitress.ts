import { Iterator } from "./interfaces";
import { DinerMenu } from "./menus/diner-menu";
import { PancakeHouseMenu } from "./menus/pancake-house-menu";

export class Waitress {
  private _pancakeHouseMenu: PancakeHouseMenu;
  private _dinerMenu: DinerMenu;

  constructor(pancakeHouseMenu: PancakeHouseMenu, dinerMenu: DinerMenu) {
    this._pancakeHouseMenu = pancakeHouseMenu;
    this._dinerMenu = dinerMenu;
  }

  public printMenu() {
    const pancakeIterator = this._pancakeHouseMenu.createIterator();
    const dinerIterator = this._dinerMenu.createIterator();

    console.log("MENU\n----\nBREAKFAST\n----");
    this.print(pancakeIterator);
    console.log("----\nLUNCH----");
    this.print(dinerIterator);
  }

  private print(iterator: Iterator) {
    while(iterator.hasNext()) {
      const item = iterator.next();
      console.log(item.getName());
      console.log("  " + item.getDescription());
      console.log("  $ " + item.getPrice());
    }
  }
}
