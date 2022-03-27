import { DinerMenu } from "../src/diner-menu";
import { PancakeHouseMenu } from "../src/pancake-house-menu";
import { Waitress } from "../src/waitress";

const pancakeHouseMenu = new PancakeHouseMenu();
const dinerMenu = new DinerMenu();
const waitress = new Waitress(pancakeHouseMenu, dinerMenu);
waitress.printMenu();
