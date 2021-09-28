module.exports = class Producer {
  _name;
  _cost = 0;
  _production = 0;
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set cost(val) {
    this._cost = val;
  }
  get cost() {
    return this._cost;
  }
  set production(val) {
    this._production = val;
  }
  get production() {
    return this._production;
  }
  get fullRevenue() {
    return this._production * this._cost;
  }
}