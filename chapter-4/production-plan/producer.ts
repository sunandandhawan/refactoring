export class Producer {
  private _name: string;
  private _cost: number = 0;
  private _production: number = 0;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set cost(val: number) {
    this._cost = val;
  }
  get cost() {
    return this._cost;
  }
  set production(val: number) {
    this._production = val;
  }
  get production() {
    return this._production;
  }
  get fullRevenue() {
    return this._production * this._cost;
  }
}