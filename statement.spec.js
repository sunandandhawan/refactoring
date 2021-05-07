const { expect } = require("chai");
const { statement, htmlStatement } = require("./statement");
describe("statement", () => {
  const plays = {
    hamlet: { name: "Hamlet", type: "tragedy" },
    aslike: { name: "As You Like It", type: "comedy" },
    othello: { name: "Othello", type: "tragedy" },
  };
  const invoice = {
    customer: "BigCo",
    performances: [
      {
        playID: "hamlet",
        audience: 55,
      },
      {
        playID: "aslike",
        audience: 35,
      },
      {
        playID: "othello",
        audience: 40,
      },
    ],
  };
  it("statement should return correct output", () => {
    const expected = `Statement for BigCo\n Hamlet: $650.00 (55 seats)\n As You Like It: $580.00 (35 seats)\n Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n`;
    expect(statement(invoice, plays)).equals(expected);
  });

  it("htmlStatement should return correct output", () => {
    const expected = `<h1>Statement for BigCo</h1>\n<table>\n  <tr><th>play</th><th>seats</th><th>cost</th></tr>\n  <tr><td>[object Object]</td><td>55</td><td>65000</td></tr>\n  <tr><td>[object Object]</td><td>35</td><td>58000</td></tr>\n  <tr><td>[object Object]</td><td>40</td><td>50000</td></tr>\n</table>\n<p>Amount owed is <em>$1,730.00</em></p>\n<p>You earned <em>47</em> credits</p>\n`;
    console.log(htmlStatement(invoice, plays));
    expect(htmlStatement(invoice, plays)).equals(expected);
  });
});
