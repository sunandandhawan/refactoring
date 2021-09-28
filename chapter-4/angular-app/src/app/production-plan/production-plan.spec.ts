import { expect } from "chai";
import { Producer } from "./producer";
import { Province } from "./province";

describe("Production Plan", () => {
  describe("Producers", () => {
    it("should be able to get the name", () => {
      const name = "TestProducerName";
      const producer = new Producer(name);
      expect(producer.name).to.equal(name);
    });
    it("should be able to get production", () => {
      const production = 9;
      const name = "TestProducerName";
      const producer = new Producer(name);
      producer.production = production;
      expect(producer.production).to.equal(production);
    })
    it("should calculate correct fullRevenue based on set cost and production", () => {
      const cost = 10;
      const production = 9;
      const name = "TestProducerName";
      const producer = new Producer(name);
      producer.cost = cost;
      producer.production = production;
      expect(producer.fullRevenue).to.equal(cost * production);
    });
    it("should update fullRevenue correctly based on new cost and production", () => {
      const cost = 10;
      const production = 9;
      const name = "TestProducerName";
      const producer = new Producer(name);
      producer.cost = cost;
      producer.production = production;
      //set new production
      const newProduction = 20;
      producer.production = newProduction;
      expect(producer.fullRevenue).to.equal(cost * newProduction);
      //<div>{{producer.fullRevenue}}</div>
    });
  });
  describe("Province", () => {
    it("should be able to get the name", () => {
      const name = "TestProvinceName";
      const province = new Province(name);
      expect(province.name).to.equal(name);
    });
    it("should be able to have multiple Producers and get number of Producers", () => {
      const province = new Province("TestProvinceName");
      province.addProducer(new Producer("TestProducerName"));
      province.addProducer(new Producer("TestProducerName"));
      expect(province.producerCount).to.equal(2);
    });
    it("should return correct shortfall based on value of demand and production by Producers", () => {
      const province = new Province("TestProvinceName");
      province.demand = 20;
      const producer1 = new Producer("TestProducerName1");
      producer1.production = 9;
      province.addProducer(producer1);
      const producer2 = new Producer("TestProducerName2");
      producer2.production = 10;
      province.addProducer(producer2);
      expect(province.shortfall).to.equal(1);
    });
    it("should return correct profit based on value of price, cost by Producers and production by Producers", () => {
      const province = new Province("TestProvinceName");
      province.demand = 30;
      province.price = 20
      const producer1 = new Producer("TestProducerName1");
      producer1.production = 9;
      producer1.cost = 10
      province.addProducer(producer1);
      const producer2 = new Producer("TestProducerName2");
      producer2.production = 10;
      producer2.cost = 12;
      province.addProducer(producer2);
      const producer3 = new Producer("TestProducerName3");
      producer3.production = 6;
      producer3.cost = 10;
      province.addProducer(producer3);
      expect(province.profit).to.equal(230);
    });
  })
});