import React from 'react';
var Province = require('./production-plan/province');
var Producer = require('./production-plan/producer');

export default class ProductionPlan extends React.Component {
  constructor(props) {
    super(props);
    const asia = new Province("Asia");
    asia.demand = 30;
    asia.price = 20;
    const byzantium = new Producer("Byzantium");
    byzantium.cost = 10;
    byzantium.production = 9;
    byzantium.production = 9;
    const attalia = new Producer("Attalia");
    attalia.cost = 12;
    attalia.production = 10;
    const sinope = new Producer("Sinope");
    sinope.cost = 10;
    sinope.production = 6;
    asia.addProducer(byzantium);
    asia.addProducer(attalia);
    asia.addProducer(sinope);
    this.provinces = [];
    this.provinces.push(asia);
    this.state = {
      provinces: this.provinces
    };
  }
  changeHandler = (event) => {
    const evTgtId = event.target.id;
    const nameArr = evTgtId.split('-');
    const propName = nameArr[nameArr.length - 1];
    const provinceName = nameArr[0];
    const province = this.provinces.find(e => e.name === provinceName);
    let evTgtVal = parseInt(event.target.value);
    if (isNaN(evTgtVal)) {
      evTgtVal = 0;
    }
    if (propName === 'demand' || propName === 'price') {
      province[propName] = evTgtVal;
    } else if (propName === 'cost' || propName === 'production') {
      const producerName = nameArr[1];
      const producer = province.producers.find(e => e.name === producerName);
      producer[propName] = evTgtVal;
    }
    this.setState({
      provinces: this.provinces
    });
  }
  render() {
    const provinces = this.state.provinces.map(province =>
      {
        const producers = province.producers.map(producer => 
          <div key={`${producer.name}-producer`}>
            {producer.name}:
            <label key={`${producer.name}-cost-label`}>cost:</label>
            <input type="text" id={`${province.name}-${producer.name}-cost`} key={`${producer.name}-cost`} value={producer.cost} onChange={this.changeHandler} />
            <label key={`${producer.name}-production-label`}>production:</label>
            <input type="text" id={`${province.name}-${producer.name}-production`} key={`${producer.name}-production`} value={producer.production} onChange={this.changeHandler} />
            <label key={`${producer.name}-fullRevenue`}>full revenue: {producer.fullRevenue}</label>
          </div>)
        return <div key={`${province.name}-container`}>
          <h2 key={province.name}>Province: {province.name}</h2>
          <label key={`${province.name}-demand-label`}>demand:</label>
          <input id={`${province.name}-demand`} key={`${province.name}-demand`} value={province.demand} onChange={this.changeHandler} />
          <label key={`${province.name}-price-label`}>price:</label>
          <input id={`${province.name}-price`} key={`${province.name}-price`} value={province.price} onChange={this.changeHandler} />
          <div key={`${province.name}-producers`}>{province.producerCount} producers:</div>
          {producers}
          <label key={`${province.name}-shortfall`}>shortfall: {province.shortfall}</label>
          <label key={`${province.name}-profit`}>profit: {province.profit}</label>
        </div>;
      }
    );
    return(
      <div>
        <h1>Production plan</h1>
        {provinces}
      </div>);
  }
}