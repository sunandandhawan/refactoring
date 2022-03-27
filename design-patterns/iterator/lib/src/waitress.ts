import { DinerMenu } from "./diner-menu";
import { PancakeHouseMenu } from "./pancake-house-menu";

export class Waitress {
  private _pancakeHouseMenu: PancakeHouseMenu;
  private _dinerMenu: DinerMenu;

  constructor(pancakeHouseMenu: PancakeHouseMenu, dinerMenu: DinerMenu) {
    this._pancakeHouseMenu = pancakeHouseMenu;
    this._dinerMenu = dinerMenu;
  }

  public printMenu() {
    const breakfastItems = this._pancakeHouseMenu.getMenuItems();
    const lunchItems = this._dinerMenu.getMenuItems();

    for (let i = 0; i < breakfastItems.length; i++) {
      const item = breakfastItems[i];
      console.log(item.getName());
      console.log("  " + item.getDescription());
      console.log("  $ " + item.getPrice());
    }

    for (let i = 0; i < lunchItems.size; i++) {
      const item = [...lunchItems][i];
      console.log(item.getName());
      console.log("  " + item.getDescription());
      console.log("  $ " + item.getPrice());
    }
  }
}
