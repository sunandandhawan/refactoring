import { DinerMenu } from "../src/menus/diner-menu";
import { PancakeHouseMenu } from "../src/menus/pancake-house-menu";
import { Waitress } from "../src/waitress";

describe("Waitress", () => {
  it("should print menu", () => {
    const pancakeHouseMenu = new PancakeHouseMenu();
    const dinerMenu = new DinerMenu();
    const waitress = new Waitress(pancakeHouseMenu, dinerMenu);
    waitress.printMenu();
  })
});

