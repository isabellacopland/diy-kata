const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual('I should be there in 4.5 hours')
    expect(reachDestination(50, 2)).toEqual('I should be there in 25 hours')
    expect(reachDestination(20, 10)).toEqual('I should be there in 2 hours')
  });
});
