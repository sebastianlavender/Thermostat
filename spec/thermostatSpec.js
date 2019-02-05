describe("thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("initialization", function() {

    it("the starting temprature should be 20 degrees", function() {
      expect(thermostat.temp).toEqual(20);
    });
  });

});
