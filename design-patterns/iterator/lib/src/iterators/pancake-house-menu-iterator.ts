import { Iterator } from "../interfaces";
import { MenuItem } from "../menus/menu-item";

export class PancakeHouseMenuIterator implements Iterator {
  private _items: Array<MenuItem>;
  private _position: number = 0;
  constructor(items: Array<MenuItem>) {
    this._items = items;
  }
  next(): MenuItem {
    const item = this._items[this._position];
    this._position++;
    return item;
  }
  hasNext(): boolean {
    return this._position < this._items.length || !!this._items[this._position];
  }
}