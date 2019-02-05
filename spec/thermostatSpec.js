describe("thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("initialization", function() {

    it("the starting temprature should be 20 degrees", function() {
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe('#up', function() {

    it('increases temperature by 5 degrees', function() {
      thermostat.up(5);
      expect(thermostat.temp).toEqual(25);
    });
  });

  describe('#down', function() {

    it('decreases temperature by 5 degrees', function() {
      thermostat.down(5);
      expect(thermostat.temp).toEqual(15);
    });
  });

});
