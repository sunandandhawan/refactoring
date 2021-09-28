module.exports = class Province {
  _name;
  _producers;
  _demand = 0;
  _price = 0;
  constructor(name) {
    this._name = name;
    this._producers = [];
  }
  get name() {
    return this._name;
  }
  addProducer(producer) {
    this._producers.push(producer);
  }
  get producerCount() {
    return this._producers.length;
  }
  get producers() {
    return this._producers;
  }
  set demand(val) {
    this._demand = val;
  }
  get demand() {
    return this._demand;
  }
  set price(val) {
    this._price = val;
  }
  get price() {
    return this._price;
  }
  get shortfall() {
    return this._demand - this.totalProduction();
  }
  get profit() {
    return this._price * this.totalProduction() - this.totalFullRevenue();
  }
  totalFullRevenue() {
    let totalFullRevenue = 0;
    for (let producer of this._producers) {
      totalFullRevenue += producer.fullRevenue;
    }
    return totalFullRevenue;
  }
  totalProduction() {
    let totalProduction = 0;
    for (let producer of this._producers) {
      totalProduction += producer.production;
    }
    return totalProduction;
  }
}