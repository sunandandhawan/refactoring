import { Iterator } from "../interfaces";
import { MenuItem } from "../menus/menu-item";

export class DinerMenuIterator implements Iterator {
  private _items: Set<MenuItem>;
  private _position: number = 0;
  constructor(items: Set<MenuItem>) {
    this._items = items;
  }
  next(): MenuItem {
    const item = this.item(this._position);
    this._position++;
    return item;
  }
  hasNext(): boolean {
    return this._position < this._items.size || !!this.item(this._position);
  }
  private item(i: number) {
    return [...this._items][this._position];
  }
}